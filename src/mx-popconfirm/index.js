define("mx-popconfirm/index",["magix","$","../mx-monitor/index"],(t,e,_)=>{var i=t("magix"),o=t("$");i.applyStyle("_C","._ek{border-radius:4px;padding:10px;-webkit-box-shadow:0 6px 8px rgba(51,51,51,.08);box-shadow:0 6px 8px rgba(51,51,51,.08);position:absolute;border:1px solid rgba(0,0,0,.1);display:none;max-width:276px;min-width:200px;background-color:#fff}._el{line-height:22px;padding:9px 14px}._em{border-top:1px solid #e6e6e6;margin-left:10px;padding-top:10px;width:92%;text-align:right}");var n=t("../mx-monitor/index");_.exports=i.View.extend({tmpl:{html:'<div class="_el"><%!$$.content%></div><div class="_em"><button type="button" class="_an _ao" mx-click="__aj()"><%=$$.enterText%></button><button type="button" class="_an _s" mx-click="__b()"><%=$$.cancelText%></button></div>',subs:[]},init:function(t){var e=this;e.__I=t.placement||"left",e.__J=t.align,e.__dH=t.content||"确认执行该操作？",e.__dI=t.enterText||"确定",e.__dJ=t.cancelText||"取消",n.__d(),e.on("destroy",function(){e.__h.off("click"),n.__f(e),n.__g()})},__i:function(t){return i.inside(t,this.id)||i.inside(t,"popcfm_"+this.id)},render:function(){var t=this;t.endUpdate();var e=o("#"+t.id);t.__h=e,e.on("click",function(e){e.preventDefault(),t.__dK(),t.__e()})},__dK:function(){var t=this;if(!t.__dL){var e="popcfm_"+t.id;t.__h.after('<div class="_ek" id="'+e+'" />'),t.updater.to(e),t.updater.digest({content:t.__dH,enterText:t.__dI,cancelText:t.__dJ}),t.__dL=o("#"+e)}},__e:function(){var t=this;if(!t.__j){t.__j=!0,n.__k(t);var e=t.__dL,_=t.__h,i=_.offset(),o=_.outerWidth(),a=_.outerHeight();e.css({display:"block"});var d=e.outerWidth(),r=e.outerHeight(),c=void 0,s=void 0;switch(t.__I){case"top":c=i.left-(d-o)/2,s=i.top-r-5;break;case"right":c=i.left+o+5,s=i.top-(r-a)/2;break;case"bottom":c=i.left-(d-o)/2,s=i.top+a+5;break;case"left":c=i.left-d-5,s=i.top-(r-a)/2}switch(t.__J){case"top":s=i.top;break;case"left":c=i.left;break;case"right":c=i.left-d+o;break;case"bottom":s=i.top-r+a}e.offset({left:c,top:s})}},__b:function(){var t=this;t.__j&&(delete t.__j,n.__f(t),t.__dL.css({display:"none"}))},"__aj<click>":function(){this.__b(),this.__h.trigger("enter")},"__b<click>":function(){this.__b()}})});