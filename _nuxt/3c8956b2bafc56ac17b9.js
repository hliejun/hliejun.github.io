(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{125:function(t,n,e){"use strict";e(21);var s={props:{name:{type:String,default:""},src:{type:String,default:""},title:{type:String,default:""},subtitle:{type:String,default:""},actions:{type:Array,default:[],validator:function(t){return t&&t.length&&t.forEach(function(t){if(!t||"string"!=typeof t.label||"string"!=typeof t.url)return!1}),!0}},theme:{type:String,default:"light"}}},o=e(7),i=Object(o.a)(s,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"jumbotron"},[e("amp-position-observer",{attrs:{on:"exit:fadeIn.start","intersection-ratios":"0.2",layout:"nodisplay"}}),t._v(" "),e("amp-position-observer",{attrs:{on:"enter:fadeOut.start","intersection-ratios":"0.2",layout:"nodisplay"}}),t._v(" "),e("div",{staticClass:"jumbotron__content"},[t.src?e("amp-img",{class:["jumbotron__image",t.theme,t.name],attrs:{height:"1",src:t.src,width:"1"}}):t._e(),t._v(" "),e("span",{staticClass:"stylized jumbotron__title"},[t._v(t._s(t.title))]),t._v(" "),e("span",{staticClass:"stylized jumbotron__subtitle"},[t._v(t._s(t.subtitle))]),t._v(" "),t.actions.length?e("div",{staticClass:"jumbotron__actions"},t._l(t.actions,function(n){return e("a",{key:n.url,staticClass:"jumbotron__link",attrs:{href:n.url,target:n.in?"_self":"_blank"}},[e("div",{staticClass:"code button jumbotron__button"},[t._v("\n          "+t._s(n.label)+"\n        ")])])})):t._e()],1)],1)},[],!1,null,null,null);i.options.__file="Jumbotron.vue";n.a=i.exports},149:function(t,n,e){"use strict";e.r(n);var s={components:{Jumbotron:e(125).a},data:function(){return{jumbotron:{title:"UrbanZoom",subtitle:"\n          Sorry, but this page is currently under construction.\n          Please check back later.\n        ",actions:[{label:"Return",url:"/logs",in:!0}]}}}},o=e(7),i=Object(o.a)(s,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"page urbanzoom company"},[n("Jumbotron",{attrs:{actions:this.jumbotron.actions,name:this.jumbotron.name,src:this.jumbotron.src,subtitle:this.jumbotron.subtitle,title:this.jumbotron.title}}),this._v(" "),n("div",{staticClass:"page__content"},[n("amp-position-observer",{attrs:{on:"enter:fadeIn.start","intersection-ratios":"0",layout:"nodisplay"}})],1)],1)},[],!1,null,null,null);i.options.__file="urbanzoom.vue";n.default=i.exports}}]);