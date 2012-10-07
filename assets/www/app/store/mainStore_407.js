Ext.define("Project.store.mainStore_407", {
	extend : "Ext.data.Store",
	
	config : {
		model : "Project.model.mainModel_407",
		proxy : {
			type : "jsonp",
			url : Website.serverUrl + Website.infoScriptUrl + "407" + "&infoPageNum=1",
		},
		autoLoad : true,
	}
});
