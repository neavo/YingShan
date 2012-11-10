Ext.define("Project.view.container.childCategoryMain", {
	extend : "Ext.List",
	xtype : "childCategoryMain",
	config : {
		cls : "childCategoryList",
		store : "childCategoryStore",
		emptyText : "无更多记录",
		loadingText : "读取中 ...",
		itemTpl : "<img class = childCategoryIcon src = {categoryIconUrl} />"
		 + "<img class = childCategoryDisclosureIcon src = resources/icons/disclosureIcon.png />"
		 + "<div class = childCategoryTitle><b>{categoryTitle} </b></div>",
	},
});
