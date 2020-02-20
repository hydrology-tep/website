(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{208:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));n(116);var r=function(path){return n(209)("./".concat(path,".js")).then((function(e){return e.default||e})).then((function(data){return data.data})).catch((function(e){console.log("Error in getData:",e)}))},o=function(e){return e.match(/^https?:\/\//)?e:n(210)("./".concat(e))}},209:function(e,t,n){var map={"./communities.js":[221,17],"./index.js":[222,18],"./news/index.js":[223,19],"./news/jrc-global-surface-water-dataset-available.js":[224,20],"./news/presenting-at-iseo-2016-tajikistan.js":[225,21],"./news/test-article.js":[226,22],"./quick-start.js":[227,23],"./register.js":[228,24],"./services.js":[229,25],"./story/operating-a-flood-warning-system-in-north-africa.js":[230,26],"./story/operating-a-flood-warning-system-in-south-africa.js":[231,27],"./story/operating-a-flood-warning-system-in-west-africa.js":[232,28],"./story/reporting-the-2030-sustainable-development-goals-set-by-the-un.js":[233,29]};function r(e){if(!n.o(map,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=map[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(map)},r.id=209,e.exports=r},210:function(e,t,n){var map={"./HTEP_News_JRC_Water_Dataset_20200220.jpg":211,"./news-1.png":212,"./news-2.png":213,"./service.png":214,"./service2.png":215,"./service3.png":216,"./story1-another.png":217,"./story1-bg.png":218,"./story1-img.png":219,"./story2-bg.png":220};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=210},211:function(e,t,n){e.exports=n.p+"img/3946a8d.jpg"},212:function(e,t,n){e.exports=n.p+"img/a56b9c5.png"},213:function(e,t,n){e.exports=n.p+"img/a56b9c5.png"},214:function(e,t,n){e.exports=n.p+"img/d107933.png"},215:function(e,t,n){e.exports=n.p+"img/df38e53.png"},216:function(e,t,n){e.exports=n.p+"img/df38e53.png"},217:function(e,t,n){e.exports=n.p+"img/43df269.png"},218:function(e,t,n){e.exports=n.p+"img/066e5de.png"},219:function(e,t,n){e.exports=n.p+"img/a8ff784.png"},220:function(e,t,n){e.exports=n.p+"img/066e5de.png"},234:function(e,t,n){var content=n(250);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("17ba617e",content,!1,{sourceMap:!1})},249:function(e,t,n){"use strict";var r=n(234);n.n(r).a},250:function(e,t,n){(e.exports=n(17)(!1)).push([e.i,".Services__title{display:block;padding:1.5em 10%;margin-bottom:0}@media screen and (min-width:640px){.Services__title{width:70%}}.Services__list{display:grid;grid-template-columns:1fr}@media screen and (min-width:640px){.Services__list{grid-template-columns:1fr 1fr}}.Services__itemWrapper{display:-webkit-box;display:flex;-webkit-box-align:stretch;align-items:stretch;overflow:hidden}.Services__itemWrapper:hover{text-decoration:none}.Services__itemWrapper:hover .Services__itemDescription{text-decoration:underline}.Services__item{width:100%;padding:2em;background-size:cover;background-repeat:no-repeat;-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out}.Services__item:hover{-webkit-transform:scale(1.02);transform:scale(1.02);z-index:1}@media screen and (min-width:640px){.Services__item{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}}.Services__itemText{width:100%}@media screen and (min-width:440px){.Services__itemText{width:60%}}@media screen and (min-width:640px){.Services__itemText{width:100%}}@media screen and (min-width:840px){.Services__itemText{width:60%}}.Services__itemTitle{background-color:#0098db;color:#fff;padding:1rem;font-size:1.3em;line-height:1.5em;margin:0}.Services__itemDescription{margin-top:1em;background-color:#fff;padding:1rem}",""])},261:function(e,t,n){"use strict";var r=n(208),o={props:{services:{type:Object,default:function(){return{}}},isInHomepage:{type:Boolean,default:!1}},methods:{getImageUrl:function(e){return Object(r.b)(e.image)},getServiceRegisterLink:function(e){return"/register?from=services&item=".concat(e.id)}}},c=(n(249),n(5)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"Services"},[e.isInHomepage?n("h1",{staticClass:"Services__title"},[e._v("\n    Adapted geobrowser with specific parameters to make your work easier.\n  ")]):n("div",{staticClass:"Services__header box colour"},[n("h1",[e._v("The thematic applications")]),e._v(" "),n("p",[e._v("\n      Adapted geobrowser with specific parameters to make your work easier.\n    ")])]),e._v(" "),n("div",{staticClass:"Services__list"},e._l(e.services,(function(t,r){return n("nuxt-link",{key:"service-"+r,staticClass:"Services__itemWrapper",attrs:{to:e.getServiceRegisterLink(t)}},[n("div",{staticClass:"Services__item",style:{"background-image":"url("+e.getImageUrl(t)+")"}},[n("div",{staticClass:"Services__itemText"},[n("h2",{staticClass:"Services__itemTitle"},[e._v("\n            "+e._s(t.name)+"\n          ")]),e._v(" "),n("p",{staticClass:"Services__itemDescription"},[e._v("\n            "+e._s(t.summary)+"\n          ")])])])])})),1)])}),[],!1,null,null,null);t.a=component.exports},325:function(e,t,n){"use strict";n.r(t);n(14);var r=n(261),o=n(208),c={components:{Services:r.a},asyncData:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.a)("services"));case 1:case"end":return e.stop()}}))},requiredData:{services:"$.thematicApp"},head:function(){return{title:"Services - ESA Hydrology TEP"}}},d=n(5),component=Object(d.a)(c,(function(){var e=this.$createElement;return(this._self._c||e)("services",this._b({},"services",{services:this.services},!1))}),[],!1,null,null,null);t.default=component.exports}}]);