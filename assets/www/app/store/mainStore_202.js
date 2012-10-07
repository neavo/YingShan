Ext.define("Project.store.mainStore_202", {
	extend : "Ext.data.Store",
	
	config : {
		model : "Project.model.mainModel_202",
		proxy : {
			type : "jsonp",
			url : Website.serverUrl + Website.infoScriptUrl + "202" + "&infoPageNum=1",
		},
		autoLoad : true,
	}
});
