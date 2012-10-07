Ext.define("Project.view.212.mainView", {
	extend : "Ext.Container",
	xtype : "mainView_212",
	
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
				id : "mainList_212",
				xtype : "list",
				store : "mainStore_212",
				cls : "baccyBuyList",
				emptyText : "无更多记录",
				loadingText : "读取中 ...",
				itemTpl : 
				"<img class = infoListImage src = \"resources/icons/icon.png\" />"
				+ "<div class = infoListTitle><b>{title}</b></div>"
				+ "<div class = infoListData>{publishtime}</div>"
				+ "<div class = infoListPubliser>{publisher}</div>",
			}, {
				xtype : "toolbar",
				docked : "bottom",
				items : [{
						id : "prevPageBtnAtMainView_212",
						xtype : "button",
						text : "上一页",
						ui : "back",
					}, {
						xtype : "spacer",
					}, {
						id : "operateBtnAtMainView_212",
						xtype : "button",
						text : "更多操作",
						ui : "round",
					}, {
						xtype : "spacer",
					}, {
						id : "nextPageBtnAtMainView_212",
						xtype : "button",
						text : "下一页",
						ui : "forward",
					},
				],
			},
		],
	},
});
