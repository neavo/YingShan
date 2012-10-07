Ext.define("Project.controller.home.carouselListController", {
	extend : "Ext.app.Controller",
	
	config : {
		refs : {
			mainContainer : "mainContainer",	
			infoMainView : "infoMainView",
			mainView_212 : "mainView_212",
			mainView_213 : "mainView_213",
			
			carouselList_01 : "#carouselList_01",
			carouselList_02 : "#carouselList_02",
			carouselList_03 : "#carouselList_03",
			carouselList_04 : "#carouselList_04",
			topBarAtInfoMainView : "#topBarAtInfoMainView",
			mainListAtInfoMainView : "#mainListAtInfoMainView",
		},
		control : {
			carouselList_01 : {
				itemtap : "onCarouselList_01_ItemTap"
			},
			carouselList_02 : {
				itemtap : "onCarouselList_02_ItemTap"
			},
			carouselList_03 : {
				itemtap : "onCarouselList_03_ItemTap"
			},
			carouselList_04 : {
				itemtap : "onCarouselList_04_ItemTap"
			},
		},
	},
	launch : function () {
		this.mainContainer = this.getMainContainer();
		this.mainView = this.getInfoMainView();
		this.topBar = this.getTopBarAtInfoMainView();
		this.mainList = this.getMainListAtInfoMainView();
		this.mainView_212 = this.getMainView_212();
		this.mainView_213 = this.getMainView_213();
	},
	setActivatedView : function (id, title) {
		this.mainContainer.setActiveItem(this.mainView);
		this.topBar.setTitle(title);
		this.mainList.setStore("mainStore_" + id);
		setActivatedController(this.getApplication().getController("info.mainViewController"));
		setActivatedCategory(id);
		setActivatedStore(this.mainList.getStore());	
	},
	onCarouselList_01_ItemTap : function (list, index, e, eOpts) {
		switch (index+1) {
		case 1 :
			this.setActivatedView("200", "农业新闻");
			break
		case 2 :
			this.setActivatedView("201", "市场分析");
			break
		case 3 :
			this.setActivatedView("202", "政策法规");
			break
		default :
			break
		}
	},
	onCarouselList_02_ItemTap : function (list, index, e, eOpts) {
		switch (index+1) {
		case 1 :
			this.setActivatedView("203", "恩施新闻");
			break
		case 2 :
			this.setActivatedView("204", "名优品种");
			break
		case 3 :
			this.setActivatedView("205", "种植技术");
			break
		default :
			break
		}
	},
	onCarouselList_03_ItemTap : function (list, index, e, eOpts) {
		switch (index+1) {
		case 1 :
			break
		case 2 :
			break
		case 3 :
			break
		default :
			break
		}
	},
	onCarouselList_04_ItemTap : function (list, index, e, eOpts) {
		switch (index+1) {
		case 1 :
			setActivatedController(this.getApplication().getController("212.mainViewController"));
			this.mainContainer.setActiveItem(this.mainView_212);
			break
		case 2 :
			setActivatedController(this.getApplication().getController("213.mainViewController"));
			this.mainContainer.setActiveItem(this.mainView_213);
			break
		case 3 :
			break
		default :
			break
		}
	},
});
