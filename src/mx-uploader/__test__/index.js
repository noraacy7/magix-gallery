define("mx-uploader/__test__/index",["magix","../index","mx-progress/index"],(e,s,r)=>{e("../index"),e("mx-progress/index");var n=e("magix");r.exports=n.View.extend({tmpl:{html:'<h2>mx-uploader</h2><div class="_B _ai"><div class="_an _ao _aa" mx-view="mx-uploader/index?action=.%2Findex.html&name=file1&multiple=true" mx-start="showStart()" mx-error="showError()" mx-success="showSuccess()" mx-progress="showProgress()">上传文件</div><div mx-guid="g0" class="_aa _v" mx-view="mx-progress/index?value=<%!$eu($$.percent)%>&fixed=2"></div></div><div class="_B"><div>HTML Code:</div><pre>&lt;mx-uploader\n    class="btn btn-brand fl"\n    action="./index.html"\n    name="file1"\n    multiple="true"\n    mx-error="showError()"\n    mx-success="showSuccess()"\n    mx-progress="showProgress()"\n&gt;上传文件&lt;/mx-uploader&gt;\n&lt;mx-progress value="&lt;%=percent%&gt;" fixed="2" class="fl ml20" /&gt;</pre><div class="_z">Javascript Code:</div><pre>let Magix = require(\'magix\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest({\n            showProgress: false,\n            percent: 0\n        });\n    },\n    \'showError&lt;error&gt;\'(e) {\n        console.log(e.error);\n    },\n    \'showSuccess&lt;success&gt;\'(e) {\n        console.log(e.response);\n    },\n    \'showProgress&lt;progress&gt;\'(e) {\n        this.updater.digest({\n            percent:e.percent\n        });\n    }\n});</pre></div>',subs:[{keys:["percent"],path:'div[mx-guid="g0"]',attr:'mx-view="mx-progress/index?value=<%!$eu($$.percent)%>&fixed=2"',attrs:[{n:"mx-view",v:1}]}]},render:function(){this.updater.digest({showProgress:!1,percent:0})},"showError<error>":function(e){},"showSuccess<success>":function(e){},"showProgress<progress>":function(e){this.updater.digest({percent:e.percent})},"showStart<start>":function(e){}})});