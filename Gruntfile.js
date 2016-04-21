module.exports = function (grunt) {
	grunt.initConfig({
		'closurecompiler': {
			frontend: {
                files: {
                    'twitterfeed-min.js': ['twitterfeed.js']
                }
			}
		},
		'watch': {
			files: ['twitterfeed.js'],
			tasks: ['closurecompiler']
		}
	});

	grunt.loadNpmTasks('grunt-google-closure-tools-compiler');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['closurecompiler']);
};
