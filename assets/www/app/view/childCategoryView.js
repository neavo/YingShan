Ext.define("Project.view.childCategoryView", {
	extend : "Ext.Container",
	xtype : "childCategoryView",
	config : {
		layout : "vbox",
		items : [{
				id : "childCategoryTitle",
				xtype : "toolbar",
				flex : 1,
				docked : "top",
			}, {
				id : "childCategoryList",
				xtype : "list",
				cls : "childCategoryList",
				flex : 1,
				ui : "round",
				onItemDisclosure : true,
				emptyText : "无更多记录",
				loadingText : "读取中 ...",
				itemTpl :
				"<img class = childCategoryIcon src = {categoryIconUrl} />"
				+ "<div class = childCategoryTitle><b>{categoryTitle} </b></div>",
			},
		],
	},
});
