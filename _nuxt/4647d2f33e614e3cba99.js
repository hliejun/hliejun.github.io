(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{133:function(t,e,n){"use strict";n(39);var o={props:{carpet:{type:String,default:""},carpetFallback:{type:String,default:""},name:{type:String,default:""},label:{type:String,default:""},items:{type:Array,default:function(){return[]},validator:function(t){return t&&t.length&&t.forEach(function(element){if(!element||"string"!=typeof element.name||"string"!=typeof element.text||"string"!=typeof element.title)return!1}),!0}}}},r=n(4),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("div",{class:["project__section",t.name]},[t.carpet?n("amp-fx-flying-carpet",{staticClass:"section__flying-carpet",attrs:{height:"1"}},[n("amp-img",{staticClass:"section__flying-carpet-image",attrs:{src:t.carpet,height:"1",width:"1"}},[n("amp-img",{staticClass:"section__flying-carpet-image",attrs:{fallback:"",src:t.carpetFallback,height:"1",width:"1"}})],1)],1):t._e(),t._v(" "),n("div",{staticClass:"section__title"},[t._v("\n    "+t._s(t.label)+"\n  ")]),t._v(" "),t._l(t.items,function(e){return n("div",{key:e.name,class:["section__items",e.name]},[n("div",{staticClass:"section__subtitle"},[t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"section__sub-row"},[e.video?n("amp-video",{staticClass:"section__item-image",attrs:{controls:"",autoplay:"",loop:"",noaudio:"",height:"1",poster:e.poster,width:"1"}},[n("source",{attrs:{src:e.video,type:"video/mp4"}})]):e.src?n("amp-img",{staticClass:"section__item-image",attrs:{height:"1",on:"tap:lightbox",role:"button",tabindex:"0",src:e.webp,width:"1"}},[n("amp-img",{staticClass:"section__item-image--fallback",attrs:{fallback:"",height:"1",on:"tap:lightbox",role:"button",tabindex:"0",src:e.src,width:"1"}})],1):t._e(),t._v(" "),e.text?n("div",{class:["section__item-text",e.name],domProps:{innerHTML:t._s(e.text)}}):t._e()],1)])})],2):t._e()},[],!1,null,null,null);e.a=component.exports},134:function(t,e,n){"use strict";var o={props:{src:{type:String,default:""},webp:{type:String,default:""},orientation:{type:String,default:"landscape"},type:{type:String,default:"wide"}}},r=n(4),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["mockup",t.orientation,t.type]},[n("div",{staticClass:"mockup__container"},[n("div",{staticClass:"mockup__image"},[t.src?n("amp-img",{staticClass:"isometric__image",attrs:{height:"wide"===t.type?"portrait"===t.orientation?"64vw":"48vw":"portrait"===t.orientation?"64vw":"40vw",src:t.webp,width:"wide"===t.type?"portrait"===t.orientation?"48vw":"64vw":"portrait"===t.orientation?"40vw":"64vw"}},[n("amp-img",{staticClass:"isometric__image",attrs:{height:"wide"===t.type?"portrait"===t.orientation?"64vw":"48vw":"portrait"===t.orientation?"64vw":"40vw",src:t.src,width:"wide"===t.type?"portrait"===t.orientation?"48vw":"64vw":"portrait"===t.orientation?"40vw":"64vw"}})],1):t._e()],1),t._v(" "),n("div",{staticClass:"mockup__shadow"})])])},[],!1,null,null,null);e.a=component.exports},135:function(t,e,n){"use strict";var o={props:{name:{type:String,default:""},label:{type:String,default:""},items:{type:Array,default:function(){return[]},validator:function(t){return t&&t.length&&t.forEach(function(element){if(!element||"string"!=typeof element.description||"string"!=typeof element.label)return!1}),!0}}}},r=n(4),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("div",{class:["project__section",t.name]},[n("div",{staticClass:"section__title"},[t._v("\n    "+t._s(t.label)+"\n  ")]),t._v(" "),n("div",{class:["section__items",t.name]},t._l(t.items,function(e){return n("div",{key:e.label,staticClass:"section__item"},[n("a",{class:["section__item-link",{disabled:!e.url}],attrs:{href:e.url,target:"_blank"}},[e.src?n("amp-img",{staticClass:"section__item-image",attrs:{src:e.src,height:"1",width:"1"}}):t._e(),t._v(" "),n("div",{staticClass:"section__item-content"},[e.label?n("span",{staticClass:"section__item-label"},[t._v(t._s(e.label))]):t._e(),t._v(" "),e.description?n("span",{staticClass:"section__item-description"},[t._v(t._s(e.description))]):t._e()])],1)])}),0)]):t._e()},[],!1,null,null,null);e.a=component.exports},136:function(t,e,n){"use strict";var o={props:{name:{type:String,default:""},items:{type:Array,default:function(){return[]},validator:function(t){return t&&t.length&&t.forEach(function(element){if(!element||"string"!=typeof element.label||"string"!=typeof element.url)return!1}),!0}}}},r=n(4),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("div",{class:["project__section",t.name]},[n("div",{staticClass:"project__actions"},t._l(t.items,function(e){return n("a",{key:e.url,staticClass:"project__link",attrs:{href:e.url,target:e.in?"_self":"_blank"}},[n("div",{staticClass:"code button project__button"},[t._v("\n        "+t._s(e.label)+"\n      ")])])}),0)]):t._e()},[],!1,null,null,null);e.a=component.exports},137:function(t,e,n){"use strict";n(39);var o={props:{name:{type:String,default:""},label:{type:String,default:""},items:{type:Array,default:function(){return[]},validator:function(t){return t&&t.length&&t.forEach(function(element){if(!element||"string"!=typeof element.name||"string"!=typeof element.title||!Array.isArray(element.tags))return!1;element.tags.forEach(function(t){if(!t||"string"!=typeof t.description||"string"!=typeof t.label)return!1})}),!0}}}},r=n(4),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("div",{class:["project__section",t.name]},[n("div",{staticClass:"section__title"},[t._v("\n    "+t._s(t.label)+"\n  ")]),t._v(" "),n("div",{staticClass:"section__container"},t._l(t.items,function(e){return n("div",{key:e.name,class:["section__items",e.name]},[n("div",{staticClass:"section__subtitle"},[t._v("\n        "+t._s(e.title)+"\n      ")]),t._v(" "),n("div",{staticClass:"section__row"},t._l(e.tags,function(e){return n("div",{key:e.label,staticClass:"section__item tag"},[e.src?n("amp-img",{staticClass:"section__item-icon",attrs:{src:e.src,height:"1",width:"1"}}):t._e(),t._v(" "),e.label?n("span",{staticClass:"section__item-label tag"},[t._v(t._s(e.label))]):t._e(),t._v(" "),e.description?n("span",{staticClass:"section__item-description"},[t._v(t._s(e.description))]):t._e()],1)}),0)])}),0)]):t._e()},[],!1,null,null,null);e.a=component.exports},154:function(t,e,n){"use strict";n.r(e);var o=n(136),r=n(133),l=n(53),c=n(134),m=n(135),d=n(137),h={components:{ActionsSection:o.a,HTMLSection:r.a,Jumbotron:l.a,Mockup:c.a,LinksSection:m.a,TagsSection:d.a},head:function(){return{title:"Bubble - hliejun/projects",meta:[{hid:"description",name:"description",content:"Problem-solving and stress management anonymous chat application."},{property:"og:title",content:"Bubble - hliejun/projects"},{property:"og:description",content:"Problem-solving and stress management anonymous chat application."},{property:"og:url",content:"hliejun.github.io"},{property:"og:image",content:"https://hliejun.github.io/images/meta/preview.png"}]}},data:function(){return{jumbotron:{title:"Bubble Chat",subtitle:"Problem-solving and stress management anonymous chat application.",actions:[{label:"Project Repo",url:"https://github.com/CS3216-Bubble"}]},mockup:{webp:"/images/projects/bubble-1.webp",src:"/images/projects/bubble-1.jpg",orientation:"portrait",type:"narrow"},carpets:{about:"/images/projects/bubble-2.webp",aboutFallback:"/images/projects/bubble-2.jpg"},technologies:[{name:"build",title:"BUILD",tags:[{label:"React Native"},{label:"ReactJS"},{label:"Redux"},{label:"socket.io"},{label:"Express"},{label:"SQLite"}]},{name:"tools",title:"TOOLS",tags:[{label:"ESLint"},{label:"NPM"},{label:"Marvel"},{label:"Photoshop"}]},{name:"platforms",title:"PLATFORMS",tags:[{label:"Nginx"},{label:"Amazon EC2"},{label:"Android"},{label:"iOS"}]}],about:[{name:"description",title:"DESCRIPTION",text:"\n            Started out as a chat application for students in need of counselling,\n            Bubble became an application for students to chat, brainstorm and rant\n            anonymously. It is a mobile chat application that is implemented in\n            React Native. It also has a web interface built with React for web users\n            to access chat groups.\n          "},{name:"motivation",title:"MOTIVATION",text:"\n            With Bubble, we aimed to learn about the entire flow of building an\n            application, from implementing a minimum viable product, to marketing\n            the product, user acquistion, engagement and management. Bubble was\n            also a platform for students to experiment with anonymity in chat\n            applications and to become aware of the pros and cons of this anonymity,\n            in the safety net of an educational institution and a testbed module.\n          "},{name:"constraints",title:"CHALLENGES",text:"\n            The greatest challenge in this project was to manage anonymity in a chat.\n            From ensuring data privacy to meeting the requirements of the application\n            markets, we learnt the complexities involved in publishing an anonymous\n            chat application, such as the need for a flagging and reporting system and\n            terms of use that polices the anonymity. While we lack the time and resources\n            to provide these facilities and eventually failed to publish on the iOS App\n            Store, we did succeed in releasing on Play Store and web in the module term.\n          "}],features:[{name:"anonymity",title:"ANONYMITY",webp:"/images/projects/bubble-3.webp",src:"/images/projects/bubble-3.jpg",text:"\n            Chat anonymously with strangers in topical chat rooms. No sign-in or registration\n            is required. Pseudo-identity are persisted through socket sessions, cache and\n            Redux store.\n          "},{name:"realtime",title:"REAL-TIME",webp:"/images/projects/bubble-4.webp",src:"/images/projects/bubble-4.jpg",text:"\n            Chats are fired in real-time through socket events along with mobile application\n            notifications. There is also an option to turn off notifications for individual\n            rooms.\n          "},{name:"categories",title:"CATEGORY TAGGING",webp:"/images/projects/bubble-5.webp",src:"/images/projects/bubble-5.jpg",text:"\n            Chat rooms can be labelled or tagged with categorised tags. These tags\n            are colour-coded and can be used to filter conversations.\n          "},{name:"filter",title:"SEARCH & FILTER",webp:"/images/projects/bubble-6.webp",src:"/images/projects/bubble-6.jpg",text:"\n            You can search for rooms by room title, or filter them by their tagged\n            categories.\n          "}],team:[{label:"Michelle Tan",description:"\n            Michelle was responsible for UI/UX design, React Native application, marketing\n            designs and content creation.\n          ",src:"/images/profiles/michelle.jpg",url:"https://github.com/michelletan"},{label:"Ng Zhi An",description:"\n            Zhi An handled the backend Express application, database, socket events and\n            DevOps.\n          ",src:"/images/profiles/zhian.jpg",url:"https://www.ngzhian.com"},{label:"Nicholette Li",description:"\n            Nicholette worked on the web chat interface, content creation and marketing.\n          ",src:"/images/profiles/nicholette.jpg",url:"https://github.com/nicholette"},{label:"Huang Lie Jun",description:"\n            I wrote the React Native application with Michelle, socket client for\n            front-end and Redux stores.\n          ",src:"/images/profiles/liejun.jpg",url:"https://github.com/hliejun"}],references:[{label:"React Native Documentation",description:"\n            Official documentation and tutorials for React Native.\n          ",src:"/images/links/reactnative.jpg",url:"https://facebook.github.io/react-native/docs/getting-started"},{label:"React Native with Redux",description:"\n            Tutorial about using Redux with React Native on Alligator.io.\n          ",src:"/images/links/alligatorio.jpg",url:"https://alligator.io/react/react-native-redux"},{label:"socket.io with React Native",description:"\n            Tutorial about using socket.io with React Native for a chat application on Hackernoon.\n          ",src:"/images/links/hackernoon.jpg",url:"https://hackernoon.com/a-simple-messaging-app-with-react-native-and-socket-io-e1cae3df7bda"},{label:"React Native Gifted Chat",description:"\n            Fully featured React Native chat components by Farid Safi on GitHub.\n          ",src:"/images/links/github.jpg",url:"http://gifted.chat"}],actions:[{label:"Food Logging",url:"/projects/foodlogging",in:!0},{label:"Weight",url:"/projects/weight",in:!0}]}}},_=n(4),component=Object(_.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page bubble project"},[n("amp-image-lightbox",{staticClass:"gallery__lightbox",attrs:{id:"lightbox",layout:"nodisplay"}}),t._v(" "),n("Mockup",{attrs:{webp:t.mockup.webp,src:t.mockup.src,orientation:t.mockup.orientation,type:t.mockup.type}}),t._v(" "),n("Jumbotron",{attrs:{actions:t.jumbotron.actions,name:t.jumbotron.name,src:t.jumbotron.src,subtitle:t.jumbotron.subtitle,title:t.jumbotron.title}}),t._v(" "),n("div",{staticClass:"page__content"},[n("amp-position-observer",{attrs:{on:"enter:fadeIn.start","intersection-ratios":".3",layout:"nodisplay"}}),t._v(" "),n("TagsSection",{attrs:{name:"technologies",label:"TECHNOLOGY",items:t.technologies}}),t._v(" "),n("HTMLSection",{attrs:{name:"about",label:"ABOUT",items:t.about,carpet:t.carpets.about,"carpet-fallback":t.carpets.aboutFallback}}),t._v(" "),n("HTMLSection",{attrs:{name:"features",label:"FEATURES",items:t.features}}),t._v(" "),n("LinksSection",{attrs:{name:"team",label:"TEAM",items:t.team}}),t._v(" "),n("LinksSection",{attrs:{name:"references",label:"REFERENCES",items:t.references}}),t._v(" "),n("ActionsSection",{attrs:{name:"actions",items:t.actions}})],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);