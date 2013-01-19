// PhoneGap
{
	document.addEventListener("deviceready", onDeviceReady, false);
	function onDeviceReady() {
		// 响应返回键
		document.addEventListener("backbutton", onBackButtonTap, false);
	};
	// 响应返回键
	function onBackButtonTap() {
		DB.activatedController.goBack();
	};
};

// 设置正在使用的Controller
function setActivatedController(controller) {
	DB.activatedController = controller;
};

// 设置正在读取的频道
function setActivatedCategory(category) {
	DB.activatedCategory = category;
};

// 播放激活的视频
function playVideo() {
	window.plugins.videoPlayer.play(DB.videoUrl);
};

// 切换页面
function DoSwitch(view) {
	var items = DB[view].getItems();
	var length = items.length;
	for (var i = 0; i < length; i++) {
		DB[view].getAt(i).hide();
	};
	DB.mainContainer.setActiveItem(DB[view]);
	setActivatedController(DB.mainController.getApplication().getController(view));
	for (var i = 0; i < length; i++) {
		DB[view].getAt(i).show();
	};
};

// 拍照上传一揽子函数
function DoGetPhoto() {
	Ext.device.Camera.capture({
		success : function (image) {
			document.getElementById("publishImage").src = image;
			DoPublish(DB.publishIdTextFiled.getValue());
			document.getElementById("imageStatus").innerHTML = "上传中 ...";
		},
		quality : 75,
		source : "camera",
		destination : "file",
		width : 450,
		height : 450,
	});
};
function DoPublish(publishId) {
	var imageUrl = document.getElementById("publishImage").src;
	if (imageUrl != "file:///android_asset/www/resources/icons/defaultImage.png") {
		uploadPic(1, imageUrl, publishId);
	};
};
function uploadPic(imageId, imageURI, qaId) {
	var options = new FileUploadOptions();
	var params = new Object();
	params.imageId = imageId;
	params.qaId = qaId;
	options.fileKey = "file";
	var extension = imageURI.substr(imageURI.lastIndexOf(".") + 1).toUpperCase();
	if (extension == "PNG") {
		options.mimeType = "image/png";
	} else if (extension) {
		options.mimeType = "image/gif";
	} else {
		options.mimeType = "image/jpeg";
	};
	options.chunkedMode = false;
	options.fileName = imageURI.substr(imageURI.lastIndexOf("/") + 1);
	options.params = params;
	var eFileTransfer = new FileTransfer();
	eFileTransfer.upload(imageURI, Website.serverUrl + "QAServlet", function (r) {
		document.getElementById("imageStatus").innerHTML = "上传成功！";
		return true;
	}, function (error) {
		document.getElementById("imageStatus").innerHTML = "上传失败！";
		document.getElementById("publishImage").src = "resources/icons/defaultImage.png";
		return false;
	}, options);
};
