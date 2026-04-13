var _addEventListener=EventTarget.prototype.addEventListener;
EventTarget.prototype.addEventListener=function(){
    console.log(arguments[0]+'\n'+arguments[1])
    arguments[1]=Function('console.log("calling:'+arguments[0]+'");'+'debugger;('+arguments[1].toString()+')'+'()');
    console.log(arguments[1].toString());
    return _addEventListener.apply(this,arguments);
};