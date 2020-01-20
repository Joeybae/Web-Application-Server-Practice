//api
function basicAPI (req, res, next) {
  res.status(200).json({
    "sucess" : true
  });
}
  
//api test
function testAPI (req, res, next) {
  res.status(200).json({
    "message" : "test"
  });
}
  
//api post
function postTestAPI (req, res, next) {
  let user_message = req.body.message;
  res.status(200).json({
    "message" : user_message
  });
}

module.exports = {
  basicAPI,
  testAPI,
  postTestAPI
}