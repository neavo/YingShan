Ext.define("Project.store.mainStore_408", {
	extend : "Ext.data.Store",
	
	config : {
		model : "Project.model.mainModel_408",
		proxy : {
			type : "jsonp",
			url : Website.serverUrl + Website.infoScriptUrl + "408" + "&infoPageNum=1",
		},
		autoLoad : true,
	}
});
