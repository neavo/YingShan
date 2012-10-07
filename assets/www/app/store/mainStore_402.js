Ext.define("Project.store.mainStore_402", {
	extend : "Ext.data.Store",
	
	config : {
		model : "Project.model.mainModel_402",
		proxy : {
			type : "jsonp",
			url : Website.serverUrl + Website.infoScriptUrl + "402" + "&infoPageNum=1",
		},
		autoLoad : true,
	}
});
