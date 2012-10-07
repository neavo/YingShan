Ext.define("Project.view.212.detailView", {
	extend : "Ext.Container",
	xtype : "detailView_212",
	
	config : {
		scrollable : "vertical",
		styleHtmlContent : true,
		cls : "detail",
		items : [{
				xtype : "toolbar",
				docked : "top",
				title : "详细信息"
			}, {
				xtype : "toolbar",
				docked : "bottom",
				items : [{
						xtype : "spacer"
					}, {
						id : "backBtnAtDetailView_212",
						xtype : "button",
						text : "返回列表",
						ui : "round",
					}, {
						xtype : "spacer"
					}
				]
			}
		]
	}
});
