angular.module('clientsService', [])

	// super simple service
	// each function returns a promise object 
	.factory('ClientFactory', ['$http','$resource','$window',function($http,$resource,$window) {
		var uri='data:application/vnd.ms-excel;base64,',
			template='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
			base64=function(s){return $window.btoa(unescape(encodeURIComponent(s)));},
			format=function(s,c){return s.replace(/{(\w+)}/g,function(m,p){return c[p];})};
		
		return {
			get : function() {
				return $http.get('/fiches');
    // handle success
    
			},
			
			
			
			
				getModifiedFiches : function() {
				return $http.get('/fiche-modifier');
    // handle success
    
			},
			


			
				showReportByMonth : function(month) {
				return $http.get('/rapport/'+month);
    // handle success
    
				},
			
				getFichesGestion : function() {
				return $http.get('/clients');
    // handle success
    
			},
			
//			
//				getModifiedFiches : function() {
//				return $http.get('/fiche-modifier');
//    // handle success
//    
//			},
//				
			getDevisNotif : function() {
				return $http.get('/devis-notif');
    // handle success
    
			},
			
				
			getArchiveById : function(id,num_serie) {
				return $http.get('/archive/'+id+'/'+num_serie);
    // handle success
    
			},
			
				getNewDevis: function() {
				return $http.get('/new-devis');
    // handle success
    
			},
			
			getDevis: function() {
				return $http.get('/devis');
    // handle success
    
			},
			
				getFichesNotif : function() {
				return $http.get('/fiches-notif');
    // handle success
    
			},
			
				getById : function(id) {
				return $http.get('/fiche/'+id);
    // handle success
    
			},
			sendEmail: function(designation,panne,diagnostic,prix) {
				return $http.get('/email/'+designation+'/'+panne+'/'+diagnostic+'/'+prix);
    // handle success
    
			},
			getPiecesById : function(id) {
				return $http.get('/pieces/'+id);
    // handle success
    
			},
			getEmailToSalma : function(designation,reference,qte) {
				return $http.get('/email_piece/'+designation+'/'+reference+'/'+qte);
    // handle success
    
			},
			getPiecesIndspo : function(id) {
				return $http.get('/pieces_indispo');
    // handle success
    
			},


			getAllPieces : function(id) {
				return $http.get('/pieces');
    // handle success
    
			},


			create : function(ficheData) {
				return $http.post('/diagnostic', ficheData);
			},
			
	       createPiece : function(ficheData) {
				return $http.post('/test', ficheData);
			},
			createTest : function(data) {
				return $http.post('/test',data);
			},
			
			
			deletePiece : function(id) {
				return $http.delete('/piece/'+id);
			},
				updatePiece : function(data) {
				return $http.put('/piece',data);
			},
			createPieces : function(id,count,designation,referencepiece,qtepiece,choix,prixpiece) {
				return $http.post('/pieces/'+id+'/'+count+'/'+designation+'/'+referencepiece+'/'+qtepiece+'/'+choix+'/'+prixpiece);
			},
			filterByDate(date_debut,date_fin){
			return $http.get('/findByDate/'+date_debut+'/'+date_fin);
			
			},
			
			
			updateFicheTechnique(id,num,panne_signaler,diagnostic,prix_reparation,observation,statut){
			return $http.put('/fiche_technique/'+id+'/'+num+'/'+panne_signaler+'/'+diagnostic+'/'+prix_reparation+'/'+observation);
			},
			
			updateClient(id,nom,prenom,tel,email,designation,date_achat,num_serie,garantie,panne_client,reparation){
			return $http.put('/update_client/'+id+'/'+nom+'/'+prenom+'/'+tel+'/'+email+'/'+designation+'/'+date_achat+'/'+num_serie+'/'+garantie+'/'+panne_client+'/'+reparation);
			
			},
			
			
			updateDevis(id,num,panne_signaler,diagnostic,date_sortie){
			return $http.put('/update_devis/'+id+'/'+num+'/'+panne_signaler+'/'+diagnostic+'/'+date_sortie);
			},
			
			
			
			dateSortieDevis:function(id,date_sortie){
			return $http.put('/date_sortie_devis/'+id+'/'+date_sortie);
			
			},
			
			
			updateDateEntree: function(id,date){
			return $http.put('/date_entree/'+id+'/'+date);
			},
			
			updateDateSortie: function(id,date,statut,priority,rerepare){
			return $http.put('date_sortie/'+id+'/'+date+'/'+statut+'/'+priority+'/'+rerepare);
			},
			delete : function(id) {
				return $http.delete('/diagnostic' + id);
			},
			logout:function(){
			  $http.post("/logout");
      
			},
				tableToExcel:function(tableId,worksheetName){
				var table=$(tableId),
					ctx={worksheet:worksheetName,table:table.html()},
					href=uri+base64(format(template,ctx));
				return href;
			}
			
			
		}
	}])

//.factory('Excel',['$window',function($window){
//		var uri='data:application/vnd.ms-excel;base64,',
//			template='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
//			base64=function(s){return $window.btoa(unescape(encodeURIComponent(s)));},
//			format=function(s,c){return s.replace(/{(\w+)}/g,function(m,p){return c[p];})};
//		return {
//			tableToExcel:function(tableId,worksheetName){
//				var table=$(tableId),
//					ctx={worksheet:worksheetName,table:table.html()},
//					href=uri+base64(format(template,ctx));
//				return href;
//			},
//			test:function(tableId){
//				
//				return tableId;
//			}
//			
//		};
//	}]);
	