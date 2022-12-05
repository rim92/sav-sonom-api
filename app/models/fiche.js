var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Fiche = new Schema({
nom: String,
prenom: String,
tel:String,	
email:String,
designation:String,
marque:String,
date:String,
month:String,
date_achat:String,	
frais_diagnostic:String,
garantie:String,
reparation:String,
rerepare:String,
panne_client:String,
num_serie:String,
panne_signaler:String,
diagnostic:String,
prix_reparation:String,		
reference_piece:String,
prix_piece:String,
date_diagnostic:String,	
date_sortie:String,
observation:String,
etat:String,
			added:Boolean,
			statut:String,
            priority:String,
	        exist:String,
	personnel:String

	
});





module.exports = mongoose.model('Fiche', Fiche);