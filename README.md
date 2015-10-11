# cordova-checksum
Calculate SHA-1 checksum for file with Cordova.

Example:
```
window.resolveLocalFileSystemURL(myPath, function(entry){
	Checksum.get(entry.toURL(), function(hex){
		console.log("Checksum: " + hex);
	}, function(err){ console.log(err); });
);
```