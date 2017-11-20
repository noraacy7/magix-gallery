define("mx-linkage/index",["magix","$","../mx-monitor/index"],function(e,t,i){var _=e("magix"),d=e("$"),a=e("../mx-monitor/index");_.applyStyle("_w","._dD{height:32px;padding:0 9px;position:relative;border:1px solid #e6e6e6;border-radius:4px;width:340px;line-height:32px}._dD:hover{border-color:#ccc}._dE{cursor:not-allowed;background-color:#fbfbfb}._dE:hover{border-color:#e6e6e6}._dF{color:#999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}._dG{position:absolute;border:1px solid #e6e6e6;font-size:14px;max-height:260px;overflow:auto;list-style:none;border-radius:4px;background-color:#fff;z-index:10;padding:3px 0;line-height:1.8;left:-1px;right:-1px}._dH{border-bottom:1px solid #e6e6e6;margin:0 10px;padding-bottom:3px}._dI{cursor:pointer;display:inline-block;padding:0 12px;height:29px;line-height:29px;border-radius:4px}._dI:active,._dI:focus,._dI:hover{color:#333;background-color:#f0f0f0}._dJ{margin:0 10px;padding-top:3px}._dK{width:32%;float:left;margin:0 0 2px 2px;color:#666;display:block;cursor:pointer;padding:0 12px;height:29px;line-height:29px;border-radius:4px}._dK:active,._dK:focus,._dK:hover{color:#333;background-color:#f0f0f0}._dL{margin-left:-1px}._dM{float:left;height:24px;line-height:24px;padding:0 1px;max-width:31%;overflow:hidden;margin-top:3px}._dN{cursor:pointer;border-radius:4px}._dN:active,._dN:focus,._dN:hover{color:#333;background-color:#f0f0f0}._dE ._dL{cursor:not-allowed}._dE ._dN:active,._dE ._dN:focus,._dE ._dN:hover{background-color:transparent;cursor:not-allowed}._dO,._dO:active,._dO:focus,._dO:hover{color:#fff;background-color:#6363e6}");var r=function(e,t,i){t=t||"id",i=i||"pId";for(var d={},a={},r=[],s=0,c=e.length;s<c;s++){var l=_.mix({},e[s]);d[l[t]]=l,a[l[t]]&&(l.children=a[l[t]]),_.has(l,i)&&""!==l[i]?d[l[i]]?(d[l[i]].children||(d[l[i]].children=[])).push(l):a[l[i]]?a[l[i]].push(l):a[l[i]]=[l]:r.push(l)}return{list:r,map:d}};i.exports=_.View.extend({tmpl:{html:'<div mx-guid="g0" class="_aj <%if($$.texts.length){%>_dL _ai<%}else{%>_dF<%}%>" mx-click="__f()">1</div><div class="_aj _ah _dG" id="db_<%=$$.viewId%>"><div mx-guid="g2" class="_dH">3</div><div mx-guid="g3" class="_dJ">4</div></div>',subs:[{keys:["texts","placeholder"],path:'div[mx-guid="g0"]',tmpl:'<%if($$.texts.length){for(var a=0;a<$$.texts.length;a++){%><div class="_dM _al _dN" title="<%=$$.texts[a]%>" mx-click="__cU({i:<%!a%>})"><%=$$.texts[a]%></div><%if(a<$$.texts.length-1){%><div mx-guid="g1" class="_dM">2</div><%}}}else{%> <%=$$.placeholder%> <%}%>',s:"1",attr:'class="_aj <%if($$.texts.length){%>_dL _ai<%}else{%>_dF<%}%>"',attrs:[{n:"class",p:1,f:"className"}],mask:"31"},{keys:["splitter"],path:'div[mx-guid="g1"]',pKeys:["texts","placeholder"],tmpl:"<%=$$.splitter%>",s:"2"},{keys:["headers","active"],path:'div[mx-guid="g2"]',tmpl:'<%for(var b=0;b<$$.headers.length;b++){var c=$$.headers[b]%><span title="<%=c%>" class="_dI<%if(b==$$.active){%> _dO<%}%>" <%if(b!==$$.active){%> mx-click="__cU({i:<%!b%>})" <%}%>><%=c%></span><%}%>',s:"3"},{keys:["list","selected","active","valueKey","textKey"],path:'div[mx-guid="g3"]',tmpl:"<%if($$.list&&$$.list.length){var d=$$.selected[$$.active]%><ul><%for(var e=0,f=$$.list;e<f.length;e++){var g=f[e];%><li class=\"_dK _al<%if((g[$$.valueKey]+'')==(d+'')){%> _dO<%}%>\" title=\"<%=g[$$.textKey]%>\" mx-click=\"__ca({o:'<%@g%>'})\"><%=g[$$.textKey]%></li><%}%></ul><%}%>",s:"4"}]},init:function(e){var t=this;t.assign(e),a.__e(),t.on("destroy",function(){a.__g(t),a.__h()})},assign:function(e){var t=this;t.__cK=e.placeholder;var i=e.valueKey||"id",d=e.parentKey||"pId",a=e.parentKey||"text",s=r(e.list,i,d);t.__cL=s,t.__cM=e.headers,t.__cN=0;var c=_.has(e,"selected")?e.selected:"";return c=c?(c+"").split(","):[],t.__aF=c,t.__bU=e.disabled+""=="true",t.updater.set({splitter:e.splitter||"/",textKey:a,valueKey:i,selected:c}),!0},render:function(){var e=this;e.updater.digest({placeholder:e.__cK,headers:e.__cM,viewId:e.id,texts:e.__cO(),active:e.__cN,list:e.__cP()});var t=d("#"+e.id);t.addClass("_dD"),t[e.__bU?"addClass":"removeClass"]("_dE"),e.__i=t,e.__cQ=d("#db_"+e.id)},__cO:function(){for(var e=this,t=[],i=e.__cL,_=e.__aF,d=e.updater.get("textKey"),a=0,r=_;a<r.length;a++){var s=r[a];t.push(i.map[s][d])}return t},__cP:function(){var e=this,t=e.__cL,i=e.__aF,_=e.__cN;if(0===_)return t.list;var d=i[_-1];return d?t.map[d].children:null},__cR:function(e){var t=this;t.updater.digest({active:t.__cN=e,list:t.__cP(),selected:t.__aF})},__j:function(e){return _.inside(e,this.id)},__a:function(){var e=this;e.__k&&(e.__k=!1,a.__g(e),e.__cQ.hide(),e.__cR(0))},__f:function(){var e=this;if(!e.__k){e.__k=!0,a.__l(e);var t=e.__i.position();e.__cQ.show().css({left:t.left+e.__cS,top:e.__i.outerHeight()+5})}},__cT:function(){var e=this;e.updater.digest({placeholder:e.__cK,texts:e.__cO()})},"__f<click>":function(){var e=this;e.__i.hasClass("_dE")||e.__f()},"__cU<click>":function(e){this.__cR(e.params.i)},"__ca<click>":function(e){var t=this,i=t.__cN,_=t.__cM,d=t.__aF,a=t.updater.get("valueKey"),r=e.params.o[a];(d=d.slice(0,i)).push(r),i++;var s=t.__cL;t.__aF=d,i<_.length&&s.map[r].children?t.__cR(i):(t.__cT(),t.__a(),t.__i.trigger({type:"change",selected:d}))}})});