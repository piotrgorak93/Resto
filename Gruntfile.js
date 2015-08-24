module.exports = function(grunt) {
  require('jit-grunt')(grunt);
  var timer = require("grunt-timer");
  timer.init(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "css/main.css": "less/main.less" // destination file and source file
        }
      }
    },
    uglify: {
      all_src: {
        options: {
          mangle: false
        },
        src: ['js/**/*.js', '!js/vendor/*.js', '!js/foundation/*.js'],
        dest: 'js/all.js'
      }
    },
    watch: {
      styles: {
        files: ['less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      },
      js: {
        files: ['js/**/*.js'],
        tasks: ['clean', 'uglify'],
        options: {
          nospawn: true
        }
      }
    },
    clean: {
      yourTarget: {
        src: ["js/all.js"]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-remove');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['less', 'clean', 'uglify', 'watch']);

};