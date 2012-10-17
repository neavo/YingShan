{
	Ext.data.JsonP.request({
		url : "http://weather.china.xappengine.com/api",
		callbackKey : "callback",
		params : {	
			city : "wuhan",
		},
		success : function (result) {
			if (result) {
				console.log(result.name, result.forecasts[0].text, result.forecasts[0].date);
			}
		}
	});
}
