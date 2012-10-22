Ext.define("Project.view.container.infoListMain", {
	extend : "Ext.List",
	xtype : "infoListMain",
	config : {
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
	},
});
