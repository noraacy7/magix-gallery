define("mx-color/__test__/picker",["magix","../picker"],function(i,e,s){i("../picker");var t=i("magix");s.exports=t.View.extend({tmpl:{html:'<h2>mx-color</h2><h3>颜色选择</h3><div class="_B _ai"><input class="_ap" mx-view="mx-color/picker"></div><div class="_B"><div>HTML Code:</div><pre>&lt;mx-color.picker class="input" /&gt;</pre></div><div style="height: 300px"></div><h3 class="_f">透明度</h3><div class="_B _ai"><input class="_ap" mx-view="mx-color/picker?showAlpha=true"></div><div class="_B"><div>HTML Code:</div><pre>&lt;mx-color.picker show-alpha="true" class="input" /&gt;</pre></div><div style="height: 300px"></div>',subs:[]},render:function(){this.updater.digest()}})});