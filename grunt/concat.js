module.exports = {
    scripts: {
        src:[
        	'<%= paths.node_modules %>/angular-route/angular-route.js',
            '<%= paths.src %>/js/app.js',
            '<%= paths.node_modules %>/ng-file-upload/dist/ng-file-upload.js',
            '<%= paths.src %>/js/factories/NewDog.js',
            '<%= paths.src %>/js/factories/Dog.js',
            '<%= paths.src %>/js/controllers/homeController.js',
            '<%= paths.src %>/js/controllers/newDogController.js',
        ],
        dest: '<%= paths.dist %>/js/app.js'
    }
}