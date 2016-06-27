cordova.define("com.samsung.shealth.shealth", function(require, exports, module) {
var shealth={};

 shealth.DATA_TYPE_HEART_RATE ="com.samsung.health.heart_rate";
 shealth.DATA_TYPE_UV_EXPOSURE ="com.samsung.health.uv_exposure";
 shealth.DATA_TYPE_SLEEP ="com.samsung.health.sleep";
 shealth.INVALID_PARAMETER ="invalid parameter";
 shealth.CONNECTED ="Connected";
 shealth.DISCONNECTED ="Disconnected";

 shealth.UNABLE_TO_DISCONNECT ="Unable to disconnect";
 shealth.OBSERVER_ALREADY_ADDED ="observer already added";
 shealth.OBSERVER_SUCCESSFULLY_ADDED ="observer successfully added";
 shealth.DATA_TYPE_VALUE_CHANGED ="data type value changed";
 shealth.OBSERVER_SUCCESSFULLY_REMOVED = "Observer successfully removed";
 shealth.NO_DATA_FOUND = "No data found";
 shealth.OBSERVER_NOT_ADDED = "Observer not added";

  shealth.UNKNOWN =0;
  shealth.CONNECTION_FAILURE =1;
  shealth.PLATFORM_NOT_INSTALLED =2;
  shealth.OLD_VERSION_SDK =3;
  shealth.OLD_VERSION_PLATFORM =4;
  shealth.TIMEOUT =5;
  shealth.PLATFORM_DISABLED =6;
  shealth.USER_PASSWORD_NEEDED =7;
  shealth.PLATFORM_SIGNATURE_FAILURE =8;
  shealth.USER_AGREEMENT_NEEDED =9;







shealth.initializeHealthDataService = function (success, fail){
    cordova.exec(success, fail, "HealthPlugin", "initializeHealthDataService", []);
};
shealth.connectHealthDataStore = function (success, fail){
    cordova.exec(success, fail, "HealthPlugin", "connectHealthDataStore", []);
};
shealth.disconnectHealthDataStore = function (success, fail){
    cordova.exec(success, fail, "HealthPlugin", "disconnectHealthDataStore", []);
};
shealth.isPermissionAcquired = function (options, success, fail){
    if (typeof options.isHeartRateReadPermissionRequired === 'undefined'){
      options.isHeartRateReadPermissionRequired = false;
    }
    if (typeof options.isUvExposureReadPermissionRequired === 'undefined' ){
      options.isUvExposureReadPermissionRequired = false;
    }
    if (typeof options.isSleepReadPermissionRequired === 'undefined' ){
      options.isSleepReadPermissionRequired = false;
    }
    cordova.exec(success, fail, "HealthPlugin", "isPermissionAcquired", [options.isHeartRateReadPermissionRequired, options.isUvExposureReadPermissionRequired, options.isSleepReadPermissionRequired]);

};
shealth.requestPermissions = function (options,success, fail){
    if (typeof options.isHeartRateReadPermissionRequired === 'undefined' ){
      options.isHeartRateReadPermissionRequired = false;
    }
    if (typeof options.isUvExposureReadPermissionRequired === 'undefined' ){
      options.isUvExposureReadPermissionRequired = false;
    }
    if (typeof options.isSleepReadPermissionRequired === 'undefined' ){
      options.isSleepReadPermissionRequired = false;
    }
    cordova.exec(success, fail, "HealthPlugin", "requestPermissions", [options.isHeartRateReadPermissionRequired, options.isUvExposureReadPermissionRequired, options.isSleepReadPermissionRequired]);
};
shealth.addObserver = function (healthDataType, success, fail){
    if(healthDataType == shealth.DATA_TYPE_HEART_RATE){
      cordova.exec(success, fail, "HealthPlugin", "addHeartRateObserver",[]);
    }
    else if (healthDataType == shealth.DATA_TYPE_UV_EXPOSURE){
       cordova.exec(success, fail, "HealthPlugin", "addUvExposureObserver", []);
    }
    else if (healthDataType == shealth.DATA_TYPE_SLEEP){
       cordova.exec(success, fail, "HealthPlugin", "addSleepObserver", []);
    }
    else{
      fail(shealth.INVALID_PARAMETER);
    }

};

shealth.removeObserver = function (healthdatatype, success, fail){
    if(healthdatatype === shealth.DATA_TYPE_HEART_RATE){
      cordova.exec(success, fail, "HealthPlugin", "removeHeartRateObserver", []);
    }
    else if (healthdatatype === shealth.DATA_TYPE_UV_EXPOSURE){
      cordova.exec(success, fail, "HealthPlugin", "removeUvExposureObserver", []);
    }
    else if (healthdatatype === shealth.DATA_TYPE_SLEEP){
      cordova.exec(success, fail, "HealthPlugin", "removeSleepObserver", []);
    }
    else {
      fail(shealth.INVALID_PARAMETER);
    }
};
shealth.getCurrentEntry = function (healthdatatype, success, fail){
  if(healthdatatype === shealth.DATA_TYPE_HEART_RATE){
    cordova.exec(success, fail, "HealthPlugin", "getCurrentHeartRateEntry", []);
  }
  else if (healthdatatype === shealth.DATA_TYPE_UV_EXPOSURE){
    cordova.exec(success, fail, "HealthPlugin", "getCurrentUvExposureEntry", []);
  }
  else if (healthdatatype === shealth.DATA_TYPE_SLEEP){
    cordova.exec(success, fail, "HealthPlugin", "getCurrentSleepEntry", []);
  }
  else {
    fail(shealth.INVALID_PARAMETER);
  }
};
// shealth.getAllEntry = function (healthdatatype, success, fail){
//     if(healthdatatype === shealth.DATA_TYPE_HEART_RATE){
//         cordova.exec(success, fail, "HealthPlugin", "getAllHeartRateEntry", []);
//     }
//     else if (healthdatatype === shealth.DATA_TYPE_UV_EXPOSURE){
//         cordova.exec(success, fail, "HealthPlugin", "getAllUvExposureEntry", []);
//     }
//     else if (healthdatatype === shealth.DATA_TYPE_SLEEP){
//         cordova.exec(success, fail, "HealthPlugin", "getAllSleepEntry", []);
//     }
//     else {
//       fail(shealth.INVALID_PARAMETER);
//     }
// };
module.exports = shealth;

});
