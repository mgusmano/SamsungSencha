var spass = {};

spass.DEVICE_NOT_SUPPORTED = 1;
spass.LIBRARY_NOT_INSTALLED = 2;
spass.LIBRARY_UPDATE_IS_RECOMMENDED	= 3;
spass.LIBRARY_UPDATE_IS_REQUIRED = 4;
spass.VENDOR_NOT_SUPPORTED = 0;

spass.DEVICE_FINGERPRINT = 0;
spass.DEVICE_FINGERPRINT_AVAILABLE_PASSWORD = 4;
spass.DEVICE_FINGERPRINT_CUSTOMIZED_DIALOG = 2;
spass.DEVICE_FINGERPRINT_FINGER_INDEX = 1;
spass.DEVICE_FINGERPRINT_UNIQUE_ID = 3;

spass.ACTION_FINGERPRINT_ADDED = "com.samsung.android.intent.action.FINGERPRINT_ADDED";
spass.ACTION_FINGERPRINT_REMOVED = "com.samsung.android.intent.action.FINGERPRINT_REMOVED";
spass.ACTION_FINGERPRINT_RESET = "com.samsung.android.intent.action.FINGERPRINT_RESET";
spass.STATUS_AUTHENTIFICATION_FAILED = 16;
spass.STATUS_AUTHENTIFICATION_PASSWORD_SUCCESS = 100;
spass.STATUS_AUTHENTIFICATION_SUCCESS = 0;
spass.STATUS_BUTTON_PRESSED = 9;
spass.STATUS_OPERATION_DENIED = 51;
spass.STATUS_QUALITY_FAILED = 12;
spass.STATUS_SENSOR_FAILED = 7;
spass.STATUS_TIMEOUT_FAILED = 4;
spass.STATUS_USER_CANCELLED = 8;
spass.STATUS_USER_CANCELLED_BY_TOUCH_OUTSIDE = 13;

spass.STATUS_OPERATION_DENIED = 1;

spass.ILLEGAL_ARGUMENT = "ILLEGAL_ARGUMENT";
spass.INVALID_PARAMETER = "Invalid Parameter";
spass.ILLEGAL_ARGUMENT_EXCEPTION = "ILLEGAL_ARGUMENT_EXCEPTION";
spass.SECURITY_EXCEPTION = "SECURITY_EXCEPTION";
spass.ILLEGAL_STATE_EXCEPTION = "ILLEGAL_STATE_EXCEPTION";
spass.SPASS_FINGERPRINT_NOT_INITIALIZED = "SPASS_FINGERPRINT_NOT_INITIALIZED";
spass.UNSUPPORTED_OPERATION_EXCEPTION = "UNSUPPORTED_OPERATION_EXCEPTION";
spass.NO_SUCH_ACTION = "NO_SUCH_ACTION";
spass.SSDK_UNSUPPORTED_EXCEPTION = "SSDK_UNSUPPORTED_EXCEPTION";
spass.SPASS_INVALID_STATE_EXCEPTION = "SPASS_INVALID_STATE_EXCEPTION";

spass.JSON_EXCEPTION = "JSON_EXCEPTION";

spass.getVersionCode = function (success) {

    cordova.exec(success, null, "SPassPlugin", "getVersionCode", []);

};

spass.getVersionName = function (success) {

    cordova.exec(success, null, "SPassPlugin", "getVersionName", []);

};

spass.initializeSpass = function (success, fail) {

    cordova.exec(success, fail, "SPassPlugin", "initializeSpass", []);

};

spass.initializeSpassFingerprint = function (success, fail) {

    cordova.exec(success, fail, "SPassPlugin", "initializeSpassFingerprint", []);

};

spass.isFeatureEnabled = function (type, success, fail) {

    cordova.exec(success, fail, "SPassPlugin", "isFeatureEnabled", [type]);
};


spass.cancelIdentify = function (success, fail) {

    cordova.exec(success, fail, "SPassPlugin", "cancelIdentify", []);

};

spass.getRegisteredFingerprintName = function (success, fail) {

    cordova.exec(success, fail, "SPassPlugin", "getRegisteredFingerprintName", []);

};

spass.hasRegisteredFinger = function (success, fail) {

    cordova.exec(success, fail, "SPassPlugin", "hasRegisteredFinger", []);

};

spass.registerFinger = function (success, fail) {

    cordova.exec(success, fail, "SPassPlugin", "registerFinger", []);

};

spass.notifyFingerprintChange = function (success) {

    cordova.exec(success, null, "SPassPlugin", "notifyFingerprintChange", []);

};

spass.setCanceledOnTouchOutside = function (cancel, success, fail) {

    cordova.exec(success, fail, "SPassPlugin", "setCanceledOnTouchOutside", [cancel]);

};

spass.setDialogBgTransparency = function (transparency, success, fail) {

    cordova.exec(success, fail, "SPassPlugin", "setDialogBgTransparency", [transparency]);

};

spass.setDialogTitle = function (titleText, titleColor, success, fail) {

    cordova.exec(success, fail, "SPassPlugin", "setDialogTitle", [titleText, titleColor]);

};

spass.startIdentify = function (success, fail) {

    cordova.exec(success, fail, "SPassPlugin", "startIdentify", []);

};

spass.startIdentifyWithDialog = function (enablePassword, success, fail) {

    cordova.exec(success, fail, "SPassPlugin", "startIdentifyWithDialog", [enablePassword]);

};

module.exports = spass;
