(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{208:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));n(116);var r=function(path){return n(209)("./".concat(path,".js")).then((function(e){return e.default||e})).then((function(data){return data.data})).catch((function(e){console.log("Error in getData:",e)}))},o=function(e){return e.match(/^https?:\/\//)?e:n(210)("./".concat(e))}},209:function(e,t,n){var map={"./communities.js":[222,17],"./index.js":[223,18],"./news/arctic-eo-network-workshop-yakutsk.js":[224,19],"./news/index.js":[225,20],"./news/jrc-global-surface-water-dataset-available.js":[226,21],"./news/presenting-at-iseo-2016-tajikistan.js":[227,22],"./news/test-article.js":[228,23],"./quick-start.js":[229,24],"./register.js":[230,25],"./services.js":[231,26],"./story/operating-a-flood-warning-system-in-north-africa.js":[232,27],"./story/operating-a-flood-warning-system-in-south-africa.js":[233,28],"./story/operating-a-flood-warning-system-in-west-africa.js":[234,29],"./story/reporting-the-2030-sustainable-development-goals-set-by-the-un.js":[235,30]};function r(e){if(!n.o(map,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=map[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(map)},r.id=209,e.exports=r},210:function(e,t,n){var map={"./HTEP_News_JRC_Water_Dataset_20200220.jpg":211,"./HTEP_News_JRC_Water_Dataset_Jupyter_20200220.png":212,"./news-1.png":213,"./news-2.png":214,"./service.png":215,"./service2.png":216,"./service3.png":217,"./story1-another.png":218,"./story1-bg.png":219,"./story1-img.png":220,"./story2-bg.png":221};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=210},211:function(e,t,n){e.exports=n.p+"img/3946a8d.jpg"},212:function(e,t,n){e.exports=n.p+"img/b06920a.png"},213:function(e,t,n){e.exports=n.p+"img/a56b9c5.png"},214:function(e,t,n){e.exports=n.p+"img/a56b9c5.png"},215:function(e,t,n){e.exports=n.p+"img/d107933.png"},216:function(e,t,n){e.exports=n.p+"img/df38e53.png"},217:function(e,t,n){e.exports=n.p+"img/df38e53.png"},218:function(e,t,n){e.exports=n.p+"img/43df269.png"},219:function(e,t,n){e.exports=n.p+"img/066e5de.png"},220:function(e,t,n){e.exports=n.p+"img/a8ff784.png"},221:function(e,t,n){e.exports=n.p+"img/066e5de.png"},249:function(e,t,n){e.exports=n.p+"img/1a5a7d9.png"},250:function(e,t,n){var content=n(304);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("7e0a448f",content,!0,{sourceMap:!1})},303:function(e,t,n){"use strict";var r=n(250);n.n(r).a},304:function(e,t,n){(e.exports=n(17)(!1)).push([e.i,".Register{min-height:800px;background-color:#fafafa}.Register__lead{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}@media screen and (min-width:640px){.Register__lead{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}.Register__lead>*{-webkit-box-flex:0;flex:0 1 45%}}.Register__leadText{margin-bottom:4em}@media screen and (min-width:640px){.Register__leadText{margin-bottom:0}}.Register__callToAction{margin-top:1em}.Register__warning{margin-top:1em;font-size:.8em;color:#aaa}",""])},328:function(e,t,n){"use strict";n.r(t);var r=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"Register__lead box highlighted"},[t("div",{staticClass:"Register__leadText"},[t("p",[this._v("\n        Get access to all hydrology thematic applications and communities and\n        start working with hydrology data.\n      ")]),this._v(" "),t("a",{staticClass:"btn big Register__callToAction",attrs:{href:"https://www.terradue.com/portal/signup?sp=hep"}},[this._v("\n        Register\n      ")]),this._v(" "),t("div",{staticClass:"Register__warning"},[this._v("\n        * You will be redirected to the internal HTEP website\n      ")])]),this._v(" "),t("div",[t("img",{attrs:{src:n(249)}})])])}],o=(n(64),n(14),n(208)),c={asyncData:function(e){var t,data;return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query,n.next=3,regeneratorRuntime.awrap(Object(o.a)("register"));case 3:if(data=n.sent,t.from&&t.item){n.next=6;break}return n.abrupt("return",{type:null,name:null});case 6:return n.abrupt("return",{type:t.from,name:data[t.from][t.item].name});case 7:case"end":return n.stop()}}))},head:function(){return{title:"Register - ESA Hydrology TEP",link:[{rel:"canonical",href:"".concat("https://hydrology-tep.eu","/register")}]}},requiredData:{communities:"$.community",services:"$.thematicApp"}},l=(n(303),n(5)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Register"},[n("div",{staticClass:"Register__title box colour"},["communities"===e.type?n("h1",[e._v("\n      Get registered to join the "+e._s(e.name)+" community\n    ")]):"services"===e.type?n("h1",[e._v("\n      Get registered to use the "+e._s(e.name)+" service\n    ")]):n("h1",[e._v("\n      Get registered to start using the Hydrology TEP\n    ")])]),e._v(" "),e._m(0)])}),r,!1,null,null,null);t.default=component.exports}}]);