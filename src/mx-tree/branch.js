define("mx-tree/branch",["magix","$","./branch"],(e,i,a)=>{e("./branch");var t=e("magix"),n=e("$"),r=t.Vframe;a.exports=t.View.extend({tmpl:{html:'<ul mx-guid="g0">1</ul>',subs:[{keys:["list","fromTop","valueKey","textKey"],path:'ul[mx-guid="g0"]',tmpl:'<%for(var _=0,a;_<$$.list.length;_++){a=$$.list[_]%><li class="_fz<%if(!_&&$$.fromTop){%> _fF<%}if(_==$$.list.length-1){%> _fE<%}%>"><div class="_fA<%if(a.children){%> _ad<%}%>" <%if(a.children){%> mx-click="__ax({id:\'<%=$eq(a[$$.valueKey])%>\'})" <%}%>><%if(a.children){%><span class="_fB">+</span><%}%></div><div class="_fC"><label class="_fD"><input class="_as _fH _aa" type="checkbox" mx-change="__fQ()" id="cb_<%=$$.id%>_<%=a[$$.valueKey]%>" value="<%=a[$$.valueKey]%>" name="<%=$$.id%>"><span class="_ac _fG _aa"><%=a[$$.textKey]%></span></label></div><%if(a.children){%><div id="<%=$$.id%>_<%=a[$$.valueKey]%>" class="_fy _ah" mx-view="mx-tree/branch?textKey=<%!$eu($$.textKey)%>&valueKey=<%!$eu($$.valueKey)%>&list=<%@a.children%>"></div><%}%></li><%}%>',s:"1"}]},init:function(e){this.updater.set(e)},render:function(){this.updater.digest({id:this.id})},__gj:function(){var e,i,a=this.id;return n("#"+a+' input[name="'+a+'"]').each(function(a,t){t.indeterminate?e=i=!0:t.checked?e=!0:i=!0}),e&&i?3:e?2:1},__gk:function(e){var i=this.owner.parent(),a=0;if(i){for(var t=0,l=i.children();t<l.length;t++){var _=l[t],c=r.get(_);c&&(a|=c.invoke("__gj"))}var d=n("#cb_"+e);3===a?d.prop("indeterminate",!0):(d.prop("indeterminate",!1),d.prop("checked",2==a)),i.invoke("__gk",[i.id])}},__ce:function(e){var i=this.id;n("#"+i+' input[name="'+i+'"]').prop("indeterminate",!1).prop("checked",e);for(var a=0,t=this.owner.children();a<t.length;a++){var l=t[a],_=r.get(l);_&&_.invoke("__ce",[e])}},"__ax<click>":function(e){var i=n("#"+this.id+"_"+e.params.id),a=n(e.eventTarget).find("span");"+"==n.trim(a.html())?(i.slideDown(),a.html("-")):(i.slideUp(),a.html("+"))},"__fQ<change>":function(e){var i=r.get(this.id+"_"+e.eventTarget.value);i&&i.invoke("__ce",[e.eventTarget.checked]),this.__gk(this.id)}})});