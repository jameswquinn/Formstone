/*! formstone v1.4.0 [equalize.js] 2017-09-14 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],e):e(jQuery,Formstone)}(function(e,t){"use strict";function n(){c=e(f.element)}function i(e){if(e.data&&(e=e.data),e.enabled)for(var t,n,i,r=0;r<e.target.length;r++){t=0,n=0,(i=e.$el.find(e.target[r])).css(e.property,"");for(var a=0;a<i.length;a++)(n=i.eq(a)[e.type]())>t&&(t=n);i.css(e.property,t)}}function r(e){e.enabled&&(e.enabled=!1,d(e))}function a(e){if(!e.enabled){e.enabled=!0;var t=e.$el.find("img");t.length&&t.on(u.load,e,i),i(e)}}function d(e){for(var t=0;t<e.target.length;t++)e.$el.find(e.target[t]).css(e.property,"");e.$el.find("img").off(u.namespace)}var o=t.Plugin("equalize",{widget:!0,priority:5,defaults:{maxWidth:1/0,minWidth:"0px",property:"height",target:null},methods:{_construct:function(t){t.maxWidth=t.maxWidth===1/0?"100000px":t.maxWidth,t.mq="(min-width:"+t.minWidth+") and (max-width:"+t.maxWidth+")",t.type="height"===t.property?"outerHeight":"outerWidth",t.target?e.isArray(t.target)||(t.target=[t.target]):t.target=["> *"],n(),e.fsMediaquery("bind",t.rawGuid,t.mq,{enter:function(){a.call(t.$el,t)},leave:function(){r.call(t.$el,t)}})},_destruct:function(t){d(t),e.fsMediaquery("unbind",t.rawGuid),n()},_resize:function(e){l.iterate.call(c,i)},resize:i}}),f=o.classes,u=(f.raw,o.events),l=o.functions,c=[]});