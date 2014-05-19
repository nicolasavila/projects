app.config(function($routeProvider){
	$routeProvider
		.when('/home',{
			templateUrl: 'views/pages/home.html',
		})
		.when('/mails',{
			templateUrl: 'views/pages/mails.html',
			controller: 'Mails'
		})
		.when('/detail',{
			templateUrl: 'views/pages/details.html',
			controller: 'Details'
		})
		.when('/detail/:name',{
			templateUrl: 'views/pages/details.html',
			controller: 'Details'
		})
		.when('/error',{
			templateUrl: 'views/pages/error.html',
			controller: 'Mails'
		})/*
		.otherwise({
			redirectTo: '/error'
		});*/
});