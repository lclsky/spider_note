let _setinterval=setInterval;
setInterval=function(){
    // console.log(arguments[0].toString());
    // debugger;
    // //arguments[0]=()=>{};
    // return _setinterval.apply(this,arguments)
    return function(){}
}
setInterval.toString=_setinterval.toString.bind(_setinterval)
