Ext.define("Project.store.mainStore_403", {
	extend : "Ext.data.Store",
	
	config : {
		model : "Project.model.mainModel_403",
		proxy : {
			type : "jsonp",
			url : Website.serverUrl + Website.infoScriptUrl + "403" + "&infoPageNum=1",
		},
		autoLoad : true,
	}
});
