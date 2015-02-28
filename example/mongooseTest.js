var Mongoose4 = require("../mongoose4").Mongoose4;

var mongoose = require("mongoose");

var conn = mongoose.createConnection("mongodb://127.0.0.1/test");

var User = Mongoose4.define(conn,"User",{
    uname:  {type:String,index:true,unique:true},
    upass:  {type:String},
    
})({
    create:function(cb){
        this.save(cb);
    }
})
// var user = new User({uname:"iamee",upass:"iameepass"});

// // user.save(function(err,_u){
    // // console.log(err,_u);
// // });

// User.findOne({uname:"iamee"},function(err,_u){
    // console.log(err,_u);
// });