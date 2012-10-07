Ext.define("Project.store.mainStore_405", {
	extend : "Ext.data.Store",
	
	config : {
		model : "Project.model.mainModel_405",
		proxy : {
			type : "jsonp",
			url : Website.serverUrl + Website.infoScriptUrl + "405" + "&infoPageNum=1",
		},
		autoLoad : true,
	}
});
