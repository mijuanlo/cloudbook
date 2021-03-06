var NwBuilder = require('node-webkit-builder');
var ninjaConfig = require('../ninjaConfig.js');
var gutil = require('gulp-util');

module.exports = function(cb) {

	if (!ninjaConfig.debug)
		ninjaConfig.argv.push('--debug=true');

	ninjaConfig.argv.push('--remote-debugging-port=9222');
	var nw = new NwBuilder(ninjaConfig);

	nw.on('log', gutil.log);
	
	nw.run(cb);

	return nw;
}