Ext.define("Project.store.mainStore_404", {
	extend : "Ext.data.Store",
	
	config : {
		model : "Project.model.mainModel_404",
		proxy : {
			type : "jsonp",
			url : Website.serverUrl + Website.infoScriptUrl + "404" + "&infoPageNum=1",
		},
		autoLoad : true,
	}
});
