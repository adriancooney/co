var co = require('..'),
	fs = require('fs');

co(function *() {
	var directories = yield fs.readdir.bind(fs, './../');

	directories.forEach(function(directory) {
		console.log(directory);
	});
  
})();