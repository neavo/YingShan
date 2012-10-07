{
	// 等待PhoneGap加载
	document.addEventListener("deviceready", onDeviceReady, false);
	
	function onDeviceReady() {
		document.addEventListener("backbutton", onBackButtonTap, false);
	};
	
	function onBackButtonTap() {
		DB.activatedController.goBack();
	};
}
