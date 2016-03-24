module.exports = {
    dist: {
        files: [ {
            expand: true,
            cwd:  '<%= paths.src %>/scss',
            src: [ '**/*.scss' ],
            dest: '<%= paths.dist %>/css',
            ext: '.css'
        } ]
    }
};