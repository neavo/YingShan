Ext.define("Project.store.mainStore_417", {
	extend : "Ext.data.Store",
	
	config : {
		model : "Project.model.mainModel_417",
		proxy : {
			type : "jsonp",
			url : Website.serverUrl + Website.infoScriptUrl + "417" + "&infoPageNum=1",
		},
		autoLoad : true,
	}
});
