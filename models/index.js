// importer le shema users
var users = require('../schema/users');

exports.User = mongoose.model('User', users.schema);
// export un user en tant que mongoose model basé sur le shema importé

// on peut indiquer plusieurs ici et ne pas oublier de lier le shmma en haut