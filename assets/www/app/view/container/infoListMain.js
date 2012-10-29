Ext.define("Project.view.container.infoListMain", {
	extend : "Ext.List",
	xtype : "infoListMain",
	config : {
		cls : "infoList",
		store : "mainStore",
		emptyText : "无更多记录",
		loadingText : "读取中 ...",
		itemTpl :
		"<img class = infoListImage src = {imageurl1} onerror = \"this.src = 'resources/icons/icon.png'\" />"
		 + "<div class = infoListTitle><b>{title}</b></div>"
		 + "<div class = infoListData>{datetime}</div>"
		 + "<div class = infoListPubliser>{publisher}</div>",
		items : [{
				xtype : "container",
				height : "1.3em",
				docked : "bottom",
				html : "<div class = infoListMainHtml> 下滑显示更多 </div>",
			},
		],
	},
});
