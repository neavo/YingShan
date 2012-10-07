Ext.define("Project.view.208.mainView", {
	extend : "Ext.Container",
	xtype : "mainView_208",
	
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "toolbar",
				title : "问题列表",
				docked : "top",
			}, {
				id : "mainList_208",
				xtype : "list",
				//store : "mainStore_208",
				//cls : "baccyBuyList",
				emptyText : "无更多记录",
				loadingText : "读取中 ...",
				itemTpl : "",
			}, {
				xtype : "toolbar",
				docked : "bottom",
				items : [{
						id : "prevPageBtnAtMainView_208",
						xtype : "button",
						text : "上一页",
						ui : "back",
					}, {
						xtype : "spacer",
					}, {
						id : "operateBtnAtMainView_208",
						xtype : "button",
						text : "更多操作",
						ui : "round",
					}, {
						xtype : "spacer",
					}, {
						id : "nextPageBtnAtMainView_208",
						xtype : "button",
						text : "下一页",
						ui : "forward",
					},
				],
			},
		],
	},
});
