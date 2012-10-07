Ext.define("Project.store.mainStore_410", {
	extend : "Ext.data.Store",
	
	config : {
		model : "Project.model.mainModel_410",
		proxy : {
			type : "jsonp",
			url : Website.serverUrl + Website.infoScriptUrl + "410" + "&infoPageNum=1",
		},
		autoLoad : true,
	}
});
