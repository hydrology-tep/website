(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{208:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return o}));e(116);var r=function(path){return e(209)("./".concat(path,".js")).then((function(t){return t.default||t})).then((function(data){return data.data})).catch((function(t){console.log("Error in getData:",t)}))},o=function(t){return t.match(/^https?:\/\//)?t:e(210)("./".concat(t))}},209:function(t,n,e){var map={"./communities.js":[223,17],"./index.js":[224,18],"./news/arctic-eo-network-workshop-yakutsk.js":[225,19],"./news/index.js":[226,20],"./news/jrc-global-surface-water-dataset-available.js":[227,21],"./news/presenting-at-iseo-2016-tajikistan.js":[228,22],"./news/test-article.js":[229,23],"./quick-start.js":[230,24],"./register.js":[231,25],"./services.js":[232,26],"./story/operating-a-flood-warning-system-in-north-africa.js":[233,27],"./story/operating-a-flood-warning-system-in-south-africa.js":[234,28],"./story/operating-a-flood-warning-system-in-west-africa.js":[235,29],"./story/reporting-the-2030-sustainable-development-goals-set-by-the-un.js":[236,30]};function r(t){if(!e.o(map,t))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=map[t],r=n[0];return e.e(n[1]).then((function(){return e(r)}))}r.keys=function(){return Object.keys(map)},r.id=209,t.exports=r},210:function(t,n,e){var map={"./HTEP_News_JRC_Water_Dataset_20200220.jpg":211,"./HTEP_News_JRC_Water_Dataset_Jupyter_20200220.png":212,"./News_Workshop_Arctic_EO.jpg":213,"./news-1.png":214,"./news-2.png":215,"./service.png":216,"./service2.png":217,"./service3.png":218,"./story1-another.png":219,"./story1-bg.png":220,"./story1-img.png":221,"./story2-bg.png":222};function r(t){var n=o(t);return e(n)}function o(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=210},211:function(t,n,e){t.exports=e.p+"img/3946a8d.jpg"},212:function(t,n,e){t.exports=e.p+"img/b06920a.png"},213:function(t,n,e){t.exports=e.p+"img/92abab6.jpg"},214:function(t,n,e){t.exports=e.p+"img/a56b9c5.png"},215:function(t,n,e){t.exports=e.p+"img/a56b9c5.png"},216:function(t,n,e){t.exports=e.p+"img/d107933.png"},217:function(t,n,e){t.exports=e.p+"img/df38e53.png"},218:function(t,n,e){t.exports=e.p+"img/df38e53.png"},219:function(t,n,e){t.exports=e.p+"img/43df269.png"},220:function(t,n,e){t.exports=e.p+"img/066e5de.png"},221:function(t,n,e){t.exports=e.p+"img/a8ff784.png"},222:function(t,n,e){t.exports=e.p+"img/066e5de.png"},247:function(t,n,e){var content=e(299);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(18).default)("3b4b8200",content,!0,{sourceMap:!1})},298:function(t,n,e){"use strict";var r=e(247);e.n(r).a},299:function(t,n,e){(t.exports=e(17)(!1)).push([t.i,".News__list{display:grid;grid-template-columns:1fr;grid-column-gap:2em;grid-row-gap:2em}@media screen and (min-width:640px){.News__list{grid-template-columns:1fr 1fr}}@media screen and (min-width:980px){.News__list{grid-template-columns:1fr 1fr 1fr}}",""])},333:function(t,n,e){"use strict";e.r(n);e(14);var r=e(208),o={asyncData:function(){return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(r.a)("news/index"));case 1:case"end":return t.stop()}}))},requiredData:{newsItems:"$.newsItem"},methods:{getSummaryImageUrl:function(article){return Object(r.b)(article.summaryImage)}},head:function(){return{title:"News - ESA Hydrology TEP"}}},c=(e(298),e(5)),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"News box"},[e("h1",[t._v("News")]),t._v(" "),e("div",{staticClass:"News__list"},t._l(t.newsItems,(function(article){return e("div",{key:"article-"+article.id,staticClass:"News__item"},[e("nuxt-link",{attrs:{to:"/news/"+article.id}},[e("img",{attrs:{src:t.getSummaryImageUrl(article)}}),t._v(" "),e("h2",[t._v(t._s(article.title))])]),t._v(" "),e("div",[t._v("\n        "+t._s(article.summary)+"\n      ")])],1)})),0)])}),[],!1,null,null,null);n.default=component.exports}}]);