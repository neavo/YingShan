Ext.define("Project.store.mainStore_205", {
	extend : "Ext.data.Store",
	
	config : {
		model : "Project.model.mainModel_205",
		proxy : {
			type : "jsonp",
			url : Website.serverUrl + Website.infoScriptUrl + "205" + "&infoPageNum=1",
		},
		autoLoad : true,
	}
});
