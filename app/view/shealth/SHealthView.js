Ext.define('SamsungSencha.view.shealth.SHealthView', {
	extend: 'Ext.Container',
	xtype: 'shealthview',
	requires: [
		'SamsungSencha.util.Samsung'
	],
	items: [
		{
			xtype : 'toolbar',
			docked: 'top',
			items: [
				{ xtype: 'button', text:'Get', 
					handler: function() { 
						ExtSamsung.getSHealth().then(function(response) {
								Ext.getCmp('heartRate').setHtml('heart rate: ' + response.heartRate);
								Ext.getCmp('sleep').setHtml('sleep: ' + response.sleep);
							}, function(error) {
								alert('error: ' + JSON.stringify(error));
							}
						)
					}
				}
			]
		},
		{ xtype: 'label', padding: '20, 0, 0 20', id: 'heartRate' },
		{ xtype: 'label', padding: '20, 0, 0 20', id: 'sleep' }
	]
});
