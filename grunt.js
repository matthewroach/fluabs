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

			clean: {
    		folder: "_SpecRunner.html",
  		}

		});

		grunt.loadNpmTasks('grunt-jasmine-runner');
		grunt.loadNpmTasks('grunt-clean');

		grunt.registerTask('default', 'min clean');

};
