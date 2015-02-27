(function(){
    /**
        Project:oop 4 js
        Author: cava.zhang
        Date:   2015-02-27 11:53:57
        Email:  admin@cavacn.com
    */
    var Class = function(){}
    Class.version = "0.0.1";
    Class.author = "cava.zhang";
    Class.email = "admin@cavacn.com";
    Class.prototype.$ = function(){
        
    }
    
    Class.extends = function(classname,obj){
        var fn = function(){
            if(!!arguments[0]&&this.$){
                this.super("$",arguments);
            }
        }
        fn.prototype = new this;
        fn.classname = classname;
        for(var key in obj){
            fn.prototype[key] = obj[key];
        }
        fn.prototype.class = fn;
        fn.prototype.__parent = this;
        fn.prototype.super = function(){
            var parent = this.__parent.prototype;
            if(parent[arguments[0]]){
                parent[arguments[0]].apply(this,arguments[1]);
            }
            // var array = Array.prototype.slice.call(arguments);
            // var name = array.shift();
            // if(parent[name]){
                // parent[name].apply(this,array);
            // }
        }
        fn.extends = this.extends;
        return fn;
    }
    
    this.Class = Class;
    
}).call(this);

