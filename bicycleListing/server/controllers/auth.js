const User= require('mongoose').model('User');

module.exports = {
  index(request,response){
    User.findOne({_id:request.body._id})
      .then(user => {
        console.log(user);
      })
      .catch(error => {
        response.status(401).json('Please check the email/password');
      });
  },
  login(request,response){
    User.findOne({email:request.body.email})
      .then(user => {
        console.log(user);
        if(!user) throw new Error();
        return User.validatePassword(request.body.password,user.password)
          .then(() => {
            completeLogin(request,response,user);
          })
      })
      .catch(error => {
        response.status(401).json('Please check the email/password');
      });
  },
  register(request,response){
    console.log(request.body);
    User.create(request.body)
      .then(user => {
        completeLogin(request,response,user);
      })
      .catch(error => {
        console.log(error);
        response.status(422).json(
          Object.keys(error.errors).map(key => error.errors[key].message)
        );
      })
  },
  logout(request,response){
    request.session.destroy();
    response.clearCookie('userID');
    response.clearCookie('expiration');

    response.json(true);
  },
}

function completeLogin(req,res,user){
  req.session.user = user.toObject();

  delete req.session.user.password;

  res.cookie('userID',user._id.toString());
  res.cookie('expiration', Date.now()+86400*1000);
  res.json(user);

}
