var j_on=$("html").on
$("html").on=function(){console.log(arguments[0]);if (arguments[0]=="keydown"){console.log(arguments[1].toString())};return j_on.apply(this,arguments)}