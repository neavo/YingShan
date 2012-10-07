Ext.define("Project.view.212.operateActionSheet", {
	extend : "Ext.ActionSheet",
	xtype : "operateActionSheet_212",
	
	config : {
		items : [
			{
				id : "oneWeekBtnAtOperateActionSheet_212",
				text : "最近一周的信息",
				ui : "confirm",
			},{
				id : "oneMonthBtnAtOperateActionSheet_212",
				text : "最近一月的信息",
				ui : "confirm",
			},{
				id : "threeMonthBtnAtOperateActionSheet_212",
				text : "最近三月的信息",
				ui : "confirm",
			},{
				id : "oneYearBtnAtOperateActionSheet_212",
				text : "最近一年的信息",
				ui : "confirm",
			},{
				id : "backBtnAtOperateActionSheet_212",
				text : "返回主页",
				ui : "confirm",
			},{
				id : "cancelBtnAtOperateActionSheet_212",
				text : "取消",
				ui : "decline",
			},
		],
	}
});
