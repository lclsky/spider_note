let _indexOf=String.prototype.indexOf
String.prototype.indexOf=function(){if (arguments[0]=='debugger'){return 47};return _indexOf.apply(this,arguments)}
String.prototype.indexOf.toString=_indexOf.toString.bind(_indexOf)