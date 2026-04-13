var _MutationObserver=MutationObserver

var MutationObserver=function(){
    debugger;
    return new (_MutationObserver.bind.apply(_MutationObserver))(...arguments);
}
MutationObserver.toString=_MutationObserver.toString.bind(_MutationObserver)
