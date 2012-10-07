Ext.define("Project.store.mainStore_409", {
	extend : "Ext.data.Store",
	
	config : {
		model : "Project.model.mainModel_409",
		proxy : {
			type : "jsonp",
			url : Website.serverUrl + Website.infoScriptUrl + "409" + "&infoPageNum=1",
		},
		autoLoad : true,
	}
});
