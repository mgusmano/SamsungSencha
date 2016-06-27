Ext.define('SamsungSencha.view.spass.SPassView', {
	extend: 'Ext.Container',
	xtype: 'spassview',
	id: 'spassview',
	requires: [
		'SamsungSencha.util.SamsungSPass'
	],
	logIt: function(t) {
		var v = Ext.getCmp('theText').getValue();
		Ext.getCmp('theText').setValue(v + t + '\n');
	},

	items: [
		{ xtype: 'textareafield', value: '', maxRows: 20, readOnly: true, id: 'theText' },
		{
			xtype : 'toolbar',
			docked: 'top',
			items: [
				{ xtype: 'button', text:'Get Info', 
					handler: function() {
						var me = Ext.getCmp('spassview'); 
						Ext.getCmp('theText').setValue('');

						ExtSamsungSPass.isFeatureEnabled().then(function(response) {
								me.logIt('\nisFeatureEnabled');
								Ext.Object.each(response, function(key, value) {
									me.logIt('\t' + key + ": " + value);
								});
							}, function(error) {
								alert('error: ' + JSON.stringify(error));
							}
						)

						ExtSamsungSPass.getVersionCode().then(function(response) {
								me.logIt('\ngetVersionCode');
								Ext.Object.each(response, function(key, value) {
									me.logIt('\t' + key + ": " + value);
								});
							}, function(error) {
								alert('error: ' + JSON.stringify(error));
							}
						)

						ExtSamsungSPass.getVersionName().then(function(response) {
								me.logIt('\ngetVersionName');
								Ext.Object.each(response, function(key, value) {
									me.logIt('\t' + key + ": " + value);
								});
							}, function(error) {
								alert('error: ' + JSON.stringify(error));
							}
						)

						ExtSamsungSPass.getRegisteredFingerprintName().then(function(response) {
								me.logIt('\ngetRegisteredFingerprintName');
								Ext.Object.each(response, function(key, value) {
									me.logIt('\t' + key + ": " + value);
								});
							}, function(error) {
								alert('error: ' + JSON.stringify(error));
							}
						)

					}
				},
				{ xtype: 'button', text:'Fingerprint', 
					handler: function() {
						var me = Ext.getCmp('spassview'); 
						Ext.getCmp('theText').setValue('');
						me.logIt('\nstartIdentifyWithDialog: ');
						
						var enablePassword = true;
						var title = 'this is the title';
						var titleColor = 7237382;
						var canceledOnTouchOutside = true;
						var dialogBgTransparency = 99;
						ExtSamsungSPass.startIdentifyWithDialog(enablePassword, title, titleColor, canceledOnTouchOutside, dialogBgTransparency, me.logIt).then(function(response) {
								switch (response.eventStatus) {
									case samsung.spass.STATUS_AUTHENTIFICATION_FAILED:
											me.logIt('STATUS_AUTHENTIFICATION_FAILED');
										break;
									case samsung.spass.STATUS_AUTHENTIFICATION_PASSWORD_SUCCESS:
											me.logIt('STATUS_AUTHENTIFICATION_PASSWORD_SUCCESS');
										break;
									case samsung.spass.STATUS_AUTHENTIFICATION_SUCCESS:
											me.logIt('STATUS_AUTHENTIFICATION_SUCCESS');
										break;
									case samsung.spass.STATUS_BUTTON_PRESSED:
											me.logIt('STATUS_BUTTON_PRESSED');
										break;
									case samsung.spass.STATUS_OPERATION_DENIED:
											me.logIt('STATUS_OPERATION_DENIED');
										break;
										case samsung.spass.STATUS_QUALITY_FAILED:
											me.logIt('STATUS_QUALITY_FAILED');
										break;
										case samsung.spass.STATUS_SENSOR_FAILED:
											me.logIt('STATUS_SENSOR_FAILED');
										break;									
										case samsung.spass.STATUS_TIMEOUT_FAILED:
											me.logIt('STATUS_TIMEOUT_FAILED');
										break;
										case samsung.spass.STATUS_USER_CANCELLED:
											me.logIt('STATUS_USER_CANCELLED');
										break;
										case samsung.spass.STATUS_USER_CANCELLED_BY_TOUCH_OUTSIDE:
											me.logIt('STATUS_USER_CANCELLED_BY_TOUCH_OUTSIDE');
										break;
									default:
											me.logIt('Unknown Status: ' + response.eventStatus);
										break;
								}
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
