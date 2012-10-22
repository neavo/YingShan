Ext.define("Project.view.widget.publishPanel", {
	extend : "Ext.form.Panel",
	xtype : "publishPanel",
	config : {
		layout : "vbox",
		items : [{
				xtype : "textfield",
				flex : 1,
				label : "标题",
				placeHolder : " * 该项为必填项"
			}, {
				xtype : "textareafield",
				flex : 4,
				label : "内容",
				placeHolder : " * 该项为必填项"
			}, {
				xtype : "container",
				cls : "publishImageContainer",
				flex : 5,
				layout : "hbox",
				items : [{
						xtype : "spacer",
					}, {
						xtype : "container",
						html : "<img class = publishImage src = resources/icons/icon.png >",
					}, {
						xtype : "spacer",
					}, {
						xtype : "container",
						html : "<img class = publishImage src = resources/icons/icon.png >",
					}, {
						xtype : "spacer",
					}, {
						xtype : "container",
						html : "<img class = publishImage src = resources/icons/icon.png >",
					}, {
						xtype : "spacer",
					},
				],
			},
		],
	},
});
