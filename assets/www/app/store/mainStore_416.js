Ext.define("Project.store.mainStore_416", {
	extend : "Ext.data.Store",
	
	config : {
		model : "Project.model.mainModel_416",
		proxy : {
			type : "jsonp",
			url : Website.serverUrl + Website.infoScriptUrl + "416" + "&infoPageNum=1",
		},
		autoLoad : true,
	}
});
