var splanner = {};



splanner.openSPlanner= function (success,fail) {
       
       cordova.exec(success,fail,"SplannerPlugin", "openSPlanner", []);
}

module.exports = splanner;