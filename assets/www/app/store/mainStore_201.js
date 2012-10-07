Ext.define("Project.store.mainStore_201", {
	extend : "Ext.data.Store",
	
	config : {
		model : "Project.model.mainModel_201",
		proxy : {
			type : "jsonp",
			url : Website.serverUrl + Website.infoScriptUrl + "201" + "&infoPageNum=1",
		},
		autoLoad : true,
	}
});
