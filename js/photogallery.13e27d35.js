(function(a){function e(e){for(var o,_,p=e[0],s=e[1],l=e[2],t=0,c=[];t<p.length;t++)_=p[t],Object.prototype.hasOwnProperty.call(r,_)&&r[_]&&c.push(r[_][0]),r[_]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(a[o]=s[o]);u&&u(e);while(c.length)c.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var a,e=0;e<i.length;e++){for(var n=i[e],o=!0,p=1;p<n.length;p++){var s=n[p];0!==r[s]&&(o=!1)}o&&(i.splice(e--,1),a=_(_.s=n[0]))}return a}var o={},r={photogallery:0},i=[];function _(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return a[e].call(n.exports,n,n.exports,_),n.l=!0,n.exports}_.m=a,_.c=o,_.d=function(a,e,n){_.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:n})},_.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},_.t=function(a,e){if(1&e&&(a=_(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var n=Object.create(null);if(_.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var o in a)_.d(n,o,function(e){return a[e]}.bind(null,o));return n},_.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return _.d(e,"a",e),e},_.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},_.p="/tree-id/";var p=window["webpackJsonp"]=window["webpackJsonp"]||[],s=p.push.bind(p);p.push=e,p=p.slice();for(var l=0;l<p.length;l++)e(p[l]);var u=s;i.push([3,"chunk-vendors","chunk-common"]),n()})({3:function(a,e,n){a.exports=n("4670")},4670:function(a,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("div",{attrs:{id:"photogallery"}},[o("NavBar"),a.photos.length?o("span",[o("h2",[a._v(a._s(a.photos.length)+" Photos of "+a._s(a.species.replace("_"," ")))]),o("p",[a._v("Please Note: These photos are my own work, and I reserve all copyright privileges to them.")]),o("br")]):a._e(),a.photos.length?a._e():o("span",[o("br"),o("h2",[a._v("Photos not found.")])]),a._l(a.photos,(function(e){return o("span",{key:e},[o("br"),o("h4",[a._v(a._s(e.split("/")[1].split(".")[0].replace("_"," ").replace("_"," - ").replaceAll("_"," ")))]),o("img",{attrs:{src:n("55e1")("./"+e)}}),o("br")])})),o("br")],2)},i=[],_=(n("d3b7"),n("3ca3"),n("ddb0"),n("9861"),n("ac1f"),n("841c"),n("1276"),n("d000")),p=(n("8d38"),new URLSearchParams(window.location.search)),s="";p.has("gs")&&(s=p.get("gs"),(s.length<5||s.indexOf("_")<0)&&(s=""));var l=[];if(s)for(var u=n("11aa").keys(),t=0;t<u.length;t++){var c=u[t];c.indexOf(s)>=0&&l.push(c.split("./")[1])}var g={name:"PhotoGallery",components:{NavBar:_["a"]},props:{photos:Array},data:function(){this.photos=l,this.species=s}},b=g,f=n("2877"),m=Object(f["a"])(b,r,i,!1,null,null,null),d=m.exports;new o["a"]({render:function(a){return a(d)}}).$mount("#photogallery")},"55e1":function(a,e,n){var o={"./Aesculus_hippocastanum/Aesculus_hippocastanum_bark.jpg":"346b","./Aesculus_hippocastanum/Aesculus_hippocastanum_chestnuts_late_summer.jpg":"bcc9","./Aesculus_hippocastanum/Aesculus_hippocastanum_leaves.jpg":"42b1","./Aesculus_hippocastanum/Aesculus_hippocastanum_on_bunker_hill.jpg":"2dce","./Aesculus_hippocastanum/Aesculus_hippocastanum_post_flower.jpg":"836b","./Aesculus_hippocastanum/Aesculus_hippocastanum_profile_navyyard.jpg":"408e","./Aesculus_hippocastanum/Aesculus_hippocastanum_profile_navyyard_2.jpg":"b8e5","./Avicennia_germinans/Avicennia_germinans_bark.jpg":"8aa1","./Avicennia_germinans/Avicennia_germinans_leaves.jpg":"f62e","./Avicennia_germinans/Avicennia_germinans_profile.jpg":"5d38","./Bursera_graveolens/Bursera_graveolens_bark.jpg":"f6fc","./Bursera_graveolens/Bursera_graveolens_leaves.jpg":"42d6","./Bursera_graveolens/Bursera_graveolens_profile_winter.jpg":"db2b","./Carya_glabra/Carya_glabra_bark_sign.jpg":"5583","./Carya_glabra/Carya_glabra_leaves.jpg":"256a","./Carya_glabra/Carya_glabra_profile_young.jpg":"d549","./Conocarpus_erectus/Conocarpus_erectus_leaves_and_fruit.jpg":"1870","./Conocarpus_erectus/Conocarpus_erectus_profile.jpg":"813e","./Ginkgo_biloba/Ginkgo_biloba_bark.jpg":"b0f9","./Ginkgo_biloba/Ginkgo_biloba_leaves.jpg":"c82a","./Ginkgo_biloba/Ginkgo_biloba_leaves_without_branches.jpg":"1786","./Ginkgo_biloba/Ginkgo_biloba_profile.jpg":"9aec","./Ginkgo_biloba/Ginkgo_biloba_young_cones.jpg":"aacd","./Gleditsia_triacanthos/Gleditsia_triacanthos_bark.jpg":"f2aa","./Gleditsia_triacanthos/Gleditsia_triacanthos_leaves.jpg":"9340","./Gleditsia_triacanthos/Gleditsia_triacanthos_profile.jpg":"284f","./Halesia_monticola/Halesia_monticola_bark_and_branching.jpg":"b882","./Halesia_monticola/Halesia_monticola_leaf_details.jpg":"c2eb","./Halesia_monticola/Halesia_monticola_profile.jpg":"5b45","./Hippomane_mancinella/Hippomane_mancinella_bark_and_leaves.jpg":"4ba0","./Hippomane_mancinella/Hippomane_mancinella_fruit_leaves.jpg":"8a3e","./Hippomane_mancinella/Hippomane_mancinella_leaves.jpg":"ed1b","./Hippomane_mancinella/Hippomane_mancinella_multi_tree_group.jpg":"1cc6","./Hippomane_mancinella/Hippomane_mancinella_profile_mature_sign.jpg":"5d33","./Hippomane_mancinella/Hippomane_mancinella_profile_sapling.jpg":"4c6b","./Hippomane_mancinella/Hippomane_mancinella_profile_young.jpg":"e8b6","./Juglans_nigra/Juglans_nigra_leaves.jpg":"f4b8","./Juglans_nigra/Juglans_nigra_profile_of_an_old_tree.jpg":"5536","./Juglans_nigra/Juglans_nigra_walnut_in_shell.jpg":"d222","./Koelreuteria_paniculata/Koelreuteria_paniculata_bark.jpg":"a182","./Koelreuteria_paniculata/Koelreuteria_paniculata_leaves.jpg":"3fba","./Koelreuteria_paniculata/Koelreuteria_paniculata_seed_pods_glow.jpg":"54a1","./Koelreuteria_paniculata/Koelreuteria_paniculata_seed_pods_in_full_glory.jpg":"a394","./Koelreuteria_paniculata/Koelreuteria_paniculata_seed_pods_of_gold.jpg":"28cf","./Magnolia_soulangeana/Magnolia_soulangeana_bark_and_branching.jpg":"312e","./Magnolia_soulangeana/Magnolia_soulangeana_bark_and_sign.jpg":"8ca7","./Magnolia_soulangeana/Magnolia_soulangeana_leaves.jpg":"44d0","./Magnolia_soulangeana/Magnolia_soulangeana_profile_1.jpg":"38be","./Magnolia_soulangeana/Magnolia_soulangeana_profile_2.jpg":"b6da","./Metasequoia_glyptostroboides/Metasequoia_glyptostroboides_bark.jpg":"59c6","./Metasequoia_glyptostroboides/Metasequoia_glyptostroboides_needles.jpg":"0440","./Metasequoia_glyptostroboides/Metasequoia_glyptostroboides_profile.jpg":"0c5d","./Pinus_ponderosa/Pinus_ponderosa_cones_in_situ.jpg":"682f","./Pinus_ponderosa/Pinus_ponderosa_dead.jpg":"75a1","./Pinus_ponderosa/Pinus_ponderosa_large_cone_opened.jpg":"4661","./Pinus_ponderosa/Pinus_ponderosa_new_growth.jpg":"fa2e","./Pinus_ponderosa/Pinus_ponderosa_orange_bark.jpg":"5220","./Pinus_ponderosa/Pinus_ponderosa_profile_young.jpg":"8377","./Pinus_ponderosa/Pinus_ponderosa_small_cone_closed.jpg":"4604","./Prunus_alleghaniensis/Prunus_alleghaniensis_bark.jpg":"45fa","./Prunus_alleghaniensis/Prunus_alleghaniensis_fruit.jpg":"5fcc","./Prunus_alleghaniensis/Prunus_alleghaniensis_fruitlings.jpg":"7ea8","./Prunus_alleghaniensis/Prunus_alleghaniensis_leaves_and_fruit.jpg":"864c","./Pyrus_calleryana/Pyrus_calleryana_bark.jpg":"21ad","./Pyrus_calleryana/Pyrus_calleryana_leaves.jpg":"2036","./Quercus_macrocarpa/Quercus_macrocarpa_bark.jpg":"dfec","./Quercus_macrocarpa/Quercus_macrocarpa_bark_leaves_sign.jpg":"3c69","./Quercus_macrocarpa/Quercus_macrocarpa_leaves.jpg":"949b","./Quercus_macrocarpa/Quercus_macrocarpa_profile.jpg":"1d2b","./Quercus_macrocarpa/Quercus_macrocarpa_profile_full_fountain.jpg":"f090","./Sequoia_sempervirens/Sequoia_sempervirens_bark.jpg":"ff6c","./Sequoia_sempervirens/Sequoia_sempervirens_canopy.jpg":"272e","./Sequoia_sempervirens/Sequoia_sempervirens_forest.jpg":"9c3c","./Sequoia_sempervirens/Sequoia_sempervirens_needles.jpg":"7879","./Sequoia_sempervirens/Sequoia_sempervirens_profile.jpg":"af76","./Sequoiadendron_giganteum/Sequoiadendron_giganteum_bark_perspective.jpg":"27a1","./Sequoiadendron_giganteum/Sequoiadendron_giganteum_profile_on_crescent_meadow.jpg":"a1b3","./Sequoiadendron_giganteum/Sequoiadendron_giganteum_profile_panorama.jpg":"a8b4","./Styphnolobium_japonica/Styphnolobium_japonica_bark_and_sign.jpg":"6c8d","./Styphnolobium_japonica/Styphnolobium_japonica_bark_with_sign.jpg":"a924","./Styphnolobium_japonica/Styphnolobium_japonica_branching_structure.jpg":"97b9","./Styphnolobium_japonica/Styphnolobium_japonica_leaves.jpg":"7135","./Styphnolobium_japonica/Styphnolobium_japonica_profile_2.jpg":"177c","./Styphnolobium_japonica/Styphnolobium_japonica_profile_baw.jpg":"47ad","./Styphnolobium_japonica/Styphnolobium_japonica_profile_full_1.jpg":"e80a","./Styphnolobium_japonica/Styphnolobium_japonica_shapely_branches.jpg":"01d7","./Styphnolobium_japonica/Styphnolobium_japonica_trunk_structure.jpg":"9f2e","./Yucca_brevifolia/Yucca_brevifolia_crown.jpg":"e685","./Yucca_brevifolia/Yucca_brevifolia_leaves.jpg":"4b29","./Yucca_brevifolia/Yucca_brevifolia_profile.jpg":"4f04","./Yucca_brevifolia/Yucca_brevifolia_trees.jpg":"ab60"};function r(a){var e=i(a);return n(e)}function i(a){if(!n.o(o,a)){var e=new Error("Cannot find module '"+a+"'");throw e.code="MODULE_NOT_FOUND",e}return o[a]}r.keys=function(){return Object.keys(o)},r.resolve=i,a.exports=r,r.id="55e1"}});
//# sourceMappingURL=photogallery.13e27d35.js.map