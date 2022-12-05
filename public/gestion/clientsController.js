var app = angular.module('clientsController', ['ngRoute','ui.bootstrap','ngResource','datatables']);

	// inject the Todo service factory into our controller
	app.controller('clientsCtrl', ['$scope','$http','ClientFactory','$timeout','$location','$rootScope','$modal', '$log','$resource','DTOptionsBuilder', 'DTColumnDefBuilder','$routeParams', function($scope, $http, ClientFactory,$timeout,$location,$rootScope ,$modal, $log,$resource,DTOptionsBuilder, DTColumnBuilder,$routeParams) {
		$scope.formData = {};
		$scope.loading = true;
		$scope.vm = {};
		$scope.repare=false;
		$scope.vm.dtOptions = DTOptionsBuilder.newOptions()
		  .withOption('order', [1, 'desc']);
		

		// ClientFactory.get()
		// 	.success(function(data) {





			//afficher fiche à modifier
			ClientFactory.getModifiedFiches()
			.success(function(data) {
				$scope.loading = false;

		
			//get pieces byID
			


	$scope.fichess = data;


 for(var t=1;t<data.length-1;t++ ){
	 //console.log( data[t-1]._id );
 $scope.tabpiece = [];
			
	ClientFactory.getPiecesById(data[t-1]._id )
			.success(function(data) {
				$scope.pieces = data;
if(data[0]!=null){
	console.log(data);
	$scope.tabpiece.push(data[0].id_article,data[0].reference_piece,data[0].designation_piece,data[0].qte_piece,data[0].prix_piece);
	console.log($scope.tabpiece);
}


				//console.log(data);
			});




 }

			console.log("fiche modified");
				
			});

	


	$scope.showReportByMonth=function(){

console.log($scope.month);
ClientFactory.showReportByMonth($scope.month)
			.success(function(data) {
console.log(data);
$scope.fichess=data;
		
	})

		
				
			
	}






	$scope.findByDate=function(date_debut,date_fin){
		
		console.log("filter!!");
		console.log("date deb!"+new Date(date_debut).getTime());
		
		console.log("date deb!"+date_fin);
			ClientFactory.filterByDate(date_debut,date_fin)
			.success(function(data) {
				$scope.fichesbyDate = data;
				
		console.log(data);
			
		});
		
	}
	
		ClientFactory.getFichesGestion()
			.success(function(data) {
					$scope.loading = false;
				$scope.clients = data;
			console.log("fiche ");
			console.log(data);
		//afficher devis
			ClientFactory.getNewDevis()
			.success(function(data) {
				$scope.loading = false;
				$scope.Nvdevis = data;
	
			});
			
			//devis terminé
			
				//afficher devis
			ClientFactory.getDevis()
			.success(function(data) {
				$scope.devis = data;
	
			});
			
			//afficher fiche à modifier
			ClientFactory.getModifiedFiches()
			.success(function(data) {
				console.log(data);
				$scope.fichesModified = data;
				$scope.loading = false;
			console.log(data);
			});
			
			
								   
ClientFactory.getDevisNotif()
			.success(function(data) {
			//	$scope.fiches = data;
		
			$scope.nbr_devis = data.length;
			console.log("nbd_devis"+$scope.nbr_devis);
	
	
		ClientFactory.getFichesNotif()
			.success(function(data) {
				$scope.nbr_fiches = data.length;
		
			
				
			});
		});
			
		
	
			});
		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
	
		
		
		ClientFactory.getAllPieces()
			.success(function(data) {
			console.log("this dataa");
			$scope.pieces=data;
			
			
			});
		
		
		 $scope.sendEmailToSalma=function(p){
	 
		ClientFactory.getPiecesIndspo()
			.success(function(data) {
			$scope.piecesIndispo=data;
			
			console.log(data[0].valcheck);
			
			
			
			});
			
			 
	 
	 }
		
		
     $scope.exportToExcel=function(tableId){ // ex: '#my-table'
            var exportHref=ClientFactory.tableToExcel(tableId,'sheet name');
            //$timeout(function(){location.href=exportHref;},100); // trigger download
		 location.href=exportHref;
		 
        }
		
	 
	
		
		$scope.logout = function () {
	ClientFactory.logout().success(function() {
        $rootScope.currentUser = null;
		
               $location.path("/login").replace();
      });
		
	}
		

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createFiche = function() {

			// call the create function from our service (returns a promise object)
				ClientFactory.create($scope.fiche)
					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
					console.log($scope.fiche);
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
					
					});
				
         $location.path("/fiches").replace();
			// $location.path('/fiches').replace();
				

		};


	$scope.createPiece = function() {

	console.log($scope.piece);
			// call the create function from our service (returns a promise object)
				ClientFactory.createPiece($scope.piece)
			// if successful creation, call our get function to get all the new todos
					.success(function(data) {
							console.log($scope.piece);
					console.log($scope.piece);
						$scope.loading = false;
						//$scope.formData = {}; // clear the form so our user is ready to enter another
					
					});
				
         $location.path("/pieces").replace();
			// $location.path('/fiches').replace();
		};





var tab={};	
$scope.changeSwitch=function(id){
		
	console.log($scope.toggleValue[id]);
					

	
	
	
	}
	


			$scope.showCalendarSortie=function(id){
			  $scope.id=id;
				console.log("iiddd"+id);
				 ClientFactory.getById(id)
			.success(function(data) {
						console.log(data);
			$scope.fichediag=data;
			 
            var modalInstance = $modal.open({
                templateUrl: '/templates/calendar-sortie-devis.html',
                controller: ModalInstanceCtrl,
                scope: $scope,
                resolve: {
                    userForm: function () {
                        return $scope.userForm;
                    }
                }
            });

			   modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });	 
				 
				 
			 });
         
		
			
			
			}

			
			$scope.findByDate=function(date_filter){
			
			
			
			}
			
			
	
		 $scope.showArchiveForm = function (id,num_serie) {
            $scope.id=id;
			 $scope.num_serie=num_serie;
			 console.log("my id"+id);
			 ClientFactory.getArchiveById(id,num_serie)
			.success(function(data) {
						console.log(data);
			$scope.archives=data;
			 
            var modalInstance = $modal.open({
                templateUrl: '/templates/historique.html',
                controller: ArchiveCtrl,
                scope: $scope,
                resolve: {
                    userForm: function () {
                        return $scope.userForm;
                    }
                }
            });

			   modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });	 
				 
				 
			 });
         
        };
	
		

		
		
		 $scope.showDevis= function (id) {
            $scope.id=id;
			 
			 
			 ClientFactory.getById(id)
			.success(function(data) {
						console.log(data);
			$scope.fichediag=data;
			 
            var modalInstance = $modal.open({
                templateUrl: '/templates/devis-form.html',
                controller: ModalInstanceCtrl,
                scope: $scope,
                resolve: {
                    userForm: function () {
                        return $scope.userForm;
                    }
                }
            });

			   modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });	 
				 
				 
			 });
         
        };
		
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
			
						ClientFactory.getById($routeParams.id)
			.success(function(data) {
						console.log(data);
			$scope.ficheimprim=data;
	
			});

		
		 $scope.showFormC = function (id) {
            $scope.id=id;
			 console.log("loooo");
			 
			 		ClientFactory.getById(id)
			.success(function(data) {
						console.log("daatt");
						console.log(data);
			$scope.fichediag=data;
		
			
			    var modalInstance = $modal.open({
                templateUrl: '/templates/fiche-form-gestion.html',
                controller: ModalInstanceCtrl,
                scope: $scope,
                resolve: {
                    userForm: function () {
                        return $scope.userForm;
                    }
                }
            });
			
			
            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });			
						
			});
	
		
			 
        
        };
		
			
		     $scope.printToCart = function(printSectionId) {
        var innerContents = document.getElementById(printSectionId).innerHTML;
        var popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
      }
		
		
		
		
		 $scope.showFormModif = function (id) {
            $scope.id=id;
			 
			 
			 ClientFactory.getById(id)
			.success(function(data) {
						console.log(data);
			$scope.fichediag=data;
			 
            var modalInstance = $modal.open({
                templateUrl: '/templates/fiche-form.html',
                controller: ModalInstanceCtrl,
                scope: $scope,
                resolve: {
					    userForm: function () {
                        return $scope.userForm;
                    },
                    clientForm: function () {
                        return $scope.clientForm;
                    }
                }
            });

			   modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });	 
				 
				 
			 });
         
        };
		
		
		
			
		 $scope.showPieces = function () {
           // $scope.id=id;
			 console.log("ook");

//			 ClientFactory.getById(id)
//			.success(function(data) {
//						console.log(data);
//			$scope.fichediag=data;
			 
            var modalInstance = $modal.open({
                templateUrl: '/templates/pieces.html',
                controller: ModalInstanceCtrl,
                scope: $scope,
                resolve: {
                    userForm: function () {
                        return $scope.userForm;
                    }
                }
            });

			   modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });	 
				 
//				 
//			 });
         
        };
		
		
		
				
		 $scope.showCalendarEntree = function (id) {
			 $scope.id = id;
			 console.log( $scope.id);
            var calendarInstance = $modal.open({
                templateUrl: '/templates/calendar-entree.html',
                controller: CalendarCtrl,
                scope: $scope,
                resolve: {
                    userForm: function () {
                        return $scope.userForm;
                    }
                }
            });

            calendarInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
		
		
		
						
		 $scope.showRapport = function (id) {
		 $scope.id = id;
			 
			 	 ClientFactory.getById(id)
			.success(function(data) {
						console.log(data);
			$scope.fichediag=data;
			 
            var calendarInstance = $modal.open({
                templateUrl: '/templates/calendar-sortie.html',
                controller: CalendarCtrl,
                scope: $scope,
                resolve: {
                    userForm: function () {
                        return $scope.userForm;
                    }
                }
            });

			   calendarInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });	 
				 
				 
			 });
			 
			 
			 
			 
			 
			 
			 
        };
		
				

		
	
	}]);



var CalendarCtrl = function ($scope, $modalInstance, ClientFactory,userForm) {
    $scope.form = {}




		
	
			//get pieces byID
			



    $scope.updateDateEntree = function (id) {
        console.log(id);
          if ($scope.form.userForm.$valid) {
            console.log("userform in dcope"+$scope.form.userForm.date_diagnostic.$viewValue);
			  
       
		ClientFactory.updateDateEntree(id,$scope.form.userForm.date_diagnostic.$viewValue)
			.success(function(data) {
			console.log(data);
			console.log("updated!");
				
			});
			  
	
            $modalInstance.close('closed');
			  
        } else {
            console.log('userform is not in scope');
        }
			
    
    };
	
	
	
	
	    $scope.updateDateSortie = function (id) {
        console.log("iidd"+id);
			 ClientFactory.getById(id)
			.success(function(data) {
						console.log(data);
			
				  ClientFactory.sendEmail(data.designation,data.panne_signaler,data.diagnostic,data.prix_reparation).success(function(data) {
		
			console.log("sent!");
			
			});
				 
			 });
			
          if ($scope.form.userForm.$valid) {
            console.log("userform in dcope"+$scope.form.userForm.date_sortie.$viewValue);
			  
			  
			  
       
		ClientFactory.updateDateSortie(id,$scope.form.userForm.date_sortie.$viewValue,$scope.form.userForm.statut.$viewValue,$scope.form.userForm.priority.$viewValue,$scope.form.userForm.rerepare.$viewValue)
			.success(function(data) {
			console.log(data);
			console.log("updated!");
			
			});
			  
	
            $modalInstance.close('closed');
        } else {
            console.log('userform is not in scope');
        }
			
    
    };
	
	
	

	
};


var ArchiveCtrl = function ($scope, $modalInstance, ClientFactory,userForm, $q) {
	
	
	console.log("test"+$scope.id);
	
			
	ClientFactory.getArchiveById($scope.id,$scope.num_serie)
			.success(function(data) {
				$scope.archives = data;
		console.log(data);
		
			});
	
	
}


var ModalInstanceCtrl = function ($scope, $modalInstance, ClientFactory,clientForm, $q,$location) {
    $scope.form = {}
$scope.count=0;
	$scope.nbr=100;
	console.log($scope.count);
    $scope.isClicked = false;
	$scope.names = ["disponible", "Indisponible"];
	$scope.clickedButton=false;
	$scope.currentcount=[];
	$scope.nbrnewpieces=[];
	$scope.totalcounts=[];
	$scope.Answers = {};
	$scope.indices=[];
	$scope.nbrclicks = [];
	$scope.show=function(count,id){	
	$scope.isClicked = true;
    $scope.currentcount.push(count);
    $scope.totalcounts.push({"count":count});
	
	$scope.indices.push("designation_piece_"+count);
	
		for (var i=0;i<$scope.currentcount.length;i++){
		  $scope.nbrclicks = [
    {
       
        "nbr": i,
       }
    ];

		
		}
		console.log($scope.nbrclicks[0].nbr);
		
	}

	
	$scope.updateDateSortieDevis=function(id){
			
		console.log("deviis"+$scope.form.userForm.date_sortie.$viewValue);
			ClientFactory.dateSortieDevis(id,$scope.form.userForm.date_sortie.$viewValue)
			.success(function(data) {
				
		 $modalInstance.close('closed');
				console.log(data);
			});

			}
	
	
	$scope.showNbrPieces=function(nbr,id){
			$scope.isClicked = true;
		$scope.nbrnewpieces.push(nbr);	
		
	
	}
	
	
	$scope.remove=function($index,id){
	console.log(id);
	$scope.pieces.splice( $index, 1 );	
		ClientFactory.deletePiece(id).success(function(data) {
					console.log("deleted!");
					
					});	
		

	}
	
    $scope.data = {
    singleSelect: null,
    multipleSelect: [],
    option1: 'dispo'
   };
	
	
		$scope.change=function(){
		console.log( $scope.data.singleSelect);
	
		if($scope.data.singleSelect=="dispo")
				$scope.clickedButton=true;
		else
				$scope.clickedButton=false;
			
	}
		
				$scope.changeOther=function(){
		console.log( $scope.form.clientForm.panne_client.$viewValue);
	
		if( $scope.form.clientForm.panne_client.$viewValue=="Other")
				$scope.clickedButton=true;
		else
				$scope.clickedButton=false;
			
	}
		
			$scope.changeCount=function(count){
				  
		//console.log( $scope.form.userForm["choix["+count+"]"]);
	
		if($scope.form.userForm["choix["+count+"]"].$viewValue=="dispo")
				$scope.clickedButton=true;
		else
				$scope.clickedButton=false;
			
	}
			
			
				
			$scope.changeCountPiece=function(nbr){
				  


			
	}
	
			
			
			
			
			
			
	
			//get pieces byID
			
			
	ClientFactory.getPiecesById($scope.id)
			.success(function(data) {
				$scope.pieces = data;
		$scope.nbrpieces=data.length;
		console.log("nbr"+data.length);
			
				console.log(data);
			});
			
			
	
	
	$scope.submitDevis=function(id){
	
	ClientFactory.updateDevis(id,$scope.form.userForm.num_serie.$viewValue,$scope.form.userForm.panne_signalee.$viewValue,$scope.form.userForm.diagnostic.$viewValue,$scope.form.userForm.date_sortie.$viewValue).success(function(data) {
			console.log("update!");		
			console.log(data);
					 $modalInstance.close('closed');
				 $location.path("/liste_devis_final").replace();
					})
	
	}
          
		$scope.submitForm = function (id) {
		 
			
		 var tab=[];
			tab.push({designation_piece:$scope.form.userForm.designation_piece.$viewValue,reference_piece:$scope.form.userForm.reference_piece.$viewValue,qte_piece:$scope.form.userForm.qte_piece.$viewValue,choix:$scope.data.singleSelect,prix_piece:$scope.form.userForm.prix_piece.$viewValue,id_article:id});
		
			for(var i=1;i<=$scope.currentcount.length;i++){
				
				
					if($scope.form.userForm["prixpiece["+i+"]"] == undefined){
				console.log("indispoo");

				tab.push({designation_piece:$scope.form.userForm["designationpiece["+i+"]"].$viewValue,reference_piece:$scope.form.userForm["referencepiece["+i+"]"].$viewValue,qte_piece:$scope.form.userForm["qtepiece["+i+"]"].$viewValue,choix:"Indispo",prix_piece:null,id_article:id});
				}
				
				else {
				
				
tab.push({designation_piece:$scope.form.userForm["designationpiece["+i+"]"].$viewValue,reference_piece:$scope.form.userForm["referencepiece["+i+"]"].$viewValue,qte_piece:$scope.form.userForm["qtepiece["+i+"]"].$viewValue,choix:"Dispo",prix_piece:$scope.form.userForm["prixpiece["+i+"]"].$viewValue,id_article:id});
			
					
				}
			}
			ClientFactory.createTest(tab).success(function(data) {
					console.log(data);
					
					 $modalInstance.close('closed');
				
					});	
				
			if($scope.form.userForm.num_serie.$viewValue==''){
			console.log("ookk");
			$scope.form.userForm.num_serie.$viewValue=null;
				console.log($scope.form.userForm.num_serie.$viewValue);
			}
			
		if($scope.form.userForm.panne_signaler.$viewValue==''){
			console.log("ookk");
			$scope.form.userForm.panne_signaler.$viewValue=null;
				
			}
		
			if($scope.form.userForm.diagnostic.$viewValue==''){
			console.log("ookk");
			$scope.form.userForm.diagnostic.$viewValue=null;
				
			}

		
			if($scope.form.userForm.prix_reparation.$viewValue==''){
			console.log("ookk");
			$scope.form.userForm.prix_reparation.$viewValue=null;
				
			}
		
			if($scope.form.userForm.observation.$viewValue==''){
			console.log("ookk");
			$scope.form.userForm.observation.$viewValue=null;
				
			}
				
			ClientFactory.updateFicheTechnique(id,$scope.form.userForm.num_serie.$viewValue,$scope.form.userForm.panne_signaler.$viewValue,$scope.form.userForm.diagnostic.$viewValue,$scope.form.userForm.prix_reparation.$viewValue,$scope.form.userForm.observation.$viewValue).success(function(data) {
			console.log("update!");		
			console.log(data);
					 
				 $location.path("/rapport-devis").replace();
					})

	}
		

			 $scope.updateClient = function (id) {
         console.log(id);
       

			          console.log($scope.form.clientForm.nom.$viewValue);
			         console.log($scope.form.clientForm.prenom.$viewValue);
			         console.log($scope.form.clientForm.tel.$viewValue);
			         console.log($scope.form.clientForm.designation.$viewValue);
			         console.log($scope.form.clientForm.garantie.$viewValue);
			         console.log($scope.form.clientForm.reparation.$viewValue);
			         console.log($scope.form.clientForm.num_serie.$viewValue);
			      console.log($scope.form.clientForm.frais_diagnostic.$viewValue);
			      console.log($scope.form.clientForm.date_achat.$viewValue);
			       console.log($scope.form.clientForm.panne_client.$viewValue);
			      console.log($scope.form.clientForm.email.$viewValue);
			 
		ClientFactory.updateClient(id,$scope.form.clientForm.nom.$viewValue,$scope.form.clientForm.prenom.$viewValue,$scope.form.clientForm.tel.$viewValue,$scope.form.clientForm.email.$viewValue,$scope.form.clientForm.designation.$viewValue,$scope.form.clientForm.date_achat.$viewValue,$scope.form.clientForm.num_serie.$viewValue,$scope.form.clientForm.garantie.$viewValue,$scope.form.clientForm.panne_client.$viewValue,$scope.form.clientForm.reparation.$viewValue,$scope.form.clientForm.frais_diagnostic.$viewValue)
			.success(function(data) {
			console.log(data);
			console.log("updated!");
				
			});
			  
	
            $modalInstance.close('closed');
		};
		
		 $scope.updateFiche = function (id) {
         console.log(id);
          if ($scope.form.userForm.$valid) {
            
		ClientFactory.updateFiche(id,$scope.form.userForm.date_diagnostic.$viewValue)
			.success(function(data) {
			console.log(data);
			console.log("updated!");
				
			});
			
            $modalInstance.close('closed');
			  
        } else {
            console.log('userform is not in scope');
        }
			
    
    };
	
	
	
	
	 
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

	
     }


	
	
	
	
	
	