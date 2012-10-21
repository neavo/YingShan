package com.whut.yingshan;

import java.io.File;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

import android.app.AlertDialog;
import android.app.AlertDialog.Builder;
import android.app.ProgressDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Bundle;
import android.os.Environment;
import android.os.Handler;
import android.os.Message;
import android.util.Log;
import android.view.Menu;
import android.widget.Toast;

import org.apache.cordova. * ;

import com.android.DownLoadManager;
import com.android.UpdataInfo;
import com.android.UpdataInfoParser;

public class MainActivity extends DroidGap {
	
	 @ Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		
		super.setIntegerProperty("splashscreen", R.drawable.splashscreen);
		super.loadUrl("file:///android_asset/www/index.html", 10000);
		update();
	}
	
	 @ Override
	public boolean onCreateOptionsMenu(Menu menu) {
		getMenuInflater().inflate(R.menu.activity_main, menu);
		return true;
	}
	
	private final int UPDATA_NONEED = 0;
	private final int UPDATA_CLIENT = 1;
	private final int GET_UNDATAINFO_ERROR = 2;
	private final int SDCARD_NOMOUNTED = 3;
	private final int DOWN_ERROR = 4;
	private boolean firstCheckUpdate = true;
	private UpdataInfo info;
	private String localVersion;
	
	public void update() {
		try {
			localVersion = getVersionName();
			CheckVersionTask cv = new CheckVersionTask();
			new Thread(cv).start();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	public void showAbout() {
		try {
			localVersion = getVersionName();
			new AlertDialog.Builder(this).setTitle("����").setMessage("����Ӣɽ" + localVersion).setPositiveButton("ȷ��", new DialogInterface.OnClickListener() {
				public void onClick(DialogInterface dialog, int which) {}
			}).show();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	private String getVersionName()throws Exception {
		PackageManager packageManager = getPackageManager();
		PackageInfo packInfo = packageManager.getPackageInfo(getPackageName(), 0);
		return packInfo.versionName;
	}
	public class CheckVersionTask implements Runnable {
		public void run() {
			try {
				String path = getResources().getString(R.string.versionXmlUrl);
				URL url = new URL(path);
				HttpURLConnection conn = (HttpURLConnection)url.openConnection();
				conn.setConnectTimeout(5000);
				InputStream is = conn.getInputStream();
				info = UpdataInfoParser.getUpdataInfo(is);
				if (firstCheckUpdate && (info.getVersion().compareTo(localVersion) <= 0)) {
					firstCheckUpdate = false;
				} else if (firstCheckUpdate && (info.getVersion().compareTo(localVersion) > 0)) {
					Log.i(TAG, "��⵽��汾�� ,��ʾ�û����� ");
					Message msg = new Message();
					msg.what = UPDATA_CLIENT;
					handler.sendMessage(msg);
				} else if (!firstCheckUpdate && (info.getVersion().compareTo(localVersion) <= 0)) {
					Log.i(TAG, "�汾����ͬ��������");
					Message msg = new Message();
					msg.what = UPDATA_NONEED;
					handler.sendMessage(msg);
				} else {
					Log.i(TAG, "��⵽��汾��,��ʾ�û����� ");
					Message msg = new Message();
					msg.what = UPDATA_CLIENT;
					handler.sendMessage(msg);
				}
			} catch (Exception e) {
				Message msg = new Message();
				msg.what = GET_UNDATAINFO_ERROR;
				handler.sendMessage(msg);
				e.printStackTrace();
			}
		}
	}
	Handler handler = new Handler() {
		 @ Override
		public void handleMessage(Message msg) {
			super.handleMessage(msg);
			switch (msg.what) {
			case UPDATA_NONEED:
				Toast.makeText(getApplicationContext(), "��������Ѿ������°�", Toast.LENGTH_SHORT).show();
				break;
			case UPDATA_CLIENT:
				showUpdataDialog();
				break;
			case GET_UNDATAINFO_ERROR:
				Toast.makeText(getApplicationContext(), "��ȡ������������Ϣʧ��", 1).show();
				break;
			case SDCARD_NOMOUNTED:
				Toast.makeText(getApplicationContext(), "SD��������", 1).show();
				break;
			case DOWN_ERROR:
				Toast.makeText(getApplicationContext(), "�����°汾ʧ��", 1).show();
				break;
			}
		}
	};
	protected void showUpdataDialog() {
		AlertDialog.Builder builer = new Builder(this);
		builer.setTitle("�汾����");
		builer.setMessage(info.getDescription());
		builer.setPositiveButton("ȷ��", new DialogInterface.OnClickListener() {
			public void onClick(DialogInterface dialog, int which) {
				Log.i(TAG, "����apk,����");
				downLoadApk();
			}
		});
		builer.setNegativeButton("ȡ��", new DialogInterface.OnClickListener() {
			public void onClick(DialogInterface dialog, int which) {}
			
		});
		AlertDialog dialog = builer.create();
		dialog.show();
	}
	protected void downLoadApk() {
		final ProgressDialog pd;
		pd = new ProgressDialog(MainActivity.this);
		pd.setProgressStyle(ProgressDialog.STYLE_HORIZONTAL);
		pd.setMessage("�������ظ���");
		if (!Environment.getExternalStorageState().equals(Environment.MEDIA_MOUNTED)) {
			Message msg = new Message();
			msg.what = SDCARD_NOMOUNTED;
			handler.sendMessage(msg);
		} else {
			pd.show();
			new Thread() {
				 @ Override
				public void run() {
					try {
						File file = DownLoadManager.getFileFromServer(info.getUrl(), pd);
						sleep(1000);
						installApk(file);
						pd.dismiss();
					} catch (Exception e) {
						Message msg = new Message();
						msg.what = DOWN_ERROR;
						handler.sendMessage(msg);
						e.printStackTrace();
					}
				}
			}
			.start();
		}
	}
	protected void installApk(File file) {
		Intent intent = new Intent();
		intent.setAction(Intent.ACTION_VIEW);
		intent.setDataAndType(Uri.fromFile(file), "application/vnd.android.package-archive");
		startActivity(intent);
	}
	
}
