Ext.define("Project.store.mainStore_213", {
	extend : "Ext.data.Store",
	xtype : "mainStore_213",
	
	config : {
		model : "Project.model.mainModel_213",
		proxy : {
			type : "jsonp",
			url : Website.serverUrl + "buy/buy.jsp?buyPageNum=1&range=365",
		},
		autoLoad: true,
	}
});
