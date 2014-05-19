app.service('getMails',	function($http){
	return {
		getData : function(id){
			return $http({method:'GET', url: 'data/mails.json'});
		}
	};
});