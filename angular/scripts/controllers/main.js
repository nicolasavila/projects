'use strict';

var app = angular.module('SMail', [
	'ngRoute'
]);

        //CODE REVIEW: Separar archivo
app.controller('Main', function($scope) {
	$scope.year = new Date().getFullYear();
});

        //CODE REVIEW: Separar archivo
app.controller('Menu',function($scope){
        //CODE REVIEW: menuItems quizás?
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

        //CODE REVIEW: Separar archivo
app.controller('Details', function($scope, getMails, $routeParams) {
        //CODE REVIEW: mmmmm... si te pasan un id... aceprás el id como viene
	var id = parseInt($routeParams.name) - 1;
		
	var success = function(d){
//		console.log(d.data[id]);
		$scope.data = d.data[id];
	},error = function(){
        //CODE REVIEW: error handling!
		alert("Atencion!! Ha ocurrido un error.");
	};
	
	getMails.getData()
		.success(success)
		.error(error);
		
	
	

});