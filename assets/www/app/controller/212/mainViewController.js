Ext.define("Project.controller.212.mainViewController", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			homeView : "homeView",
			mainContainer : "mainContainer",
			mainView_212 : "mainView_212",
			detailView_212 : "detailView_212",
			operateActionSheet_212 : "operateActionSheet_212",
			
			mainList_212 : "#mainList_212",
			prevPageBtnAtMainView_212 : "#prevPageBtnAtMainView_212",
			operateBtnAtMainView_212 : "#operateBtnAtMainView_212",
			nextPageBtnAtMainView_212 : "#nextPageBtnAtMainView_212",
		},
		control : {
			mainList_212 : {
				itemtap : "onMainList_212_ItemTap",
			},
			prevPageBtnAtMainView_212 : {
				tap : "onPrevPageBtnAtMainView_212_Tap",
			},
			operateBtnAtMainView_212 : {
				tap : "onOperateBtnAtMainView_212_Tap",
			},
			nextPageBtnAtMainView_212 : {
				tap : "onNextPageBtnAtMainView_212_Tap",
			},
		},
	},	
	launch : function () {
		this.pageNum = 1;
		this.rangeFlag = 365;
		this.mainContainer = this.getMainContainer();
		this.detailView_212 = this.getDetailView_212();
		this.operateActionSheet_212 = this.getOperateActionSheet_212();
		this.mainStore_212 = Ext.getStore("mainStore_212");
	},
	goBack : function() {
		setActivatedController(this.getApplication().getController("home.mainViewController"));
		this.mainContainer.setActiveItem(this.homeView);	
	},
	reloadStore : function (callback) {
		this.mainStore_212.setProxy({
			type : "jsonp",
			url : Website.serverUrl + "supply/supply.jsp?supplyPageNum=" + this.pageNum + "&range=" + this.rangeFlag,
		});
		if (callback)
		{
			this.mainStore_212.load({
				callback : function (records, operation, success, eOpts) {
					if (records.length == 0 && this.pageNum != 1) {
						this.pageNum = this.pageNum - 1;
					}
				}
			});
		}
		else
		{
			this.mainStore_212.load();
		}
	},
	onMainList_212_ItemTap : function (list, index, e, eOpts) {
		Ext.Ajax.request({
			url : Website.serverUrl + "/Server/itemTaped.jsp?id=" + list.getStore().getAt(index).get("id"),
			method : "POST",
		});
		this.detailView_212.setHtml(
			"<div class = \"detail_title\">" + list.getStore().getAt(index).get("title") + "</div>" +
			"<div class = \"detail_datetime\">" + list.getStore().getAt(index).get("publishtime") + "</div>" +
			"<div class = \"supply_content\">价格：" + list.getStore().getAt(index).get("price") + "</div>" +
			"<div class = \"supply_content\">地区：" + list.getStore().getAt(index).get("area") + "</div>" +
			"<div class = \"supply_content\">有效时间：" + list.getStore().getAt(index).get("validtime") + "</div>" +
			"<div class = \"supply_content\">发布者：" + list.getStore().getAt(index).get("publisher") + "</div>" +
			"<div class = \"supply_content\">联系方式：" + list.getStore().getAt(index).get("telephone") + "</div>" +
			"<div class = \"supply_content\">浏览次数：" + list.getStore().getAt(index).get("sharedtimes") + "</div>" +
			"<div class=\"detail_content\">" + list.getStore().getAt(index).get("content") + "</div>");
		setActivatedController(this.getApplication().getController("212.detailViewController"));
		this.mainContainer.setActiveItem(this.detailView_212);
	},
	onOperateBtnAtMainView_212_Tap : function () {
		setActivatedController(this.getApplication().getController("212.operateActionSheetController"));
		this.operateActionSheet_212.show();
	},
	onPrevPageBtnAtMainView_212_Tap : function () {
		if (this.pageNum != 1) {
			this.pageNum = this.pageNum - 1;
			this.reloadStore();
		}
	},
	onNextPageBtnAtMainView_212_Tap : function () {
		this.pageNum = this.pageNum + 1;
		this.reloadStore(true);
	},
});
