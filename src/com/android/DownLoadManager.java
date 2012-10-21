package com.android;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

import android.app.ProgressDialog;
import android.os.Environment;

public class DownLoadManager {

	/**
	 * 浠庢湇鍔″櫒涓嬭浇apk
	 * 
	 * @param path
	 * @param pd
	 * @return
	 * @throws Exception
	 */
	public static File getFileFromServer(String path, ProgressDialog pd)
			throws Exception {
		// 濡傛灉鐩哥瓑鐨勮瘽琛ㄧず褰撳墠鐨剆dcard鎸傝浇鍦ㄦ墜鏈轰笂骞朵笖鏄彲鐢ㄧ殑
		if (Environment.getExternalStorageState().equals(
				Environment.MEDIA_MOUNTED)) {
			URL url = new URL(path);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setConnectTimeout(5000);
			// 鑾峰彇鍒版枃浠剁殑澶у皬
			pd.setMax(conn.getContentLength());
			InputStream is = conn.getInputStream();
			String sdpath = Environment.getExternalStorageDirectory()
					+ File.separator + "esTobacco";
			File folder = new File(sdpath);
			if (!folder.exists())
				folder.mkdirs(); // 鏂板缓鏂囦欢澶�
			File file = new File(sdpath, "tobacco.apk");
			FileOutputStream fos = new FileOutputStream(file);
			BufferedInputStream bis = new BufferedInputStream(is);
			byte[] buffer = new byte[1024];
			int len;
			int total = 0;
			while ((len = bis.read(buffer)) != -1) {
				fos.write(buffer, 0, len);
				total += len;
				// 鑾峰彇褰撳墠涓嬭浇閲�
				pd.setProgress(total);
			}
			fos.close();
			bis.close();
			is.close();
			return file;
		} else {
			return null;
		}
	}

}
