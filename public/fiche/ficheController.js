var app = angular.module('ficheController', ['ngRoute','datatables','ui.bootstrap']);

	// inject the Todo service factory into our controller
	app.controller('ficheCtrl', ['$scope','$http','FicheFactory','$location','$modal','$log','$rootScope','DTColumnBuilder','DTOptionsBuilder', 'DTColumnDefBuilder','$routeParams','$route', function($scope, $http, FicheFactory,$location,$modal,$log,$rootScope,DTColumnBuilder,DTOptionsBuilder,DTColumnDefBuilder,$routeParams,$route) {
		$scope.formData = {};
		$scope.loading = true;
		$scope.vm = {};
	

		$scope.success=false;
		  $scope.msg='not submitted';
    $scope.tab=1
		$scope.repare=false;
		$scope.dtOptions = DTOptionsBuilder.newOptions()
		  .withOption('order', [0, 'desc']);

// 		  $scope.dtOptions = DTOptionsBuilder.newOptions()
//   .withOption('order', [[0, 'desc']])
		
	$scope.dtColumnDefs = [
  DTColumnDefBuilder.newColumnDef(0).withOption('type', 'date').notSortable()
];  

	//	$scope.dtInstance = {};
			// $scope.dtInstance.DataTable.destroy();
		
		
		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos



						FicheFactory.getById($routeParams.id)
			.success(function(data) {
						console.log(data);
			$scope.ficheimprim=data;
	
			});


	 
    $scope.retour = function () {

   
 		  //	$route.reload();		

  $location.path("/fiches").replace();

 		
     // $location.path("/fiches").replace();
     

    };


$scope.diagnosticbyid=function(id){

  	$route.reload();
			 $location.path("/diagnostique/"+id).replace();


}






		FicheFactory.get()
			.success(function(data) {
				$scope.fiches = data;
	

  });



	  // delete function this remove the selected table row
   $scope.deleteRow= function (i,fiche) {
      
	      if(window.confirm('Etes vous sûr de vouloir supprimer cette fiche client ? ')) {
	   $scope.fiches.splice(i, 1);
	 


		FicheFactory.deleteFiche(fiche._id)
			.success(function(data) {
			console.log("deleteed");
				$scope.loading = false;
		console.log(data);
			for(var i=0;i<data.length;i++){
		
			$scope.repare=true;
			
				
			}
		});
		
		  }

   };
	

			


		
		
//			FicheFactory.filterByDate(date_debut,date_fin)
//			.success(function(data) {
//				$scope.fichesbyDate = data;
//				$scope.loading = false;
//		console.log(data);
//			for(var i=0;i<data.length;i++){
//		
//			$scope.repare=true;
//			
//				
//			}
//		});
		
		
		//get devis
		
		FicheFactory.getAllDevis()
			.success(function(data) {
				$scope.devis = data;
				$scope.loading = false;
		console.log(data);
			for(var i=0;i<data.length;i++){
		
			$scope.repare=true;
			
				
			}
		});
		
		
		
//		
//		ClientFactory.getDevisNotif()
//			.success(function(data) {
//			//	$scope.fiches = data;
//		
//			$scope.nbr_devis = data.length;
//			console.log("nbd_devis"+$scope.nbr_devis);
//	
//	
//		ClientFactory.getFichesNotif()
//			.success(function(data) {
//				$scope.nbr_fiches = data.length;
//		
//			console.log("nbr_fichess"+$scope.nbr_fiches);
//				
//			});
//		});
		
		
		
//$scope.change=function(){
//
//	if( $scope.selected==true){
//	console.log("c bon!!");
//	}
//	
//}


  $scope.data = {
    singleSelect: null,
    multipleSelect: [],
    option1: 'Other'
   };
	
	
		$scope.change=function(){
		console.log( $scope.fiche.panne_client);
	
		if( $scope.fiche.panne_client=="Other")
				$scope.clickedButton=true;
		else
				$scope.clickedButton=false;
			
	}
	
		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createFiche = function() {
		$scope.success=true;
	
			// call the create function from our service (returns a promise object)
			

var m= new Date($scope.fiche.date).getMonth()+1;

		FicheFactory.create({"nom":$scope.fiche.nom,"prenom":$scope.fiche.prenom,"tel":$scope.fiche.tel,"email":$scope.fiche.email,"designation":$scope.fiche.designation,"marque":$scope.fiche.marque,date: $scope.fiche.date,"month":m,"date_achat":$scope.fiche.date_achat,"frais_diagnostic":$scope.fiche.frais_diagnostic,"garantie":$scope.fiche.garantie,"reparation":$scope.fiche.reparation,"rerepare":null,"panne_client":$scope.fiche.panne_client,"num_serie":$scope.fiche.num_serie,"panne_signaler":null,"diagnostic":null,"reference_piece":null,"prix_piece":null,"prix_reparation":null,"date_diagnostic":null,"date_sortie":null,"observation":null,"etat":"non","added":false,"statut":null,"priority":null,"exist":"false","personnel":$scope.fiche.personnel})
									 
									 
					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
					console.log($scope.fiche);
						$scope.loading = false;
						$scope.client=data;
						$scope.fiche = {}; // clear the form so our user is ready to enter another
			
			
					//console.log("idd"+data[0]._id);
				//console.log("rerepp"+$scope.fiche.rerepare);
					
					
					// ajouter ds historique id de la fiche 

					
					});
				
 					
					  $location.path("/fiches").replace();

		};

		// login ==================================================================
	
		$scope.update_prix=function(id){
			console.log("oooook");
//		$scope.id=id;
//		console.log("p"+p);
//		
		console.log($scope.prix_final);			
		}
		
		
//			FicheFactory.getById($routeParams.id)
//			.success(function(data) {
//						console.log(data);
//			$scope.ficheimprim=data;
//	
//			});

		
		
		     $scope.printToCart = function(printSectionId) {
        var innerContents = document.getElementById(printSectionId).innerHTML;
        var popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
      }
		
		$scope.showImprim=function(id){
//			console.log("imprim");
//			$scope.id=id;
//			ClientFactory.getById(id)
//			.success(function(data) {
//						console.log(data);
//			$scope.ficheimprim=data;
//	
//			});
		  $location.path("/imprimer/"+id).replace();
		
		}
		
		$scope.getfichebyid= function(id){
 $location.path("/detail-fiche/"+id).replace();

		}
		

$scope.subUpdateForm=function(id){
console.log($scope.clientForm.prix_reparation);

		$scope.success=true;
		
	FicheFactory.updateFicheTechnique(id,$scope.clientForm.num_serie,$scope.clientForm.panne_signaler,$scope.clientForm.diagnostic,$scope.clientForm.prix_reparation,
	$scope.clientForm.observation,$scope.clientForm.statut,$scope.clientForm.rerepare,$scope.clientForm.priority,$scope.clientForm.etat).success(function(data) {
			console.log("update!");		
			console.log(data);



			
					 			})

 				
  document.location.reload();
  

}


	
		
		 $scope.update = function (id) {
	$scope.success=true;	
       console.log( $scope.fchForm.nom);
	   	FicheFactory.updateClient(id,$scope.fchForm.nom,$scope.fchForm.prenom,$scope.fchForm.tel,$scope.fchForm.email,$scope.fchForm.designation,$scope.fchForm.date_achat,$scope.fchForm.num_serie,$scope.fchForm.garantie,$scope.fchForm.panne_client,$scope.fchForm.reparation,$scope.fchForm.frais_diagnostic).success(function(data) {
			console.log("update!");	
		
			console.log(data);
				

					})

 
 					$route.reload();

  $location.path("/fiches").replace();
        
		
    
    };


		
		
		// $scope.showDevisForm = function (id) {
        //     $scope.id=id;
		// 	 console.log(id);
			 
		// 	 		FicheFactory.getById(id)
		// 	.success(function(data) {
		// 				console.log("daatt");
		// 				console.log(data);
		// 	$scope.fichediag=data;
		
			
		// 	    var modalInstance = $modal.open({
        //         templateUrl: '/templates/add-devis.html',
        //         controller: ModalInstanceCtrl,
        //         scope: $scope,
        //         resolve: {
        //             userForm: function () {
        //                 return $scope.userForm;
        //             }
        //         }
        //     });
			
			
        //     modalInstance.result.then(function (selectedItem) {
        //         $scope.selected = selectedItem;
        //     }, function () {
        //         $log.info('Modal dismissed at: ' + new Date());
        //     });			
						
		// 	});
	
		
			 
        
        // };
		
		
				
		//  $scope.showForm = function (id) {
        //     console.log("idd"+id);
		// 	 $scope.id=id;
			 

			
		
         

			
			
		
        // };
		
		
		
		// 	 $scope.showFormDevis= function (id) {
        //     $scope.id=id;
			 
			 
		// 	 FicheFactory.getById(id)
		// 	.success(function(data) {
		// 				console.log(data);
		// 	$scope.fichediag=data;
			 
        //     var modalInstance = $modal.open({
        //         templateUrl: '/templates/fiche-form.html',
        //         controller: ModalInstanceCtrl,
        //         scope: $scope,
        //         resolve: {
		// 			    userForm: function () {
        //                 return $scope.userForm;
        //             },
        //             clientForm: function () {
        //                 return $scope.clientForm;
        //             }
        //         }
        //     });

		// 	   modalInstance.result.then(function (selectedItem) {
        //         $scope.selected = selectedItem;
        //     }, function () {
        //         $log.info('Modal dismissed at: ' + new Date());
        //     });	 
				 
				 
		// 	 });
         
        // };
		
		
		
		
		
		
//		 $scope.showForm = function (id) {
//            $scope.id=id;
//			 console.log(id);
//			 
//			 		FicheFactory.getById(id)
//			.success(function(data) {
//						console.log("daatt");
//						console.log(data);
//			$scope.fichediag=data;
//		
//			
//			    var modalInstance = $modal.open({
//                templateUrl: '/templates/fiche-form-gestion.html',
//                controller: ModalInstanceCtrl,
//                scope: $scope,
//                resolve: {
//                    userForm: function () {
//                        return $scope.userForm;
//                    }
//                }
//            });
//			
//			
//            modalInstance.result.then(function (selectedItem) {
//                $scope.selected = selectedItem;
//            }, function () {
//                $log.info('Modal dismissed at: ' + new Date());
//            });			
//						
//			});
//	
//		
//			 
//        
//        };
//		
		
		
	// 		$scope.logout = function () {
	
    //     $rootScope.currentUser = null;
		
    //     $location.path("/login").replace();
     
		
	// }






	
			 
			 FicheFactory.getById($routeParams.id)
			.success(function(data) {
						console.log(data);
			$scope.fichediag=data;


            // var modalInstance = $modal.open({
            //     templateUrl: '/templates/fiche-form-gestion.html',
            //     controller: FicheInstanceCtrl,
            //     scope: $scope,
            //     resolve: {
            //         userForm: function () {
            //             return $scope.userForm;
            //         },
			// 		ficheForm: function () {
            //             return $scope.ficheForm;
            //         }
            //     }
            // });

			//    modalInstance.result.then(function (selectedItem) {
            //     $scope.selected = selectedItem;
            // }, function () {
            //     $log.info('Modal dismissed at: ' + new Date());
            // });	 
				 
				 
			 });




	
	}]);











