{
	// 等待PhoneGap加载
	document.addEventListener("deviceready", onDeviceReady, false);
	
	function onDeviceReady() {
		document.addEventListener("backbutton", onBackButtonTap, false);
		document.addEventListener("menubutton", onMenuButtonTap, false);
	};
	
	function onBackButtonTap() {
		DB.activatedController.goBack();
	};

	function onMenuButtonTap() { };
}
