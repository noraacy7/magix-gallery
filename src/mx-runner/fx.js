define("mx-runner/fx",["magix","./index"],function(_,d,n){var t=_("magix"),e=_("./index"),i=function(_){return _},r=Date.now||function(){return(new Date).getTime()},c=t.Base.extend({ctor:function(_,d){var n=this;n.__dS&&!d||(d=d||i,n.__dS=function(_,t){return _+(t-_)*d(n.__dT/n.__dU)}),n.__dV=[],n.__dW=_},__co:function(_,d){var n=this;n.__do||(n.__dV.push({__dX:_,__dY:d}),n.__dZ||n.__e_())},__e_:function(){var _=this,d=_.__dV.shift();d?(_.__dU=d.__dX,_.__ea=d.__dY,_.__eb=r(),_.__dZ||e.__bj(_.__dW,_.__dZ=function(d){_.__dT=Date.now()-_.__eb,_.__dT>_.__dU&&(_.__dT=_.__dU,d=1);try{_.__ea(_.__dS)}catch(_){d=_}d&&_.__e_()})):_.__ca()},__ca:function(){var _=this;_.__dZ&&(e.__bk(_.__dZ),delete _.__dZ,_.fire("stop"))},destroy:function(){var _=this;_.__ca(),_.__dV=[],_.__do=1}});n.exports={__ck:function(){var _=new c;return this.capture(t.guid("__cj"),_),_}}});