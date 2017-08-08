const Bicycle= require('mongoose').model('Bicycle');

module.exports = {
  new(request,response){

    console.log(request.body);
    console.log(request.cookies);

     Bicycle.create({
        title:request.body.title,
        desc:request.body.desc,
        price:request.body.price,
        location:request.body.location,
        user: request.cookies.userID
      })
       .then(bicycle => {
        console.log(bicycle);
       })
      .catch(error => {
        console.log(error);
        response.status(422).json(
          Object.keys(error.errors).map(key => error.errors[key].message)
        );
      })
  },
  index(request, response) {
  Bicycle.find({})
    .then(function(bicycle) {
      response.json(bicycle);
    })
    .catch(function(error) {
      console.log(error);
    })
  },
  show(request, response) {
    Bicycle.findById(request.params.id)
      .then(function(bicycle) {
        response.json(bicycle);
      })
      .catch(console.log);
  },
  edit(request,response){
     Bicycle.findByIdAndUpdate(request.params.id, request.body, { new: true })
      .then(function(bicycle) {
        console.log('updated biccyle', bicycle);
        response.json(bicycle);
      })
      .catch(console.log);
  },
  delete(request,response){
    Bicycle.findByIdAndRemove(request.params.id)
      .then(function(bicycle) {
        response.json(bicycle);
      })
      .catch(console.log);
  }
}
