angular.module('compteService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Compte', ['$http',function($http) {
		return {
			login : function(compteData) {
				return $http.post('/login',compteData);
    // handle success
    
			},
			create : function(compteData) {
				return $http.post('/register', compteData);
			}
		}
	}]);