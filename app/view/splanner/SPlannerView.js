Ext.define('SamsungSencha.view.splanner.SPlannerView', {
	extend: 'Ext.Container',
	xtype: 'splannerview',
	requires: [
		'SamsungSencha.util.Samsung'
	],
	items: [
		{
			xtype : 'toolbar',
			docked: 'top',
			items: [
				{ xtype: 'button', text:'SPlanner', 
					handler: function() { 
						ExtSamsung.getSPlanner().then(function(response) {
								alert('success: ' + JSON.stringify(response));
							}, function(error) {
								alert('error: ' + JSON.stringify(error));
							}
						)
					}
				}
			]
		}
	]
});
