define("mx-gtip/index",["magix","$"],function(t,i,o){var n=t("magix"),e=t("$"),r={lt:function(t,i){t.css({top:65*i+5*(i+1),left:10})},rt:function(t,i){t.css({top:65*i+5*(i+1),right:10})},lb:function(t,i){t.css({bottom:65*i+5*(i+1),left:10})},rb:function(t,i){t.css({bottom:65*i+5*(i+1),right:10})}};n.applyStyle("_s","._dk{border:1px solid #e6e6e6;background-color:#fff;padding:8px 20px;position:fixed;z-index:450;border-radius:4px;width:300px;height:65px;overflow:hidden;word-break:break-all;-webkit-transition:all .3s;transition:all .3s;opacity:0}._dl{opacity:1}._dm{opacity:0}");var s={__cw:function(t){var i=this["$"+t];if(i&&i.length)for(var o=0,n=void 0;o<i.length;o++)n=i[o],(0,r[t])(n,o)},__l:function(t,i){i||(i="rt");var o=this;if(!r[i])throw new Error("mx-gip unsupport dock:"+i);(o["$"+i]||(o["$"+i]=[])).push(t),t.on("__cx",function(){o.__g(t,i)}),o.__cw(i)},__g:function(t,i){t.off("close");for(var o=this,n=o["$"+i],e=n.length-1;e>=0;e--)if(n[e]==t){n.splice(e,1);break}o.__cw(i)}};o.exports=n.View.extend({tmpl:{html:"<%=$$.tip.msg%>",subs:[]},init:function(t){var i=this;i.__d=t,i.on("destroy",function(){i.__i.trigger("__cx").remove()})},render:function(){var t=this,i=e("#"+t.id);i.addClass("_dk"),t.__i=i,t.updater.digest({tip:t.__d}),t.__d.timeout&&setTimeout(t.wrapAsync(function(){t.__aR()}),t.__d.timeout),setTimeout(t.wrapAsync(function(){i.addClass("_dl")}),20)},__aR:function(){var t=this;t.__i.addClass("_dm"),setTimeout(t.wrapAsync(function(){t.owner.unmountVframe()}),300)}},{__cy:function(t){var i=n.guid("gtip-");e("body").append('<div id="'+i+'" />'),this.owner.mountVframe(i,"mx-gtip/index",t),s.__l(e("#"+i),t.dock)},gtipRT:function(t,i){this.__cy({msg:t,dock:"rt",timeout:i||3e3})},gtipRB:function(t,i){this.__cy({msg:t,dock:"rb",timeout:i||3e3})},gtipLT:function(t,i){this.__cy({msg:t,dock:"lt",timeout:i||3e3})},gtipLB:function(t,i){this.__cy({msg:t,dock:"lb",timeout:i||3e3})}})});