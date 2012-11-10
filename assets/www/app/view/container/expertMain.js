Ext.define("Project.view.container.expertMain", {
	extend : "Ext.List",
	xtype : "expertMain",
	config : {
		cls : "expertList",
		store : "expertStore",
		disableSelection : true,
		itemTpl : "<img class = expertListImage src = {imageurl} >"
		 + "<div class = expertListName>姓名：{name}</div>"
		 + "<div class = expertListInfo>职务：{position}</div>"
		 + "<div class = expertListIDescription>简介：{description}</div>"
		 + "<div class = expertListInfo>电话：<a href = \"tel:{telephone}\">{telephone}</a></div>",
		plugins : [{
				xclass : "Ext.plugin.ListPaging",
				loadMoreText : "<div class = ListPagingLoadMoreText >下滑获取更多 ...</div>",
				autoPaging : true,
			}, 
		],
	},
});
