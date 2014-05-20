
        //CODE REVIEW: getMails suena a función
        // vos tenés un responsable de agrupar las llamadas ajax a svs.
        // llamalo de acuerdo a su objetivo
app.service('getMails',	function($http){
	return {
		getData : function(id){
			return $http({method:'GET', url: 'data/mails.json'});
		}
	};
});