Ext.define("Project.store.mainStore_401", {
	extend : "Ext.data.Store",
	
	config : {
		model : "Project.model.mainModel_401",
		proxy : {
			type : "jsonp",
			url : Website.serverUrl + Website.infoScriptUrl + "401" + "&infoPageNum=1",
		},
		autoLoad : true,
	}
});
