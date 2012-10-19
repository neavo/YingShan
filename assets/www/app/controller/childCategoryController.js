Ext.define("Project.controller.childCategoryController", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			homeView : "homeView",
			mainContainer : "mainContainer",
			infoMainView : "infoMainView",
			childCategoryView : "childCategoryView",
			
			categoryContainer : "#categoryContainer",
			childCategoryTitle : "#childCategoryTitle",
			childCategoryList : "#childCategoryList",
			topBarAtInfoMainView : "#topBarAtInfoMainView",
			mainListAtInfoMainView : "#mainListAtInfoMainView",
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
		
		this.childCategoryTitle = this.getChildCategoryTitle();
		this.childCategoryList = this.getChildCategoryList();
		this.topBar = this.getTopBarAtInfoMainView();
		this.mainList = this.getMainListAtInfoMainView();
	},
	goBack : function () {
		setActivatedController(this.getApplication().getController("homeViewController"));
		this.mainContainer.setActiveItem(this.homeView);
	},
	setChildView : function (childCategory, title) {
		Ext.Anim.run(this.childCategoryView, "slide", {
			out : false,
		});
		this.childCategoryTitle.setTitle(title);
		this.childCategoryList.getStore().setData(childCategory);
	},
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
		if (data["isParentCategory"]) {
			this.setChildView(data["childCategory"], data["categoryTitle"]);
		} else {
			this.setActivatedView(data["categoryId"], data["categoryTitle"]);
		};
	},
});
