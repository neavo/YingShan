Ext.define("Project.store.mainStore_200", {
	extend : "Ext.data.Store",
	
	config : {
		model : "Project.model.mainModel_200",
		proxy : {
			type : "jsonp",
			url : Website.serverUrl + Website.infoScriptUrl + "200" + "&infoPageNum=1",
		},
		autoLoad : true,
	}
});
