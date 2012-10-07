package com.whut.yingshan;

import android.os.Bundle;
import android.view.Menu;
import org.apache.cordova.*;

public class MainActivity extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        // ��������ʱ��������Ϣ
        super.init();
        super.appView.clearCache(true);
        this.appView.setBackgroundColor(0);
        this.appView.setBackgroundResource(R.drawable.splashscreen);
        
        super.loadUrl("file:///android_asset/www/index.html");
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.activity_main, menu);
        return true;
    }
}
