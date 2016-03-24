'use strict';

var app = angular.module('springdogs',['firebase', 'ngRoute', 'ngFileUpload']);

app.config(function($routeProvider, $locationProvider){
	
	//$locationProvider.html5Mode(true);
	
	$routeProvider
	.when('/',{
		templateUrl: 'views/home.html',
		controller: 'homeController'
	}).
	when('/newdog',{
		templateUrl: 'views/newdog.html',
		controller: 'newDogController'
	});

});