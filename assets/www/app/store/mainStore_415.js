Ext.define("Project.store.mainStore_415", {
	extend : "Ext.data.Store",
	
	config : {
		model : "Project.model.mainModel_415",
		proxy : {
			type : "jsonp",
			url : Website.serverUrl + Website.infoScriptUrl + "415" + "&infoPageNum=1",
		},
		autoLoad : true,
	}
});
