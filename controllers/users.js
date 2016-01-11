exports.index = function(req, res){

models.User.find(function(err, obj){
res.json(obj);
}).sort({name : 'ascending'}).select();
};


// trier par ordre alphabetic 1 ( 'asc' ou 'ascending') , inverse -1  ('desc' ou 'descending')

// filtrer les resultat, inclure ou exclure un champ de la collection  ( -name : exclure le name) (-_id exclure l'id ) (name  age    seulement le nom et l'age (avec l'id)) 

exports.create = function ( req, res){

console.log(req.body);
var user = models.User(req.body);

console.log(user);

};


exports.update = function ( req, res){
var id = req.body._id;
models.User.findOne({_id: id}, function ( err, utilisateur){


		if (err){
			console.log(err);
			res.status(500).send();
		} else {
			if(!utilisateur){
				res.send(404).send();

			} else {

				if (req.body.name){
					utilisateur.name = req.body.name;
				}
				if (req.body.lastname){
					utilisateur.lastname = req.body.lastname;
				}
				if (req.body.job){
					utilisateur.job = req.body.job;
				}
				if (req.body.tel){
					utilisateur.tel = req.body.tel;
				}
				if (req.body.age){
					utilisateur.age = req.body.age;
				}


				utilisateur.save(function(err, user_mis_ajour){
					if(err){
						console.log(err);
						res.status(500).send();

					} else {
						res.send(user_mis_ajour);
					}


				});

			}
		}



	});
};





/*
var options = {_id: req.body._id};
delete req.body['_id'];
//console.log(req.body);
//var paramid ={_id: req.body._id};
//var param = req.body;
//delete param._id;
//console.log(param);
//console.log(paramid);
//console.log(req.body);
var userupdated = models.User.update(options, req.body);
console.log(userupdated);
};*/