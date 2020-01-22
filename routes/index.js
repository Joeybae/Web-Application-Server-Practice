var express = require('express');
var router = express.Router();
var controller = require('../controllers')
var models = require('../models')

router.get('/', controller.basicAPI);
router.get('/test', controller.testAPI);
router.post('/post-test', controller.postTestAPI);

// post-select
router.get('/board', function(req, res, next) {
    models.post.findAll().then( result => {
        res.render("posts/show", {
        posts: result
        });
    });
    // //특정 데이터 select
    // models.post.findAll({
    //     where: {writer: "victolee"}
    //     })
    //     .then( result => {
    //     res.render("show", {
    //         posts: result
    //     });
    //     })
    //     .catch(function(err){
    //     console.log(err);
    // });
});

// post-create
router.post('/board', function(req, res, next) {
    let body = req.body;

    models.post.create({
        title: body.inputTitle,
        writer: body.inputWriter
    })
    .then( result => {
        console.log("데이터 추가 완료");
        res.redirect("/board");
    })
    .catch( err => {
        console.log("데이터 추가 실패");
    })
});

//posts-update
router.get('/edit/:id', function(req, res, next) {
    let postID = req.params.id;

    models.post.findOne({
        where: {id: postID}
    })
    .then( result => {
        res.render("posts/edit", {
        post: result
        });
    })
    .catch( err => {
        console.log("데이터 조회 실패");
    });
});

//posts-db:update
router.put('/board/:id', function(req, res, next) {
    let postID = req.params.id;
    let body = req.body;
  
    models.post.update({
      title: body.editTitle,
      writer: body.editWriter
    },{
      where: {id: postID}
    })
    .then( result => {
      console.log("데이터 수정 완료");
      res.redirect("/board");
    })
    .catch( err => {
      console.log("데이터 수정 실패");
    });
});

//posts-delete
router.delete('/board/:id', function(req, res, next) {
    let postID = req.params.id;
  
    models.post.destroy({
      where: {id: postID}
    })
    .then( result => {
      res.redirect("/board")
    })
    .catch( err => {
      console.log("데이터 삭제 실패");
    });
});

module.exports = router;
