define("mx-checkbox/__test__/storestate",["magix","../linkage","../../mx-gtip/index","../storestate","mx-pagination/index"],function(t,e,i){t("mx-pagination/index");var l=t("magix"),n=t("../linkage"),a=t("../../mx-gtip/index"),s=t("../storestate");i.exports=l.View.extend({tmpl:{html:'<h2>mx-checkbox</h2><div class="_B _ai"><table class="_aA _aB"><thead><tr><th><input type="checkbox" class="_as" linkage="example1"></th><%for(var a=0;a<5;a++){%><th>示例字段<%=a%></th><%}%></tr></thead><tbody mx-guid="g1">2</tbody><tfoot><tr><td mx-guid="g2" colspan="6" mx-view="mx-pagination/index?total=<%@100%>&step=3&page=<%@$$.list1Page%>&size=<%@$$.list1Size%>" mx-change="chageList1()" style="height:60px"></td></tr></tfoot></table><div class="_ai"><button class="_ab _a _an _ao" mx-click="showEx1()">显示选中的checkbox</button></div></div><div class="_B"><div>HTML Code:</div><pre>&lt;table class="table table-striped"&gt;\n    &lt;thead&gt;\n        &lt;tr&gt;\n            &lt;th&gt;&lt;input type="checkbox" class="checkbox" linkage="example1" /&gt;&lt;/th&gt;\n            &lt;%for(var i=0;i&lt;5;i++){%&gt;\n            &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n            &lt;%}%&gt;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody&gt;\n        &lt;%for(var i=0;i&lt;list1.length;i++){%&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&lt;input type="checkbox" class="checkbox" linkage-parent="example1" value="&lt;%=list1[i].id%&gt;" /&gt;&lt;/td&gt;\n            &lt;%for(var j=0;j&lt;5;j++){%&gt;\n            &lt;td&gt;&lt;%=list1[i][\'f\'+j]%&gt;&lt;/td&gt;\n            &lt;%}%&gt;\n        &lt;/tr&gt;\n        &lt;%}%&gt;\n    &lt;/tbody&gt;\n    &lt;tfoot&gt;\n        &lt;tr&gt;\n            &lt;mx-view\n                tag="td"\n                colspan="6"\n                path="app/gallery/mx-pagination/index"\n                total="&lt;%@100%&gt;"\n                step="3"\n                page="&lt;%@list1Page%&gt;"\n                size="&lt;%@list1Size%&gt;"\n                mx-change="chageList1()"/&gt;\n        &lt;/tr&gt;\n    &lt;/tfoot&gt;\n&lt;/table&gt;\n\n&lt;div class="clearfix"&gt;\n    &lt;button class="fr mt5 btn btn-brand" mx-click="showEx1()"&gt;显示选中的checkbox&lt;/button&gt;\n&lt;/div&gt;</pre><div class="_z">Javascript Code:</div><pre>let Magix = require(\'magix\');\nlet Linkage = require(\'app/gallery/mx-chekcbox/linkage\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nlet StoreState = require(\'app/gallery/mx-chekcbox/storestate\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@storestate.html\',\n    mixins: [Linkage, GTip, StoreState],\n    init() {\n        let list1 = [];\n        for (let j = 0; j &lt; 100; j++) {\n            let temp = {\n                id: j\n            };\n            for (let i = 0; i &lt; 5; i++) {\n                temp[\'f\' + i] = \'字段内容\' + j + \'_\' + i;\n            }\n            list1.push(temp);\n        }\n        let me = this;\n        me.$list1 = list1;\n        me.$list1Page = 1;\n        me.$list1Size = 10;\n    },\n    getList(type) {\n        let me = this;\n        let list = me[\'$\' + type];\n        let page = me[\'$\' + type + \'Page\'];\n        let size = me[\'$\' + type + \'Size\'];\n        return list.slice((page - 1) * size, page * size);\n    },\n    render() {\n        let me = this;\n        me.updater.digest({\n            list1: me.getList(\'list1\'),\n            list1Page: me.$list1Page,\n            list1Size: me.$list1Size\n        });\n    },\n    \'chageList1&lt;change&gt;\' (e) {\n        let me = this;\n        me.$list1Page = e.page;\n        me.$list1Size = e.size;\n        me.render();\n    },\n    \'showEx1&lt;click&gt;\' () {\n        let list = this.getStoreState(\'example1\');\n        if (list.length) {\n            this.gtipRT(\'选中的值：\' + list.join(\',\'));\n        } else {\n            this.gtipRT(\'请选择checkbox\');\n        }\n    }\n});</pre></div>',subs:[{keys:["list1"],path:'tbody[mx-guid="g1"]',tmpl:'<%for(var b=0;b<$$.list1.length;b++){%><tr><td><input type="checkbox" class="_as" linkage-parent="example1" value="<%=$$.list1[b].id%>"></td><%for(var c=0;c<5;c++){%><td><%=$$.list1[b][\'f\'+c]%></td><%}%></tr><%}%>',s:"2"},{keys:["list1Page","list1Size"],path:'td[mx-guid="g2"]',attr:'mx-view="mx-pagination/index?total=<%@100%>&step=3&page=<%@$$.list1Page%>&size=<%@$$.list1Size%>"',attrs:[{n:"mx-view",v:1}]}]},mixins:[a,s,n],init:function(){for(var t=[],e=0;e<100;e++){for(var i={id:e},l=0;l<5;l++)i["f"+l]="字段内容"+e+"_"+l;t.push(i)}var n=this;n.$list1=t,n.$list1Page=1,n.$list1Size=10},getList:function(t){var e=this,i=e["$"+t],l=e["$"+t+"Page"],n=e["$"+t+"Size"];return i.slice((l-1)*n,l*n)},render:function(){var t=this;t.updater.digest({list1:t.getList("list1"),list1Page:t.$list1Page,list1Size:t.$list1Size})},"chageList1<change>":function(t){var e=this;e.$list1Page=t.page,e.$list1Size=t.size,e.render()},"showEx1<click>":function(){var t=this.getStoreState("example1");t.length?this.gtipRT("选中的值："+t.join(",")):this.gtipRT("请选择checkbox")}})});