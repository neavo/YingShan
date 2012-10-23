// 激活当前控制器
function setActivatedController(controller) {
	DB.activatedController = controller;
};

// 激活当前频道ID
function setActivatedCategory(category) {
	DB.activatedCategory = category;
};

// 激活当前使用的Store
function setActivatedStore(store) {
	DB.activatedStore = store;
};

// 视频播放插件
function playVideo() {
	window.plugins.videoPlayer.play(DB.videoUrl);
};

// 自定义的Alert
function DoAlert(string) {
	DB.mainContainer.hide();
	Ext.Msg.alert(DB.versionInfo, string, function (buttonId, value, opt) {
		DB.mainContainer.show();
	});
};
