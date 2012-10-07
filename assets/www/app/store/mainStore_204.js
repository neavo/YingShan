Ext.define("Project.store.mainStore_204", {
	extend : "Ext.data.Store",
	
	config : {
		model : "Project.model.mainModel_204",
		proxy : {
			type : "jsonp",
			url : Website.serverUrl + Website.infoScriptUrl + "204" + "&infoPageNum=1",
		},
		autoLoad : true,
	}
});
