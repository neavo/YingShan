Ext.define("Project.store.mainStore_406", {
	extend : "Ext.data.Store",
	
	config : {
		model : "Project.model.mainModel_406",
		proxy : {
			type : "jsonp",
			url : Website.serverUrl + Website.infoScriptUrl + "406" + "&infoPageNum=1",
		},
		autoLoad : true,
	}
});
