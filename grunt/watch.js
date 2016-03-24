module.exports = {
    gruntfile: {
        files: ['Gruntfile.js']
    },

    scripts: {
        files: [ '<%= paths.src %>/js/**/*.js' ],
        tasks: ['concat']
    },

    sass: {
    	files: [ '<%= paths.src %>/scss/**/*.scss' ],
        tasks: ['sass']
    },
    
}