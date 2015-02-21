module.exports = function(grunt) {

  var mozjpeg = require('imagemin-mozjpeg');
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
                  'src/js/jquery.min.js',
                  'src/js/jquery.scrolly.min.js',
                  'src/js/jquery.dropotron.min.js',
                  'src/js/jquery.scrollex.min.js',
                  'src/js/skel.min.js',
                  'src/js/skel-layers.min.js',
                  'src/js/init.js',
                  'src/js/lightbox.js'
              ]
            }
        }
    },
    cssmin: {
        main: {
          files: [{
                    expand: true,
                    cwd: 'src/css/',
                    src: ['**/*.css'],
                    dest: 'build/css/'
                  }]
        }
    },
    watch: {
        cssWatch: {
            files: 'src/css/*.css',
            tasks: ['cssmin'],
        },
        jsWatch: {
            files: 'src/js/*.js',
            tasks: ['uglify'],
        },
        normalWatch: {
            files: ['**.html']
            
        },
        imagesWatch: {
          files: 'src/images/**',
          tasks: ['copy:images']
        },
        options: {
            livereload: true
        }
        
    },

    copy: {
      images: {
        files: [{
                  expand: true,
                  cwd: 'src/images/',
                  src: '**',
                  dest: 'build/images/'
                }]
      },
      css_depend_file: {
        files:  [{
                  expand: true,
                  cwd: 'src/fonts/',
                  src: '**',
                  dest: 'build/fonts/'
                },{
                  expand: true,
                  cwd: 'src/css/images/',
                  src: '**',
                  dest: 'build/css/images/'
                }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['cssmin','uglify','copy','watch']);

};