define("mx-topbar/index",["magix","$"],function(a,t,e){var n=a("magix"),r=a("$");n.applyStyle("_M","._fw{position:fixed;z-index:400;height:2px;left:0;top:0;right:0;background-color:#d45414;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);-webkit-transition:all .3s ease;transition:all .3s ease}");var o,i,d=n.guid("mx_topbar_"),s=n.Vframe,f=100,l={__e:function(){clearTimeout(o),r("#"+d).length||(r("body").append('<div class="_fw" id="'+d+'"></div>'),i=setInterval(l.__gb,300))},__gc:function(){var a=r("#"+d);a.length&&(f>15?f-=3+5*Math.random():f>4&&(f-=1+Math.random()),a.css({transform:"translate3d(-"+f+"%,0px,0px)"}))},__a:function(){clearInterval(i);var a=r("#"+d);a.length&&(a.css({transform:"translate3d(0,0px,0px)"}),o=setTimeout(function(){f=100,a.remove()},400))}},_=n.config("rootId"),c=s.get(_),m=function(a){a.on("alter",l.__e),a.on("created",l.__a)};if(c)m(c);else{l.__e();var g=function(a){a.vframe.id==_&&(s.off("add",g),m(a.vframe))};s.on("add",g)}});