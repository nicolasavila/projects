'use strict';

var app = angular.module('SMail', [
	'ngRoute'
]);

app.controller('Main', function($scope) {
	$scope.year = new Date().getFullYear();
});

app.controller('Menu',function($scope){
	$scope.menu = [
		{
			url : 'home',
			name: 'Home'
		},{
			url : 'mails',
			name: 'Mails'
		}
	];
});

app.controller('Details', function($scope, getMails, $routeParams) {
	var id = parseInt($routeParams.name) - 1;
		
	var success = function(d){
//		console.log(d.data[id]);
		$scope.data = d.data[id];
	},error = function(){
		alert("Atencion!! Ha ocurrido un error.");
	};
	
	getMails.getData()
		.success(success)
		.error(error);
		
	
	

});