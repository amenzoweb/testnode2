exports.index = function(req, res){

models.User.findOne({name:req.params.name}, function(err, obj){
console.log(obj);
res.json(obj);
});
};