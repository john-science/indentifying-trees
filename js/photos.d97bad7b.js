(function(t){function e(e){for(var n,a,i=e[0],c=e[1],l=e[2],f=0,p=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={photos:0},s=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/tree-id/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([4,"chunk-vendors","chunk-common"]),r()})({4:function(t,e,r){t.exports=r("6e96")},"6e96":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");for(var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"photos"}},[r("NavBar"),r("h2",[t._v("Photos of Trees, by Species")]),r("p",{staticClass:"not-too-wide"},[t._v("My going theory is that a good way to get better at identifying trees is to do it. So, these pictures probably won't be high art, they are meant to help me get better at identifying trees.")]),r("p",[t._v("Please Note: These photos are my own work, and I reserve all copyright privileges to them.")]),r("br"),r("br"),r("table",{staticClass:"center"},[r("thead",t._l(t.headers.slice(0,-1),(function(e){return r("th",{key:e,class:{active:t.sortKey==e},on:{click:function(r){return t.sortBy(e)}}},[t._v(" "+t._s(t._f("capitalize")(e))+" "),r("span",{staticClass:"arrow",class:t.sortOrders[e]>0?"asc":"dsc"})])})),0),r("tbody",t._l(t.filteredData,(function(e){return r("tr",{key:e.genus+e.species},[t._l(t.headers.slice(0,-2),(function(n){return r("td",{key:n},[t._v(t._s(e[n]))])})),e["link"]?[r("td",[r("a",{attrs:{href:"photogallery.html?gs="+e["genus"]+"_"+e["species"]}},[t._v(t._s(e["common"]))])])]:[r("td",[t._v(t._s(e["common"]))])]],2)})),0)])],1)},s=[],a=(r("d3b7"),r("ddb0"),r("6062"),r("3ca3"),r("ac1f"),r("1276"),r("498a"),r("159b"),r("4e82"),r("fb6a"),r("5319"),r("5b81"),r("d000")),i=(r("8d38"),r("1574")),c=r("11aa").keys(),l=new Set,u=0;u<c.length;u++){var f=c[u].split("./")[1].split("/")[0];f.length>3&&f.indexOf("_")>=0&&l.add(f)}for(var p=i[0].split(","),h=[],d=1;d<i.length;d++){var y=i[d].split(",");if(l.has(y[2]+"_"+y[3])){0==y[4].trim().length&&(y[4]=y[2]+" "+y[3]);for(var v={},b=0;b<p.length;b++)v[p[b]]=y[b];h.push(v)}}var g={name:"Photos",components:{NavBar:a["a"]},props:{headers:Array},data:function(){this.headers=p,this.sortKey="";var t={};return this.headers.forEach((function(e){t[e]=1})),{sortKey:"",sortOrders:t,listData:h}},computed:{filteredData:function(){var t=this.sortKey,e=this.sortOrders[t]||1,r=this.listData;return t&&(r=r.slice().sort((function(r,n){return r=r[t],n=n[t],(r===n?0:r>n?1:-1)*e}))),r}},filters:{capitalize:function(t){return t.replaceAll("_"," ").replace(/\b\w/g,(function(t){return t.toUpperCase()}))}},methods:{sortBy:function(t){this.sortKey=t,this.sortOrders[t]=-1*this.sortOrders[t]}}},_=g,m=(r("79d2"),r("2877")),w=Object(m["a"])(_,o,s,!1,null,"7904c997",null),O=w.exports;new n["a"]({render:function(t){return t(O)}}).$mount("#photos")},"79d2":function(t,e,r){"use strict";r("cc58")},cc58:function(t,e,r){}});
//# sourceMappingURL=photos.d97bad7b.js.map