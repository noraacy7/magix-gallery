define("mx-table/__test__/index",["magix","../../mx-checkbox/linkage","../sticky","../index","../attach","../rwd"],function(t,l,d){t("../sticky"),t("../index"),t("../attach"),t("../rwd");var e=t("magix"),a=t("../../mx-checkbox/linkage");e.applyStyle("_f","._aS{background:red}"),d.exports=e.View.extend({tmpl:{html:'<h2>mx-table</h2><h3>固定表头</h3><div class="_B _ai"><div mx-view="mx-table/sticky"><table class="_aA _aB"><thead><tr><th colspan="3">合并列测试</th><th colspan="3">合并列测试</th></tr><tr><th><input type="checkbox" class="_as" linkage="example1"></th><%for(var a=0;a<5;a++){%><th>示例字段<%=a%></th><%}%></tr></thead><tbody><%for(var b=0;b<10;b++){%><tr><td><input type="checkbox" class="_as" linkage-parent="example1" value="ex1_<%=b%>"></td><%for(var c=0;c<5;c++){%><td>示例字段内容<%=c%></td><%}%></tr><%}%></tbody></table></div></div><div class="_B"><div>HTML Code:</div><pre>&lt;mx-view path="app/gallery/mx-table/sticky"&gt;\n    &lt;table class="table table-striped"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th&gt;&lt;input type="checkbox" class="checkbox" linkage="example1" /&gt;&lt;/th&gt;\n                &lt;%for(var i=0;i&lt;5;i++){%&gt;\n                &lt;th&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;%for(var i=0;i&lt;10;i++){%&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&lt;input type="checkbox" class="checkbox" linkage-parent="example1" value="ex1_&lt;%=i%&gt;" /&gt;&lt;/td&gt;\n                &lt;%for(var j=0;j&lt;5;j++){%&gt;\n                &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n            &lt;%}%&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-view&gt;</pre></div><h3 class="_f">固定列</h3><div class="_B _ai"><div mx-view="mx-table/index?rwdRange=2%2C-1"><table class="_aA _aB"><thead><tr><th style="width:50px"><input type="checkbox" class="_as" linkage="example2"></th><%for(var d=0;d<25;d++){%><th style="width:200px">示例字段<%=d%></th><%}%><th style="width:100px">操作</th><th style="width:200px">操作</th></tr></thead><tbody><%for(var e=0;e<10;e++){%><tr><td><input type="checkbox" class="_as" linkage-parent="example2" value="ex1_<%=e%>"></td><%for(var f=0;f<25;f++){%><td>示例字段内容示例字段内容示例字段内容示例字段内容示例字段内容示例字段内容<%=f%></td><%}%><td><a href="#">删除</a><br><a href="#">报告</a><br><%if(e%3){%><a href="#">代码</a><br><a href="#">备注</a><br><a href="#">更多</a><br><%}%></td><td>adf</td></tr><%}%></tbody></table></div></div><div class="_B"><div>HTML Code:</div><pre>&lt;mx-table rwd-range="2,-1"&gt;\n    &lt;table class="table table-striped"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th style="width:50px"&gt;&lt;input type="checkbox" class="checkbox" linkage="example2" /&gt;&lt;/th&gt;\n                &lt;%for(var i=0;i&lt;25;i++){%&gt;\n                &lt;th style="width:200px"&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n                &lt;%}%&gt;\n                &lt;th style="width:100px"&gt;操作&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;%for(var i=0;i&lt;10;i++){%&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&lt;input type="checkbox" class="checkbox" linkage-parent="example2" value="ex1_&lt;%=i%&gt;" /&gt;&lt;/td&gt;\n                &lt;%for(var j=0;j&lt;25;j++){%&gt;\n                &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n                &lt;%}%&gt;\n                &lt;td&gt;\n                    &lt;a href="#"&gt;删除&lt;/a&gt;&lt;br /&gt;\n                    &lt;a href="#"&gt;报告&lt;/a&gt;&lt;br /&gt;\n                    &lt;%if(i%3){%&gt;\n                    &lt;a href="#"&gt;代码&lt;/a&gt;&lt;br /&gt;\n                    &lt;a href="#"&gt;备注&lt;/a&gt;&lt;br /&gt;\n                    &lt;a href="#"&gt;更多&lt;/a&gt;&lt;br /&gt;\n                    &lt;%}%&gt;\n                &lt;/td&gt;\n            &lt;/tr&gt;\n            &lt;%}%&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;</pre></div><h3 class="_f">固定列和表头</h3><div class="_B _ai"><div mx-view="mx-table/index?rwdRange=2%2C-2&sticky=true&rowHoverClass=_aS"><table class="_aA _aB"><thead><tr><th style="width:50px"><input type="checkbox" class="_as" linkage="example3"></th><%for(var g=0;g<25;g++){%><th style="width:200px">示例字段<%=g%></th><%}%></tr></thead><tbody><%for(var h=0;h<10;h++){%><tr><td><input type="checkbox" class="_as" linkage-parent="example3" value="ex1_<%=h%>"></td><%for(var i=0;i<25;i++){%><td>示例字段内容<%=i%></td><%}%></tr><%}%></tbody></table></div></div><div class="_B"><div>HTML Code:</div><pre>&lt;mx-view path="app/gallery/mx-table/index" rwd-range="2,-2" sticky="true"&gt;\n    &lt;table class="table table-striped"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th style="width:50px"&gt;&lt;input type="checkbox" class="checkbox" linkage="example3" /&gt;&lt;/th&gt;\n                &lt;%for(var i=0;i&lt;25;i++){%&gt;\n                &lt;th style="width:200px"&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;%for(var i=0;i&lt;10;i++){%&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&lt;input type="checkbox" class="checkbox" linkage-parent="example3" value="ex1_&lt;%=i%&gt;" /&gt;&lt;/td&gt;\n                &lt;%for(var j=0;j&lt;25;j++){%&gt;\n                &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n            &lt;%}%&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-view&gt;</pre></div><h3 class="_f">自由组装</h3><div>当需要高度自定义时，可以使用该模式，按要求处理相应的内容即可</div><div class="_B _ai"><div mx-view="mx-table/attach?sticky=true&rowHoverClass=_aS"><div table-role="main"><table class="_aA _aB" style="width:4140px"><thead><tr><th rowspan="2" style="width:140px"></th><th rowspan="2" style="width:2600px">eee</th><th colspan="2">bb</th><th colspan="3">xxxx</th><th colspan="2"></th></tr><tr><th style="width:200px">111</th><th style="width:200px">111</th><th style="width:200px">111</th><th style="width:200px">111</th><th style="width:200px">111</th><th style="width:200px"></th><th style="width:200px"></th></tr></thead><tbody><tr><td style="width:140px"></td><td style="width:2600px">1111</td><td style="width:200px">2222</td><td style="width:200px">333</td><td style="width:200px">aaa</td><td style="width:200px">1111</td><td style="width:200px">2222</td><td style="width:200px"></td><td style="width:200px"></td></tr><tr><td></td><td>1111</td><td>2222</td><td>333<br>eeeeee</td><td>aaa</td><td>1111</td><td>2222</td><td></td><td></td></tr><tr><td></td><td>1111<br>aaaa</td><td>2222</td><td>333</td><td>aaa</td><td>1111</td><td>2222</td><td></td><td></td></tr></tbody></table></div><table class="_aA _aB" table-role="left-sticky" style="width:140px"><thead><tr><th style="width:140px;height:85px">aa</th></tr></thead><tbody><tr><td>aaa</td></tr><tr><td>aaa</td></tr><tr><td>aaa</td></tr></tbody></table><table class="_aA _aB" style="width:400px" table-role="right-sticky"><thead><tr><th colspan="2">测试</th></tr><tr><th style="width:200px">测试1</th><th style="width:200px">测试2</th></tr></thead><tbody><tr><td>1111</td><td>2222</td></tr><tr><td>1111</td><td>2222</td></tr><tr><td>1111</td><td>2222</td></tr></tbody></table></div></div><div style="color:red">使用该模式需要注意以下几点<br>1. 请注意下面模板中的table-role属性，其中table-role="main"一定放在div上，紧跟其后的是左右固定列的表格<br>2. 3个表格(左右固定的表格可以根据需要进行删除，比如只留右侧固定)需要自己算出占用的实际宽度<br>3. 请确保3个表格的thead保持同样的高度</div><div class="_B"><div>HTML Code:</div><pre>&lt;mx-table.attach sticky="true"&gt;\n    &lt;div table-role="main"&gt;\n        &lt;table class="table table-striped" style="width:4140px"&gt;\n            &lt;thead&gt;\n                &lt;tr&gt;\n                    &lt;th rowspan="2" style="width:140px"&gt;&lt;/th&gt;\n                    &lt;th rowspan="2" style="width:2600px"&gt;eee&lt;/th&gt;\n                    &lt;th colspan="2"&gt;bb&lt;/th&gt;\n                    &lt;th colspan="3"&gt;xxxx&lt;/th&gt;\n                    &lt;th colspan="2"&gt;&lt;/th&gt;\n                &lt;/tr&gt;\n                &lt;tr&gt;\n                    &lt;th style="width:200px;"&gt;111&lt;/th&gt;\n                    &lt;th style="width:200px;"&gt;111&lt;/th&gt;\n                    &lt;th style="width:200px;"&gt;111&lt;/th&gt;\n                    &lt;th style="width:200px;"&gt;111&lt;/th&gt;\n                    &lt;th style="width:200px;"&gt;111&lt;/th&gt;\n                    &lt;th style="width:200px;"&gt;&lt;/th&gt;\n                    &lt;th style="width:200px;"&gt;&lt;/th&gt;\n                &lt;/tr&gt;\n            &lt;/thead&gt;\n            &lt;tbody&gt;\n                &lt;tr&gt;\n                    &lt;td style="width:140px"&gt;&lt;/td&gt;\n                    &lt;td style="width:2600px"&gt;1111&lt;/td&gt;\n                    &lt;td style="width:200px"&gt;2222&lt;/td&gt;\n                    &lt;td style="width:200px"&gt;333&lt;/td&gt;\n                    &lt;td style="width:200px"&gt;aaa&lt;/td&gt;\n                    &lt;td style="width:200px"&gt;1111&lt;/td&gt;\n                    &lt;td style="width:200px"&gt;2222&lt;/td&gt;\n                    &lt;td style="width:200px"&gt;&lt;/td&gt;\n                    &lt;td style="width:200px"&gt;&lt;/td&gt;\n                &lt;/tr&gt;\n                &lt;tr&gt;\n                    &lt;td&gt;&lt;/td&gt;\n                    &lt;td&gt;1111&lt;/td&gt;\n                    &lt;td&gt;2222&lt;/td&gt;\n                    &lt;td&gt;333&lt;br /&gt;eeeeee&lt;/td&gt;\n                    &lt;td&gt;aaa&lt;/td&gt;\n                    &lt;td&gt;1111&lt;/td&gt;\n                    &lt;td&gt;2222&lt;/td&gt;\n                    &lt;td&gt;&lt;/td&gt;\n                    &lt;td&gt;&lt;/td&gt;\n                &lt;/tr&gt;\n                &lt;tr&gt;\n                    &lt;td&gt;&lt;/td&gt;\n                    &lt;td&gt;1111&lt;br /&gt;aaaa&lt;/td&gt;\n                    &lt;td&gt;2222&lt;/td&gt;\n                    &lt;td&gt;333&lt;/td&gt;\n                    &lt;td&gt;aaa&lt;/td&gt;\n                    &lt;td&gt;1111&lt;/td&gt;\n                    &lt;td&gt;2222&lt;/td&gt;\n                    &lt;td&gt;&lt;/td&gt;\n                    &lt;td&gt;&lt;/td&gt;\n                &lt;/tr&gt;\n            &lt;/tbody&gt;\n        &lt;/table&gt;\n    &lt;/div&gt;\n    &lt;table class="table table-striped" table-role="left-sticky" style="width:140px;"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th style="width:140px;height:85px;"&gt;aa&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;tr&gt;\n                &lt;td&gt;aaa&lt;/td&gt;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &lt;td&gt;aaa&lt;/td&gt;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &lt;td&gt;aaa&lt;/td&gt;\n            &lt;/tr&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n    &lt;table class="table table-striped" style="width:400px;" table-role="right-sticky"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th colspan="2"&gt;测试&lt;/th&gt;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &lt;th style="width:200px;"&gt;测试1&lt;/th&gt;\n                &lt;th style="width:200px;"&gt;测试2&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;tr&gt;\n                &lt;td&gt;1111&lt;/td&gt;\n                &lt;td&gt;2222&lt;/td&gt;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &lt;td&gt;1111&lt;/td&gt;\n                &lt;td&gt;2222&lt;/td&gt;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &lt;td&gt;1111&lt;/td&gt;\n                &lt;td&gt;2222&lt;/td&gt;\n            &lt;/tr&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table.attach&gt;</pre></div><h3 class="_f">旧版</h3><div class="_B _ai"><div mx-view="mx-table/rwd?rwdRange=2%2C-2"><table class="_aA _aB"><thead><tr><th style="width:50px"><input type="checkbox" class="_as" linkage="example4"></th><%for(var j=0;j<25;j++){%><th style="width:200px">示例字段<%=j%></th><%}%></tr></thead><tbody><%for(var k=0;k<10;k++){%><tr><td><input type="checkbox" class="_as" linkage-parent="example4" value="ex1_<%=k%>"></td><%for(var l=0;l<25;l++){%><td>示例字段内容<%=l%></td><%}%></tr><%}%></tbody></table></div></div><div class="_B"><div>HTML Code:</div><pre>&lt;mx-view path="app/gallery/mx-table/rwd"&gt;\n    &lt;table class="table table-striped"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th style="width:50px"&gt;&lt;input type="checkbox" class="checkbox" linkage="example4" /&gt;&lt;/th&gt;\n                &lt;%for(var i=0;i&lt;25;i++){%&gt;\n                &lt;th style="width:200px"&gt;示例字段&lt;%=i%&gt;&lt;/th&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;%for(var i=0;i&lt;10;i++){%&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&lt;input type="checkbox" class="checkbox" linkage-parent="example4" value="ex1_&lt;%=i%&gt;" /&gt;&lt;/td&gt;\n                &lt;%for(var j=0;j&lt;25;j++){%&gt;\n                &lt;td&gt;示例字段内容&lt;%=j%&gt;&lt;/td&gt;\n                &lt;%}%&gt;\n            &lt;/tr&gt;\n            &lt;%}%&gt;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-view&gt;</pre></div>',subs:[]},mixins:[a],render:function(){this.updater.digest()}})});