Ext.define("Project.view.container.homeTop", {
	extend : "Ext.Toolbar",
	xtype : "homeTop",
	config : {
		id : "homeTop",
		cls : "weatherContainer",
		docked : "top",
		html : "<img class = weatherImage src = " + "resources/weather/08.png >"
		 + "<div class = weatherTextLine><b></b>载入天气中 ... </div>",
	},
});
