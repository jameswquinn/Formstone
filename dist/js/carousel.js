/*! Formstone v0.0.1 [carousel.js] 2014-12-29 | MIT License | formstone.it */

!function(a,b){"use strict";function c(){E.on(B.resize,d),d()}function d(){G=E.width(),F.length&&(H=C.startTimer(H,I,function(){C.iterate.call(F,k)}))}function e(){F=a(z.base)}function f(c){var d;c.maxWidth=1/0===c.maxWidth?"100000px":c.maxWidth,c.mq="(min-width:"+c.minWidth+") and (max-width:"+c.maxWidth+")",c.mqGuid=A.base+"__"+D++,b.support.transform||(c.useMargin=!0);var f="",g="";if(c.controls&&(f+='<div class="'+A.controls+'">',f+='<button class="'+[A.control,A.control_previous].join(" ")+'">'+c.labels.previous+"</button>",f+='<button class="'+[A.control,A.control_next].join(" ")+'">'+c.labels.next+"</button>",f+="</div>"),c.pagination&&(g+='<div class="'+A.pagination+'">',g+="</div>"),this.addClass([A.base,c.customClass].join(" ")).wrapInner('<div class="'+A.canister+'"></div>').append(f).wrapInner('<div class="'+A.viewport+'"></div>').append(g),c.$viewport=this.find(z.viewport).eq(0),c.$canister=this.find(z.canister).eq(0),c.$controls=this.find(z.controls).eq(0),c.$pagination=this.find(z.pagination).eq(0),c.$items=c.$canister.children().addClass(A.item),c.$controlItems=c.$controls.find(z.control),c.$paginationItems=c.$pagination.find(z.page),c.$images=c.$canister.find("img"),c.index=0,c.enabled=!1,c.leftPosition=0,c.totalImages=c.$images.length,c.resizeTimer=null,c.autoTimer=null,"object"===a.type(c.show)){var j=c.show,k=[];for(d in j)j.hasOwnProperty(d)&&k.push(d);k.sort(C.sortAsc),c.show={};for(d in k)k.hasOwnProperty(d)&&(c.show[k[d]]={width:parseInt(k[d]),count:j[k[d]]})}if(a.mediaquery("bind",c.mqGuid,c.mq,{enter:function(){i.call(c.$el,c)},leave:function(){h.call(c.$el,c)}}),c.totalImages>0)for(c.loadedImages=0,d=0;d<c.totalImages;d++){var l=c.$images.eq(d);l.one(B.load,c,m),(l[0].complete||l[0].height)&&l.trigger(B.load)}c.autoAdvance&&(c.autoTimer=C.startTimer(c.autoTimer,c.autoTime,function(){n(c)},!0)),e()}function g(b){C.clearTimer(b.autoTimer),h.call(this,b),a.mediaquery("unbind",b.mqGuid,b.mq),b.$items.removeClass([A.item,A.visible].join(" ")).unwrap().unwrap(),b.pagination&&b.$pagination.remove(),b.controls&&b.$controls.remove(),this.removeClass([A.base,A.enabled,A.animated,b.customClass].join(" ")),e()}function h(a){a.enabled&&(C.clearTimer(a.autoTimer),a.enabled=!1,this.removeClass(A.enabled).off(B.namespace),a.$canister.touch("destroy").off(B.namespace).attr("style","").css(C.prefix(K,"none")),a.$items.css({width:"",height:""}),a.$controls.removeClass(A.visible),a.$pagination.removeClass(A.visible).html(""),a.$canister.css(a.useMargin?{marginLeft:""}:C.prefix(J,"translate3d(0px, 0, 0)")),a.index=0)}function i(a){a.enabled||(a.enabled=!0,this.addClass(A.enabled).on(B.clickTouchStart,z.control,a,o).on(B.clickTouchStart,z.page,a,p),a.$canister.touch({axis:"x",pan:!0,swipe:!0}).on(B.panStart,a,t).on(B.pan,a,u).on(B.panEnd,a,v).on(B.swipe,a,w).css(C.prefix(K,"")),k.call(this,a))}function j(a,b){a.enabled&&(C.clearTimer(a.autoTimer),q(a,b-1))}function k(a){if(a.enabled){var b,c,d,e,f;if(a.count=a.$items.length,a.count<1)return;for(this.removeClass(A.animated),a.width=this.outerWidth(!1),a.visible=s(a),a.perPage=a.paged?1:a.visible,a.itemMargin=parseInt(a.$items.eq(0).css("marginRight"))+parseInt(a.$items.eq(0).css("marginLeft")),a.itemWidth=(a.width-a.itemMargin*(a.visible-1))/a.visible,a.itemHeight=0,a.pageWidth=a.paged?a.itemWidth:a.width,a.pageCount=Math.ceil(a.count/a.perPage),a.$canister.css({width:(a.pageWidth+a.itemMargin)*a.pageCount}),a.$items.css({width:a.itemWidth,height:""}).removeClass(A.visible),a.pages=[],b=0,c=0;b<a.count;b+=a.perPage)d=a.$items.slice(b,b+a.perPage),d.length<a.perPage&&(d=a.$items.slice(a.$items.length-a.perPage)),e=d.eq(0),f=e.outerHeight(),a.pages.push({left:e.position().left,height:f,$items:d}),f>a.itemHeight&&(a.itemHeight=f),c++;a.paged&&(a.pageCount-=a.count%a.visible),a.maxMove=-a.pages[a.pageCount-1].left,a.autoHeight&&a.$items.css({height:a.itemHeight});var g="";for(b=0;b<a.pageCount;b++)g+='<button class="'+A.page+'">'+(b+1)+"</button>";a.$pagination.html(g),a.pageCount<1?(a.$controls.removeClass(A.visible),a.$pagination.removeClass(A.visible)):(a.$controls.addClass(A.visible),a.$pagination.addClass(A.visible)),a.$paginationItems=a.$el.find(z.page),q(a,a.index,!1),setTimeout(function(){a.$el.addClass(A.animated)},5)}}function l(a){a.enabled&&(a.$items=a.$canister.children().addClass(A.item),k.call(this,a))}function m(a){var b=a.data;b.loadedImages++,b.loadedImages===b.totalImages&&k.call(b.$el,b)}function n(a){var b=a.index+1;b>=a.pageCount&&(b=0),q(a,b)}function o(b){C.killEvent(b);var c=b.data,d=c.index+(a(b.currentTarget).hasClass(A.control_next)?1:-1);C.clearTimer(c.autoTimer),q(c,d)}function p(b){C.killEvent(b);var c=b.data,d=c.$paginationItems.index(a(b.currentTarget));C.clearTimer(c.autoTimer),q(c,d)}function q(a,b,c){0>b&&(b=a.infinite?a.pageCount-1:0),b>=a.pageCount&&(b=a.infinite?0:a.pageCount-1),a.pages[b]&&(a.leftPosition=-a.pages[b].left),a.leftPosition<a.maxMove&&(a.leftPosition=a.maxMove),(a.leftPosition>0||isNaN(a.leftPosition))&&(a.leftPosition=0),a.useMargin?a.$canister.css({marginLeft:a.leftPosition}):c===!1?(a.$canister.css(C.prefix(K,"none")).css(C.prefix(J,"translate3d("+a.leftPosition+"px, 0, 0)")),setTimeout(function(){a.$canister.css(C.prefix(K,""))},5)):a.$canister.css(C.prefix(J,"translate3d("+a.leftPosition+"px, 0, 0)")),a.$items.removeClass(A.visible),a.pages[b].$items.addClass(A.visible),c!==!1&&b!==a.index&&(a.infinite||b>-1&&b<a.pageCount)&&a.$el.trigger(B.update,[b]),a.index=b,r(a)}function r(a){a.$paginationItems.removeClass(A.active).eq(a.index).addClass(A.active),a.infinite?a.$controlItems.addClass(A.visible):a.pageCount<1?a.$controlItems.removeClass(A.visible):(a.$controlItems.addClass(A.visible),a.index<=0?a.$controlItems.filter(z.control_previous).removeClass(A.visible):(a.index>=a.pageCount||a.leftPosition===a.maxMove)&&a.$controlItems.filter(z.control_next).removeClass(A.visible))}function s(b){if("object"===a.type(b.show)){for(var c in b.show)if(b.show.hasOwnProperty(c)&&G>=b.show[c].width)return b.show[c].count>b.count?b.count:b.show[c].count;return 1}return b.show}function t(a){var b=a.data;b.$canister.css(C.prefix(K,"none")),b.isTouching=!0}function u(a){var b=a.data;b.touchLeft=b.leftPosition+a.deltaX,b.touchLeft>0&&(b.touchLeft=0),b.touchLeft<b.maxMove&&(b.touchLeft=b.maxMove),b.$canister.css(b.useMargin?{marginLeft:b.touchLeft}:C.prefix(J,"translate3d("+b.touchLeft+"px, 0, 0)"))}function v(a){var b=a.data,c=a.deltaX>-50&&a.deltaX<50?b.index:b.index+("left"===a.directionX?1:-1);x(b,c)}function w(a){var b=a.data,c=b.index+("left"===a.directionX?1:-1);x(b,c)}function x(a,b){a.$canister.css(C.prefix(K,"")),q(a,b),a.isTouching=!1}var y=b.Plugin("carousel",{widget:!0,defaults:{autoAdvance:!1,autoHeight:!1,autoTime:8e3,controls:!0,customClass:"",infinite:!1,labels:{next:"Next",previous:"Previous"},maxWidth:1/0,minWidth:"0px",paged:!1,pagination:!0,show:1,sized:!0,useMargin:!1},classes:["viewport","canister","item","controls","control","pagination","page","animated","enabled","visible","active","control_previous","control_next"],events:{update:"update",panStart:"panstart",pan:"pan",panEnd:"panend",swipe:"swipe"},methods:{_setup:c,_construct:f,_destruct:g,disable:h,enable:i,jump:j,reset:l,resize:k}}),z=y.classes,A=z.raw,B=y.events,C=y.functions,D=0,E=b.$window,F=[],G=0,H=null,I=20,J=b.transform,K=b.transition}(jQuery,Formstone);