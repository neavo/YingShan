Ext.define("Project.store.mainStore_203", {
	extend : "Ext.data.Store",
	
	config : {
		model : "Project.model.mainModel_203",
		proxy : {
			type : "jsonp",
			url : Website.serverUrl + Website.infoScriptUrl + "203" + "&infoPageNum=1",
		},
		autoLoad : true,
	}
});
