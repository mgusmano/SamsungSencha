Ext.define('SamsungSencha.view.spen.SPenView', {
	extend: 'Ext.Container',
	xtype: 'spenview',
	requires: [
		'SamsungSencha.util.Samsung'
	],
	items: [
		{
			xtype : 'toolbar',
			docked: 'top',
			items: [
				{ xtype: 'button', text:'popup', 
					handler: function() { 
						ExtSamsung.getSPen().then(function(response) {
								document.getElementById('theImage').src = "data:image/jpg;base64," + response;
							}, function(error) {
								alert('error: ' + JSON.stringify(error));
							}
						)
					}
				}
			]
		},

		{ xtype: 'component', width: '80%', height: '80%', html: '<img style="width:80%;height:80%;" id="theImage" />'}
//		{ xtype: 'img', id: 'theImage', height: 64, width: 64 }
	]
});
