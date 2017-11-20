define("mx-calendar/index",["magix","$","mx-time/index"],function(e,t,a){e("mx-time/index");var i=e("magix");i.applyStyle("_g","._aT{background-color:#fff;display:inline-block;border:1px solid #e6e6e6;padding:0;border-radius:4px;overflow-y:hidden;z-index:10;color:#333;text-align:center;position:relative}._aU{color:#777}._aV{height:32px;line-height:32px;padding:1px}._aW,._aX{color:#ccc;display:inline-block;padding:6px 7px;line-height:100%;vertical-align:top;cursor:pointer}._aW:focus,._aW:hover,._aX:focus,._aX:hover{color:#6363e6}._aY{display:inline-block;cursor:pointer;padding:5px 10px;border-radius:4px;line-height:1}._aY:hover{background-color:#eee}._aZ{width:245px}._b_{color:#333;background-color:#fafafa;padding:0 10px}._ba{padding:10px}._bb,._bc{padding:1px 0;position:absolute;top:-100%;left:0;right:0;-webkit-transition:top .15s;transition:top .15s;background-color:#fff}._bd{top:0}._be{height:59px;margin:2px;float:left;width:77px;cursor:pointer;line-height:59px;border-radius:4px;font-size:16px}._bf:hover,._be:hover{background:#f0f0f0}._bf,._bg{width:28px;height:28px;line-height:28px;margin:3px 2px;float:left;border-radius:4px;cursor:pointer}._bh,._bh:hover{color:#fff;background-color:#6363e6}._bi,._bi:hover{color:#eee;cursor:not-allowed;background:#fff}._bj{padding:5px}._bk,._bj{border-top:1px solid #e6e6e6}._bk{margin:10px;padding:10px 0 0;text-align:left}._bl{-webkit-transform:scaleX(-1);transform:scaleX(-1)}");var s=e("$"),n=function(e,t){return 32-new Date(e,t-1,32).getDate()},r=["日","一","二","三","四","五","六"],_=function(e){return("0"+e).slice(-2)},d=function(e){for(var t=[],a=0;a<7;a++)t[a]=r[(a+e)%7];return t},l=function(e,t,a){var i,s=e.getTime();return t&&(i=s<t.getTime()),i||(i=!!a&&s>a.getTime()),i},o=function(e,t,a,i){var s,n=parseInt(e+_(t),10);return a&&(s=n<(a=parseInt(a.getFullYear()+_(a.getMonth()),10))),!s&&i&&(s=n>(i=parseInt(i.getFullYear()+_(i.getMonth()),10))),s},c=function(e,t,a){var i;return t&&(i=e<t.getFullYear()),!i&&a&&(i=e>a.getFullYear()),i},p={y:{reg:/y+/gi,fn:function(e,t){return String(t.getFullYear()).slice(-e.length)}},M:{reg:/M+/g,fn:function(e,t,a){return a=t.getMonth()+1,_(a).slice(-e.length)}},d:{reg:/d+/gi,fn:function(e,t,a){return a=t.getDate(),_(a).slice(-e.length)}},h:{reg:/h+/gi,fn:function(e,t,a){return a=t.getHours(),_(a).slice(-e.length)}},m:{reg:/m+/g,fn:function(e,t,a){return a=t.getMinutes(),_(a).slice(-e.length)}},s:{reg:/s+/g,fn:function(e,t,a){return a=t.getSeconds(),_(a).slice(-e.length)}},S:{reg:/S+/g,fn:function(e,t,a){return a=t.getMilliseconds(),String(a).substring(0,e.length)}}},g=function(e){return e instanceof Date?e:(e=new Date(Date.parse(String(e).replace(/-/g,"/"))))instanceof Date&&"Invalid Date"!=e&&!isNaN(e)?e:null},u=function(e,t){e=g(e),t=t||"YYYY-MM-dd";var a;for(a in p)t=t.replace(p[a].reg,function(t){return p[a].fn(t,e)});return t},h=function(e){e||(e="all");var t={year:!0,month:!0,day:!0};if("all"!=e)for(var a in t)-1===e.indexOf(a)&&delete t[a];return t};a.exports=i.View.extend({tmpl:{html:'<div mx-guid="g0" class="_aT _aj" mx-contextmenu="__E()">1</div>',subs:[{keys:["types"],path:'div[mx-guid="g0"]',tmpl:'<%if($$.types.day){%><div mx-guid="g1" id="days_<%=$$.id%>" class="_ai">2</div><%}if($$.types.month){%><div id="months_<%=$$.id%>" class="_ai<%if($$.types.day){%> _bb<%}%>"><div class="_aV"><span class="__ _aW _aa" mx-click="__x()">&#xe61e;</span><h4 mx-guid="g7" mx-click="__z()" class="_aY">8</h4><span class="__ _aX _ab _bl" mx-click="__x({next:true})">&#xe61e;</span></div><div mx-guid="g8" class="_aZ _ai">9</div></div><%}if($$.types.year){%><div id="years_<%=$$.id%>" class="_ai<%if($$.types.day||$$.types.month){%> _bc<%}%>"><div class="_aV"><span class="__ _aW _aa" mx-click="__x({range:true})">&#xe61e;</span><h4 mx-guid="ga" class="_aY">11</h4><span class="__ _aX _ab _bl" mx-click="__x({range:true,next:true})">&#xe61e;</span></div><div mx-guid="gb" class="_aZ _ai">12</div></div><%}%>',s:"1"},{keys:["timeType","hasBtn"],path:'div[mx-guid="g1"]',pKeys:["types"],tmpl:'<div class="_aV"><span class="__ _aW _aa" mx-click="__w()">&#xe61e;</span><h4 mx-guid="g2" mx-click="<%if($$.types.month){%>__y<%}else{%>__z<%}%>()" class="_aY">3</h4><span class="__ _aX _bl _ab" mx-click="__w({next:true})">&#xe61e;</span></div><div class="_aZ"><div mx-guid="g3" class="_b_ _ai">4</div><div mx-guid="g4" class="_ba _ai">5</div></div><%if($$.timeType){%><div mx-guid="g5" class="_ai _bj" mx-change="__D()" mx-view="mx-time/index?time=<%!$eu($$.timeValue)%>&type=<%!$eu($$.timeType)%>"></div><%if($$.hasBtn){%><div class="_bk"><button type="button" class="_an _ao" mx-click="__a({enter:true})">确定</button><button type="button" class="_an _s" mx-click="__a()">取消</button></div><%}}%>',s:"2"},{keys:["types","year","month"],path:'h4[mx-guid="g2"]',tmpl:"<%=$$.year%>-<%=('0'+$$.month).slice(-2)%>",s:"3",attr:'mx-click="<%if($$.types.month){%>__y<%}else{%>__z<%}%>()"',attrs:[{n:"mx-click"}],mask:"211"},{keys:["weekText"],path:'div[mx-guid="g3"]',tmpl:'<%for(var a=0;a<$$.weekText.length;a++){%><span class="_bg"><%=$$.weekText[a]%></span><%}%>',s:"4"},{keys:["days"],path:'div[mx-guid="g4"]',tmpl:'<%for(var b=0;b<$$.days.length;b++){var c=$$.days[b];for(var d=0;d<c.length;d++){%><span class="_bf<%if(c[d].otherMonth){%> _aU<%}if(c[d].disabled){%> _bi<%}if(c[d].selected){%> _bh<%}%>" <%if(!c[d].disabled){%> mx-click="__C({toMonth:<%=c[d].month%>,date:\'<%=$eq(c[d].full)%>\'})" <%}%> title="<%=c[d].full%>"><%=c[d].day%></span><%}}%>',s:"5"},{keys:["timeValue"],path:'div[mx-guid="g5"]',pKeys:["types","timeType","hasBtn"],attr:'mx-view="mx-time/index?time=<%!$eu($$.timeValue)%>&type=<%!$eu($$.timeType)%>"',attrs:[{n:"mx-view",v:1}]},{keys:["year"],path:'h4[mx-guid="g7"]',tmpl:"<%=$$.year%>",s:"8"},{keys:["months"],path:'div[mx-guid="g8"]',pKeys:["types"],tmpl:'<%for(var e=0,f;e<$$.months.length;e++){f=$$.months[e]%><span class="_be<%if(f.disabled){%> _bi<%}if(f.selected){%> _bh<%}%>" <%if(!f.disabled){%> mx-click="__B({month:\'<%=$eq(f.month)%>\'})" <%}%>><%=f.month%></span><%}%>',s:"9"},{keys:["startYear","endYear"],path:'h4[mx-guid="ga"]',tmpl:"<%=$$.startYear%>-<%=$$.endYear%>",s:"11"},{keys:["years"],path:'div[mx-guid="gb"]',pKeys:["types"],tmpl:'<%for(var g=0,h;g<$$.years.length;g++){h=$$.years[g]%><span class="_be<%if(h.selected){%> _bh<%}if(h.disabled){%> _bi<%}if(!g||g==$$.years.length-1){%> _aU<%}%>" <%if(!h.disabled){%> mx-click="__A({year:\'<%=$eq(h.year)%>\'})" <%}%>><%=h.year%></span><%}%>',s:"12"}]},init:function(e){this.__d=e},render:function(){var e=this;e.update(e.__d)},__n:function(){var e=this;s("#years_"+e.id).removeClass("_bd"),s("#months_"+e.id).removeClass("_bd");var t=e.updater;if(t.get().timeType){var a=!1;e.__p&&(e.__q(e.__p),e.__r(),e.__s(),e.__t(),a=!0,delete e.__p),e.__u&&(t.set({timeValue:e.__u}),a=!0,delete e.__u),a&&t.digest()}},update:function(e){(e=e||{}).selected||(e.selected=new Date);var t=h(e.dateType),a=e.weekStart||0,i=g(e.selected),s=this,n=s.updater,r=g(e.max),_=g(e.min),l=e.timeType,o=i.getHours()+":"+i.getMinutes()+":"+i.getSeconds();n.set({types:t,timeType:l,timeValue:o,hasBtn:e.hasBtn,dateValue:u(i,e.formatter),max:r,min:_,id:s.id,weekStart:a,weekText:d(a)}),s.__q(i),s.__r(),s.__s(),s.__t(!0)},__q:function(e){var t=this.updater;(e=g(e))&&t.set({year:e.getFullYear(),month:e.getMonth()+1,selectedYear:e.getFullYear(),selectedMonth:e.getMonth()+1,selected:u(e)})},__r:function(e){for(var t=this.updater,a=t.get(),i=a.year,s=a.min,n=a.max,r=i-i%10-1,_=r+11,d=[],l=r;l<=_;l++)d.push({year:l,selected:l==a.selectedYear,disabled:c(l,s,n)});t.set({startYear:r,endYear:_,years:d}),e&&t.digest()},__s:function(e){for(var t=[],a=this.updater,i=a.get(),s=i.year,n=i.min,r=i.max,_=1;_<=12;_++)t.push({month:_,selected:s==i.selectedYear&&_==i.selectedMonth,disabled:o(s,_-1,n,r)});a.set({months:t}),e&&a.digest()},__t:function(e){var t,a,i,s,r=[],_=this.updater,d=_.get("weekStart"),o=_.get("year"),c=_.get("month"),p=(7-d+new Date(o,c-1,1).getDay())%7,g=[],h=n(o,c),m=n(o,c-1),f=_.get("max"),x=_.get("min"),y=_.get("selected");for(t=1;t<=p;t++)a=m-(p-t),i=new Date(o,c-2,a),g.push({month:c-1,full:u(i),day:a,otherMonth:!0,disabled:l(i,x,f)});for(t=1;t<=h;t++)i=new Date(o,c-1,t),s=u(i),g.push({selected:s==y,day:t,month:c,full:s,disabled:l(i,x,f)}),(t+p)%7==0&&(r.push(g),g=[]);var v=g.length;for(t=v;t<14&&(a=t-v+1,i=new Date(o,c,a),g.push({month:c+1,day:a,otherMonth:!0,full:u(i),disabled:l(i,x,f)}),(t+1)%7!=0||(r.push(g),g=[],6!=r.length));t++);_.set({days:r}),e&&_.digest()},__v:function(e){var t=this,a=t.updater.get();a.types.day?a.timeType&&a.hasBtn?e&&s("#"+t.id).trigger({type:"change",date:a.dateValue,time:a.timeType?a.timeValue:null}):s("#"+t.id).trigger({type:"change",date:a.dateValue,time:a.timeType?a.timeValue:null}):s("#"+t.id).trigger({type:"change",date:a.selectedYear+(a.types.month?"-"+("0"+a.selectedMonth).slice(-2):"")})},"__w<click>":function(e){var t=this,a=t.updater,i=a.get("month"),s=a.get("year");e.params.next?(i+=1)>12&&(i=1,s++):(i-=1)<1&&(i=12,s--),a.set({year:s,month:i}),t.__t(!0)},"__x<click>":function(e){var t=this,a=e.params,i=t.updater,s=i.get("year");a.range?s+=a.next?10:-10:s+=a.next?1:-1,i.set({year:s}),a.range?t.__r(!0):t.__s(!0)},"__y<click>":function(){var e=this;s("#months_"+e.id).addClass("_bd"),e.__s(!0)},"__z<click>":function(){var e=this;s("#years_"+e.id).addClass("_bd"),e.__r(!0)},"__A<click>":function(e){var t=e.params.year,a=this,i=a.updater.get().types;i.day||i.month?(a.updater.set({year:+t}),s("#years_"+a.id).removeClass("_bd"),i.month?a.__s(!0):a.__t(!0)):(a.__q(t+"-01-01"),a.__r(!0),a.__v())},"__B<click>":function(e){var t=e.params.month,a=this,i=a.updater,n=i.get();n.types.day?(i.set({month:+t}),s("#months_"+a.id).removeClass("_bd"),a.__t(!0)):(a.__q(n.year+"-"+t+"-01"),a.__s(!0),a.__v())},"__C<click>":function(e){var t=this;s("#days_"+t.id+" span").removeClass("_bh"),s(e.eventTarget).addClass("_bh");var a=t.updater,i=a.get("month"),n=e.params.toMonth!=i;t.__q(e.params.date),n&&(t.__r(),t.__s(),t.__t(!0)),t.__p||(t.__p=a.get("dateValue")),a.set({dateValue:e.params.date}),t.__v()},"__D<change>":function(e){e.stopPropagation();var t=this;t.__u||(t.__u=t.updater.get("timeValue")),t.updater.set({timeValue:e.time}),t.__v()},"__a<click>":function(e){var t=this;if(e.params.enter)return delete t.__p,delete t.__u,void t.__v(!0);s("#"+t.id).trigger("cancel")},"__E<contextmenu>":function(e){e.preventDefault()}},{parse:g,format:u,dateDisabled:l})});