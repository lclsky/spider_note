oldsetTimeout=setTimeout
setTimeout=function(a,b){if(a==a){return function(){}};return oldsetTimeout(a,b)}