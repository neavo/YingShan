Ext.define("Project.controller.home.categoryContainerController", {
	extend : "Ext.app.Controller",
	
	config : {
		refs : {
			mainContainer : "mainContainer",
			infoMainView : "infoMainView",
			childCategoryView : "childCategoryView",
			
			categoryContainer : "#categoryContainer",
			childCategoryTitle : "#childCategoryTitle",
			childCategoryList : "#childCategoryList",
			topBarAtInfoMainView : "#topBarAtInfoMainView",
			mainListAtInfoMainView : "#mainListAtInfoMainView",
		},
		control : {
			categoryContainer : {
				initialize : "onCategoryContainerInitialize",
			},
		},
	},
	launch : function () {
		this.mainContainer = this.getMainContainer();
		this.childCategoryView = this.getChildCategoryView();
		this.infoMainView = this.getInfoMainView();
		
		this.childCategoryTitle = this.getChildCategoryTitle();
		this.childCategoryList = this.getChildCategoryList();
		this.topBar = this.getTopBarAtInfoMainView();
		this.mainList = this.getMainListAtInfoMainView();
	},
	onCategoryContainerInitialize : function (container, eOpts) {
		var i = 1;
		var hContainer = Ext.create("Ext.Container", {
				layout : "hbox",
				scrollable : false,
				flex : 1,
			});
		container.add(hContainer);
		for (var key in Category) {
			if (i == 5) {
				hContainer = Ext.create("Ext.Container", {
						layout : "hbox",
						scrollable : false,
						flex : 1,
					});
				container.add(hContainer);
				i = 1;
			} else {
				i = i + 1;
			};
			hContainer.add(Ext.create("Ext.Container", {
					flex : 1,
					cls : "categoryItemContainer",
					html : "<img class = categoryIcon src = \"" + Category[key]["categoryIconUrl"] + "\" />"
					 + "<div class = categoryTitle ><b>" + Category[key]["categoryTitle"] + "<b></div>",
					parent : this,
					categoryId : Category[key]["categoryId"],
					categoryTitle : Category[key]["categoryTitle"],
					categoryIconUrl : Category[key]["categoryIconUrl"],
					isParentCategory : Category[key]["isParentCategory"],
					isUploadCategory : Category[key]["isUploadCategory"],
					childCategory : Category[key]["childCategory"],
					// 无子频道
					setActivatedView : function (parent, id, title) {
						setActivatedController(parent.getApplication().getController("info.mainViewController"));
						setActivatedCategory(id);
						parent.topBar.setTitle(title);
						parent.mainList.getStore().setProxy({
							type : "jsonp",
							url : Website.serverUrl + Website.infoScriptUrl + DB.activatedCategory + "&infoPageNum=1",
						});
						parent.mainList.getStore().load();
						parent.mainContainer.setActiveItem(parent.infoMainView);
					},
					// 有子频道
					setChildView : function (parent, childCategory, title) {
						setActivatedController(parent.getApplication().getController("childCategoryController"));
						parent.childCategoryTitle.setTitle(title);
						if (!parent.childCategoryList.getStore()) {
							parent.childCategoryList.setData(childCategory);
						} else {
							parent.childCategoryList.getStore().setData(childCategory);							
						};
						parent.mainContainer.setActiveItem(parent.childCategoryView);
					},
					listeners : {
						tap : {
							fn : function () {
								if (this.config.isParentCategory) {
									this.config.setChildView(this.config.parent, this.config.childCategory, this.config.categoryTitle);
								} else {
									this.config.setActivatedView(this.config.parent, this.config.categoryId, this.config.categoryTitle);
								};
							},
							element : "element",
						},
					},
				}));
		};
	},
});
