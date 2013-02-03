module.exports = function(grunt) {

		grunt.initConfig({

			lint: {
				all: ['grunt.js', 'src/*.js']
			},
			jshint: {
				options: {
					browser: true,
					laxcomma: true
				}
			},


			min : {
				dist : {
					src : ['src/fluabs.js'],
					dest : 'dist/fluabs.min.js'
				}
			},


		});


		grunt.registerTask('default', 'min');

};
