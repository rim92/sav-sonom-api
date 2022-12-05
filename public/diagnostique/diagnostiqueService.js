angular.module('diagnostiqueService', [])

	// super simple service
	// each function returns a promise object 
	.factory('DiagnostiqueFactory', ['$http','$resource','$window',function($http,$resource,$window) {
	
		return {
			get : function() {
				return $http.get('/api/fiches');
    // handle success
    
			},
			
			
		
			
			
				getById : function(id) {
				return $http.get('/api/fiche/'+id);
    // handle success
    
			},
		

			
			updateFicheTechnique(id,num,panne_signaler,diagnostic,prix_reparation,observation,statut){
			return $http.put('/api/fiche_technique/'+id+'/'+num+'/'+panne_signaler+'/'+diagnostic+'/'+prix_reparation+'/'+observation);
			},
		
			

			
			
		}
	}])
