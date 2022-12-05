var Todo = require('./models/todo');
var Account = require('./models/account');
var Fiche = require('./models/fiche');
var Pieces = require('./models/piece');
var passport = require('passport');
var nodemailer = require('nodemailer');
var mongoose = require('mongoose');
// function getTodos(res) {
//     Todo.find(function (err, todos) {

//         // if there is an error retrieving, send the error. nothing after res.send(err) will execute
//         if (err) {
//             res.send(err);
//         }

//         res.json(todos); // return all todos in JSON format
//     });
// };


// function sendEmail(designation,panne,diagnostic,prix){

// var transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: 'sav.sonomusic@gmail.com',
//     pass: 'SAV@2018'
//   }
// });


// var mailOptions = {
//   from:"sav.sonomusic@gmail.com",
//   to: 'sav.sonomusic@gmail.com',
//   subject: 'Prix réparation',
//   text: "Designation:"+designation+"\n"+"Panne:"+panne+"\n"+"Diagnostique:"+diagnostic+"\n"+"Prix de Mr Sahbi:"+prix
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });


// }



// function sendEmailToSalma(designation,reference,qte){
// //console.log(csv(designation,reference));
// var transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: 'sav.sonomusic@gmail.com',
//     pass: 'SAV@2018'
//   }
// });

// var mailOptions = {
//   from:"methni.rim@gmail.com",
//   to: 'sonomusic@gnet.tn',
//   subject: 'Pièces indisponibles',
//   html:"<table border='1'><th>Designation</th><th>Référence</th><th>QTE</th><tr><td>"+designation+"</td><td>"+reference+"</td><td>"+qte+"</td></tr></table>"
	
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });


// }







function getFiches(res) {
   	
			
			Fiche.find({}).sort({date: 'descending'}).exec(function(err, rep){
if(err)
    res.json({error:err});

    else
        res.json(rep);
    });
	
   
        
};




function getFichesGestion(res) {
   	
			
			Fiche.find({}).exec(function(err, rep){
if(err)
    res.json({error:err});

    else
        res.json(rep);
    });
	
   
        
};


function getFicheById(id){
Fiche.findById(id, function (err, fiche) {
        
	if(err)
		res.send(err);
	
	else
		res.json(fiche);
	
       })

}

module.exports = function (app) {

    // api ----------------------------------------
    // get all todos

	
	   app.get('/api/fiches', function (req, res) {
        // use mongoose to get all todos in the database
        getFiches(res);
    });
	
	  app.get('/api/fiche-modifier', function (req, res) {
      
var month = new Date().getMonth();
//var y = d.getYear();
var  fromDate = new Date('2019-10-01');
var toDate = new Date('2019-10-29');
console.log(toDate.getMonth()+1);

//date:{ $gte : new Date('2019-03-01').getTime()
        //,date:{$gte: new Date('2019','10','01')}  	
			Fiche.find({etat: "traité",reparation:"Oui",marque:"YAMAHA"}).sort({date:'desc'}).exec(function(err, fiches){
if(err)
    res.json({error:err});

    else
        res.json(fiches);
        
        
    });
		  
       
    });
	
	
	
// 	  app.get('/pieces_indispo', function (req, res) {
       
		  	
// 			Pieces.find({choix: "indispo"  }).exec(function(err, pieces){
// if(err)
//     res.json({error:err});

//     else
//         res.json(pieces);
        
        
//     });
		  
       
//     });
	



// 	  app.get('/pieces', function (req, res) {
       
		  	
// 			Pieces.find({ choix: "Dispo" }).exec(function(err, pieces){
// if(err)
//     res.json({error:err});

//     else
//         res.json(pieces);
        
        
//     });
		  
       
//     });


	
	app.get('/api/fiche/:id',function(req,res){
	
	
		Fiche.findById(req.params.id, function (err, fiche) {
        
	if(err)
		res.send(err);
	
	else
		res.json(fiche);
	
       })
		
	
	});

	
// 		app.get('/pieces/:id',function(req,res){
	

		
			
// 			Pieces.find({id_article: req.params.id  }).exec(function(err, pieces){
// if(err)
//     res.json({error:err});

//     else
//         res.json(pieces);
        
        
//     });
	
// 	});

//get stock by piece

//     app.get('/stock_by_reference/:reference',function(req,res){
	

		
			
// 			Pieces.find({reference_piece: req.params.reference,choix: "Dispo" }).exec(function(err, pieces){
// if(err)
//     res.json({error:err});

//     else
//         res.json(pieces);
        
        
//     });
	
// 	});




    //get report by month

//     app.get('/rapport/:month',function(req,res){
	

		
			
// 			Fiche.find({month: req.params.month}).exec(function(err, resp){
// if(err)
//     res.json({error:err});

//     else
//         res.json(resp);
        
        
//     });
	
// 	});
	
	
		
// 		app.get('/email/:designation/:panne/:diagnostic/:prix',function(req,res){
	
// 			sendEmail(req.params.designation,req.params.panne,req.params.diagnostic,req.params.prix);

// });
	
	
			
// 		app.get('/email_piece/:designation/:reference/:qte',function(req,res){
	
// 			sendEmailToSalma(req.params.designation,req.params.reference,req.params.qte);

// });
	
	
	
// 		app.get('/new-devis',function(req,res){
	
// Fiche.find({reparation: "Non",etat:"non"}).exec(function(err, rep){
// if(err)
//     res.json({error:err});

//     else
//         res.json(rep);
        
        
//     });
	
// 	});
	
	
// 		app.get('/devis',function(req,res){
	
// Fiche.find({reparation: "Non"}).exec(function(err, rep){
// if(err)
//     res.json({error:err});

//     else
//         res.json(rep);
        
        
//     });
	
// 	});
	
	
	
	
		app.get('/api/all-devis',function(req,res){
	
Fiche.find({reparation: "Non"}).exec(function(err, rep){
if(err)
    res.json({error:err});

    else
        res.json(rep);
        
        
    });
	
	});
	
	
	
		app.get('/api/clients',function(req,res){
	
Fiche.find({}).exec(function(err, rep){
if(err)
    res.json({error:err});

    else
        res.json(rep);
        
        
    });
	
	});
	
	
	
	
// 			app.get('/devis-notif',function(req,res){
	
// Fiche.find({reparation: "Non",etat:"non"}).exec(function(err, rep){
// if(err)
//     res.json({error:err});

//     else
//         res.json(rep);
        
        
//     });
	
// 	});
	
	
// 			app.get('/fiches-notif',function(req,res){
	
// Fiche.find({reparation: "Oui",etat:"non"}).exec(function(err, rep){
// if(err)
//     res.json({error:err});

//     else
//         res.json(rep);
        
        
//     });
	
// 	});
	
	//deleste pièce
	
	
// 		app.delete('/piece/:id',function(req,res){
	

		
			
// 	Pieces.findByIdAndRemove({_id:req.params.id}).exec(function(err, piece){
// if(err)
//     res.json({error:err});

//     else
//         res.json({done:1});
        
        
//     });
	
// 	});
	
	
	
	 //delete fiche client
	
		app.delete('/api/fiche/:id',function(req,res){
	

		
			
	Fiche.findByIdAndRemove({_id:req.params.id}).exec(function(err, piece){
if(err)
    res.json({error:err});

    else
        res.json({done:1});
        
        
    });
	
	});
	
	 
    
	
	
	
	
    // create todo and send back all todos after creation
    app.post('/api/fiche', function (req, res) {


	Fiche.create({
            nom: req.body.nom,
			prenom: req.body.prenom,
			adresse: req.body.adresse,
			tel: req.body.tel,
			email:req.body.email,
			designation: req.body.designation,
            marque:req.body.marque,
			date:req.body.date,
            month:req.body.month,
			date_achat: req.body.date_achat,
			frais_diagnostic:req.body.frais_diagnostic,
			garantie:req.body.garantie,
			reparation: req.body.reparation,
			rerepare:req.body.rerepare,
			panne_client:req.body.panne_client,
			num_serie:req.body.num_serie,
			panne_signaler:null,
			diagnostic:null,
			reference_piece:null,
			prix_piece:null,
			prix_reparation:null,
			date_diagnostic:null,	
			date_sortie:null,
			observation:null,
			etat:"non",
			added:false,
			statut:null,
            priority:null,
	        exist:"false",
		personnel:req.body.personnel
			
	     
        }, function (err, fiche) {
            if (err)
                res.send(err);
else
            // get and return all the todos after you create another
         console.log('added');
        });

	
		
		

    });
	
	
	
	//create pieces 

	//  app.post('/pieces/:id/:count/:designation/:referencepiece/:qtepiece/:choix/:prixpiece', function (req, res) {

    //     // create a todo, information comes from AJAX request from Angular
        
		 
	// 	 Pieces.create({
    //         designation_piece:req.params.designation,
	// 		reference_piece:req.params.referencepiece,	
	// 		qte_piece:req.params.qtepiece,	
	// 		choix: req.params.choix,
	// 		prix_piece:req.params.prixpiece,
	// 		id_article:req.params.id
	     
    //     }, function (err, fiche) {
    //         if (err)
    //             res.send(err);

    //         // get and return all the todos after you create another
    //        // getTodos(res);
    //     });
			
		

    // });
	 


	
	//create one piece 

	//  app.post('/createpiece', function (req, res) {

    //     // create a todo, information comes from AJAX request from Angular
        
		 
	// 	 Pieces.create({
    //         designation_piece:req.params.designation,
	// 		reference_piece:req.params.referencepiece,	
	// 		qte_piece:req.params.qtepiece,	
	// 		choix: req.params.choix,
	// 		prix_piece:req.params.prixpiece,
	// 		marque:req.params.marque
	     
    //     }, function (err, fiche) {
    //         if (err)
    //             res.send(err);

    //         // get and return all the todos after you create another
    //        // getTodos(res);
    //     });
			
		

    // });
	 


	
	
		//create pieces  test

	//  app.post('/test', function (req, res) {


    //     // create a todo, information comes from AJAX request from Angular
    //     console.log(req.body);
		 
	// 	 Pieces.create(
    //         req.body
	     
    //     , function (err, fiche) {
    //         if (err)
    //             res.send(err);
       
    //         // get and return all the todos after you create another
    //        // getTodos(res);
    //     });
			
		

    // });














    
	 
	
	//  app.post('/update/piece', function (req, res) {


    //     // create a todo, information comes from AJAX request from Angular
    //     console.log(req.body);
		 
	// 	 Pieces.create(
    //         req.body
	     
    //     , function (err, fiche) {
    //         if (err)
    //             res.send(err);
    //      res.send(200);
    //         // get and return all the todos after you create another
    //        // getTodos(res);
    //     });
			
		

    // });
	
	
	
		
// 	 app.get('/archive/:id/:num_serie', function (req, res) {

// 		 console.log("iidd"+req.params.id);
// Fiche.find({num_serie:req.params.num_serie,etat:"true"}).exec(function(err, fiches){
// if(err)
//     res.json({error:err});

//     else
//         res.json(fiches);
        
        
//     });
		 
		

//     });
	 
	
			
	 app.get('/api/findByDate/:date_debut/:date_fin', function (req, res) {

		var startDate=new Date(req.params.date_debut).getTime();
			var endDate=new Date(req.params.date_fin).getTime();
//Find 
		 
		 //console.log("date deb"+startDate.getDate());
//		 console.log("date fin"+endDate);
//Fiche.find({ date: {
//        $gt:   new Date( req.params.date_debut),
//        $lt:   new Date(req.params.date_fin)}}).exec(function(err, fiches){
//if(err)
//    res.json({error:err});
//
//    else
//        res.json(fiches);
//        
//        
//    });
//		 
		
		 
		   Fiche.find({"date":{
        $gt:   new Date( req.params.date_debut),
        $lt:   new Date(req.params.date_fin)}},{new:true},function(err, cat){
if(err){
	console.log('oops erreur ');
    res.json({error:err});
}
    else{
		console.log("c done !");
        res.json(cat);
	}
    });
		 
		 

    });
	 
	
	
	//update date entree
	   app.put('/api/date_entree/:id/:date',function(req,res) {
		  // console.log("idd"+req.params.id);
	   
  Fiche.findByIdAndUpdate({"_id":req.params.id},{$set:{date_diagnostic:req.params.date,etat:"false"}},{new:true},function(err, cat){
if(err){
	console.log('oops erreur ');
    res.json({error:err});
}
    else{
		console.log("update done !");
        res.json(cat);
	}
    });
    
});
	
	
	//update fiche client
	
		//update date entree
	   app.put('/api/update_client/:id/:nom/:prenom/:tel/:email/:designation/:date_achat/:num_serie/:garantie/:panne_client/:reparation/:frais_diagnostic',function(req,res) {
		  // console.log("idd"+req.params.id);
	   
  Fiche.findByIdAndUpdate({"_id":req.params.id},{$set:{nom:req.params.nom,prenom:req.params.prenom,tel:req.params.tel,email:req.params.email,designation:req.params.designation,date_achat:req.params.date_achat,num_serie:req.params.num_serie,garantie:req.params.garantie,panne_client:req.params.panne_client,reparation:req.params.reparation,frais_diagnostic:req.params.frais_diagnostic}},{new:true},function(err, cat){
if(err){
	console.log('oops erreur ');
    res.json({error:err});
}
    else{
		console.log("update done !");
        res.json(cat);
	}
    });
    
});
	
	
	
	app.post('/logout', function(req, res) {
req.logOut();
		res.send(200);

});
	
		//update fiche technique

	   app.put('/api/fiche_technique/:id/:num_serie/:panne_signaler/:diagnostic/:prix_reparation/:observation/:statut/:rerepare/:priority/:etat',function(req,res) {
		   
  Fiche.findByIdAndUpdate({"_id":req.params.id},{$set:{num_serie:req.params.num_serie,panne_signaler:req.params.panne_signaler,diagnostic:req.params.diagnostic,prix_reparation:req.params.prix_reparation,observation:req.params.observation,statut:req.params.statut,rerepare:req.params.rerepare,priority:req.params.priority,etat:req.params.etat}},{new:true},function(err, cat){
if(err){
	console.log('oops erreur ');
    res.json({error:err});
}
    else{
		console.log("update done !");
        res.json(cat);
	}
    });
    
});


	   app.put('/api/date_diag/:id/:num_serie/:panne_signaler/:diagnostic/:prix_reparation/:observation/:statut/:rerepare/:priority/:etat/:date_diagnostic',function(req,res) {
		   
  Fiche.findByIdAndUpdate({"_id":req.params.id},{$set:{num_serie:req.params.num_serie,panne_signaler:req.params.panne_signaler,diagnostic:req.params.diagnostic,prix_reparation:req.params.prix_reparation,observation:req.params.observation,added:true,statut:req.params.statut,priority:req.params.priority,rerepare:req.params.rerepare,date_diagnostic:req.params.date_diagnostic,etat:req.params.etat}},{new:true},function(err, cat){
if(err){
	console.log('oops erreur ');
    res.json({error:err});
}
    else{
		console.log("update done !");
        res.json(cat);
	}
    });
    
});




	   app.put('/api/date_sortie/:id/:num_serie/:panne_signaler/:diagnostic/:prix_reparation/:observation/:statut/:rerepare/:priority/:etat/:date_sortie',function(req,res) {
		   
  Fiche.findByIdAndUpdate({"_id":req.params.id},{$set:{num_serie:req.params.num_serie,panne_signaler:req.params.panne_signaler,diagnostic:req.params.diagnostic,prix_reparation:req.params.prix_reparation,observation:req.params.observation,added:true,statut:req.params.statut,date_sortie:req.params.date_sortie,priority:req.params.priority,rerepare:req.params.rerepare,etat:req.params.etat}},{new:true},function(err, cat){
if(err){
	console.log('oops erreur ');
    res.json({error:err});
}
    else{
		console.log("update done !");
        res.json(cat);
	}
    });
    
});

	
	//udpate devis
	
	
	
	app.put('/api/update_devis/:id/:num_serie/:panne_signaler/:diagnostic/:date_sortie',function(req,res) {
		   
  Fiche.findByIdAndUpdate({"_id":req.params.id},{$set:{num_serie:req.params.num_serie,panne_signaler:req.params.panne_signaler,diagnostic:req.params.diagnostic,date_sortie:req.params.date_sortie,added:true,etat:"true"}},{new:true},function(err, cat){
if(err){
	console.log('oops erreur ');
    res.json({error:err});
}
    else{
		console.log("update done !");
        res.json(cat);
	}
    });
    
});
	
	
	
	
	//update fiche rerepare
	   app.put('/api/fiche/:id/:derniere_reparation',function(req,res) {
		   
  Fiche.findByIdAndUpdate({"_id":req.params.id},{$set:{derniere_reparation:req.params.derniere_reparation}},{new:true},function(err, fiche){
if(err){
	console.log('oops erreur ');
    res.json({error:err});
}
    else{
		console.log("update done !");
        res.json(fiche);
	}
    });
    
});
	
	
		
	//créer rapport réparation
	   app.put('/api/date_sortie/:id/:date/:statut/:priority/:rerepare',function(req,res) {
		  // console.log("idd"+req.params.id);
	   
  Fiche.findByIdAndUpdate({"_id":req.params.id},{$set:{date_sortie:req.params.date,etat:"true",statut:req.params.statut,priority:req.params.priority,rerepare:req.params.rerepare}},{new:true},function(err, cat){
if(err){
	console.log('oops erreur ');
    res.json({error:err});
}
    else{
		console.log("update done !");
        res.json(cat);
	}
    });
    
});
	
	
		
	//update date sortie
	   app.put('/api/date_sortie_devis/:id/:date_sortie',function(req,res) {
		  console.log("idd"+req.params.id);
	   
  Fiche.findByIdAndUpdate({"_id":req.params.id},{$set:{date_sortie:req.params.date_sortie,etat:"true"}},{new:true},function(err, cat){
if(err){
	console.log('oops erreur ');
    res.json({error:err});
}
    else{
		console.log("update done !");
        res.json(cat);
	}
    });
    
});
	
	
	   // create fiche
    // app.post('/api/todos', function (req, res) {

    //     // create a todo, information comes from AJAX request from Angular
    //     Fiche.create({
    //         username: req.body.username,
	// 		password: req.body.password,
    //         done: false
    //     }, function (err, todo) {
    //         if (err)
    //             res.send(err);

    //         // get and return all the todos after you create another
    //         getTodos(res);
    //     });

    // });

	
// 	app.post('/register', function(req, res) {
// //Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
// //if (err) {
// //console.log("error");
// //}
// 		console.log("regiistr"+req.body.username);
		
// 		if( req.body.username =="SONOM" && req.body.password=="STORE2017"){
// passport.authenticate('local')(req, res, function () {
// console.log("c'est bon");
// });
			
// 		}
		
// 		else{
// 		console.log("error");
		
// 		}
// //});
// });
	
	//   app.get('/profile', isLoggedIn, function(req, res) {
	// 	  console.log(req.user);
    //    return req.user;
    // });
	
	
	
	
	
	//   app.get('/profile', isLoggedIn, function(req, res) {
	// 	  console.log(req.user);
    //    return req.user;
    // });
	

	
//	
//app.post('/login', passport.authenticate('local'), function(req, res) {
//});
//	
	
	

// app.get('/logout', function(req, res) {
// req.logout();
// });
	
    // delete a todo
    // app.delete('/api/todos/:todo_id', function (req, res) {
    //     Todo.remove({
    //         _id: req.params.todo_id
    //     }, function (err, todo) {
    //         if (err)
    //             res.send(err);

    //         getTodos(res);
    //     });
    // });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};


	// route middleware to make sure a user is logged in
// function isLoggedIn(req, res, next) {

//     // if user is authenticated in the session, carry on 
//     if (req.isAuthenticated())
//         return next();

//     // if they aren't redirect them to the home page
//     res.redirect('/');
// }

