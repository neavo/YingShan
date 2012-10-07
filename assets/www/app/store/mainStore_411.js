Ext.define("Project.store.mainStore_411", {
	extend : "Ext.data.Store",
	
	config : {
		model : "Project.model.mainModel_411",
		proxy : {
			type : "jsonp",
			url : Website.serverUrl + Website.infoScriptUrl + "411" + "&infoPageNum=1",
		},
		autoLoad : true,
	}
});
