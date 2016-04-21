module.exports = function (grunt) {
	grunt.initConfig({
		'closurecompiler': {
			frontend: {
                files: {
                    'twitterfetch-min.js': ['twitterfetch.js']
                }
			}
		},
		'watch': {
			files: ['twitterfetch.js'],
			tasks: ['closurecompiler']
		}
	});

	grunt.loadNpmTasks('grunt-google-closure-tools-compiler');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['closurecompiler']);
};
