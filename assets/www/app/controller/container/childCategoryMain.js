Ext.define("Project.controller.container.childCategoryMain", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			childCategoryMain : "childCategoryMain",
		},
		control : {
			childCategoryMain : {
				itemtap : "OnChildCategoryMainTap",
			},
		},
	},
	// 有子频道
	setChildView : function (childCategory, title) {
		DB.childCategoryTop.setTitle(title);
		DB.childCategoryMain.getStore().setData(childCategory);
	},
	// 无子频道
	setActivatedView : function (id, title) {
		DoSwitch("childCategory", "infoList");
		setActivatedCategory(id);
		DB.infoListTop.setTitle(title);
		DB.infoListMain.getStore().setProxy({
			type : "jsonp",
			url : Website.serverUrl + "Server/info.jsp?categoryid=" + DB.activatedCategory + "&infoPageNum=1",
		});
		DB.infoListMain.getStore().load();
		setActivatedController(this.getApplication().getController("infoList"));
	},
	// 自定义网页页面
	setCustomView : function (html, title) {
		DoSwitch("childCategory", "customHtml");
		DB.customHtmlTop.setTitle(title);
		DB.customHtmlMain.setHtml(html);
		setActivatedController(this.getApplication().getController("customHtml"));
	},
	// 发布信息页面
	setPublishView : function (id, title) {
		DoSwitch("childCategory", "publish");
		DB.publishTop.setTitle(title);
		setActivatedCategory(id);
		DB.categoryIdTextFiled.setValue(DB.activatedCategory);
		DB.publishIdTextFiled.setValue(Math.round(new Date().getTime() / 1000));
		setActivatedController(this.getApplication().getController("publishView"));
	},
	// 响应按键点击
	OnChildCategoryMainTap : function (list, index, target, record, e, eOpts) {
		var data = record.getData();
		if (data.categoryStyle == "parentCategory") {
			this.setChildView(data.childCategory, data.categoryTitle);
		} else if (data.categoryStyle == "customHtml") {
			this.setCustomView(data.customHtml, data.categoryTitle);
		} else if (data.categoryStyle == "publishPanel") {
			this.setPublishView(data.categoryId, data.categoryTitle);
		} else if (data.categoryStyle == "webUrl") {
			window.open(data.webUrl, "_blank");
		} else {
			this.setActivatedView(data.categoryId, data.categoryTitle);
		};
	},
});
