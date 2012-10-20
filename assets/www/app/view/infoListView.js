Ext.define("Project.view.infoListView", {
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
						xtype : "spacer",
					}, {
						id : "prevPageBtnAtInfoMainView",
						xtype : "button",
						ui : "plain",
						iconCls : "arrow_left",
						iconMask : true,
					}, {
						xtype : "spacer",
					}, {
						id : "nextPageBtnAtInfoMainView",
						xtype : "button",
						ui : "plain",
						iconCls : "arrow_right",
						iconMask : true,
					}, {
						xtype : "spacer",
					}, {
						id : "backBtnAtInfoMainView",
						xtype : "button",
						ui : "plain",
						iconCls : "reply",
						iconMask : true,
					}, {
						xtype : "spacer",
					},
				],
			}
		],
	},
});
