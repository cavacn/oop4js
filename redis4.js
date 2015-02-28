(function(){
    
    var Class = require("./index").Class;
    
    var Redis4 = Class.extends("Redis4",{
        findOne:function(condition,cb){
            if(condition[this.key]){
                this.redis.hgetall(this.modelName+"::"+condition[this.key],cb);
            }else{
                cb(null,null);
            }
        }
    });
    
    Redis4.define = function(redis,modelName,key){
        if(!redis){
            throw "redis is null";
        }
        var fn = Redis4.extends(modelName,{
            redis:redis,
            key:key,
            modelName:modelName,
        });
        
        fn.findOne = function(){
            this.prototype.findOne.apply(this.prototype,arguments);
        }
        fn.find = function(){
            this.prototype.find.apply(this.prototype,arguments);
        }
        fn.update = function(){
            this.prototype.update.apply(this.prototype,arguments);
        }
    }
    
    this.Redis4 = Redis4;
    
}).call(this);