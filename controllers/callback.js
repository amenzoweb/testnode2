exports.index = function(req, res){
	var returnResponseOfFileJson = function(content){
		res.json(content);
	};


	fs.readFileAsync('test.json')
	.then(logLib.logContentOfFile)
	.then(JSON.parse)
	.catch(function(e){
		console.log(e);
		res.status(500).send('le fichier est manquant!');
		throw new Error('le fichier est manquant!');
	})
	.done(returnResponseOfFileJson)
	;


	console.log('autre chose');
	}