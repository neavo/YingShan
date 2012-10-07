Ext.define("Project.store.mainStore_400", {
	extend : "Ext.data.Store",
	
	config : {
		model : "Project.model.mainModel_400",
		proxy : {
			type : "jsonp",
			url : Website.serverUrl + Website.infoScriptUrl + "400" + "&infoPageNum=1",
		},
		autoLoad : true,
	}
});
