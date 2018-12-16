(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{132:function(t,e,i){"use strict";i.r(e);var s=i(47),a=(i(17),{props:{name:{type:String,default:""},src:{type:String,default:""},title:{type:String,default:""},subtitle:{type:String,default:""},description:{type:String,default:""},url:{type:String,default:""},tags:{type:Array,default:[],validator:function(t){return t&&t.length&&t.forEach(function(t){if(!t||"string"!=typeof t)return!1}),!0}},theme:{type:String,default:"light"}}}),r=i(3),n=Object(r.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["preview",t.theme,t.name]},[i("a",{staticClass:"preview__link",attrs:{href:t.url}},[i("div",{staticClass:"preview__content"},[i("amp-img",{staticClass:"preview__image",attrs:{src:t.src,height:"1",width:"1"}}),t._v(" "),i("div",{staticClass:"preview__info-pane"},[i("div",{staticClass:"preview__title"},[i("span",{staticClass:"preview__text"},[t._v(t._s(t.title))])]),t._v(" "),i("div",{staticClass:"preview__subtitle"},[i("span",{staticClass:"preview__text"},[t._v(t._s(t.subtitle))])]),t._v(" "),i("div",{staticClass:"preview__tags"},t._l(t.tags,function(e){return i("div",{key:e,staticClass:"preview__tag"},[i("span",[t._v(t._s(e))])])})),t._v(" "),i("div",{staticClass:"preview__description"},[i("span",{staticClass:"preview__text"},[t._v(t._s(t.description))])])])],1)])])},[],!1,null,null,null);n.options.__file="PreviewCard.vue";var o=n.exports,l={components:{Jumbotron:s.a,PreviewCard:o},head:function(){return{title:"Projects - hliejun",meta:[{charset:"utf-8"},{hid:"description",name:"description",content:"Lie Jun's ongoing and completed projects or creatives."},{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1,maximum-scale=1,user-scalable=no"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"mobile-web-app-capable",content:"yes"},{property:"og:title",content:"Projects - hliejun"},{property:"og:description",content:"Lie Jun's ongoing and completed projects or creatives."},{property:"og:url",content:"hliejun.github.io"},{property:"og:image",content:"https://hliejun.github.io/images/meta/preview.png"}]}},data:function(){return{jumbotron:{name:"computer",title:"./work",subtitle:"showcase of some projects that I have worked on",actions:[{label:"GitHub",url:"https://github.com/hliejun"},{label:"Dribbble",url:"https://dribbble.com/hliejun"}]},projects:[{name:"whatsapp-widgets",src:"/images/previews/whatsapp-widgets.jpg",title:"Widgets for WhatsApp™",subtitle:"2018 / PERSONAL / 1 WEEK",description:"Android widgets for quick access to WhatsApp™ contacts, designed for elderly.",url:"/projects/whatsappwidgets",tags:["ANDROID","WIDGETS","DESIGN"]},{name:"portfolio",src:"/images/previews/portfolio.jpg",title:"Portfolio",subtitle:"2018 / PERSONAL / 4 WEEKS",description:"Lightweight personal portfolio website and experimenting with NuxtJS and AMPHTHML.",url:"/projects/portfolio",tags:["NUXT","VUE","AMP"]},{name:"react-chat",src:"/images/previews/react-chat.jpg",title:"React Chat",subtitle:"2018 / PERSONAL / 2 WEEKS",description:"Extensible ReactJS presentational chat components written as an NPM library.",url:"/projects/reactchat",tags:["REACT","STORYBOOK","ROLLUP"]},{name:"urbanzoom",src:"/images/previews/urbanzoom.jpg",title:"Urbanzoom Assistant",subtitle:"2018 / FREELANCE / 6 WEEKS",description:"Property valuation Google Assistant agent accessible through Twilio Voice.",url:"/projects/urbanzoom",tags:["DIALOGFLOW","EXPRESS","TWILIO"]},{name:"little-lives",src:"/images/previews/little-lives.jpg",title:"Little Lives Check-In",subtitle:"2018 / NUS CS3217 / 5 WEEKS",description:"Pre-school attendance-taking iOS application made for LittleLives.",url:"/projects/littlelives",tags:["IOS","VISION","AZURE FACE"]},{name:"pokemania",src:"/images/previews/pokemania.jpg",title:"Pokémania",subtitle:"2018 / NUS CS3217 / 3 WEEKS",description:"Pokémon-themed Bubble Blast game with a simple Physics and game engine library.",url:"/projects/pokemania",tags:["IOS","GAME","COCOAPODS"]},{name:"bitsy",src:"/images/previews/bitsy.jpg",title:"Bitsy Pixel Story",subtitle:"2018 / NUS NM3222 / 1 WEEK",description:"Explorative pixel-art story focused on replay and discoverability.",url:"/projects/bitsy",tags:["BITSY","STORY","PIXEL"]},{name:"hypedyn",src:"/images/previews/hypedyn.jpg",title:"HypeDyn Text Stories",subtitle:"2018 / NUS NM3222 / 1 WEEK",description:"Text-based interactive stories focused on emotions, agency of choice and replay.",url:"/projects/hypedyn",tags:["HYPEDYN","STORY","TEXT"]},{name:"sat-solver",src:"/images/previews/sat-solver.jpg",title:"SAT Solver",subtitle:"2018 / NUS CS4244 / 5 WEEKS",description:"Implementing and comparing various satisfiability solving techniques and heuristics.",url:"/projects/satsolver",tags:["RESEARCH","KB","LOGIC"]},{name:"food-logging",src:"/images/previews/food-logging.jpg",title:"Food Logging",subtitle:"2017 / NUS CS4249 / 3 WEEKS",description:"Mobile food logging interface prototyping with careful study of design principles.",url:"/projects/foodlogging",tags:["MARVEL","MOBILE","UX"]},{name:"bubble",src:"/images/previews/bubble.jpg",title:"Bubble Chat",subtitle:"2016 / NUS CS3216 / 4 WEEKS",description:"Topic-threaded mobile chat application using a real-time mobile chat event-based environment.",url:"/projects/bubble",tags:["REACT NATIVE","SOCKETS","CHAT"]},{name:"weight",src:"/images/previews/weight.jpg",title:"Weight",subtitle:"2016 / NUS NM3216 / 3 WEEKS",description:"Infinite run game that pits the player against a gravity-field stage while maintaining weight.",url:"/projects/weight",tags:["UNITY","GAME DESIGN","INFINITE"]},{name:"todo-list",src:"/images/previews/todolist.jpg",title:"TodoList",subtitle:"2016 / NUS CS2103T / 6 WEEKS",description:"To-do list application with focus on natural language text input and keyboard interactions.",url:"/projects/todolist",tags:["JAVAFX","DESKTOP","AGENDA"]}]}}},c=Object(r.a)(l,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page work"},[i("Jumbotron",{attrs:{actions:t.jumbotron.actions,name:t.jumbotron.name,src:t.jumbotron.src,subtitle:t.jumbotron.subtitle,title:t.jumbotron.title}}),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"page__content"},[i("amp-position-observer",{attrs:{on:"enter:fadeIn.start","intersection-ratios":".4",layout:"nodisplay"}}),t._v(" "),i("div",{staticClass:"page__container"},[i("div",{staticClass:"work__gallery"},t._l(t.projects,function(t){return i("PreviewCard",{key:t.name,attrs:{description:t.description,name:t.name,src:t.src,subtitle:t.subtitle,tags:t.tags,title:t.title,url:t.url}})}))])],1)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"background-waves"},[e("div",{staticClass:"background-wave"}),this._v(" "),e("div",{staticClass:"background-wave"}),this._v(" "),e("div",{staticClass:"background-wave"})])}],!1,null,null,null);c.options.__file="work.vue";e.default=c.exports}}]);