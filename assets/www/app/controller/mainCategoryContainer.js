Ext.define("Project.controller.mainCategoryContainer", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			mainContainer : "mainContainer",
			childCategoryView : "childCategoryView",
			infoMainView : "infoMainView",
			infoDetailView : "infoDetailView",
			
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
		this.infoDetailView = this.getInfoDetailView();
		
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
					categoryTitle : Category[key]["categoryTitle"],
					childCategory : Category[key]["childCategory"],
					setChildView : function (parent, childCategory, title) {
						setActivatedController(parent.getApplication().getController("childCategoryController"));
						parent.childCategoryTitle.setTitle(title);
						parent.childCategoryList.getStore().setData(childCategory);
						parent.mainContainer.setActiveItem(parent.childCategoryView);
					},
					listeners : {
						tap : {
							fn : function () {
								this.config.setChildView(this.config.parent, this.config.childCategory, this.config.categoryTitle);
							},
							element : "element",
						},
					},
				}));
		};
	},
});
