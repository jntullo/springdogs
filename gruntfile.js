'use strict';

module.exports = function (grunt) {

	var node_modules = 'node_modules';

    // Load grunt tasks automatically
    require('load-grunt-config')(grunt, {
        data: {
            paths: {
            	node_modules: node_modules,
                src: 'app/library',
                dist: 'app',
            }  
        }
    });
};