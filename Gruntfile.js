module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
        target: {
            options: {
              banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            files: {
              'build/build.min.js':[
                  'src/jquery.min.js',
                  'src/jquery.scrolly.min.js',
                  'src/jquery.dropotron.min.js',
                  'src/jquery.scrollex.min.js',
                  'src/skel.min.js',
                  'src/skel-layers.min.js',
                  'src/init.js'
              ]
            }
        }
    },
    cssmin: {
        target: {
            files: {
                'build/build.min.css': ['css/skel.css','css/style.css','css/style-xlarge.css']
            }
        }
    },
    watch: {
        cssWatch: {
            files: 'css/*.css',
            tasks: ['cssmin'],
        },
        jsWatch: {
            files: 'src/*.js',
            tasks: ['uglify'],
        },
        normalWatch: {
            files: ['**.html']
            
        },
        options: {
            livereload: true
        }
        

    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};