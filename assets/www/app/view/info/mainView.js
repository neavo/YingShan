Ext.define("Project.view.info.mainView", {
	extend : "Ext.Container",
	xtype : "infoMainView",
	config : {
		layout : "vbox",
		items : [{
				id : "topBarAtInfoMainView",
				xtype : "toolbar",
				height : DB.screenHeight * 0.08,
				docked : "top",
			}, {
				id : "mainListAtInfoMainView",
				xtype : "list",
				height : DB.screenHeight * 0.84,
				cls : "infoList",
				store : "mainStore",
				emptyText : "无更多记录",
				loadingText : "读取中 ...",
				itemTpl :
				"<img class = infoListImage src = {imageurl1} onerror = \"this.src = 'resources/icons/icon.png'\" />"
				+ "<div class = infoListTitle><b>{title}</b></div>"
				+ "<div class = infoListData>{datetime}</div>"
				+ "<div class = infoListPubliser>{publisher}</div>",
			}, {
				xtype : "toolbar",
				height : DB.screenHeight * 0.08,
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
						text : "返回列表",
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
