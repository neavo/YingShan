Ext.define("Project.controller.container.homeMain", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			categoryContainer : "#categoryContainer",
			adCarousel : "#adCarousel",
		},
		control : {
			categoryContainer : {
				initialize : "onCategoryContainerInitialize",
			},
		},
	},
	launch : function () {
		var t = 0;
		var adCarousel = this.getAdCarousel();
		setInterval(function () {
			if (t == 3) {
				t = 0;
			} else {
				t = t + 1;
			}
			adCarousel.setActiveItem(t);
		}, 5000);
	},
	createHContainer : function (container) {
		var hContainer = Ext.create("Ext.Container", {
				layout : "hbox"
			});
		container.add(hContainer);
		hContainer.add(Ext.create("Ext.Spacer"));
		return hContainer
	},
	onCategoryContainerInitialize : function (container, eOpts) {
		var i = 1;
		var hContainer = this.createHContainer(container);
		for (var key in Category) {
			if (i == 5) {
				var hContainer = this.createHContainer(container);
				i = 1;
			} else {
				i = i + 1;
			};
			hContainer.add(Ext.create("Ext.Container", {
					cls : "categoryItemContainer",
					html : "<img class = categoryIcon src = " + Category[key]["categoryIconUrl"] + " >"
					 + "<div class = categoryTitle ><b>" + Category[key]["categoryTitle"] + "<b></div>",
					parent : this,
					categoryTitle : Category[key]["categoryTitle"],
					childCategory : Category[key]["childCategory"],
					setChildView : function (parent, childCategory, title) {
						DoSwitch("home", "childCategory");
						DB.childCategoryTop.setTitle(title);
						DB.childCategoryMain.getStore().setData(childCategory);
						setActivatedController(parent.getApplication().getController("childCategory"));
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
			hContainer.add(Ext.create("Ext.Spacer"));
		};
	},
});
