Ext.define("Project.controller.213.operateActionSheetController", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			mainContainer : "mainContainer", 
			homeView : "homeView",
			operateActionSheet_213 : "operateActionSheet_213",

			oneWeekBtnAtOperateActionSheet_213 : "#oneWeekBtnAtOperateActionSheet_213",
			oneMonthBtnAtOperateActionSheet_213 : "#oneMonthBtnAtOperateActionSheet_213",
			threeMonthBtnAtOperateActionSheet_213 : "#threeMonthBtnAtOperateActionSheet_213",
			oneYearBtnAtOperateActionSheet_213 : "#oneYearBtnAtOperateActionSheet_213",	
			backBtnAtOperateActionSheet_213 : "#backBtnAtOperateActionSheet_213",
			cancelBtnAtOperateActionSheet_213 : "#cancelBtnAtOperateActionSheet_213",
		},
		control : {
			oneWeekBtnAtOperateActionSheet_213 : {
				tap : "onOneWeekBtnAtOperateActionSheet_213_Tap",
			},
			oneMonthBtnAtOperateActionSheet_213 : {
				tap : "onOneMonthBtnAtOperateActionSheet_213_Tap",
			},
			threeMonthBtnAtOperateActionSheet_213 : {
				tap : "onThreeMonthBtnAtOperateActionSheet_213_Tap",
			},
			oneYearBtnAtOperateActionSheet_213 : {
				tap : "onOneYearBtnAtOperateActionSheet_213_Tap",
			},
			backBtnAtOperateActionSheet_213 : {
				tap : "onBackBtnAtOperateActionSheet_213_Tap",
			},
			cancelBtnAtOperateActionSheet_213 : {
				tap : "onCancelBtnAtOperateActionSheet_213_Tap",
			},
		},
	},	
	launch : function () {
		this.pageNum = 1;
		this.rangeFlag = 365;
		this.mainContainer = this.getMainContainer();
		this.homeView = this.getHomeView();
		this.operateActionSheet_213 = this.getOperateActionSheet_213();
		this.mainStore_213 = Ext.getStore("mainStore_213");
	},
	goBack : function() {
		setActivatedController(this.getApplication().getController("213.mianViewController"));
		this.operateActionSheet_213.hide();
	},
	reloadStore : function () {
		this.mainStore_213.setProxy({
			type : "jsonp",
			url : Website.serverUrl + "buy/buy.jsp?buyPageNum=" + this.pageNum + "&range=" + this.rangeFlag,
		});
		this.mainStore_213.load();
	},
	onOneWeekBtnAtOperateActionSheet_213_Tap : function () {
		this.operateActionSheet_213.hide();
		this.rangeFlag = 7;
		this.pageNum = 1;
		this.reloadStore();
	},
	onOneMonthBtnAtOperateActionSheet_213_Tap : function () {
		this.operateActionSheet_213.hide();
		this.rangeFlag = 30;
		this.pageNum = 1;
		this.reloadStore();
	},
	onThreeMonthBtnAtOperateActionSheet_213_Tap : function () {
		this.operateActionSheet_213.hide();
		this.rangeFlag = 90;
		this.pageNum = 1;
		this.reloadStore();
	},
	onOneYearBtnAtOperateActionSheet_213_Tap : function () {
		this.operateActionSheet_213.hide();
		this.rangeFlag = 365;
		this.pageNum = 1;
		this.reloadStore();
	},
	onBackBtnAtOperateActionSheet_213_Tap : function () {
		this.operateActionSheet_213.hide();
		setActivatedController(this.getApplication().getController("home.mainViewController"));
		this.mainContainer.setActiveItem(this.homeView);	
	},
	onCancelBtnAtOperateActionSheet_213_Tap : function () {
		this.goBack();
	},
});
