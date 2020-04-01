cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-btprinter.BluetoothPrinter",
      "file": "plugins/cordova-plugin-btprinter/www/BluetoothPrinter.js",
      "pluginId": "cordova-plugin-btprinter",
      "clobbers": [
        "BTPrinter"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.geolocation",
      "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "navigator.geolocation"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.PositionError",
      "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
      "pluginId": "cordova-plugin-geolocation",
      "runs": true
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-btprinter": "0.0.1-dev",
    "cordova-plugin-geolocation": "4.0.2",
    "cordova-plugin-splashscreen": "5.0.3",
    "cordova-plugin-whitelist": "1.3.4"
  };
});