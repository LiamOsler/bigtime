const User = require('../models/User');

module.exports.register_get = function(req, res) {
    console.log("signup_get");
    console.log(req.body);
    res.render('register', { title: 'Machine Learning Market: Data Driven Highlights', email: req.query.email });
}
module.exports.register_post = async function(req, res) {
    const { username, email, password } = req.body;
    try{
        const user = await User.create({ username, email, password });
        res.status(201).json({ user: user});
    }
    catch(err){
        console.log(err);
        res.send({error: 'User Registration Error'});    
    } 
}
module.exports.login_get = function(req, res) {
    console.log("login_get");
    console.log(req.query);

    res.render('login', { title: 'Machine Learning Market: Data Driven Highlights', email: req.query.email });
}
module.exports.login_post = function(req, res) {
    console.log("login_post");
    console.log(req.body);

    res.send({express: 'Hello From Express'});
}
module.exports.email_get = async function(req, res) {
    try{
        const email = await User.findOne({ email: req.query.email });
        if(email){
            console.log(req.query)
            res.redirect('login?email=' + req.query.email);
        }
        else{
            res.redirect('register?email=' + req.query.email); 
        }
    }
    catch(err){
        console.log(err);
        res.send({error: 'User Registration Error'});    
    } 
}