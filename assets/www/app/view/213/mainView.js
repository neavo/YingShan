Ext.define("Project.view.213.mainView", {
	extend : "Ext.Container",
	xtype : "mainView_213",
	
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "toolbar",
				title : "我要供应",
				docked : "top",
			}, {
				id : "mainList_213",
				xtype : "list",
				store : "mainStore_213",
				cls : "baccyBuyList",
				emptyText : "无更多记录",
				loadingText : "读取中 ...",
				itemTpl : "<div class = \"supplyDescription\">" +
					"<div class = \"listTitle\"><b>{title}</b></div>" +
					"<span class = \"listDescription\">联系人：{publisher}</span>" +
					"<span class = \"listDescription\">地区：{area} </span>" + "<br>" +
					"<span class = \"listDescription\">电话：{telephone} </span>" +
					"<span class = \"listDescription\">价格：{price} </span>" + "<br>" +
					"<div class = \"publishtime\">时间：{publishtime}" +
					"<span class = \"comment\">浏览{sharedtimes}次 </span></div></div>",
			}, {
				xtype : "toolbar",
				docked : "bottom",
				items : [{
						id : "prevPageBtnAtMainView_213",
						xtype : "button",
						text : "上一页",
						ui : "back",
					}, {
						xtype : "spacer",
					}, {
						id : "operateBtnAtMainView_213",
						xtype : "button",
						text : "更多操作",
						ui : "round",
					}, {
						xtype : "spacer",
					}, {
						id : "nextPageBtnAtMainView_213",
						xtype : "button",
						text : "下一页",
						ui : "forward",
					},
				],
			},
		],
	},
});
