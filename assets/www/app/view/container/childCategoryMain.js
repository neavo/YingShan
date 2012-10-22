Ext.define("Project.view.container.childCategoryMain", {
	extend : "Ext.List",
	xtype : "childCategoryMain",
	config : {
		cls : "childCategoryList",
		store : "childCategoryStore",
		height : DB.screenHeight * 0.84,
		onItemDisclosure : true,
		emptyText : "无更多记录",
		loadingText : "读取中 ...",
		itemTpl :
		"<img class = childCategoryIcon src = {categoryIconUrl} />"
		 + "<div class = childCategoryTitle><b>{categoryTitle} </b></div>",
	},
});
