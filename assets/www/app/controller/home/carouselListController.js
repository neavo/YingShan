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
			carouselList_05 : "#carouselList_05",
			carouselList_06 : "#carouselList_06",
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
			carouselList_05 : {
				itemtap : "onCarouselList_05_ItemTap"
			},
			carouselList_06 : {
				itemtap : "onCarouselList_06_ItemTap"
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
			this.setActivatedView("400", "走进英山");
			break
		case 2 :
			this.setActivatedView("401", "英山新闻");
			break
		case 3 :
			this.setActivatedView("402", "政策长廊");
			break
		default :
			break
		}
	},
	onCarouselList_02_ItemTap : function (list, index, e, eOpts) {
		switch (index+1) {
		case 1 :
			this.setActivatedView("403", "景区介绍");
			break
		case 2 :
			this.setActivatedView("404", "旅游服务");
			break
		case 3 :
			this.setActivatedView("405", "在线预订");
			break
		default :
			break
		}
	},
	onCarouselList_03_ItemTap : function (list, index, e, eOpts) {
		switch (index+1) {
		case 1 :
			this.setActivatedView("406", "招商指南");
			break
		case 2 :
			this.setActivatedView("407", "招商成果");
			break
		case 3 :
			this.setActivatedView("408", "项目介绍");
			break
		default :
			break
		}
	},	onCarouselList_04_ItemTap : function (list, index, e, eOpts) {
		switch (index+1) {
		case 1 :
			this.setActivatedView("409", "创新科技");
			break
		case 2 :
			this.setActivatedView("410", "科技产业");
			break
		case 3 :
			this.setActivatedView("411", "12396在线");
			break
		default :
			break
		}
	},	onCarouselList_05_ItemTap : function (list, index, e, eOpts) {
		switch (index+1) {
		case 1 :
			this.setActivatedView("412", "健康教育");
			break
		case 2 :
			this.setActivatedView("413", "政策法规");
			break
		case 3 :
			this.setActivatedView("414", "在线服务");
			break
		default :
			break
		}
	},	onCarouselList_06_ItemTap : function (list, index, e, eOpts) {
		switch (index+1) {
		case 1 :
			this.setActivatedView("415", "茶叶市场");
			break
		case 2 :
			this.setActivatedView("416", "茶技推广");
			break
		case 3 :
			this.setActivatedView("417", "专家在线");
			break
		default :
			break
		}
	},
});
