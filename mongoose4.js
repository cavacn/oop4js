(function(){
    
    var Class = require("./index").Class;
    var Schema = require("mongoose").Schema;
    
    var Mongoose4 = Class.extends("Mongoose4",{
        $:function(obj){
            if(typeof(obj) == "object"){
                for(var key in this.schema){
                    this[key] = obj[key];
                }
                this._id = obj._id||obj.id;
            }
        },
        toJson:function(){
            var o = {};
            for(var key in this.schema){
                if(this[key] == "undefined")continue;
                o[key] = this[key];
            }
            return o;
        },
        save:function(cb){
            var db = new this.db();
            for(var key in this.schema){
                db[key] = this[key];
            }
            db.save(cb);
        },
        me:function(cb){
            this.findOne(this.toJson(),cb);
        },
        findOne:function(){
            this.db.findOne.apply(this.db,arguments);
        },
        find:function(){
            this.db.find.apply(this.db,arguments);
        },
        update:function(){
            this.db.update.apply(this.db,arguments);
        }
    });
    
    Mongoose4.define = function(conn,modelName,schema){
        if(!conn){
            throw "conn is null";
        }
        var db = conn.model(modelName,new Schema(schema));
        var fn = Mongoose4.extends(modelName,{
            schema:schema,
            modelName:modelName,
            db:db
        })
        fn.modelName = modelName;
        fn.schema = schema;
        fn.db = db;
        fn.findOne = function(){
            this.prototype.findOne.apply(this.prototype,arguments);
        }
        fn.find = function(){
            this.prototype.find.apply(this.prototype,arguments);
        }
        fn.update = function(){
            this.prototype.update.apply(this.prototype,arguments);
        }
        return function(obj){
            for(var key in obj){
                fn.prototype[key] = obj[key];
            }
            return fn;
        };
    }
    
    this.Mongoose4 = Mongoose4;
    
}).call(this);