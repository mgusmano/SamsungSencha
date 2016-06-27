Ext.define('SamsungSencha.util.SamsungSPass', {
	alternateClassName: ['ExtSamsungSPass'],
	singleton: true,

	isFeatureEnabled: function  () {
		var data = {};
		return new Ext.Promise(function (resolve, reject) {
			try {
				var error = function(msg){ reject(msg); }
				
				var entryLoaded = 0;
				var numberOfEntries = 5;
				var checkAllLoaded = function() {
					entryLoaded += 1;
					if(entryLoaded == numberOfEntries) {
						resolve(data);
					}
				};

				var getCurrentEntries = function() {

					var DEVICE_FINGERPRINT_AVAILABLE_PASSWORDSuccess = function(successMessage) { 
						data.deviceFingerprintAvailablePassword = successMessage;
						checkAllLoaded();
					};
					samsung.spass.isFeatureEnabled(samsung.spass.DEVICE_FINGERPRINT_AVAILABLE_PASSWORD, DEVICE_FINGERPRINT_AVAILABLE_PASSWORDSuccess, error);

					var DEVICE_FINGERPRINT_UNIQUE_IDSuccess = function(successMessage) { 
						data.deviceFingerprintUniqueId = successMessage;
						checkAllLoaded();
					};
					samsung.spass.isFeatureEnabled(samsung.spass.DEVICE_FINGERPRINT_UNIQUE_ID, DEVICE_FINGERPRINT_UNIQUE_IDSuccess, error);
					
					var DEVICE_FINGERPRINT_CUSTOMIZED_DIALOGSuccess = function(successMessage) { 
						data.deviceFingerprintCustomizedDialog = successMessage;
						checkAllLoaded();
					};
					samsung.spass.isFeatureEnabled(samsung.spass.DEVICE_FINGERPRINT_CUSTOMIZED_DIALOG, DEVICE_FINGERPRINT_CUSTOMIZED_DIALOGSuccess, error);
					
					var DEVICE_FINGERPRINT_FINGER_INDEXSuccess = function(successMessage) { 
						data.deviceFingerprintFingerIndex = successMessage;
						checkAllLoaded();
					};
					samsung.spass.isFeatureEnabled(samsung.spass.DEVICE_FINGERPRINT_FINGER_INDEX, DEVICE_FINGERPRINT_FINGER_INDEXSuccess, error);
					
					var DEVICE_FINGERPRINTSuccess = function(successMessage) { 
						data.deviceFingerprint = successMessage;
						checkAllLoaded();
					};
					samsung.spass.isFeatureEnabled(samsung.spass.DEVICE_FINGERPRINT, DEVICE_FINGERPRINTSuccess, error);
					
				};
				
				var initializeSpassSuccess = function(successMessage) { 
					getCurrentEntries();	
				};
				samsung.spass.initializeSpass(initializeSpassSuccess, error);
			}
			catch(err) {
				alert('catch: ' + err);
			}
		});
	},
	
	getVersionCode: function  () {
		return new Ext.Promise(function (resolve, reject) {
			try {
				var error = function(msg){ reject(msg); }
				
				var getVersionCodeSuccess = function(successMessage) { resolve(successMessage); }

				var initializeSpassSuccess = function(successMessage) { 
					samsung.spass.getVersionCode(getVersionCodeSuccess, error);
				};
				samsung.spass.initializeSpass(initializeSpassSuccess, error);
			}
			catch(err) {
				alert('catch: ' + err);
			}
		});
	},
	
	getVersionName: function  () {
		return new Ext.Promise(function (resolve, reject) {
			try {
				var error = function(msg){ reject(msg); }
				
				var getVersionNameSuccess = function(successMessage) { resolve(successMessage); }

				var initializeSpassSuccess = function(successMessage) { 
					samsung.spass.getVersionName(getVersionNameSuccess, error);
				};
				samsung.spass.initializeSpass(initializeSpassSuccess, error);
			}
			catch(err) {
				alert('catch: ' + err);
			}
		});
	},

	startIdentifyWithDialog: function  (enablePassword, title, titleColor, canceledOnTouchOutside, dialogBgTransparency, logIt) {
		return new Ext.Promise(function (resolve, reject) {
			try {
				var error = function(msg){ reject(msg); }
				
				var startIdentifyWithDialogSuccess = function(successMessage) {
					switch (successMessage.state) {
						case 'ON_FINISHED':
								resolve(successMessage);
							break;
					}
					if (logIt) { logIt(JSON.stringify(successMessage)); };
				}
				
				var setDialogTitleSuccess = function(successMessage) { 
					samsung.spass.startIdentifyWithDialog(enablePassword, startIdentifyWithDialogSuccess, error);
				}
				
				var setDialogBgTransparencySuccess = function(successMessage) { 
					samsung.spass.setDialogTitle(title, titleColor, setDialogTitleSuccess, error);
				}
				
				var setCanceledOnTouchOutsideSuccess = function(successMessage) { 
					samsung.spass.setDialogBgTransparency(dialogBgTransparency, setDialogBgTransparencySuccess, error);
				}
				
				var hasRegisteredFingerSuccess = function(successMessage) { 
					samsung.spass.setCanceledOnTouchOutside(canceledOnTouchOutside, setCanceledOnTouchOutsideSuccess, error);
				}
				
				var initializeSpassFingerprintSuccess = function(successMessage) { 
					samsung.spass.hasRegisteredFinger(hasRegisteredFingerSuccess, error);
				}
				samsung.spass.initializeSpassFingerprint(initializeSpassFingerprintSuccess, error);
			}
			catch(err) {
				alert('catch: ' + err);
			}
		});
	},
	
	getRegisteredFingerprintName: function  () {
		return new Ext.Promise(function (resolve, reject) {
			try {
				var error = function(msg){ reject(msg); }
				
				var getRegisteredFingerprintNameSuccess = function(successMessage) { resolve(successMessage); }
				
				var initializeSpassFingerprintSuccess = function(successMessage) { 
					samsung.spass.getRegisteredFingerprintName(getRegisteredFingerprintNameSuccess, error);
				}
				samsung.spass.initializeSpassFingerprint(initializeSpassFingerprintSuccess, error);
				
			}
			catch(err) {
				alert('catch: ' + err);
			}
		});
	}

});