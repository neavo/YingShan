Ext.define("Project.view.213.detailView", {
	extend : "Ext.Container",
	xtype : "detailView_213",
	
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
						id : "backBtnAtDetailView_213",
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
