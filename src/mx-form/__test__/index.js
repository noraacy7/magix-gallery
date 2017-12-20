define("mx-form/__test__/index",["magix","../index","mx-color/picker","mx-taginput/index","mx-dropdown/index","mx-time/picker","mx-calendar/datepicker","mx-slider/index","mx-number/index","mx-slider/range","mx-progress/index","mx-uploader/index","./sub"],(t,a,e)=>{t("mx-color/picker"),t("mx-taginput/index"),t("mx-dropdown/index"),t("mx-time/picker"),t("mx-calendar/datepicker"),t("mx-slider/index"),t("mx-number/index"),t("mx-slider/range"),t("mx-progress/index"),t("mx-uploader/index"),t("./sub");var l=t("magix"),i=t("../index");e.exports=l.View.extend({tmpl:{html:'<h2>mx-form</h2><h3>示例表单</h3><div class="_B _ai"><div style="width:600px;border:solid 1px #ccc;border-radius: 5px;padding: 25px 0;"><div class="_av _ai"><label class="_aw _ax">活动名称：</label><div class="_ay"><input mx-guid="g0" mx-ssid="0" class="_ap" placeholder="请填写活动名称" value="<%=$$.name%>" mx-change="___({c:[{p:\'name\',f:{required:true,blength:[20,50]}}]})" mx-focusout="___()" mx-focusin="___({m:\'__a\',a:{}})"></div></div><div class="_av _ai"><label class="_aw">色彩：</label><div class="_ay"><input mx-view="mx-color/picker" class="_ap"></div></div><div class="_av"><label class="_aw _ax">标签：</label><div class="_ay"><div mx-guid="g1" mx-ssid="1" mx-view="mx-taginput/index?list=<%@$$.list%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%A0%87%E7%AD%BE&selected=<%@$$.tags%>" mx-change="___({c:[{p:\'tags\',f:{required:true}}]})" mx-focusout="___()" mx-focusin="___()"></div></div></div><div class="_av"><label class="_aw _ax">活动时间：</label><div class="_ay"><div mx-guid="g2" mx-ssid="2" mx-view="mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F&selected=<%@$$.day%>" mx-change="___({c:[{p:\'day\',f:{required:true}}]})" mx-focusout="___()" mx-focusin="___()" style="width:180px;"><item value="mon">周一</item><item value="wed">周三</item><item value="thu">周四</item><item value="fri">周五</item><item value="sat">周六</item></div><span class="_ac _s _g">-</span><input mx-guid="g3" mx-ssid="3" class="_ap" style="width:145px" placeholder="请选择时间" value="<%=$$.time%>" mx-change="___({c:[{p:\'time\',f:{required:true}}]})" mx-focusout="___()" mx-focusin="___()" mx-view="mx-time/picker"></div></div><div class="_av"><label class="_aw">checkbox：</label><div class="_ay"><label class="_h _am"><input type="checkbox" name="cb" value="c1" class="_as" mx-change="___({c:[{p:\'checkbox\'}]})" mx-focusout="___()" mx-focusin="___()" disabled="disabled" checked="checked">c1</label><label class="_h"><input type="checkbox" name="cb" value="c2" class="_as" mx-change="___({c:[{p:\'checkbox\'}]})" mx-focusout="___()" mx-focusin="___()">c2</label><label class="_h"><input type="checkbox" mx-change="___({c:[{p:\'checkbox\'}]})" mx-focusout="___()" mx-focusin="___()" name="cb" value="c3" class="_au" disabled="disabled">c3</label><label class="_h"><input type="checkbox" mx-change="___({c:[{p:\'checkbox\'}]})" mx-focusout="___()" mx-focusin="___()" name="cb" value="c4" class="_au">c4</label></div></div><div class="_av"><label class="_aw">radio：</label><div class="_ay"><label class="_h _am"><input checked="checked" disabled="disabled" type="radio" mx-change="___({c:[{p:\'radio\'}]})" mx-focusout="___()" mx-focusin="___()" value="r1" class="_at" name="magix">r1</label><label class="_h"><input type="radio" mx-change="___({c:[{p:\'radio\'}]})" mx-focusout="___()" mx-focusin="___()" value="r2" class="_at" name="magix">r2</label><label class="_h"><input type="radio" mx-change="___({c:[{p:\'radio\'}]})" mx-focusout="___()" mx-focusin="___()" value="r3" class="_at" name="magix">r3</label></div></div><div class="_av"><label class="_aw">日期：</label><div class="_ay"><input mx-guid="g4" mx-view="mx-calendar/datepicker" class="_ap" placeholder="请选择开始日期" value="<%=$$.dateStart%>" mx-change="___({c:[{p:\'dateStart\'}]})" mx-focusout="___()" mx-focusin="___()" style="width:162px;"><span class="_ac _s _g">-</span><input mx-guid="g5" mx-view="mx-calendar/datepicker" class="_ap" placeholder="请选择结束日期" value="<%=$$.dateEnd%>" mx-change="___({c:[{p:\'dateEnd\'}]})" mx-focusout="___()" mx-focusin="___()" style="width:162px;"></div></div><div class="_av"><label class="_aw">范围：</label><div class="_ay"><div mx-guid="g6" mx-change="___({c:[{p:\'range\'}]})" mx-focusout="___()" mx-focusin="___()" mx-view="mx-slider/index?max=200&min=20&value=<%@$$.range%>&step=0.2"></div></div></div><div class="_av"><label class="_aw">数字：</label><div class="_ay"><div mx-view="mx-number/index"></div></div></div><div class="_av"><label class="_aw">范围：</label><div class="_ay"><div mx-guid="g7" mx-change="___({c:[{p:\'range1\'}]})" mx-focusout="___()" mx-focusin="___()" mx-view="mx-slider/range?max=500&min=200&value=<%@$$.range1%>&step=10"></div></div></div><div class="_av"><label class="_aw">进度条：</label><div class="_ay"><div mx-view="mx-progress/index?value=0.35"></div></div></div><div class="_av"><label class="_aw">封面：</label><div class="_ay"><button class="_an _ao" mx-view="mx-uploader/index?action=.%2F&name=file1&multiple=true">上传文件</button></div></div><div class="_av"><label class="_aw">备注：</label><div class="_ay"><textarea mx-guid="g8" mx-ssid="4" class="_aq" rows="8" mx-change="___({c:[{p:\'mark\',f:{maxLength:10}}]})" mx-focusout="___()" mx-focusin="___()"><%=$$.mark%></textarea></div></div><div mx-guid="g9" mx-ssid="5" mx-view="mx-form/__test__/sub?nameX1=<%@$$.name_x1%>" mx-change="___({c:[{p:\'name_x1\',f:{from:\'nameX1\'}},{p:\'de\',f:{from:\'name_sub1\'}}]})" mx-focusout="___()" mx-focusin="___()"></div><div class="_az"><button class="_an _ao" mx-click="isValid()">isValid</button><button class="_an _ao _t" mx-click="getData()">getData</button></div></div></div><div class="_B"><div>HTML Code:</div><pre>&lt;div class="form-item clearfix"&gt;\n    &lt;label class="form-label form-required"&gt;活动名称：&lt;/label&gt;\n    &lt;div class="form-content"&gt;&lt;input class="input" placeholder="请填写活动名称" value="&lt;%:name{required:true,blength:[20,50]}%&gt;" /&gt;&lt;/div&gt;\n&lt;/div&gt;\n\n&lt;div class="form-item clearfix"&gt;\n    &lt;label class="form-label"&gt;色彩：&lt;/label&gt;\n    &lt;div class="form-content"&gt;&lt;input mx-view="app/gallery/mx-color/picker" class="input" /&gt;&lt;/div&gt;\n&lt;/div&gt;\n\n&lt;div class="form-item"&gt;\n    &lt;label class="form-label form-required"&gt;活动时间：&lt;/label&gt;\n    &lt;div class="form-content"&gt;\n        &lt;mx-vframe src="app/gallery/mx-dropdown/index"\n            searchbox="true"\n            empty-text="请选择日期"\n            selected="&lt;%:day{required:true}%&gt;" style="width:180px;"&gt;\n            &lt;item value="mon"&gt;周一&lt;/item&gt;\n            &lt;item value="wed"&gt;周三&lt;/item&gt;\n            &lt;item value="thu"&gt;周四&lt;/item&gt;\n            &lt;item value="fri"&gt;周五&lt;/item&gt;\n            &lt;item value="sat"&gt;周六&lt;/item&gt;\n        &lt;/mx-vframe&gt;\n        &lt;span class="ib ml5 mr5"&gt;-&lt;/span&gt;\n        &lt;input class="input" style="width:145px" placeholder="请选择时间" value="&lt;%:time{required:true}%&gt;" mx-view="app/gallery/mx-time/picker" /&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n\n&lt;div class="form-item"&gt;\n    &lt;label class="form-label form-required"&gt;标签：&lt;/label&gt;\n    &lt;div class="form-content"&gt;\n        &lt;mx-vframe src="app/gallery/mx-taginput/index"\n            list="&lt;%@list%&gt;"\n            placeholder="请选择标签"\n            selected="&lt;%:tags{required:true}%&gt;"\n        &gt;&lt;/mx-vframe&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class="form-item"&gt;\n    &lt;label class="form-label"&gt;checkbox：&lt;/label&gt;\n    &lt;div class="form-content"&gt;\n        &lt;label class="mr10"&gt;\n            &lt;mx-input type="checkbox" &lt;%:checkbox%&gt; name="cb" value="c1" class="checkbox" /&gt;c1\n        &lt;/label&gt;\n        &lt;label class="mr10"&gt;\n            &lt;mx-input type="checkbox" &lt;%:checkbox%&gt; name="cb" value="c2" class="checkbox" /&gt;c2\n        &lt;/label&gt;\n        &lt;label class="mr10"&gt;\n            &lt;mx-input type="checkbox" &lt;%:checkbox%&gt; name="cb" value="c3" class="checkbox" /&gt;c3\n        &lt;/label&gt;\n        &lt;label class="mr10"&gt;\n            &lt;mx-input type="checkbox" &lt;%:checkbox%&gt; name="cb" value="c4" class="checkbox" /&gt;c4\n        &lt;/label&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class="form-item"&gt;\n    &lt;label class="form-label"&gt;radio：&lt;/label&gt;\n    &lt;div class="form-content"&gt;\n        &lt;label class="mr10"&gt;\n            &lt;mx-input type="radio" &lt;%:radio%&gt; value="r1" class="radio" name="magix" /&gt;r1\n        &lt;/label&gt;\n        &lt;label class="mr10"&gt;\n            &lt;mx-input type="radio" &lt;%:radio%&gt; value="r2" class="radio" name="magix" /&gt;r2\n        &lt;/label&gt;\n        &lt;label class="mr10"&gt;\n            &lt;mx-input type="radio" &lt;%:radio%&gt; value="r3" class="radio" name="magix" /&gt;r3\n        &lt;/label&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class="form-item"&gt;\n    &lt;label class="form-label"&gt;日期：&lt;/label&gt;\n    &lt;div class="form-content"&gt;\n        &lt;input mx-view="app/gallery/mx-calendar/datepicker" class="input" placeholder="请选择开始日期" value="&lt;%:dateStart%&gt;" style="width:162px;"&gt;\n        &lt;span class="ib ml5 mr5"&gt;-&lt;/span&gt;\n        &lt;input mx-view="app/gallery/mx-calendar/datepicker" class="input" placeholder="请选择结束日期" value="&lt;%:dateEnd%&gt;" style="width:162px;"&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class="form-item"&gt;\n    &lt;label class="form-label"&gt;范围：&lt;/label&gt;\n    &lt;div class="form-content"&gt;\n        &lt;mx-vframe mx-view="app/gallery/mx-slider/index"\n            max="200"\n            min="0"\n            value="&lt;%:range%&gt;"\n            step="0.2"\n        &gt;&lt;/mx-vframe&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class="form-item"&gt;\n    &lt;label class="form-label"&gt;范围：&lt;/label&gt;\n    &lt;div class="form-content"&gt;\n        &lt;mx-vframe mx-view="app/gallery/mx-slider/range"\n            max="500"\n            min="200"\n            value="&lt;%:range1%&gt;"\n            step="10"\n        &gt;&lt;/mx-vframe&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class="form-item"&gt;\n    &lt;label class="form-label"&gt;封面：&lt;/label&gt;\n    &lt;div class="form-content"&gt;\n        &lt;mx-vframe\n            tag="button"\n            class="btn btn-brand"\n            src="app/gallery/mx-uploader/index"\n            action="./"\n            name="file1"\n            multiple="true"\n        &gt;上传文件&lt;/button&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n\n&lt;div class="form-item"&gt;\n    &lt;label class="form-label"&gt;备注：&lt;/label&gt;\n    &lt;div class="form-content"&gt;\n        &lt;textarea class="textarea" rows="8"&gt;&lt;%:mark{maxLength:10}%&gt;&lt;/textarea&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class="form-footer"&gt;\n    &lt;button class="btn btn-brand" mx-click="isValid()"&gt;isValid&lt;/button&gt;\n    &lt;button class="btn btn-brand ml10" mx-click="getData()"&gt;getData&lt;/button&gt;\n&lt;/div&gt;</pre><div class="_z">Javascript Code:</div><pre>let Magix = require(\'magix\');\nlet Form = require(\'app/gallery/mx-form/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [Form],\n    render() {\n        let me = this;\n        me.updater.digest({\n            checkbox: [],\n            range: 0,\n            range1: [230, 300],\n            list: [111111111111111, 222222222222222, 333333333333, 44444444444444]\n        });\n    },\n    \'isValid&lt;click&gt;\' () {\n        console.log(this.isValid());\n    },\n    \'getData&lt;click&gt;\' () {\n        let src = this.updater.get();\n        let data = this.fromKeys(src, \'name,day,time,tags,checkbox,radio,dateStart,dateEnd,range,range1,mark\');\n        console.log(data);\n    }\n});</pre></div>',subs:[{keys:["name"],path:'input[mx-guid="g0"]',attr:'value="<%=$$.name%>"',attrs:[{n:"value",q:1,p:1}]},{keys:["list","tags"],path:'div[mx-guid="g1"]',attr:'mx-view="mx-taginput/index?list=<%@$$.list%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%A0%87%E7%AD%BE&selected=<%@$$.tags%>"',attrs:[{n:"mx-view",v:1}]},{keys:["day"],path:'div[mx-guid="g2"]',attr:'mx-view="mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F&selected=<%@$$.day%>"',attrs:[{n:"mx-view",v:1}]},{keys:["time"],path:'input[mx-guid="g3"]',attr:'value="<%=$$.time%>"',attrs:[{n:"value",q:1,p:1}]},{keys:["dateStart"],path:'input[mx-guid="g4"]',attr:'value="<%=$$.dateStart%>"',attrs:[{n:"value",q:1,p:1}]},{keys:["dateEnd"],path:'input[mx-guid="g5"]',attr:'value="<%=$$.dateEnd%>"',attrs:[{n:"value",q:1,p:1}]},{keys:["range"],path:'div[mx-guid="g6"]',attr:'mx-view="mx-slider/index?max=200&min=20&value=<%@$$.range%>&step=0.2"',attrs:[{n:"mx-view",v:1}]},{keys:["range1"],path:'div[mx-guid="g7"]',attr:'mx-view="mx-slider/range?max=500&min=200&value=<%@$$.range1%>&step=10"',attrs:[{n:"mx-view",v:1}]},{keys:["mark"],path:'textarea[mx-guid="g8"]'},{keys:["name_x1"],path:'div[mx-guid="g9"]',attr:'mx-view="mx-form/__test__/sub?nameX1=<%@$$.name_x1%>"',attrs:[{n:"mx-view",v:1}]}]},mixins:[i],render:function(){this.updater.digest({keys:["aa","bb","cc"],name_x1:"----",user:[{name:"a"},{name:"b"},{name:"c"},{name:"d"},{name:"e"}],checkbox:[],range:2,range1:[230,300],list:[0x650e124ef1c7,0xca1c249de38e,333333333333,44444444444444]})},"isValid<click>":function(){},"getData<click>":function(){var t=this.updater.get();this.fromKeys(t,"name,day,time,tags,checkbox,radio,dateStart,dateEnd,range,range1,mark,name_x1,de")},"__a<focusin>":function(t){},"delete<click>":function(t){var a=this.updater.get("user");a.splice(t.params.key,1),this.updater.digest({user:a})}})});