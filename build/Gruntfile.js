module.exports = function(grunt){


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ghostPath: '..',
    cssDest: 'assets/css/style.css',

    //configure task
    less: {
      development: {
        options: {
          paths: ["src/less"] //@import files
        },
        files: {'src/css/style.css': 'src/less/*.less' }
      }
    },
    concat: {
      css: {
        src: ['bower_components/icomoon/style.css', 'src/css/*.css'],
        dest: '<%= ghostPath %>/<%= cssDest %>'
      }
    },

    watch: {
      less: {
        files: ['src/less/*'],
        tasks: ['default']
      }
    }
  });

  // load task
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // setup workflow, register task
  grunt.registerTask('default',['less', 'concat', 'watch']);
};
