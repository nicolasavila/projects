app.config(function($routeProvider){
	$routeProvider
        //CODE REVIEW: Que esperarías de la home page de una tool para mails?
		.when('/home',{
			templateUrl: 'views/pages/home.html',
		})
		.when('/mails',{
			templateUrl: 'views/pages/mails.html',
			controller: 'Mails'
		})
        //CODE REVIEW: cómo planeas ver detalles sin id?
		.when('/detail',{
			templateUrl: 'views/pages/details.html',
			controller: 'Details'
		})
		.when('/detail/:name',{
			templateUrl: 'views/pages/details.html',
			controller: 'Details'
		})
        //CODE REVIEW: Un error sin descripción sobre el error no suele servir de mucho
        //CODE REVIEW: Mails como controller no me llama a ser algo q maneje errores
		.when('/error',{
			templateUrl: 'views/pages/error.html',
			controller: 'Mails'
		})/*
		.otherwise({
			redirectTo: '/error'
		});*/
});