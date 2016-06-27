Ext.define('SamsungSencha.view.main.MainView', {
	extend: 'Ext.panel.Panel',
	xtype: 'mainview',
	requires:[
		'SamsungSencha.view.info.InfoView',
		'SamsungSencha.view.spass.SPassView',
		'SamsungSencha.view.spen.SPenView',
		'SamsungSencha.view.multiwindow.MultiWindowView',
		'SamsungSencha.view.shealth.SHealthView',
		'SamsungSencha.view.splanner.SPlannerView'
	],
	layout: 'vbox',
	items: [
		{	xtype: 'panelheader', title: 'Samsung Sencha Cordova API\'s', titleAlign: 'left', 
			//iconCls: 'x-fa fa-android',
			titlePosition: 0,
			items: [ 
				{
					xtype: 'button',
					//ui: 'plain',
					style: {color: 'white'},
					iconCls: 'x-fa fa-info-circle ',
					//text: 'hi',
					handler: function(button) {
						var panel = Ext.create('SamsungSencha.view.info.InfoView', {});
						Ext.Viewport.add(panel);

						panel.show('pop');
						
						//}).showBy(button);
						//alert('hi');
					}
				}
			]
		},
		{
			xtype: 'tabpanel',
			flex: 1,
			items: [
				{ title: 'SPass', xiconCls: 'x-fa fa-heartbeat', xtype: 'spassview' },
				{ title: 'SPen', xiconCls: 'x-fa fa-pencil', xtype: 'spenview'},
				{ title: 'MultiWin', xiconCls: 'x-fa fa-windows', xtype: 'multiwindowview'},
				{ title: 'SHealth', xiconCls: 'x-fa fa-heartbeat', xtype: 'shealthview' },
				{ title: 'SPlanner', xiconCls: 'x-fa fa-heartbeat', xtype: 'splannerview' }
			]
		}
	]
});
