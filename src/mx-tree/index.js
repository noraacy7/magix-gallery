define("mx-tree/index",["magix","./branch"],function(e,t,i){e("./branch");var r=e("magix"),p=function(e,t,i){for(var p={},n={},a=[],l=0,x=e.length;l<x;l++){var d=r.mix({},e[l]);p[d[t]]=d,n[d[t]]&&(d.children=n[d[t]]),r.has(d,i)&&""!==d[i]?p[d[i]]?(p[d[i]].children||(p[d[i]].children=[])).push(d):n[d[i]]?n[d[i]].push(d):n[d[i]]=[d]:a.push(d)}return{list:a,map:p}};r.applyStyle("_N",'._fx{padding-left:15px}._fy{line-height:22px;padding:0 4px;position:relative;border-left:1px solid #e6e6e6}._fy:before{content:"";position:absolute;border-top:1px solid #e6e6e6;width:12px;left:0;top:10px}._fz{width:14px;height:14px;float:left;text-align:center;font-weight:800;margin-left:-11px;margin-top:-2px;position:relative;z-index:2}._fA{display:inline-block;background-color:#fff;width:10px;height:10px;line-height:6px;border:1px solid #e6e6e6;font-size:11px}._fB{margin-left:10px}._fC{padding:0}._fD{border-left-color:transparent}._fD:after{border-left:1px solid #e6e6e6;top:-2px}._fD:after,._fE:after{content:"";position:absolute;left:-1px;width:1px;height:13px}._fE:after{border-left:1px solid #fff;top:-3px}._fF{padding:1px 3px;line-height:1}._fG{margin:2px 2px 0 0}'),i.exports=r.View.extend({tmpl:{html:'<div mx-guid="g0" id="tree_<%=$$.id%>" mx-view="mx-tree/branch?valueKey=<%!$eu($$.valueKey)%>&textKey=<%!$eu($$.textKey)%>&parentKey=<%!$eu($$.parentKey)%>&fromTop=<%@true%>&list=<%@$$.list%>"></div>',subs:[{keys:["id","valueKey","textKey","parentKey","list"],path:'div[mx-guid="g0"]',attr:'id="tree_<%=$$.id%>" mx-view="mx-tree/branch?valueKey=<%!$eu($$.valueKey)%>&textKey=<%!$eu($$.textKey)%>&parentKey=<%!$eu($$.parentKey)%>&fromTop=<%@true%>&list=<%@$$.list%>"',attrs:[{n:"id",p:1},{n:"mx-view",v:1}]}]},init:function(e){this.__d=e},render:function(){var e=this,t=e.__d,i=t.valueKey||"id",r=t.parentKey||"pId",n=p(t.list,i,r);e.updater.digest({id:e.id,valueKey:i,parentKey:r,textKey:t.textKey||"text",list:n.list})}})});