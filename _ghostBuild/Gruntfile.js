module.exports = function(grunt){


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ghostPath: '../ghost/content/themes',
    ghostTheme: 'bthomas',
    cssDest: 'assets/css/style.css',

    //configure task
    less: {
      development: {
        options: {
          paths: ["assets/less"] //@import files
        },
        files: {'assets/css/style.css': 'assets/less/*.less' }
      }
    },
    concat: {
      js: {
        //src: ['bower_components/normalize-css/normalize.css', 'assets/src/js/*.js'],
        src: ['bower_components/normalize-css/normalize.css', 'assets/src/js/*.js'],
        dest: '<%= ghostPath %>/<%= ghostTheme %>/assets/js/main.js'
      },
      css: {
        //src: ['bower_components/normalize-css/normalize.css', 'assets/css/*.css'],
        src: ['bower_components/icomoon/style.css', 'bower_components/quickgrid/css/grid.css', 'assets/css/*.css'],
        dest: '<%= ghostPath %>/<%= ghostTheme %>/assets/css/style.css'
      }
    },

    uglify: {
      banner: '/*! <%= pkg.name %>',
      dist:{
        files: {
          'assets/dev/main.min.js': ['<%= concat.js.dest %>'],
          'assets/dev/main.min.css': ['<%= concat.css.dest %>']
        }
      }
    },

    watch: {
      less: {
        files: ['assets/less/*'],
        tasks: ['default']
      }
    }
  });

  // load task
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // setup workflow, register task
  grunt.registerTask('default',['less', 'concat', 'watch']);
};
