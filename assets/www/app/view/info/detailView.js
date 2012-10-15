Ext.define("Project.view.info.detailView", {
	extend : "Ext.Container",
	xtype : "infoDetailView",
	config : {
		scrollable : "vertical",
		styleHtmlContent : true,
		cls : "detail",
		items : [{
				xtype : "toolbar",
				height : DB.screenHeight * 0.08,
				docked : "top",
				title : "详细信息"
			}, {
				xtype : "toolbar",
				height : DB.screenHeight * 0.08,
				docked : "bottom",
				items : [{
						xtype : "spacer"
					}, {
						id : "backBtnAtInfoDetailView",
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
