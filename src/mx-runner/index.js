define("mx-runner/index",["magix"],(e,n,i)=>{var t=e("magix"),_=window.requestAnimationFrame||function(e){return setTimeout(e,16)},r=window.cancelAnimationFrame||clearTimeout,o=Date.now||function(){return(new Date).getTime()};i.exports={__dX:[],__bg:function(e,n){this.__dX.push({i:e||15,f:n,n:o()}),this.__eb()},__bh:function(e){for(var n=this.__dX,i=void 0,t=0;t<n.length;t++)if(!(i=n[t]).r&&i.f==e){i.r=1;break}},__eb:function(){var e=this;if(!e.__ee){var n=function(){for(var i=e.__dX,a=0,f=void 0,u=void 0;a<i.length;a++)(f=i[a]).r?i.splice(a--,1):(u=o())-f.n>=f.i&&(f.n=u,t.toTry(f.f));i.length?e.__ee=_(n):(r(e.__ee),delete e.__ee)};e.__ee=_(n)}}}});