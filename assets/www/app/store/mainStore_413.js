Ext.define("Project.store.mainStore_413", {
	extend : "Ext.data.Store",
	
	config : {
		model : "Project.model.mainModel_413",
		proxy : {
			type : "jsonp",
			url : Website.serverUrl + Website.infoScriptUrl + "413" + "&infoPageNum=1",
		},
		autoLoad : true,
	}
});
