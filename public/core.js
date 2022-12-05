'use strict';
var routeApp=angular.module('scotchTodo', [
	
	'ficheController',
	'ficheService',
    'diagnostiqueController',
    'diagnostiqueService',
	'ngRoute',
    'ui.bootstrap',
'ngResource','AuthServices','ngStorage'])







 routeApp.config(['$routeProvider', function($routeProvider) {
        $routeProvider
  
                       
             .when('/detail-fiche/:id',{
                templateUrl:'fiche/detail-fiche.html',
                controller: 'ficheCtrl'
            })


              .when('/diagnostique/:id',{
                templateUrl:'fiche/diagnostique.html',
                controller: 'ficheCtrl'
            })
		         .when('/fiche',{
                templateUrl:'fiche/fiche.html',
                controller: 'ficheCtrl',
			requiresAuthentication: true
            })
		
		//   .when('/pieces',{
        //         templateUrl:'gestion/pieces.html',
        //         controller: 'clientsCtrl',
		// 	requiresAuthentication: true
        //     })



        //      .when('/ajout-piece',{
        //         templateUrl:'gestion/ajout-piece.html',
        //         controller: 'clientsCtrl',
		// 	requiresAuthentication: true
        //     })
		
		
		
		// .when('/devis_rep',{
        //         templateUrl:'gestion/devis_reparation.html',
        //         controller: 'clientsCtrl',
		// 	requiresAuthentication: true
        //     })
		
		
		.when('/rapport-devis',{
                templateUrl:'gestion/listes_devis.html',
                controller: 'clientsCtrl',
			requiresAuthentication: true
            })
		
		 .when('/devis',{
                templateUrl:'fiche/ajout_devis.html',
                controller: 'ficheCtrl',
			requiresAuthentication: true
            })
		
		
		 .when('/liste_devis',{
                templateUrl:'fiche/liste_devis.html',
                controller: 'ficheCtrl',
			requiresAuthentication: true
            })
		
		
		//  .when('/liste_devis_final',{
        //         templateUrl:'gestion/listes_final_devis.html',
        //         controller: 'clientsCtrl',
		// 	requiresAuthentication: true
        //     })
		//  .when('/rapport',{
        //         templateUrl:'gestion/rapports.html',
        //         controller: 'clientsCtrl'
        //     })
		
		//    .when('/modifier',{
        //         templateUrl:'gestion/modifier_diagnostic.html',
        //         controller: 'clientsCtrl',
		// 	requiresAuthentication: true
        //     })
		
		.when('/fiches',{
                templateUrl:'fiche/liste_reparation.html',
                controller: 'ficheCtrl',
			requiresAuthentication: true
            })

            .when('/fiches',{
                templateUrl:'fiche/liste_reparation.html',
                controller: 'ficheCtrl',
			requiresAuthentication: true
            })
        
        
        
		// .when('/clients',{
        //         templateUrl:'gestion/clients.html',
        //         controller: 'clientsCtrl',
		// 	requiresAuthentication: true
        //     })
            //     .when('/login',{
            //     templateUrl:'compte/compte.html',
            //     controller: 'cpController'
            // })
		
		 .when('/imprimer/:id',{
                templateUrl:'fiche/imprim-fiche.html',
                controller: 'ficheCtrl'
            })
        
        
            .otherwise({redirectTo: '/fiches'});
    }])
// Set some actions to be performed when running the app
//routeApp.run(['$location', '$rootScope','$sessionStorage', function($location, $rootScope,$sessionStorage) {
//
//    // Register listener to watch route changes. 
//    // We use this to make sure a user is logged in when they try to retrieve data
//    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
//        
//		//console.log("user::"+$sessionStorage.user);
//		console.log("uusr"+$sessionStorage.user);
//        // If there is no token, that means the user is not logged in.
////        if($rootScope.user == null) {
////           
////            // Redirect to login page
////          $location.path("/login").replace();
////        }         
//    });
//}]);