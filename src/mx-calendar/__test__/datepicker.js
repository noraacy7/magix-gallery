define("mx-calendar/__test__/datepicker",["magix","mx-gtip/index","../datepicker"],(e,a,i)=>{e("../datepicker");let d=e("magix"),t=e("mx-gtip/index");i.exports=d.View.extend({tmpl:{html:'<h2>mx-calendar.datepicker</h2><h3>默认情形</h3><div class="_B _ai"><input class="_ap" placeholder="请选择日期" mx-view="mx-calendar/datepicker"></div><div class="_B"><div>HTML Code:</div><pre>&lt;mx-calendar.datepicker class="input" placeholder="请选择日期"/&gt;</pre></div><h3 class="_f">默认选中某天</h3><div class="_B _ai"><input class="_ap" placeholder="请选择日期" mx-view="mx-calendar/datepicker?selected=2018-01-01"></div><div class="_B"><div>HTML Code:</div><pre>&lt;mx-calendar.datepicker class="input" placeholder="请选择日期"\n    selected="2018-01-01"&gt;</pre></div><h3 class="_f">从input中读取日期</h3><div class="_B _ai"><input class="_ap" placeholder="请选择日期" value="2018-03-02" mx-view="mx-calendar/datepicker"></div><div class="_B"><div>HTML Code:</div><pre>&lt;mx-calendar.datepicker class="input" placeholder="请选择日期"\n    value="2018-03-02"&gt;</pre></div><h3 class="_f">设置可选择的范围</h3><div class="_B _ai"><input value="2017-08-12" class="_ap" mx-view="mx-calendar/datepicker?min=2017-08-05&max=2017-08-22"></div><div class="_B"><div>HTML Code:</div><pre>&lt;mx-calendar.datepicker\n    min="2017-08-05"\n    max="2017-08-22"\n    value="2017-08-12"\n    class="input"/&gt;</pre></div><h3 class="_f">设置周二为一周的开始</h3><div class="_B _ai"><input class="_ap" mx-view="mx-calendar/datepicker?weekStart=2"></div><div class="_B"><div>HTML Code:</div><pre>&lt;mx-calendar.datepicker\n    week-start="2"\n    class="input"/&gt;</pre></div><h3 class="_f">右下对齐</h3><div class="_B _ai"><input class="_ap" mx-view="mx-calendar/datepicker?align=right"></div><div class="_B"><div>HTML Code:</div><pre>&lt;mx-calendar.datepicker\n    align="right"\n    class="input"/&gt;</pre></div><h3 class="_f">右上对齐</h3><div class="_B _ai"><input class="_ap" mx-view="mx-calendar/datepicker?align=right&placement=top"></div><div class="_B"><div>HTML Code:</div><pre>&lt;mx-calendar.datepicker\n    align="right"\n    placement="top"\n    class="input"/&gt;</pre></div><h3 class="_f">带时分秒</h3><div class="_B _ai"><input class="_ap" mx-view="mx-calendar/datepicker?timeType=all"></div><div class="_B"><div>HTML Code:</div><pre>&lt;mx-calendar.datepicker\n    time-type="all"\n    class="input"/&gt;</pre></div><h3 class="_f">带时分秒的选中</h3><div class="_B _ai"><input value="2018-08-08 18:08:20" class="_ap" mx-view="mx-calendar/datepicker?timeType=all"></div><div class="_B"><div>HTML Code:</div><pre>&lt;mx-calendar.datepicker\n    time-type="all"\n    value="2018-08-08 18:08:20"\n    class="input"/&gt;</pre></div><h3 class="_f">带时分秒,只能选择小时</h3><div class="_B _ai"><input value="2018-08-08 18:08:20" class="_ap" mx-view="mx-calendar/datepicker?timeType=hour"></div><div class="_B"><div>HTML Code:</div><pre>&lt;mx-calendar.datepicker\n    time-type="hour"\n    value="2018-08-08 18:08:20"\n    class="input"/&gt;</pre></div><h3 class="_f">change事件</h3><div class="_B _ai"><input mx-change="showDatetime()" class="_ap" mx-view="mx-calendar/datepicker?timeType=all&selected=2018-08-08%2018%3A08%3A20"></div><div class="_B"><div>HTML Code:</div><pre>&lt;mx-calendar.datepicker\n    time-type="all"\n    selected="2018-08-08 18:08:20"\n    mx-change="showDatetime()"\n    class="input"/&gt;</pre><div class="_z">Javascript Code:</div><pre>let Magix = require(\'magix\');\nlet GTip = require(\'mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'showDatetime&lt;change&gt;\' (e) {\n        this.gtipRT(\'日期：\' + e.date + \'，时间：\' + e.time);\n    }\n});</pre></div><h3 class="_f">只选择年月</h3><div class="_B _ai"><input class="_ap" mx-view="mx-calendar/datepicker?dateType=year%2Cmonth&selected=2010-02&placement=top"></div><div class="_B"><div>HTML Code:</div><pre>&lt;mx-calendar.datepicker\n    class="input"\n    date-type="year,month"\n    selected="2010-02"\n    placement="top" /&gt;</pre></div>',subs:[]},mixins:[t],render(){this.updater.digest()},"showDatetime<change>"(e){this.gtipRT("日期："+e.date+"，时间："+e.time)}})});