var data = require('../data.json');

exports.view = function(req, res){
   res.render('social/friends', data);
}

