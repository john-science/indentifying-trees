(function(e){function t(t){for(var o,i,s=t[0],u=t[1],c=t[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],o=!0,s=1;s<r.length;s++){var u=r[s];0!==n[u]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var o={},n={photogallery:0},a=[];function i(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=o,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;a.push([3,"chunk-vendors","chunk-common"]),r()})({3:function(e,t,r){e.exports=r("4670")},4670:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"photogallery"}},[r("NavBar"),r("h2",[e._v("Photos of Trees, by Species")]),r("p",{staticClass:"not-too-wide"},[e._v("My going theory is that a good way to get better at identifying trees is to do it. So, these pictures probably won't be high art, they are meant to help me get better at identifying trees.")]),r("p",[e._v("Please Note: These photos are my own work, and I reserve all copyright privileges to them.")]),r("br"),r("br"),e._l(e.photos,(function(t){return r("ul",{key:t},[r("li",[e._v(e._s(t))])])}))],2)},a=[],i=(r("d3b7"),r("3ca3"),r("ddb0"),r("9861"),r("ac1f"),r("841c"),r("d000")),s=(r("8d38"),new URLSearchParams(window.location.search)),u="";s.has("gs")&&(u=s.get("gs"));var c=[];if(u)for(var l=r("11aa").keys(),p=0;p<l.length;p++){var f=l[p];f.indexOf(u)>=0&&c.push(f)}var h={name:"PhotoGallery",components:{NavBar:i["a"]},props:{photos:Array},data:function(){this.photos=c}},d=h,y=(r("91e1"),r("2877")),b=Object(y["a"])(d,n,a,!1,null,"7b933e26",null),v=b.exports;new o["a"]({render:function(e){return e(v)}}).$mount("#photogallery")},"91e1":function(e,t,r){"use strict";r("f1ec")},f1ec:function(e,t,r){}});
//# sourceMappingURL=photogallery.fbf9ccb9.js.map