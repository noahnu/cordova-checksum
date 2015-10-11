var exec = require('cordova/exec');

var Checksum = {
	get : function(path, success, error){
		exec(success, error, "Checksum", "get", [path]);
	}
};

module.exports = Checksum;