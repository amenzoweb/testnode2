var callback = require('../controllers/callback');

app.get('/callback', callback.index);


function logContentOfFile(content){
	console.log(content);
	return content;
}