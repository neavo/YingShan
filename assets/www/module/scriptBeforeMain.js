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

// 翻页
function DoSwitch(thisView, nextView) {
	DB[thisView + "Top"].hide();
	DB[thisView + "Main"].hide();
	DB[thisView + "Bottom"].hide();
	DB[nextView + "Top"].show();
	DB[nextView + "Main"].show();
	DB[nextView + "Bottom"].show();
};

// 播放翻页动画
function DoAnim() {
	/*Ext.Anim.run(DB.mainContainer, "slide", {
	out : false,
	});*/
};

// 信息发布页面上传图片控件
function DoGetPhoto(imageId) {
	navigator.camera.getPicture(function (url) {
		document.getElementById("publishImage_" + imageId).src = url;
		DoPublish(imageId, DB.publishIdTextFiled.getValue()); // 上传图片
		document.getElementById("imageStatus_" + imageId).innerHTML = "上传中 ...";
	}, function () {
		return;
	}, {
		quality : 75,
		destinationType : destinationType.FILE_URI,
		//sourceType : pictureSource.PHOTOLIBRARY,
		targetWidth : 450,
		targetHeight : 450,
	});
};
// 信息发布,上传图片
function DoPublish(imageId, publishId) {
	var imageUrl = document.getElementById("publishImage_" + imageId).src;
	if (imageUrl != "file:///android_asset/www/resources/icons/defaultImage.png") {
		uploadPic(parseInt(imageId), imageUrl, publishId);
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
		document.getElementById("imageStatus_" + imageId).innerHTML = "上传成功！";
		return true;
	}, function (error) {
		document.getElementById("imageStatus_" + imageId).innerHTML = "上传失败！";
		document.getElementById("publishImage_" + imageId).src = "resources/icons/defaultImage.png";
		return false;
	}, options);
};
