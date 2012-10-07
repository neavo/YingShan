Ext.define("Project.store.mainStore_414", {
	extend : "Ext.data.Store",
	
	config : {
		model : "Project.model.mainModel_414",
		proxy : {
			type : "jsonp",
			url : Website.serverUrl + Website.infoScriptUrl + "414" + "&infoPageNum=1",
		},
		autoLoad : true,
	}
});
