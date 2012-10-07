Ext.define("Project.store.mainStore_412", {
	extend : "Ext.data.Store",
	
	config : {
		model : "Project.model.mainModel_412",
		proxy : {
			type : "jsonp",
			url : Website.serverUrl + Website.infoScriptUrl + "412" + "&infoPageNum=1",
		},
		autoLoad : true,
	}
});
