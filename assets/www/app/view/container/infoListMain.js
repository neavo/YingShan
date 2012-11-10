Ext.define("Project.view.container.infoListMain", {
	extend : "Ext.List",
	xtype : "infoListMain",
	config : {
		cls : "infoList",
		store : "mainStore",
		itemTpl : "<img class = infoListImage onerror = \" this.src = 'resources/icons/icon.png' \" src = {imageurl1} >"
		 + "<div class = infoListTitle><b>{title}</b></div>"
		 + "<div class = infoListDataPubliser>发布：{publisher}</div>",
		plugins : [{
				xclass : "Ext.plugin.ListPaging",
				loadMoreText : "<div class = ListPagingLoadMoreText >下滑获取更多 ...</div>",
				autoPaging : true,
			}, 
		],
	},
});
