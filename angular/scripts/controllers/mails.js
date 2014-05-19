
app.controller('Mails', function($scope, getMails) {
	
	var success = function(d){
		$scope.data = d.data;			
	},error = function(){
		alert("Atencion!! Ha ocurrido un error.");
	};

	$scope.getMails = function(){
		getMails.getData()
		.success(success)
		.error(error);
	};
	
	$scope.Details = function(id){
		alert(id);
	};
	
	// Autostart
	$scope.getMails();
});