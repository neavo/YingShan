Ext.define("Project.view.info.mainView", {
	extend : "Ext.Container",
	xtype : "infoMainView",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				id : "topBarAtInfoMainView",
				xtype : "toolbar",
				docked : "top",
			}, {
				id : "mainListAtInfoMainView",
				xtype : "list",
				cls : "infoList",
				emptyText : "无更多记录",
				loadingText : "读取中 ...",
				itemTpl :
				"<img class = infoListImage src = {imageurl1} onerror = \"this.src = 'resources/icons/icon.png'\" />"
				+ "<div class = infoListTitle><b>{title}</b></div>"
				+ "<div class = infoListData>{datetime}</div>"
				+ "<div class = infoListPubliser>{publisher}</div>",
			}, {
				xtype : "toolbar",
				docked : "bottom",
				items : [{
						id : "prevPageBtnAtInfoMainView",
						xtype : "button",
						text : "上一页",
						ui : "back",
					}, {
						xtype : "spacer",
					}, {
						id : "backBtnAtInfoMainView",
						xtype : "button",
						text : "返回主页",
						ui : "round",
					}, {
						xtype : "spacer",
					}, {
						id : "nextPageBtnAtInfoMainView",
						xtype : "button",
						text : "下一页",
						ui : "forward",
					},
				],
			}
		],
	},
});
