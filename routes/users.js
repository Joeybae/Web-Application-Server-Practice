const express = require('express');
const router = express.Router();
const models = require("../models");
const crypto = require("crypto");

let jwt = require("jsonwebtoken");
let secretObj = require("../config/jwt");

// 회원가입 GET
router.get('/sign_up', function(req, res, next) {
  res.render("users/signup");
});

// 회원가입 POST
router.post("/sign_up", async function(req,res,next){
  let body = req.body;

  let inputPassword = body.password;
  let salt = Math.round((new Date().valueOf() * Math.random())) + "";
  let hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");

  let result = models.user.create({
    name: body.userName,
    email: body.userEmail,
    password: hashPassword,
    salt: salt
  })

  res.redirect("/users/sign_up");
})


// 메인 페이지
router.get('/', function(req, res, next) {
  res.send('환영합니다~');
});

// 로그인 GET
router.get('/login', function(req, res, next) {
  let session = req.session;

  res.render("users/login", {
    session : session
  });
});

// 로그인 POST
router.post("/login", async function(req,res,next){
  let body = req.body;

  // jwt token
  let token = jwt.sign({
    email : body.userEmail   // 토큰의 내용(payload)
  },
  secretObj.secret ,    // 비밀 키
  {
    expiresIn: '5m'    // 유효 시간은 5분
  })

  let result = await models.user.findOne({
    where: {
      email : body.userEmail
    }
  });

  let dbPassword = result.dataValues.password;
  let inputPassword = body.password;
  let salt = result.dataValues.salt;
  let hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");

  if(dbPassword === hashPassword){
    console.log("비밀번호 일치");
    // 세션 설정
    req.session.email = body.userEmail;
    //res.redirect("/users/login");

    //token
    res.cookie("user", token);
    res.json({
      token: token
    })
  }
  else{
    console.log("비밀번호 불일치");
    res.redirect("/users/login");
  }
});

// 로그아웃
router.get("/logout", function(req,res,next){
  req.session.destroy();
  res.clearCookie('sid');

  res.redirect("/users/login")
})

module.exports = router;