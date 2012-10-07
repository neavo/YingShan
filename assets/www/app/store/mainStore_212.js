Ext.define("Project.store.mainStore_212", {
	extend : "Ext.data.Store",
	xtype : "mainStore_212",
	
	config : {
		model : "Project.model.mainModel_212",
		proxy : {
			type : "jsonp",
			url : Website.serverUrl + "supply/supply.jsp?supplyPageNum=1&range=365",
		},
		autoLoad: true,
	}
});
