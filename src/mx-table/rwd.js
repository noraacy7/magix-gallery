define("mx-table/rwd",["magix","$"],function(_,f,i){var e=_("magix"),t=_("$");e.applyStyle("_H","._eY{width:24px}._eZ{width:12px;background-color:#ccc;color:#e6e6e6;cursor:pointer}._eZ:hover{background-color:#6363e6}._f_{font-size:12px}._fa{-webkit-transform:scaleX(-1);transform:scaleX(-1)}._fb{padding-right:40px}");i.exports=e.View.extend({init:function(_){var f=this;f.__eM=((_.rwdRange||[2,-1])+"").split(","),f.__fi=+_.rwdLimit||4,f.__fj=+_.rwdCurrent||1,t("#"+f.id).addClass("_ag")},__fb:function(){var _=this,f=t("#"+_.id).find("table"),i=f.find("thead");f.css({borderCollapse:"inherit"});var e=i.find(">tr>th"),r=f.find(">tbody>tr");_.__fk=e,_.__fl=r,_.__fm=f},__fp:function(){var _=this,f=_.__fk,i=_.__fj,e=_.__eM,t=_.__fi,r=+e[0],n=f.length+ +e[1]-1,a=r+(i-1)*t,o=Math.min(n,r+i*t-1),s=_.__fl;_.__fn=Math.ceil((n-r+1)/t);for(l=r;l<=n;l++){var d=f.eq(l);l>=a&&l<=o?(l==o?(d.addClass("_fb"),_.__fo=d):d.removeClass("_fb"),d.show()):d.hide()}for(var c=s.length;c--;)for(var h=s.eq(c).find("td"),l=r;l<=n;l++){var v=h.eq(l);l>=a&&l<=o?v.show():v.hide()}},__fr:function(){var _,f=this;f.__fq||(_=t(f.wrapEvent('<div class="_af _eY _aj"><div class="_eZ _aa" mx-click="__fs()"><i class="__ _f_">&#xe61e;</i></div><div class="_eZ _ab" mx-click="__ft()"><i class="__ _f_ _fa">&#xe61e;</i></div></div>')).insertBefore(f.__fm),f.__fq=_),_=f.__fq;var i=f.__fo,e=i.outerHeight(),r=i.offset();_.css({height:e,lineHeight:e+"px"}).offset({left:r.left+i.outerWidth()-24,top:r.top});var n=f.__fj,a=f.__fn,o=_.find("div");1==n?o.eq(0).hide():o.eq(0).show(),n==a?o.eq(1).hide():o.eq(1).show()},render:function(){var _=this;_.__fb(),_.__fp(),_.__fr()},"__fs<click>":function(){var _=this;_.__fj>1&&(_.__fj--,_.__fp(),_.__fr())},"__ft<click>":function(){var _=this;_.__fj<_.__fn&&(_.__fj++,_.__fp(),_.__fr())},"$doc<htmlchanged>":function(_){var f=this;e.inside(_.vId,f.owner.pId)&&(clearTimeout(f.__fu),f.__fu=setTimeout(function(){f.__fb(),f.__fp(),f.__fr()},0))},"$doc<navslidend>":function(){this.__fr()},"$win<resize>":function(){this.__fr()}})});