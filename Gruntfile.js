module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            dist: {
                files: [{
                    expand:true,
                    cwd:'js',
                    src:['**/scripts.js','!**/*.min.js'],
                    dest: 'js',
                    ext:'.min.js'
                }]
            }
        },
        cssmin: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            minify: {
                expand: true,
                cwd: 'css',
                src:['**/*.css','!**/*.min.css'],
                dest: 'css',
                ext:'.min.css'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', [ 'uglify', 'cssmin']);
}
