(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{133:function(t,e,n){"use strict";n(39);var r={props:{carpet:{type:String,default:""},carpetFallback:{type:String,default:""},name:{type:String,default:""},label:{type:String,default:""},items:{type:Array,default:function(){return[]},validator:function(t){return t&&t.length&&t.forEach(function(element){if(!element||"string"!=typeof element.name||"string"!=typeof element.text||"string"!=typeof element.title)return!1}),!0}}}},o=n(4),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("div",{class:["project__section",t.name]},[t.carpet?n("amp-fx-flying-carpet",{staticClass:"section__flying-carpet",attrs:{height:"1"}},[n("amp-img",{staticClass:"section__flying-carpet-image",attrs:{src:t.carpet,height:"1",width:"1"}},[n("amp-img",{staticClass:"section__flying-carpet-image",attrs:{fallback:"",src:t.carpetFallback,height:"1",width:"1"}})],1)],1):t._e(),t._v(" "),n("div",{staticClass:"section__title"},[t._v("\n    "+t._s(t.label)+"\n  ")]),t._v(" "),t._l(t.items,function(e){return n("div",{key:e.name,class:["section__items",e.name]},[n("div",{staticClass:"section__subtitle"},[t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"section__sub-row"},[e.video?n("amp-video",{staticClass:"section__item-image",attrs:{controls:"",autoplay:"",loop:"",noaudio:"",height:"1",poster:e.poster,width:"1"}},[n("source",{attrs:{src:e.video,type:"video/mp4"}})]):e.src?n("amp-img",{staticClass:"section__item-image",attrs:{height:"1",on:"tap:lightbox",role:"button",tabindex:"0",src:e.webp,width:"1"}},[n("amp-img",{staticClass:"section__item-image--fallback",attrs:{fallback:"",height:"1",on:"tap:lightbox",role:"button",tabindex:"0",src:e.src,width:"1"}})],1):t._e(),t._v(" "),e.text?n("div",{class:["section__item-text",e.name],domProps:{innerHTML:t._s(e.text)}}):t._e()],1)])})],2):t._e()},[],!1,null,null,null);e.a=component.exports},134:function(t,e,n){"use strict";var r={props:{src:{type:String,default:""},webp:{type:String,default:""},orientation:{type:String,default:"landscape"},type:{type:String,default:"wide"}}},o=n(4),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["mockup",t.orientation,t.type]},[n("div",{staticClass:"mockup__container"},[n("div",{staticClass:"mockup__image"},[t.src?n("amp-img",{staticClass:"isometric__image",attrs:{height:"wide"===t.type?"portrait"===t.orientation?"64vw":"48vw":"portrait"===t.orientation?"64vw":"40vw",src:t.webp,width:"wide"===t.type?"portrait"===t.orientation?"48vw":"64vw":"portrait"===t.orientation?"40vw":"64vw"}},[n("amp-img",{staticClass:"isometric__image",attrs:{height:"wide"===t.type?"portrait"===t.orientation?"64vw":"48vw":"portrait"===t.orientation?"64vw":"40vw",src:t.src,width:"wide"===t.type?"portrait"===t.orientation?"48vw":"64vw":"portrait"===t.orientation?"40vw":"64vw"}})],1):t._e()],1),t._v(" "),n("div",{staticClass:"mockup__shadow"})])])},[],!1,null,null,null);e.a=component.exports},135:function(t,e,n){"use strict";var r={props:{name:{type:String,default:""},label:{type:String,default:""},items:{type:Array,default:function(){return[]},validator:function(t){return t&&t.length&&t.forEach(function(element){if(!element||"string"!=typeof element.description||"string"!=typeof element.label)return!1}),!0}}}},o=n(4),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("div",{class:["project__section",t.name]},[n("div",{staticClass:"section__title"},[t._v("\n    "+t._s(t.label)+"\n  ")]),t._v(" "),n("div",{class:["section__items",t.name]},t._l(t.items,function(e){return n("div",{key:e.label,staticClass:"section__item"},[n("a",{class:["section__item-link",{disabled:!e.url}],attrs:{href:e.url,target:"_blank",rel:"noopener"}},[e.src?n("amp-img",{staticClass:"section__item-image",attrs:{src:e.src,height:"1",width:"1"}}):t._e(),t._v(" "),n("div",{staticClass:"section__item-content"},[e.label?n("span",{staticClass:"section__item-label"},[t._v(t._s(e.label))]):t._e(),t._v(" "),e.description?n("span",{staticClass:"section__item-description"},[t._v(t._s(e.description))]):t._e()])],1)])}),0)]):t._e()},[],!1,null,null,null);e.a=component.exports},136:function(t,e,n){"use strict";var r={props:{name:{type:String,default:""},items:{type:Array,default:function(){return[]},validator:function(t){return t&&t.length&&t.forEach(function(element){if(!element||"string"!=typeof element.label||"string"!=typeof element.url)return!1}),!0}}}},o=n(4),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("div",{class:["project__section",t.name]},[n("div",{staticClass:"project__actions"},t._l(t.items,function(e){return n("a",{key:e.url,staticClass:"project__link",attrs:{href:e.url,target:e.in?"_self":"_blank",rel:e.in?"":"noopener"}},[n("div",{staticClass:"code button project__button"},[t._v("\n        "+t._s(e.label)+"\n      ")])])}),0)]):t._e()},[],!1,null,null,null);e.a=component.exports},137:function(t,e,n){"use strict";n(39);var r={props:{name:{type:String,default:""},label:{type:String,default:""},items:{type:Array,default:function(){return[]},validator:function(t){return t&&t.length&&t.forEach(function(element){if(!element||"string"!=typeof element.name||"string"!=typeof element.title||!Array.isArray(element.tags))return!1;element.tags.forEach(function(t){if(!t||"string"!=typeof t.description||"string"!=typeof t.label)return!1})}),!0}}}},o=n(4),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("div",{class:["project__section",t.name]},[n("div",{staticClass:"section__title"},[t._v("\n    "+t._s(t.label)+"\n  ")]),t._v(" "),n("div",{staticClass:"section__container"},t._l(t.items,function(e){return n("div",{key:e.name,class:["section__items",e.name]},[n("div",{staticClass:"section__subtitle"},[t._v("\n        "+t._s(e.title)+"\n      ")]),t._v(" "),n("div",{staticClass:"section__row"},t._l(e.tags,function(e){return n("div",{key:e.label,staticClass:"section__item tag"},[e.src?n("amp-img",{staticClass:"section__item-icon",attrs:{src:e.src,height:"1",width:"1"}}):t._e(),t._v(" "),e.label?n("span",{staticClass:"section__item-label tag"},[t._v(t._s(e.label))]):t._e(),t._v(" "),e.description?n("span",{staticClass:"section__item-description"},[t._v(t._s(e.description))]):t._e()],1)}),0)])}),0)]):t._e()},[],!1,null,null,null);e.a=component.exports},142:function(t,e,n){"use strict";n.r(e);var r=n(136),o=n(133),l=n(53),c=n(134),m=n(135),d=n(137),_={components:{ActionsSection:r.a,HTMLSection:o.a,Jumbotron:l.a,Mockup:c.a,LinksSection:m.a,TagsSection:d.a},head:function(){return{title:"Weight - hliejun/projects",meta:[{hid:"description",name:"description",content:"Gravity-driven infinite run mini-game made using Unity."},{property:"og:title",content:"Weight - hliejun/projects"},{property:"og:description",content:"Gravity-driven infinite run mini-game made using Unity."},{property:"og:url",content:"hliejun.github.io"},{property:"og:image",content:"https://hliejun.github.io/images/meta/preview.png"}]}},data:function(){return{jumbotron:{title:"Weight",subtitle:"Gravity-driven infinite run mini-game made using Unity.",actions:[{label:"Game Release",url:"https://github.com/hliejun/Weight/releases"}]},mockup:{webp:"/images/projects/weight-1.webp",src:"/images/projects/weight-1.jpg",orientation:"landscape",type:"narrow"},technologies:[{name:"build",title:"BUILD",tags:[{label:"C#"}]},{name:"tools",title:"TOOLS",tags:[{label:"Unity"}]},{name:"platforms",title:"PLATFORMS",tags:[{label:"Windows"},{label:"macOS"}]}],carpets:{about:"",aboutFallback:""},about:[{name:"description",title:"DESCRIPTION",text:"\n            Weight is a infinite runner where you control the gravity shift\n            in a room. You control the fate of a fox who has had some bad\n            mushrooms and is therefore stuck in a dream. You must maintain\n            the healthy weight to maximise your speed of avoiding evil\n            alter-egos and strategically eating or avoiding mushrooms.\n            If you run into your evil half, become under or overweight,\n            the game ends.\n          "},{name:"motivation",title:"MOTIVATION",text:"\n            The objective of Weight was to experiment with infinite runner\n            game design and learn how to use Unity to create a simple 2D\n            platformer.\n          "},{name:"constraints",title:"CHALLENGES",text:"\n            This project was difficult as it was my first time trying out\n            Unity and I'm the only programmer in the team. It was also\n            challenging to procure game assets and meet the module\n            requirements of an infinite run game.\n          "}],design:[{name:"progression",title:"GAME PROGRESSION",video:"/videos/project-weight-01.mp4",webm:"/videos/project-weight-01.webm",text:"\n            As the game progresses, evil halfs and mushrooms will spawn\n            at an increasing rate. This increase the difficulty by reducing\n            the safe spaces for the player and makes it harder to avoid the\n            mushrooms and the evil halfs.\n          "},{name:"balance",title:"BALANCING MECHANISM",video:"/videos/project-weight-02.mp4",webm:"/videos/project-weight-02.webm",text:"\n            Evil halfs are spawned at random locations with a buffer period.\n            Mushrooms can be avoided or eaten to adjust the weight of the\n            fox. The reapers and mushrooms will disappear after some time\n            to reduce the clutter. Obstacles in the dream room are randomised\n            at the start of the game session.\n          "}],team:[{label:"Ashley Tan",src:"/images/profiles/placeholder.jpg",description:"\n            Ashley was the writer and UI designer. She helped Bettina with\n            asset creation.\n          "},{label:"Bettina Tan",src:"/images/profiles/placeholder.jpg",description:"\n            Bettina was our asset and content creator. She drew game\n            graphics, procured music and fonts.\n          "},{label:"Koh Tze Hui",src:"/images/profiles/placeholder.jpg",description:"\n            Tze Hui was the producer and QA. She validated and documented\n            the game development.\n          "},{label:"Huang Lie Jun",src:"/images/profiles/liejun.jpg",description:"\n            I worked on game prototyping and implementation using Unity.\n          "}],references:[{label:"2D Unity Tutorials",description:"\n            Tutorials on building a 2D game in Unity.\n          ",src:"/images/links/unity.jpg",url:"https://unity3d.com/learn/tutorials/s/2d-game-creation"}],actions:[{label:"Bubble Chat",url:"/projects/bubble",in:!0},{label:"ToDoList",url:"/projects/todolist",in:!0}]}}},h=n(4),component=Object(h.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page weight project"},[n("amp-image-lightbox",{staticClass:"gallery__lightbox",attrs:{id:"lightbox",layout:"nodisplay"}}),t._v(" "),n("Mockup",{attrs:{webp:t.mockup.webp,src:t.mockup.src,orientation:t.mockup.orientation,type:t.mockup.type}}),t._v(" "),n("Jumbotron",{attrs:{actions:t.jumbotron.actions,name:t.jumbotron.name,src:t.jumbotron.src,subtitle:t.jumbotron.subtitle,title:t.jumbotron.title}}),t._v(" "),n("div",{staticClass:"page__content"},[n("amp-position-observer",{attrs:{on:"enter:fadeIn.start","intersection-ratios":".3",layout:"nodisplay"}}),t._v(" "),n("TagsSection",{attrs:{name:"technologies",label:"TECHNOLOGY",items:t.technologies}}),t._v(" "),n("HTMLSection",{attrs:{name:"about",label:"ABOUT",items:t.about,carpet:t.carpets.about,"carpet-fallback":t.carpets.aboutFallback}}),t._v(" "),n("HTMLSection",{attrs:{name:"design",label:"DESIGN",items:t.design}}),t._v(" "),n("LinksSection",{attrs:{name:"team",label:"TEAM",items:t.team}}),t._v(" "),n("LinksSection",{attrs:{name:"references",label:"REFERENCES",items:t.references}}),t._v(" "),n("ActionsSection",{attrs:{name:"actions",items:t.actions}})],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);