Ext.define("Project.view.childCategoryView", {
	extend : "Ext.Container",
	xtype : "childCategoryView",
	config : {
		layout : "vbox",
		items : [{
				id : "childCategoryTitle",
				xtype : "toolbar",
				height : DB.screenHeight * 0.08,
				docked : "top",
			}, {
				id : "childCategoryList",
				xtype : "list",
				cls : "childCategoryList",
				store : "childCategoryStore",
				height : DB.screenHeight * 0.84,
				onItemDisclosure : true,
				emptyText : "无更多记录",
				loadingText : "读取中 ...",
				itemTpl :
				"<img class = childCategoryIcon src = {categoryIconUrl} />"
				 + "<div class = childCategoryTitle><b>{categoryTitle} </b></div>",
			}, {
				xtype : "bottomToolbar",
				height : DB.screenHeight * 0.08,
			},
		],
	},
});
