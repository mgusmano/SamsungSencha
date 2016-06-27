Ext.define('SamsungSencha.view.multiwindow.MultiWindowView', {
	extend: 'Ext.Container',
	xtype: 'multiwindowview',
	requires: [
		'SamsungSencha.util.Samsung'
	],
	// listeners: {
	// 	activate : function() {
	// 		var style = 'splitstyle';
	// 		samsung.multiwindow.isSupported(style, 
	// 			function(){
	// 				samsung.multiwindow.getMultiWindowApps(style, 
	// 					function (appsList) { 
	// 						Ext.getCmp('dv').setStore(
	// 							{
	// 								fields: ['packageName', 'activity'],
	// 								data: appsList
	// 							}
	// 						);
	// 					},
	// 					function(){alert('failurewssget');}
	// 				);
	// 			},
	// 			function(){alert('failuremw2');}
	// 		);
	// 	}
	// },
	
	items: [
		{
			xtype : 'toolbar',
			docked: 'top',
			items: [
				{ xtype: 'button', text:'Get Apps', 
					handler: function() { 
						var style = 'splitstyle';
						samsung.multiwindow.isSupported(style, 
							function(){
								samsung.multiwindow.getMultiWindowApps(style, 
									function (appsList) { 
										Ext.getCmp('dv').setStore(
											{
												fields: ['packageName', 'activity'],
												data: appsList
											}
										);
									},
									function(){alert('failurewssget');}
								);
							},
							function(){alert('failuremw2');}
						);
					}
				}
			]
		},
		{
			xtype: 'list',
			id: 'dv',
			height: 200,
			//fullscreen: true,
			listeners: {
				select: function(dv, record, eOpts){ 
					//alert(record.data.packageName);
					//alert(record.data.activity);

					var inputOptions = {};

					inputOptions.action = 'action_main'; //action_view
					inputOptions.dataUri = '';
					inputOptions.packageName = record.data.packageName;
					inputOptions.activity = record.data.activity;

					// inputOptions.action = 'action_view'; //action_view
					// inputOptions.dataUri = 'http://www.sencha.com';
					// inputOptions.packageName = '';
					// inputOptions.activity = '';
					
					inputOptions.windowType = 'splitstyle'; //freestyle
					inputOptions.zoneInfo = 1; //zoneb 2, zonefull 4
					inputOptions.scaleInfo  = 60;
					samsung.multiwindow.createMultiWindow(inputOptions, 
						function(){ },
						function(errorMessage){alert(errorMessage);}
					);
				}
			},
			itemTpl: '<div>{packageName}<br/>{activity}</div>'
		}
	]
});
