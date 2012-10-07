Ext.define("Project.controller.homeController", {
	extend : "Ext.app.Controller",
	
	config : {
		refs : {
			mainContainer : "mainContainer",
			
			agriNewsView : "agriNewsView",
			marketAnalysisView : "marketAnalysisView",
			reguPolicyView : "reguPolicyView",
			enShiNewsView : "enShiNewsView",
			famousVarietyView : "famousVarietyView",
			plantTechView : "plantTechView",
			baccyBuyView : "baccyBuyView",
			expertGuideView : "expertGuideView",
			
			activeAgriNewsBtn : "#activeAgriNewsBtn",
			activeMarketAnalysisBtn : "#activeMarketAnalysisBtn",
			activeReguPolicyBtn : "#activeReguPolicyBtn",
			activeEnShiNewsBtn : "#activeEnShiNewsBtn",
			activeFamousVarietyBtn : "#activeFamousVarietyBtn",
			activePlantTechBtn : "#activePlantTechBtn",
			activeBaccyBuyBtn : "#activeBaccyBuyBtn",
			activeExpertGuideBtn : "#activeExpertGuideBtn",
			backBtnAtHomeView : "#backBtnAtHomeView",
			aboutBtnAtAgriNewsView : "#aboutBtnAtAgriNewsView",
		},
		control : {
			activeAgriNewsBtn : {
				tap : "onActiveAgriNewsBtnTap",
			},
			activeMarketAnalysisBtn : {
				tap : "onActiveMarketAnalysisBtnTap",
			},
			activeReguPolicyBtn : {
				tap : "onActiveReguPolicyBtnTap",
			},
			activeEnShiNewsBtn : {
				tap : "onActiveEnShiNewsBtnTap",
			},
			activeFamousVarietyBtn : {
				tap : "onActiveFamousVarietyBtnTap",
			},
			activePlantTechBtn : {
				tap : "onActivePlantTechBtnTap",
			},
			activeBaccyBuyBtn : {
				tap : "onActiveBaccyBuyBtnTap",
			},
			activeExpertGuideBtn : {
				tap : "onActiveExpertGuideBtnTap",
			},
			backBtnAtHomeView : {
				tap : "onBackBtnAtHomeViewTap",
			},
			aboutBtnAtAgriNewsView : {
				tap : "onAboutBtnAtAgriNewsViewTap",
			},
		},
	},
	launch : function () {
		setActivatedController(this);
	},
	goBack : function () {
		Ext.Msg.confirm("", "确定退出“烟草通”？", function (buttonId, value, opt) {
			if (buttonId == "yes") {
				navigator.app.exitApp();
			}
		});
	},
	onActiveAgriNewsBtnTap : function () {
		setActivatedController(this.getApplication().getController("agriNews.mainViewController"));
		this.getMainContainer().setActiveItem(this.getAgriNewsView());
	},
	onActiveMarketAnalysisBtnTap : function () {
		setActivatedController(this.getApplication().getController("marketAnalysis.mainViewController"));
		this.getMainContainer().setActiveItem(this.getMarketAnalysisView());
	},
	onActiveReguPolicyBtnTap : function () {
		setActivatedController(this.getApplication().getController("reguPolicy.mainViewController"));
		this.getMainContainer().setActiveItem(this.getReguPolicyView());
	},
	onActiveEnShiNewsBtnTap : function () {
		setActivatedController(this.getApplication().getController("enShiNews.mainViewController"));
		this.getMainContainer().setActiveItem(this.getEnShiNewsView());
	},
	onActiveFamousVarietyBtnTap : function () {
		setActivatedController(this.getApplication().getController("famousVariety.mainViewController"));
		this.getMainContainer().setActiveItem(this.getFamousVarietyView());
	},
	onActivePlantTechBtnTap : function () {
		setActivatedController(this.getApplication().getController("plantTech.mainViewController"));
		this.getMainContainer().setActiveItem(this.getPlantTechView());
	},
	onActiveBaccyBuyBtnTap : function () {
		this.getMainContainer().setActiveItem(this.getBaccyBuyView());
	},
	onActiveExpertGuideBtnTap : function () {
		this.getMainContainer().setActiveItem(this.getExpertGuideView());
	},
	onBackBtnAtHomeViewTap : function () {
		this.goBack();
	},
	onAboutBtnAtAgriNewsViewTap : function () {
		Ext.Msg.alert("烟草通 v1.0.0", "版权信息：&nbsp中国电信恩施分公司&nbsp<br>协办单位：&nbsp恩施州烟草专卖局&nbsp&nbsp<br>技术支持：武汉理工大学计算机学院");
	},
});
