angular.module('ficheService', [])

	// super simple service
	// each function returns a promise object 
	.factory('FicheFactory', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/fiches');
    // handle success
    
			},
			getDevis : function() {
				return $http.get('/api/devis');
    // handle success
    
			},
			getAllDevis : function() {
				return $http.get('/api/all-devis');
    // handle success
    
			},
			create : function(ficheData) {
				return $http.post('/api/fiche', ficheData);
			},
			delete : function(id) {
				return $http.delete('/api/register' + id);
			},
			
			deleteFiche : function(id) {
				return $http.delete('/api/fiche/' + id);
			},
			

			getStockByReference: function(reference){
return $http.get('/api/stock_by_reference/'+reference);

			},

			getById : function(id) {
				return $http.get('/api/fiche/'+id);
    // handle success
    
			},
			filterByDate(date_debut,date_fin){
			return $http.get('/api/findByDate/'+date_debut+'/'+date_fin);
			
			},
			
		
				updateDateDiag(id,num,panne_signaler,diagnostic,prix_reparation,observation,statut,rerepare,priority,etat,date_diagnostic){
			return $http.put('/api/date_diag/'+id+'/'+num+'/'+panne_signaler+'/'+diagnostic+'/'+prix_reparation+'/'+observation+'/'+statut+'/'+rerepare+'/'+priority+'/'+etat+'/'+date_diagnostic);
			},
			updateDateSortie(id,num,panne_signaler,diagnostic,prix_reparation,observation,statut,rerepare,priority,etat,date_sortie){
			return $http.put('/api/date_sortie/'+id+'/'+num+'/'+panne_signaler+'/'+diagnostic+'/'+prix_reparation+'/'+observation+'/'+statut+'/'+rerepare+'/'+priority+'/'+etat+'/'+date_sortie);
			},
				logout:function(){
			  $http.post("/logout");
      
			},
			createArchive:function(data){
			
			return $http.post('/api/archive',data);
			},
			updateFiche:function(id,derniere_reparation){
			
			return $http.put('/api/fiche/'+id+'/'+derniere_reparation);
			},
				updateClient(id,nom,prenom,tel,email,designation,date_achat,num_serie,garantie,panne_client,reparation,frais_diagnostic){
			return $http.put('/api/update_client/'+id+'/'+nom+'/'+prenom+'/'+tel+'/'+email+'/'+designation+'/'+date_achat+'/'+num_serie+'/'+garantie+'/'+panne_client+'/'+reparation+'/'+frais_diagnostic);
			
			},
			
				
			updateFicheTechnique(id,num,panne_signaler,diagnostic,prix_reparation,observation,statut,rerepare,priority,etat){
			return $http.put('/api/fiche_technique/'+id+'/'+num+'/'+panne_signaler+'/'+diagnostic+'/'+prix_reparation+'/'+observation+'/'+statut+'/'+rerepare+'/'+priority+'/'+etat);
			}
			
		}
	}]);