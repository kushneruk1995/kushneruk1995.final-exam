module.exports = function(grunt) {

  grunt.initConfig({

    sass: {
        options: {
            sourceMap: false
        },
        dist: {
            files: {
                'src/css/style.css': 'src/scss/style.scss'
            }
        }
    },
    concat: {
        js: {
          src: ['src/script/**/*.js'],
          dest: 'dist/script/script.main.js',
        },
        css: {
          src: ['src/css/**/*.css'],
          dest: 'dist/css/style.main.css',
        }
      },

    cssmin: {
      target: {
        files: {
          'dist/css/style.main.min.css': ['dist/css/style.main.css']
        }
      }
    },

    uglify: {
      dist: {
        src: ['dist/script/script.main.js'],
        dest: 'dist/script/script.main.min.js',
      },
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  
  grunt.registerTask('default', ['sass', 'concat','cssmin','uglify']);
};