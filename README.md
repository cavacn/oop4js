OOP4Js
=======

How to use

	npm install oop4js

##code
	
	var Class = require("oop4js").Class;

	var Demo1 = Class.extends("Classname",{
    	$:function(obj){
	        for(var key in obj){
	            this[key] = obj[key];
	        }
	    },
	    sayHello:function(age){
	        console.log("Hello,My name is %s,Age %s",this.name,age);
	    }
	})

	var Demo2 = Demo1.extends("Classname2",{
	    sayHello:function(age){
	        console.log("call parent's sayHello");
	        this.super("sayHello",arguments);
	    }
	})

	var demo2 = new Demo2({name:"demo2"});

	demo2.sayHello(18);

##console

	call parent's sayHello
	Hello,My name is demo2,Age 18