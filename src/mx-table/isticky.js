define("mx-table/isticky",["magix","$"],function(_,i,t){"use strict";i.__esModule=!0;var e=_("magix"),n=_("$");t.exports=e.View.extend({init:function(){var _=this;_.__eX=n("#header").height()||50;var i=n("#inmain");i.length||(i=n(window),_.__eX=0);var t=function(){_.__eY(i)};_.on("destroy",function(){i.off("scroll",t)}),i.on("scroll",t),_.__eZ=i},__fb:function(){var _=this,i=n("#"+_.id),t=i.find("thead"),e="ph_"+_.id,f=n("#"+e);f.length||(f=n("<caption />").insertBefore(t).attr("id",e)),t.css({position:"absolute",zIndex:1}),_.__f_=f,_.__h=i,_.__fa=t},__ff:function(){var _=this,i=n.now();if(!_.__fc||_.__fc+3e3<i){_.__fc=i;var t=_.__h,e=void 0,f=void 0;e=_.__eX?t.offset().top+_.__eZ.scrollTop()-_.__eX:t.offset().top,f=t.height();var o=t.find("tfoot"),s=0;return o.length&&(s=o.height()),_.__fd={min:e,max:e+f-_.__fe-s}}return _.__fd},render:function(){var _=this;_.__fb(),_.__fg(),setTimeout(_.wrapAsync(function(){_.__eY(_.__eZ)}),0)},__fg:function(){var _=this,i=_.__fa,t=_.__f_,e=i.height();e!=_.__fe&&(i.css({marginTop:-e}),t.css("height",e),_.__fe=e)},__eY:function(_){var i=this,t=_.scrollTop(),e=i.__ff(),n=i.__fh;t>e.min&&t<e.max?(i.__fh="s",i.__fa.css({top:t-e.min,marginTop:"auto"})):"i"!=n&&(i.__fh="i",i.__fa.css({marginTop:-i.__fe,position:"absolute",top:"auto"}))}})});