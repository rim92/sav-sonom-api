var app = angular.module('diagnostiqueController', ['ngRoute','ui.bootstrap','ngResource','datatables']);

	// inject the Todo service factory into our controller
	app.controller('diagnostiqueCtrl', ['$scope','$http','DiagnostiqueFactory','$timeout','$location','$rootScope','$modal', '$log','$resource','DTOptionsBuilder', 'DTColumnDefBuilder','$routeParams', function($scope, $http, DiagnostiqueFactory,$timeout,$location,$rootScope ,$modal, $log,$resource,DTOptionsBuilder, DTColumnBuilder,$routeParams) {

$scope.id=$routeParams.id;


	DiagnostiqueFactory.getById($scope.id)
			.success(function(data) {
						console.log(data);
			$scope.fichediag=data;
	
			});





$scope.subUpdateForm=function(id){
console.log($scope.ficheForm);
	DiagnostiqueFactory.updateFicheTechnique(id,$scope.ficheForm.num_serie,$scope.ficheForm.panne_signaler,$scope.ficheForm.diagnostic,$scope.ficheForm.prix_reparation,$scope.ficheForm.observation,$scope.ficheForm.priority,$scope.ficheForm.etat).success(function(data) {
			console.log("update!");		
			console.log(data);
					 
				 $location.path("/fiches").replace();
					})





}


  $scope.retour = function () {
   
      $location.path("/fiches").replace();
     

    };






    }]);