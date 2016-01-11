var pow= require('pow-mongodb-fixtures');
var fixtures = pow.connect('book_phone');
var id = require('pow-mongodb-fixtures').createObjectId;

//Objects
fixtures.load({
    users: [
		{
		 "_id": id(),
		 "name": "dupont",
		 "lastname": "Maurice",
		 "age": "55",
		 "job": "technical support",
		 "tel": "0123456789"
		},
		{
		 "_id": id(),
		 "name":"valentino",
		 "lastname": "anna",
		 "age": "23",
		 "job": "secretary",
		 "tel": "0123456789"
		},
		{
		 "_id": id(),
		 "name":"Barajk",
		 "lastname": "shaima",
		 "age": "40",
		 "job": "finnanicial assistant",
		 "tel": "0123456789"
		},
    ]
});