Ext.define("Project.controller.childCategoryController", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			homeView : "homeView",
			mainContainer : "mainContainer",
			childCategoryView : "childCategoryView",
			infoMainView : "infoMainView",
			infoDetailView : "infoDetailView",
			customHtmlView : "customHtmlView",
			
			categoryContainer : "#categoryContainer",
			childCategoryTitle : "#childCategoryTitle",
			childCategoryList : "#childCategoryList",
			topBarAtInfoMainView : "#topBarAtInfoMainView",
			mainListAtInfoMainView : "#mainListAtInfoMainView",
			customHtmlContainer : "#customHtmlContainer",
		},
		control : {
			childCategoryList : {
				itemtap : "OnChildCategoryListItemtap",
			},
		},
	},
	launch : function () {
		this.homeView = this.getHomeView();
		this.mainContainer = this.getMainContainer();
		this.childCategoryView = this.getChildCategoryView();
		this.infoMainView = this.getInfoMainView();
		this.infoDetailView = this.getInfoDetailView();
		this.customHtmlView = this.getCustomHtmlView();
		
		this.childCategoryTitle = this.getChildCategoryTitle();
		this.childCategoryList = this.getChildCategoryList();
		this.topBar = this.getTopBarAtInfoMainView();
		this.mainList = this.getMainListAtInfoMainView();
		this.customHtmlContainer = this.getCustomHtmlContainer();
	},
	// 返回键响应
	goBack : function () {
		setActivatedController(this.getApplication().getController("homeViewController"));
		this.mainContainer.setActiveItem(this.homeView);
	},
	// 有子频道
	setChildView : function (childCategory, title) {
		Ext.Anim.run(this.childCategoryView, "slide", {
			out : false,
		});
		this.childCategoryTitle.setTitle(title);
		this.childCategoryList.getStore().setData(childCategory);
	},
	// 自定义网页页面
	setCustomView : function (html, title) {
		setActivatedController(this.getApplication().getController("customHtmlView"));
		this.customHtmlView.setHtml(html);
		this.mainContainer.setActiveItem(this.customHtmlView);
	},
	// 无子频道
	setActivatedView : function (id, title) {
		setActivatedController(this.getApplication().getController("infoListView"));
		setActivatedCategory(id);
		this.topBar.setTitle(title);
		this.mainList.getStore().setProxy({
			type : "jsonp",
			url : Website.serverUrl + Website.infoScriptUrl + DB.activatedCategory + "&infoPageNum=1",
		});
		this.mainList.getStore().load();
		this.mainContainer.setActiveItem(this.infoMainView);
	},
	OnChildCategoryListItemtap : function (list, index, target, record, e, eOpts) {
		var data = record.getData();
		if (data.categoryStyle == "parentCategory") {
			this.setChildView(data.childCategory, data.categoryTitle);
		} else if (data.categoryStyle == "customHtml") {
			console.log(data.customHtml, data.categoryTitle);
			this.setCustomView(data.customHtml, data.categoryTitle);
		} else {
			this.setActivatedView(data.categoryId, data.categoryTitle);
		};
	},
});
