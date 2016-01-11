var user = require('../controllers/user');

app.get('/users/:name', user.index);

