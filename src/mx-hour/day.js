define("mx-hour/day",["magix","$","./index"],(t,i,e)=>{var a=t("magix"),n=t("$"),d=t("./index");a.applyStyle("_u","._dm{padding:0;height:38.4px;text-align:center}"),e.exports=a.View.extend({tmpl:{html:'<table class="_W"><thead><tr><%for(var _=0;_<24;_++){%><th class="_dm"><%=(\'0\'+_).slice(-2)%></th><%}%></tr></thead><tbody mx-guid="g1" id="range_<%=$$.viewId%>" mx-view="mx-hour/index" mx-change="__cx()"></tbody></table>',subs:[{keys:["viewId"],path:'tbody[mx-guid="g1"]',attr:'id="range_<%=$$.viewId%>"',attrs:[{n:"id",p:1}]}]},init:function(t){this.__cw=t.hours,this.__h=n("#"+this.id)},render:function(){this.updater.digest({viewId:this.id}),this.val(this.__cw)},val:function(t){var i=this;return t&&(i.__cw=d.improve(t),n("#range_"+i.id).invokeView("val",[t])),i.__cw},"__cx<change>":function(t){t.stopPropagation(),this.__cw=t.range,this.__h.val(t.range).trigger({type:"change",hours:t.range})}})});