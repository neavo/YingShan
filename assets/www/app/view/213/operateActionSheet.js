Ext.define("Project.view.213.operateActionSheet", {
	extend : "Ext.ActionSheet",
	xtype : "operateActionSheet_213",
	
	config : {
		items : [
			{
				id : "oneWeekBtnAtOperateActionSheet_213",
				text : "最近一周的信息",
				ui : "confirm",
			},{
				id : "oneMonthBtnAtOperateActionSheet_213",
				text : "最近一月的信息",
				ui : "confirm",
			},{
				id : "threeMonthBtnAtOperateActionSheet_213",
				text : "最近三月的信息",
				ui : "confirm",
			},{
				id : "oneYearBtnAtOperateActionSheet_213",
				text : "最近一年的信息",
				ui : "confirm",
			},{
				id : "backBtnAtOperateActionSheet_213",
				text : "返回主页",
				ui : "confirm",
			},{
				id : "cancelBtnAtOperateActionSheet_213",
				text : "取消",
				ui : "decline",
			},
		],
	}
});
