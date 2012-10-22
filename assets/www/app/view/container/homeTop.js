Ext.define("Project.view.container.homeTop", {
	extend : "Ext.Container",
	xtype : "homeTop",
	config : {
		id : "homeTop",
		cls : "weatherContainer",
		docked : "top",
		height : DB.screenHeight * 0.12,
		html : "<img class = weatherImage src = " + "resources/weather/" + DB.weather.icon + ".png >"
		 + "<div class = weatherTextLine><b></b>载入天气中 ... </div>",
	},
});
