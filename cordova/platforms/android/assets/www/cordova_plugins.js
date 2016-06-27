cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.samsung.spass/www/spass.js",
        "id": "com.samsung.spass.spass",
        "clobbers": [
            "samsung.spass"
        ]
    },
    {
        "file": "plugins/com.samsung.splanner/www/splanner.js",
        "id": "com.samsung.splanner.splanner",
        "clobbers": [
            "samsung.splanner"
        ]
    },
    {
        "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
        "id": "cordova-plugin-geolocation.geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
        "id": "cordova-plugin-geolocation.PositionError",
        "runs": true
    },
    {
        "file": "plugins/com.samsung.shealth/www/shealth.js",
        "id": "com.samsung.shealth.shealth",
        "clobbers": [
            "samsung.shealth"
        ]
    },
    {
        "file": "plugins/com.samsung.spen/www/spen.js",
        "id": "com.samsung.spen.spen",
        "clobbers": [
            "samsung.spen"
        ]
    },
    {
        "file": "plugins/com.samsung.multiwindow/www/multiwindow.js",
        "id": "com.samsung.multiwindow.multiwindow",
        "clobbers": [
            "samsung.multiwindow"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.samsung.spass": "1.3.2",
    "com.samsung.splanner": "1.3.0",
    "cordova-plugin-compat": "1.0.0",
    "cordova-plugin-geolocation": "2.2.0",
    "cordova-plugin-whitelist": "1.2.2",
    "com.samsung.shealth": "1.3.0",
    "com.samsung.spen": "1.3.0",
    "com.samsung.multiwindow": "1.3.0"
};
// BOTTOM OF METADATA
});