DB.screenHeight = Ext.Viewport.getWindowHeight();
DB.screenWidth = Ext.Viewport.getWindowWidth();

Ext.define("Project.model.mainModel", {
	extend : "Ext.data.Model",
	config : {
		fields : [{
				name : "id",
				type : "int",
			}, {
				name : "title",
				type : "string",
			}, {
				name : "content",
				type : "string",
			}, {
				name : "publisher",
				type : "string",
			}, {
				name : "imageurl1",
				type : "string",
			}, {
				name : "datetime",
				type : "string",
			},
		],
	},
});
