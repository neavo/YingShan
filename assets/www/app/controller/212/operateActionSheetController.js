Ext.define("Project.controller.212.operateActionSheetController", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			mainContainer : "mainContainer", 
			homeView : "homeView",
			operateActionSheet_212 : "operateActionSheet_212",

			oneWeekBtnAtOperateActionSheet_212 : "#oneWeekBtnAtOperateActionSheet_212",
			oneMonthBtnAtOperateActionSheet_212 : "#oneMonthBtnAtOperateActionSheet_212",
			threeMonthBtnAtOperateActionSheet_212 : "#threeMonthBtnAtOperateActionSheet_212",
			oneYearBtnAtOperateActionSheet_212 : "#oneYearBtnAtOperateActionSheet_212",	
			backBtnAtOperateActionSheet_212 : "#backBtnAtOperateActionSheet_212",
			cancelBtnAtOperateActionSheet_212 : "#cancelBtnAtOperateActionSheet_212",
		},
		control : {
			oneWeekBtnAtOperateActionSheet_212 : {
				tap : "onOneWeekBtnAtOperateActionSheet_212_Tap",
			},
			oneMonthBtnAtOperateActionSheet_212 : {
				tap : "onOneMonthBtnAtOperateActionSheet_212_Tap",
			},
			threeMonthBtnAtOperateActionSheet_212 : {
				tap : "onThreeMonthBtnAtOperateActionSheet_212_Tap",
			},
			oneYearBtnAtOperateActionSheet_212 : {
				tap : "onOneYearBtnAtOperateActionSheet_212_Tap",
			},
			backBtnAtOperateActionSheet_212 : {
				tap : "onBackBtnAtOperateActionSheet_212_Tap",
			},
			cancelBtnAtOperateActionSheet_212 : {
				tap : "onCancelBtnAtOperateActionSheet_212_Tap",
			},
		},
	},	
	launch : function () {
		this.pageNum = 1;
		this.rangeFlag = 365;
		this.mainContainer = this.getMainContainer();
		this.homeView = this.getHomeView();
		this.operateActionSheet_212 = this.getOperateActionSheet_212();
		this.mainStore_212 = Ext.getStore("mainStore_212");
	},
	goBack : function() {
		setActivatedController(this.getApplication().getController("212.mianViewController"));
		this.operateActionSheet_212.hide();
	},
	reloadStore : function () {
		this.mainStore_212.setProxy({
			type : "jsonp",
			url : Website.serverUrl + "supply/supply.jsp?supplyPageNum=" + this.pageNum + "&range=" + this.rangeFlag,
		});
		this.mainStore_212.load();
	},
	onOneWeekBtnAtOperateActionSheet_212_Tap : function () {
		this.operateActionSheet_212.hide();
		this.rangeFlag = 7;
		this.pageNum = 1;
		this.reloadStore();
	},
	onOneMonthBtnAtOperateActionSheet_212_Tap : function () {
		this.operateActionSheet_212.hide();
		this.rangeFlag = 30;
		this.pageNum = 1;
		this.reloadStore();
	},
	onThreeMonthBtnAtOperateActionSheet_212_Tap : function () {
		this.operateActionSheet_212.hide();
		this.rangeFlag = 90;
		this.pageNum = 1;
		this.reloadStore();
	},
	onOneYearBtnAtOperateActionSheet_212_Tap : function () {
		this.operateActionSheet_212.hide();
		this.rangeFlag = 365;
		this.pageNum = 1;
		this.reloadStore();
	},
	onBackBtnAtOperateActionSheet_212_Tap : function () {
		this.operateActionSheet_212.hide();
		setActivatedController(this.getApplication().getController("home.mainViewController"));
		this.mainContainer.setActiveItem(this.homeView);	
	},
	onCancelBtnAtOperateActionSheet_212_Tap : function () {
		this.goBack();
	},
});
