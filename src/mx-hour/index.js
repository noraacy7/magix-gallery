define("mx-hour/index",["magix","$","mx-dragselect/index"],(e,a,d)=>{e("mx-dragselect/index");var _=e("magix");_.applyStyle("_v","._dn{padding:0;height:38.4px;overflow:hidden;cursor:default;min-width:1px}._do{opacity:0}._dp{background-color:#f37b63}._dq{border:none}._dr{border-right:1px solid #e6e6e6}");var r=e("$");d.exports=_.View.extend({tmpl:{html:'<tr mx-guid="g0" mx-change="__e()" mx-dragbegin="__aF()" mx-dragfinish="__aG()" mx-view="mx-dragselect/index">1</tr>',subs:[{keys:["noBorder"],path:'tr[mx-guid="g0"]',tmpl:'<%for(var _=0;_<24;_++){%><td class="_dn<%if($$.noBorder){%> _dq<%if(_<23){%> _dr<%}}%>" data-hour="<%!_%>"><span class="_do"><%!(\'0\'+_).slice(-2)%></span></td><%}%>',s:"1"}]},init:function(e){this.__cy=e.range,this.__cz="no"==e.border},render:function(){var e=this;e.updater.digest({noBorder:e.__cz});var a=r("#"+e.id);e.__h=a,e.__cw=a.find("._dn"),e.__cy&&e.val(e.__cy)},val:function(e){var a=this,d=a.__cw;if(e||""===e){var _={};d.each(function(a,d){d=r(d),"1"==e.charAt(a)?(_[a]=1,d.addClass("_dp")):d.removeClass("_dp")}),a.__aC=_}else e=[],d.each(function(a,d){d=r(d),a<24&&e.push(d.hasClass("_dp")?1:0)}),e=e.join("");return e},__u:function(){var e=this,a=e.__aE,d=e.val();a!=d&&e.__h.val(d).trigger({type:"change",range:d})},"__e<change,click>":function(e){e.stopPropagation();var a=r(e.node),d=this,_=a.data("hour"),i=d.__aC,t=d.__aD;"add"==e.action?i[_]?(a.removeClass("_dp"),delete i[_],"drag"==e.mode&&(t[_]=1)):(a.addClass("_dp"),i[_]=1,"drag"==e.mode&&delete t[_]):"remove"==e.action&&(t[_]?(a.addClass("_dp"),i[_]=1,"drag"==e.mode&&delete t[_]):(a.removeClass("_dp"),delete i[_],"drag"==e.mode&&(t[_]=1))),"click"==e.mode&&d.__u()},"__aF<dragbegin>":function(e){e.stopPropagation();this.__aE=this.val(),this.__aD={}},"__aG<dragfinish>":function(e){e.stopPropagation();this.__u(),delete this.__aD}},{improve:function(e){e||(e="");for(var a=0;a<24;)e.charAt(a)||(e+="0"),a++;return e}})});