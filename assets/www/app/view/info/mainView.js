Ext.define("Project.view.info.mainView", {
	extend : "Ext.Container",
	xtype : "infoMainView",
	config : {
		layout : "vbox",
		items : [{
				id : "topBarAtInfoMainView",
				xtype : "toolbar",
				flex : 1,
				docked : "top",
			}, {
				id : "mainListAtInfoMainView",
				xtype : "list",
				flex : 1,
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
				flex : 1,
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
