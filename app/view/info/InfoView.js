Ext.define('SamsungSencha.view.info.InfoView', {
	extend: 'Ext.panel.Panel',
	xtype: 'infoview',
	centered: true,
	border: true,
	width: '90%',
	height: '90%',
	padding: '10 20 10 20',
	items: [
		{
			xtype : 'toolbar',
			docked: 'bottom',
			items: [
				'->',
				{ xtype: 'button', text: 'Close Window', handler: function(button) {
					button.up('panel').destroy();
				}}
			]
		},
		{ xtype: 'container', html: 
			'<div style="font-size:20px;">The Samsung Sencha Cordova API\'s</div>' +
			'<div style="font-size:14px;">' +
			'<br/>' +
			'This sample application demonstrates how to use the Cordova Plugins for Samsung with Sencha Ext JS and the Modern Toolkit.' +
			'<br/><br/>' +
			'It uses the following products:' +
			'<br/><br/>' +
			'<li>Cordova Plugins for Samsung v1.5 (https://seap.samsung.com/sdk/cordova-plugins) ' +
			'<br/><br/>' +
			'<li>Sencha Ext JS v6.2  (https://www.sencha.com/products/extjs)' +
			'<br/><br/>' +
			'<li>Apache Cordova v6.1.1 (https://cordova.apache.org/)' +
			'<br/><br/>' +
			'<br/><br/>' +
			'To create locally:' +
			'<br/><br/>' +
			'git clone https://github.com/mgusmano/SamsungSencha.git' +
			'<br/><br/>' +
			'cd SamsungSencha' +
			'<br/><br/>' +
			'sencha app upgrade [ path-to-ext-6.2 ]' +
			'<br/><br/>' +
			'sencha app run modern' +
			'</div>' +
			''
		}
	]
});
