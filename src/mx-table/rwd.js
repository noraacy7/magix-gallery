define("mx-table/rwd",["magix","$"],function(_,f,i){var e=_("magix"),t=_("$");e.applyStyle("_H","._eY{width:24px}._eZ{width:12px;background-color:#ccc;color:#e6e6e6;cursor:pointer}._eZ:hover{background-color:#6363e6}._f_{font-size:12px}._fa{-webkit-transform:scaleX(-1);transform:scaleX(-1)}._fb{padding-right:40px}");i.exports=e.View.extend({init:function(_){var f=this;f.__eN=((_.rwdRange||[2,-1])+"").split(","),f.__fj=+_.rwdLimit||4,f.__fk=+_.rwdCurrent||1,t("#"+f.id).addClass("_ag")},__fc:function(){var _=this,f=t("#"+_.id).find("table"),i=f.find("thead");f.css({borderCollapse:"inherit"});var e=i.find(">tr>th"),r=f.find(">tbody>tr");_.__fl=e,_.__fm=r,_.__fn=f},__fq:function(){var _=this,f=_.__fl,i=_.__fk,e=_.__eN,t=_.__fj,r=+e[0],n=f.length+ +e[1]-1,s=r+(i-1)*t,a=Math.min(n,r+i*t-1),o=_.__fm;_.__fo=Math.ceil((n-r+1)/t);for(l=r;l<=n;l++){var d=f.eq(l);l>=s&&l<=a?(l==a?(d.addClass("_fb"),_.__fp=d):d.removeClass("_fb"),d.show()):d.hide()}for(var c=o.length;c--;)for(var h=o.eq(c).find("td"),l=r;l<=n;l++){var v=h.eq(l);l>=s&&l<=a?v.show():v.hide()}},__fs:function(){var _,f=this;f.__fr||(_=t(f.wrapEvent('<div class="_af _eY _aj"><div class="_eZ _aa" mx-click="__ft()"><i class="__ _f_">&#xe61e;</i></div><div class="_eZ _ab" mx-click="__fu()"><i class="__ _f_ _fa">&#xe61e;</i></div></div>')).insertBefore(f.__fn),f.__fr=_),_=f.__fr;var i=f.__fp,e=i.outerHeight(),r=i.offset();_.css({height:e,lineHeight:e+"px"}).offset({left:r.left+i.outerWidth()-24,top:r.top});var n=f.__fk,s=f.__fo,a=_.find("div");1==n?a.eq(0).hide():a.eq(0).show(),n==s?a.eq(1).hide():a.eq(1).show()},render:function(){var _=this;_.__fc(),_.__fq(),_.__fs()},"__ft<click>":function(){var _=this;_.__fk>1&&(_.__fk--,_.__fq(),_.__fs())},"__fu<click>":function(){var _=this;_.__fk<_.__fo&&(_.__fk++,_.__fq(),_.__fs())},"$doc<htmlchanged>":function(_){var f=this;e.inside(_.vId,f.owner.pId)&&(clearTimeout(f.__fv),f.__fv=setTimeout(function(){f.__fc(),f.__fq(),f.__fs()},0))},"$doc<navslidend>":function(){this.__fs()},"$win<resize>":function(){this.__fs()}})});