Ext.define("Project.controller.widget.addBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			addBtn : "addBtn",
			
			titleTextFiled : "#titleTextFiled",
			publisherTextFiled : "#publisherTextFiled",
			contentTextFiled : "#contentTextFiled",
		},
		control : {
			addBtn : {
				tap : "onAddBtnTap",
			},
		},
	},
	launch : function () {
		DB.titleTextFiled = this.getTitleTextFiled();
		DB.publisherTextFiled = this.getPublisherTextFiled();
		DB.contentTextFiled = this.getContentTextFiled();
	},
	onAddBtnTap : function () {
		//console.log('dd');
		var systemId = Math.round(new Date().getTime() / 1000);
		//console.log(systemId);
		var formpanel = DB.publishMain;
		//系统自动分配编号，但手机号要用户输入
		//console.log(formpanel);
		if (formpanel.getValues().title == 0) {
			//alert("请输入问题描述");
			alert("请输入问题描述");
			return;
		} else if (formpanel.getValues().publisher == 0) {
			//alert("请输入联系电话");
			alert("请输入联系电话");
			return;
		} else if (formpanel.getValues().content == 0) {
			//alert("请输入联系电话");
			alert("请输入联系电话");
			return;
		} else {
			formpanel.setValues({
				publishId : systemId
			});
			//alert(systemId);
			formpanel.setUrl(Website.serverUrl + 'publish.jsp');
			formpanel.submit({
				waitMsg : {
					message : '信息发布中...'
				},
				success : function () {
					alert("成功");
					return;
				},
				failure : function () {
					alert("失败");
					return;
				}
			});
		}
	},
});
