(function(e){function t(t){for(var n,a,i=t[0],c=t[1],l=t[2],f=0,p=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(s.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={photos:0},s=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;s.push([4,"chunk-vendors","chunk-common"]),r()})({4:function(e,t,r){e.exports=r("6e96")},4687:function(e,t,r){},"6e96":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");for(var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"photos"}},[r("NavBar"),r("h2",[e._v("Photos of Trees, by Species")]),r("p",{staticClass:"not-too-wide"},[e._v("My going theory is that a good way to get better at identifying trees is to do it. So, these pictures probably won't be high art, they are meant to help me get better at identifying trees.")]),r("p",[e._v("Please Note: These photos are my own work, and I reserve all copyright privileges to them.")]),r("br"),r("br"),r("table",{staticClass:"center"},[r("thead",e._l(e.headers.slice(0,-1),(function(t){return r("th",{key:t,class:{active:e.sortKey==t},on:{click:function(r){return e.sortBy(t)}}},[e._v(" "+e._s(e._f("capitalize")(t))+" "),r("span",{staticClass:"arrow",class:e.sortOrders[t]>0?"asc":"dsc"})])})),0),r("tbody",e._l(e.filteredData,(function(t){return r("tr",{key:t.genus+t.species},[e._l(e.headers.slice(0,-2),(function(n){return r("td",{key:n},[e._v(e._s(t[n]))])})),t["link"]?[r("td",[r("a",{attrs:{href:"/tree-id/photogallery?gs="+t["genus"]+"_"+t["species"]}},[e._v(e._s(t["common"]))])])]:[r("td",[e._v(e._s(t["common"]))])]],2)})),0)])],1)},s=[],a=(r("d3b7"),r("ddb0"),r("6062"),r("3ca3"),r("ac1f"),r("1276"),r("498a"),r("159b"),r("4e82"),r("fb6a"),r("5319"),r("5b81"),r("d000")),i=(r("8d38"),r("1574")),c=r("11aa").keys(),l=new Set,u=0;u<c.length;u++){var f=c[u].split("./")[1].split("/")[0];f.length>3&&f.indexOf("_")>=0&&l.add(f)}for(var p=i[0].split(","),h=[],d=1;d<i.length;d++){var y=i[d].split(",");if(l.has(y[2]+"_"+y[3])){0==y[4].trim().length&&(y[4]=y[2]+" "+y[3]);for(var v={},b=0;b<p.length;b++)v[p[b]]=y[b];h.push(v)}}var g={name:"Photos",components:{NavBar:a["a"]},props:{headers:Array},data:function(){this.headers=p,this.sortKey="";var e={};return this.headers.forEach((function(t){e[t]=1})),{sortKey:"",sortOrders:e,listData:h}},computed:{filteredData:function(){var e=this.sortKey,t=this.sortOrders[e]||1,r=this.listData;return e&&(r=r.slice().sort((function(r,n){return r=r[e],n=n[e],(r===n?0:r>n?1:-1)*t}))),r}},filters:{capitalize:function(e){return e.replaceAll("_"," ").replace(/\b\w/g,(function(e){return e.toUpperCase()}))}},methods:{sortBy:function(e){this.sortKey=e,this.sortOrders[e]=-1*this.sortOrders[e]}}},_=g,m=(r("8a0a"),r("2877")),w=Object(m["a"])(_,o,s,!1,null,"0713f132",null),O=w.exports;new n["a"]({render:function(e){return e(O)}}).$mount("#photos")},"8a0a":function(e,t,r){"use strict";r("4687")}});
//# sourceMappingURL=photos.09417de7.js.map