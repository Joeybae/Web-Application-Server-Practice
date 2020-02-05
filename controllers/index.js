const models = require("../models");
const crypto = require("crypto");
let jwt = require("jsonwebtoken");
let secretObj = require("../config/jwt");

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
  let ID = req.body.email;
  let PW = req.body.password;
  //console.log(ID, PW);
  res.status(200).json({
    "email" : ID,
    "password" : PW
  });
}

//login-api test
async function loginTestAPI (req, res, next) {
  let ID = req.body.email;
  let PW = req.body.password;
  console.log(ID, PW);

  // jwt token
  let token = jwt.sign({
    email : ID   // 토큰의 내용(payload)
  },
  secretObj.secret ,    // 비밀 키
  {
    expiresIn: '5m'    // 유효 시간은 5분
  })

  let result = await models.user.findOne({
    where: {
      email : ID
    }
  });

  let dbPassword = result.dataValues.password;
  let inputPassword = PW;
  let salt = result.dataValues.salt;
  let hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");

  if(dbPassword === hashPassword){
    res.status(200).json({
      "token" : token
    });
  }
}

module.exports = {
  basicAPI,
  testAPI,
  postTestAPI,
  loginTestAPI
}