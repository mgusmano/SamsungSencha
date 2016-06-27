Ext.define('SamsungSencha.util.Samsung', {
	alternateClassName: ['ExtSamsung'],
	singleton: true,
	
	getSPass: function  () {
		return new Ext.Promise(function (resolve, reject) {
			var error = function(msg){
				//alert(msg);
				reject(msg);
			}
			var initializeSpassSuccess = function(successMessage) {
				resolve(successMessage);
			}
			samsung.spass.initializeSpass(initializeSpassSuccess, error);
		});
	},
	
	getSPlanner: function  () {
		return new Ext.Promise(function (resolve, reject) {
			try {
				var error = function(msg){reject(msg);}
				var openAppSuccess = function() {
					resolve();
				}
				samsung.splanner.openSPlanner(openAppSuccess, error);
			}	
			catch(err) {
				alert('catch: ' + err);
			}
		});
	},

	getSHealth: function  () {
		return new Ext.Promise(function (resolve, reject) {
			var error = function(msg){reject(msg);}
			var options = {};
			var data = {};
			
			var entryLoaded = 0;
			var numberOfEntries = 2;
			var checkAllLoaded = function() {
				entryLoaded += 1;
				if(entryLoaded == numberOfEntries) {
					resolve(data);
				}
			};

			var getCurrentEntries = function() {

				samsung.shealth.getCurrentEntry(samsung.shealth.DATA_TYPE_HEART_RATE,
					function(msg){
						data.heartRate = msg.heartRate;
						checkAllLoaded();
					},
					error
				);

				// samsung.shealth.getCurrentEntry(samsung.shealth.DATA_TYPE_UV_EXPOSURE,
				// 	function(msg){
				// 		//data.uvExposure = msg.uvExposure;
				// 		checkAllLoaded();
				// 	},
				// 	error
				// );

				var msToTime = function(duration) {
					var minutes = parseInt((duration/(1000*60))%60);
					var hours = parseInt((duration/(1000*60*60))%24);
					return hours + " hours " + minutes + " minutes";
				};

				samsung.shealth.getCurrentEntry(samsung.shealth.DATA_TYPE_SLEEP,
					function(msg){
						var diff = msg.endTime - msg.startTime;
						var sleep = msToTime(diff);
						data.sleep = sleep;
						checkAllLoaded();
					},
					error
				);

			};

			var isPermissionAcquiredSuccess = function(msg) {
				if (msg.hasHeartRateReadPermission === false || 
						//msg.hasUvExposureReadPermission === false ||
						msg.hasSleepReadPermission === false) {
					samsung.shealth.requestPermissions(options, getCurrentEntries, error);
				}
				else {
					getCurrentEntries();
				}
			};

			var connectHealthDataStoreSuccess =  function () {
				options.isHeartRateReadPermissionRequired = true;
				//options.isUvExposureReadPermissionRequired = true;
				options.isSleepReadPermissionRequired = true;
				samsung.shealth.isPermissionAcquired(options, isPermissionAcquiredSuccess, error);
			};

			var initializeHealthDataServiceSuccess = function(msg) {
				samsung.shealth.connectHealthDataStore(connectHealthDataStoreSuccess, error);
			};

			samsung.shealth.initializeHealthDataService(initializeHealthDataServiceSuccess, error);
		});
	},

	getSPen: function  () {
		return new Ext.Promise(function (resolve, reject) {
			var error = function(msg){reject(msg);}

			// var launchSurfaceInlineSuccess = function() {
			// 	alert('launchSurfaceInlineSuccess');
			// }
			
			var launchSurfacePopupSuccess = function(imageData) {
				if (imageData) {
					resolve(imageData);
				}
			}
			
			var isSupportedSuccess = function() {
				var popupOptions = {};
				popupOptions.id = "popupId";
				
				var flag_popup = 0;
						flag_popup = flag_popup | samsung.spen.FLAG_PEN;
						flag_popup = flag_popup | samsung.spen.FLAG_ERASER;
						flag_popup = flag_popup | samsung.spen.FLAG_UNDO_REDO;
					  flag_popup = flag_popup | samsung.spen.FLAG_PEN_SETTINGS;
						flag_popup = flag_popup | samsung.spen.FLAG_SELECTION;
						flag_popup = flag_popup | samsung.spen.FLAG_EDIT;
						flag_popup = flag_popup | samsung.spen.FLAG_BACKGROUND;
						flag_popup = flag_popup | samsung.spen.FLAG_SELECTION;
						flag_popup = flag_popup | samsung.spen.FLAG_RECOGNIZE_TEXT;
						flag_popup = flag_popup | samsung.spen.FLAG_SELECTION;
						flag_popup = flag_popup | samsung.spen.FLAG_RECOGNIZE_SHAPE;
				popupOptions.sPenFlags = flag_popup;
				
				// popupOptions.elementCoordinates = {};
				// popupOptions.elementCoordinates.left = 10;
				// popupOptions.elementCoordinates.top = 10;
				// popupOptions.elementCoordinates.width = 100;
				// popupOptions.elementCoordinates.height = 100;
				
				popupOptions.backgroundColor = "#F3F781";
				popupOptions.returnType = samsung.spen.RETURN_TYPE_IMAGE_DATA;
				samsung.spen.launchSurfacePopup(popupOptions, launchSurfacePopupSuccess, error);
			};

			samsung.spen.isSupported(isSupportedSuccess, error);
		});
	},

	constructor: function () {}
});