Ext.define("Project.view.container.publishMain", {
	extend : "Ext.form.Panel",
	xtype : "publishMain",
	config : {
		layout : "vbox",
		scrollable : false,
		height : DB.screenHeight * 0.84,
		items : [{
				id : "titleTextFiled",
				xtype : "textfield",
				name : "title",
				flex : 1,
				label : "标题",
				required : true,
				placeHolder : "该项为必填项",
			}, {
				id : "publisherTextFiled",
				xtype : "textfield",
				name : "publisher",
				flex : 1,
				label : "发布人",
				required : true,
				placeHolder : "该项为必填项",
			}, {
				id : "contactTextFiled",
				xtype : "textfield",
				name : "contact",
				flex : 1,
				label : "联系方式",
				required : true,
				placeHolder : "该项为必填项",
			}, {
				id : "contentTextFiled",
				xtype : "textareafield",
				name : "content",
				flex : 17,
				label : "详细内容",
				required : true,
				placeHolder : "该项为必填项"
			}, {
				id : "publishIdTextFiled",
				xtype : "numberfield",
				hidden : true,
				name : "publishId",
			}
		],
	},
});
