module.exports = {
    options: {
        browsers: ['last 2 versions']
    },
    dev: {
        expand: true,
        cwd: '<%= paths.dist %>/css',
        src: '**/*.css',
        dest: '<%= paths.dist %>/css'
    }
}