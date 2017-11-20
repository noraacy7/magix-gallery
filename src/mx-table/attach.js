define("mx-table/attach",["magix","$"],function(e,t,a){var _=e("magix"),i=e("$");_.applyStyle("_G","._eR{width:100%;overflow:auto;border:1px solid #e6e6e6;position:relative}._eS,._eT thead,._eU{background-color:#fff}._eS,._eU{position:absolute;top:1px;width:auto;z-index:1}._eV{border:none}._eS{left:1px}._eU{right:1px}._eW,._eW thead{-webkit-box-shadow:6px 0 6px -4px rgba(0,0,0,.2);box-shadow:6px 0 6px -4px rgba(0,0,0,.2)}._eX,._eX thead{-webkit-box-shadow:-6px 0 6px -4px rgba(0,0,0,.2);box-shadow:-6px 0 6px -4px rgba(0,0,0,.2)}"),a.exports=_.View.extend({init:function(e){var t=this;t.__eE=e.sticky+""=="true",t.__eF=e.rowHoverClass},__eJ:function(){var e=this,t=e.__eG;if(t){var a=e.__eH,_=e.__eI;if(t.prop("clientWidth")<t.prop("scrollWidth")){if(a){t.prop("scrollLeft")>=10?a.hasClass("_eW")||a.addClass("_eW"):a.hasClass("_eW")&&a.removeClass("_eW")}if(_){t.prop("scrollLeft")<t.prop("scrollWidth")-t.prop("clientWidth")-10?_.hasClass("_eX")||_.addClass("_eX"):_.hasClass("_eX")&&_.removeClass("_eX")}}}},__eK:function(e){var t=e.attr("id");t||e.attr("id",t=_.guid("table_")),e.find("thead").css({width:e.width()}),this.owner.mountVframe(t,"mx-table/isticky")},__eM:function(){var e,t,a=this,_=a.__eL,i=a.__eH,r=a.__eI,o=_.find("tbody>tr");i&&(e=i.find("tbody>tr")),r&&(t=r.find("tbody>tr"));for(var d=0;d<o.length;d++){var s=o.eq(d).find("td").outerHeight();e&&e.eq(d).find("td:first").css({height:s}),t&&t.eq(d).find("td:first").css({height:s})}},render:function(){var e=this,t=i("#"+e.id);t.addClass("_ag _eT");var a=t.find('[table-role="main"]');a.addClass("_eR");var _=a.find("table");_.addClass("_eV"),e.__eL=_;var r=t.find('[table-role="left-sticky"]');r.length&&(r.addClass("_eS _eV"),e.__eH=r);var o=t.find('[table-role="right-sticky"]');o.length&&(o.addClass("_eU _eV"),e.__eI=o),e.__eG=a;var d=function(){e.__eJ()};e.on("destroy",function(){a.off("scroll",d)}),a.on("scroll",d),e.__eJ(),e.__eM(),e.__eE&&(e.__eK(_),r.length&&e.__eK(r),o.length&&e.__eK(o))},"$doc<htmlchanged>":function(e){var t=this;e.vId==t.owner.pId&&t.__eM()},"$tbody>tr<mouseover,mouseout>":function(e){var t=this,a=t.__eF;if(a){var r=e.eventTarget;if(!_.inside(e.relatedTarget,r)){var o=i(r).parents("tbody").find("tr"),d=o.index(r);o=t.__eL.find("tbody>tr");var s="mouseover"==e.type?"addClass":"removeClass";o.eq(d)[s](a);var n=t.__eH;n&&(o=n.find("tbody>tr")).eq(d)[s](a),(n=t.__eI)&&(o=n.find("tbody>tr")).eq(d)[s](a)}}}})});