
app.controller('Mails', function($scope, getMails) {
	
	var success = function(d){
        //CODE REVIEW: para tener solo una línea podrías haberlo puesto abajo :)
		$scope.data = d.data;			
	},error = function(){
        //CODE REVIEW: que error?
        //CODE REVIEW: posta? un alert????
		alert("Atencion!! Ha ocurrido un error.");
	};

    //CODE REVIEW: pq necesitás tener esta función en scope?
	$scope.getMails = function(){
		getMails.getData()
		.success(success)
		.error(error);
	};
	
    //CODE REVIEW: Details con mayúscula pq es capital de un país? :p
	$scope.Details = function(id){
		alert(id);
	};
	
	// Autostart
	$scope.getMails();
});