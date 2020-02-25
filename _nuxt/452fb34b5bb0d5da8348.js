(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{208:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return o}));e(116);var r=function(path){return e(209)("./".concat(path,".js")).then((function(t){return t.default||t})).then((function(data){return data.data})).catch((function(t){console.log("Error in getData:",t)}))},o=function(t){return t.match(/^https?:\/\//)?t:e(210)("./".concat(t))}},209:function(t,n,e){var map={"./communities.js":[222,17],"./index.js":[223,18],"./news/index.js":[224,19],"./news/jrc-global-surface-water-dataset-available.js":[225,20],"./news/presenting-at-iseo-2016-tajikistan.js":[226,21],"./news/test-article.js":[227,22],"./quick-start.js":[228,23],"./register.js":[229,24],"./services.js":[230,25],"./story/operating-a-flood-warning-system-in-north-africa.js":[231,26],"./story/operating-a-flood-warning-system-in-south-africa.js":[232,27],"./story/operating-a-flood-warning-system-in-west-africa.js":[233,28],"./story/reporting-the-2030-sustainable-development-goals-set-by-the-un.js":[234,29]};function r(t){if(!e.o(map,t))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=map[t],r=n[0];return e.e(n[1]).then((function(){return e(r)}))}r.keys=function(){return Object.keys(map)},r.id=209,t.exports=r},210:function(t,n,e){var map={"./HTEP_News_JRC_Water_Dataset_20200220.jpg":211,"./HTEP_News_JRC_Water_Dataset_Jupyter_20200220.png":212,"./news-1.png":213,"./news-2.png":214,"./service.png":215,"./service2.png":216,"./service3.png":217,"./story1-another.png":218,"./story1-bg.png":219,"./story1-img.png":220,"./story2-bg.png":221};function r(t){var n=o(t);return e(n)}function o(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=210},211:function(t,n,e){t.exports=e.p+"img/3946a8d.jpg"},212:function(t,n,e){t.exports=e.p+"img/b06920a.png"},213:function(t,n,e){t.exports=e.p+"img/a56b9c5.png"},214:function(t,n,e){t.exports=e.p+"img/a56b9c5.png"},215:function(t,n,e){t.exports=e.p+"img/d107933.png"},216:function(t,n,e){t.exports=e.p+"img/df38e53.png"},217:function(t,n,e){t.exports=e.p+"img/df38e53.png"},218:function(t,n,e){t.exports=e.p+"img/43df269.png"},219:function(t,n,e){t.exports=e.p+"img/066e5de.png"},220:function(t,n,e){t.exports=e.p+"img/a8ff784.png"},221:function(t,n,e){t.exports=e.p+"img/066e5de.png"},239:function(t,n,e){var r=e(7),o=e(242)(!1);r(r.S,"Object",{values:function(t){return o(t)}})},242:function(t,n,e){var r=e(8),o=e(23),c=e(20),m=e(41).f;t.exports=function(t){return function(n){for(var e,f=c(n),l=o(f),d=l.length,i=0,_=[];d>i;)e=l[i++],r&&!m.call(f,e)||_.push(t?[e,f[e]]:f[e]);return _}}},243:function(t,n,e){var content=e(293);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(18).default)("2297c18a",content,!0,{sourceMap:!1})},292:function(t,n,e){"use strict";var r=e(243);e.n(r).a},293:function(t,n,e){(t.exports=e(17)(!1)).push([t.i,".Communities__type:nth-child(odd){background-color:#fafafa}.Communities__typeName{font-size:1.17em}.Communities__typeList{display:grid;grid-template-columns:1fr}@media screen and (min-width:640px){.Communities__typeList{grid-template-columns:1fr 1fr;grid-column-gap:5em;grid-row-gap:3em}}",""])},332:function(t,n,e){"use strict";e.r(n);e(22),e(13),e(239),e(14);var r=e(208),o={asyncData:function(){return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(r.a)("communities"));case 1:case"end":return t.stop()}}))},data:function(){return{communityTypes:["(general)","Around the world","Thematic app communities","Use case communities","Client communities"]}},requiredData:{communities:"$.community"},methods:{getCommunitiesOfType:function(t){return Object.values(this.communities).filter((function(n){return n.type===t})).sort((function(a,b){return a.rank-b.rank}))},getCommunityRegisterLink:function(t){return"/register?from=communities&item=".concat(t.id)}},head:function(){return{title:"Communities - ESA Hydrology TEP"}}},c=(e(292),e(5)),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"Communities"},[t._m(0),t._v(" "),t._l(t.communityTypes,(function(n){return e("div",{key:"type-"+n,staticClass:"Communities__type box"},["(general)"!=n?e("h2",{staticClass:"Communities__typeName"},[t._v("\n      "+t._s(n)+"\n    ")]):t._e(),t._v(" "),e("div",{staticClass:"Communities__typeList"},t._l(t.getCommunitiesOfType(n),(function(r){return e("div",{key:"community-"+n+"-"+r.id,staticClass:"Communities__item"},[e("nuxt-link",{attrs:{to:t.getCommunityRegisterLink(r)}},[e("h3",{staticClass:"Communities__itemName"},[t._v("\n            "+t._s(r.name)+"\n          ")])]),t._v(" "),e("p",{staticClass:"Communities__itemDescription"},[t._v("\n          "+t._s(r.description)+"\n        ")]),t._v(" "),e("nuxt-link",{attrs:{to:t.getCommunityRegisterLink(r)}},[t._v("\n          Join ›\n        ")])],1)})),0)])}))],2)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"box colour"},[n("h1",[this._v("Get inspired by our communities")])])}],!1,null,null,null);n.default=component.exports}}]);