(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{133:function(t,e,n){"use strict";n(39);var o={props:{carpet:{type:String,default:""},name:{type:String,default:""},label:{type:String,default:""},items:{type:Array,default:function(){return[]},validator:function(t){return t&&t.length&&t.forEach(function(element){if(!element||"string"!=typeof element.name||"string"!=typeof element.text||"string"!=typeof element.title)return!1}),!0}}}},r=n(4),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("div",{class:["project__section",t.name]},[t.carpet?n("amp-fx-flying-carpet",{staticClass:"section__flying-carpet",attrs:{height:"1"}},[n("amp-img",{staticClass:"section__flying-carpet-image",attrs:{src:t.carpet,height:"1",width:"1"}})],1):t._e(),t._v(" "),n("div",{staticClass:"section__title"},[t._v("\n    "+t._s(t.label)+"\n  ")]),t._v(" "),t._l(t.items,function(e){return n("div",{key:e.name,class:["section__items",e.name]},[n("div",{staticClass:"section__subtitle"},[t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"section__sub-row"},[e.video?n("amp-video",{staticClass:"section__item-image",attrs:{controls:"",autoplay:"",loop:"",noaudio:"",height:"1",poster:e.poster,width:"1"}},[n("source",{attrs:{src:e.video,type:"video/mp4"}})]):e.src?n("amp-img",{staticClass:"section__item-image",attrs:{height:"1",on:"tap:lightbox",role:"button",tabindex:"0",src:e.src,width:"1"}}):t._e(),t._v(" "),e.text?n("div",{class:["section__item-text",e.name],domProps:{innerHTML:t._s(e.text)}}):t._e()],1)])})],2):t._e()},[],!1,null,null,null);e.a=component.exports},134:function(t,e,n){"use strict";var o={props:{src:{type:String,default:""},orientation:{type:String,default:"landscape"},type:{type:String,default:"wide"}}},r=n(4),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["mockup",t.orientation,t.type]},[n("div",{staticClass:"mockup__container"},[n("div",{staticClass:"mockup__image"},[t.src?n("amp-img",{staticClass:"isometric__image",attrs:{height:"wide"===t.type?"portrait"===t.orientation?"64vw":"48vw":"portrait"===t.orientation?"64vw":"40vw",src:t.src,width:"wide"===t.type?"portrait"===t.orientation?"48vw":"64vw":"portrait"===t.orientation?"40vw":"64vw"}}):t._e()],1),t._v(" "),n("div",{staticClass:"mockup__shadow"})])])},[],!1,null,null,null);e.a=component.exports},135:function(t,e,n){"use strict";var o={props:{name:{type:String,default:""},label:{type:String,default:""},items:{type:Array,default:function(){return[]},validator:function(t){return t&&t.length&&t.forEach(function(element){if(!element||"string"!=typeof element.description||"string"!=typeof element.label)return!1}),!0}}}},r=n(4),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("div",{class:["project__section",t.name]},[n("div",{staticClass:"section__title"},[t._v("\n    "+t._s(t.label)+"\n  ")]),t._v(" "),n("div",{class:["section__items",t.name]},t._l(t.items,function(e){return n("div",{key:e.label,staticClass:"section__item"},[n("a",{class:["section__item-link",{disabled:!e.url}],attrs:{href:e.url,target:"_blank"}},[e.src?n("amp-img",{staticClass:"section__item-image",attrs:{src:e.src,height:"1",width:"1"}}):t._e(),t._v(" "),n("div",{staticClass:"section__item-content"},[e.label?n("span",{staticClass:"section__item-label"},[t._v(t._s(e.label))]):t._e(),t._v(" "),e.description?n("span",{staticClass:"section__item-description"},[t._v(t._s(e.description))]):t._e()])],1)])}),0)]):t._e()},[],!1,null,null,null);e.a=component.exports},136:function(t,e,n){"use strict";var o={props:{name:{type:String,default:""},items:{type:Array,default:function(){return[]},validator:function(t){return t&&t.length&&t.forEach(function(element){if(!element||"string"!=typeof element.label||"string"!=typeof element.url)return!1}),!0}}}},r=n(4),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("div",{class:["project__section",t.name]},[n("div",{staticClass:"project__actions"},t._l(t.items,function(e){return n("a",{key:e.url,staticClass:"project__link",attrs:{href:e.url,target:e.in?"_self":"_blank"}},[n("div",{staticClass:"code button project__button"},[t._v("\n        "+t._s(e.label)+"\n      ")])])}),0)]):t._e()},[],!1,null,null,null);e.a=component.exports},137:function(t,e,n){"use strict";n(39);var o={props:{name:{type:String,default:""},label:{type:String,default:""},items:{type:Array,default:function(){return[]},validator:function(t){return t&&t.length&&t.forEach(function(element){if(!element||"string"!=typeof element.name||"string"!=typeof element.title||!Array.isArray(element.tags))return!1;element.tags.forEach(function(t){if(!t||"string"!=typeof t.description||"string"!=typeof t.label)return!1})}),!0}}}},r=n(4),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("div",{class:["project__section",t.name]},[n("div",{staticClass:"section__title"},[t._v("\n    "+t._s(t.label)+"\n  ")]),t._v(" "),n("div",{staticClass:"section__container"},t._l(t.items,function(e){return n("div",{key:e.name,class:["section__items",e.name]},[n("div",{staticClass:"section__subtitle"},[t._v("\n        "+t._s(e.title)+"\n      ")]),t._v(" "),n("div",{staticClass:"section__row"},t._l(e.tags,function(e){return n("div",{key:e.label,staticClass:"section__item tag"},[e.src?n("amp-img",{staticClass:"section__item-icon",attrs:{src:e.src,height:"1",width:"1"}}):t._e(),t._v(" "),e.label?n("span",{staticClass:"section__item-label tag"},[t._v(t._s(e.label))]):t._e(),t._v(" "),e.description?n("span",{staticClass:"section__item-description"},[t._v(t._s(e.description))]):t._e()],1)}),0)])}),0)]):t._e()},[],!1,null,null,null);e.a=component.exports},160:function(t,e,n){"use strict";n.r(e);var o=n(136),r=n(133),l=n(53),c=n(134),m=n(135),d=n(137),_={components:{ActionsSection:o.a,HTMLSection:r.a,Jumbotron:l.a,Mockup:c.a,LinksSection:m.a,TagsSection:d.a},head:function(){return{title:"ToDoList - hliejun/projects",meta:[{hid:"description",name:"description",content:"Group project on keyboard and text-based agenda and organiser Java applet."},{property:"og:title",content:"ToDoList - hliejun/projects"},{property:"og:description",content:"Group project on keyboard and text-based agenda and organiser Java applet."},{property:"og:url",content:"hliejun.github.io"},{property:"og:image",content:"https://hliejun.github.io/images/meta/preview.png"}]}},data:function(){return{jumbotron:{title:"ToDoList",subtitle:"Group project on keyboard and text-based agenda and organiser Java applet.",actions:[{label:"Repo",url:"https://github.com/cs2103jan2016-w13-2j/ToDoList"},{label:"Release",url:"https://github.com/cs2103jan2016-w13-2j/ToDoList/releases/tag/V0.6"},{label:"Docs",url:"https://hliejun.github.io/ToDoList/docs"},{label:"Guide",url:"https://hliejun.github.io/ToDoList/docs/guide.pdf"}]},mockup:{src:"/images/projects/todolist-1.jpg",orientation:"landscape",type:"wide"},technologies:[{name:"build",title:"BUILD",tags:[{label:"JavaFX"},{label:"ControlsFX"},{label:"JUnit"},{label:"Natty"},{label:"PrettyTime"}]},{name:"tools",title:"TOOLS",tags:[{label:"Eclipse"},{label:"Javadoc"}]}],carpets:{about:"/images/projects/todolist-2.jpg"},about:[{name:"description",title:"DESCRIPTION",text:"\n            ToDoList is an agenda organiser for keyboard experts. It manipulates an\n            agenda list by natural text commands.\n          "},{name:"motivation",title:"MOTIVATION",text:"\n            ToDoList was our first software engineering project, part of a module\n            to learn the essentials of software architecture and software development\n            lifecycle.\n          "},{name:"constraints",title:"CHALLENGES",text:"\n            The challenge in designing ToDoList was the constraint of limiting most\n            interactions to the keyboard. We had to experiment with practical and\n            natural ways to manipulate the agenda items without the use of a pointer\n            device.\n          "}],features:[{name:"natural",title:"NATURAL COMMANDS",src:"/images/projects/todolist-3.jpg",text:"\n            ToDoList will recognize special events or occasions, time of the day and\n            verbs as actions or commands, adverbs of time.\n          "},{name:"search",title:"SEARCH & FILTER",src:"/images/projects/todolist-4.jpg",text:"\n            You can search for an event by its title or name, or filter events by their\n            tagged categories.\n          "},{name:"sort",title:"SORTING",src:"/images/projects/todolist-5.jpg",text:"\n            You can sort events by title, start or end time, duration, and more.\n          "},{name:"undo",title:"UNDO & REDO",video:"/videos/project-todolist-01.mp4",webm:"/videos/project-todolist-01.webm",text:"\n            If you wish to correct your previous action, you can choose to undo or\n            redo changes made to your agenda list.\n          "},{name:"remind",title:"REMINDERS",video:"/videos/project-todolist-02.mp4",webm:"/videos/project-todolist-02.webm",text:"\n            Reminders can be set for important events and you will be notified as\n            long as you have the Java Applet running.\n          "},{name:"recurring",title:"RECURRING TASKS",src:"/images/projects/todolist-6.jpg",text:"\n            You can choose to set a task to be recurring for a specified time interval\n            and it will be reflected in your agenda list.\n          "},{name:"shortcuts",title:"SHORTCUTS",video:"/videos/project-todolist-03.mp4",webm:"/videos/project-todolist-03.webm",text:"\n            You can refer to agenda items by their index, make aliases for commands\n            and use arrow keys to browse the agenda list.\n          "},{name:"night",title:"DAY & NIGHT MODE",video:"/videos/project-todolist-04.mp4",webm:"/videos/project-todolist-04.webm",text:"\n            If you work in low-light environment, you can choose to switch over to\n            night mode.\n          "}],team:[{label:"Xiao Yu Xin",description:"\n            Yu Xin wrote the search and database modules for ToDoList.\n          ",src:"/images/profiles/yuxin.jpg",url:"https://github.com/XiaoYuxin"},{label:"Zhang Jiyi",description:"\n            Jiyi designed and implemented the parsers and logic components.\n          ",src:"/images/profiles/jiyi.jpg",url:"https://github.com/cs2103t"},{label:"Huang Lie Jun",description:"\n            I worked on the UI/UX designs, the views, controllers and project\n            coordination.\n          ",src:"/images/profiles/liejun.jpg",url:"https://github.com/hliejun"}],references:[{label:"JavaFX Tutorial",description:"\n            How to use JavaFX to implement interfaces in a Java applet.\n          ",src:"/images/links/oracle.jpg",url:"https://docs.oracle.com/javase/8/javafx/get-started-tutorial/get_start_apps.htm"},{label:"Natty Repository",description:"\n            Natural language date-time parser built by joestelmach for Java applications.\n          ",src:"/images/links/github.jpg",url:"https://github.com/joestelmach/natty"},{label:"PrettyTime Documentation",description:"\n            Documentation on PrettyTime API.\n          ",src:"/images/links/prettytime.jpg",url:"http://www.ocpsoft.org/prettytime"}],actions:[{label:"Weight",url:"/projects/weight",in:!0},{label:"Return",url:"/work",in:!0}]}}},v=n(4),component=Object(v.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page todolist project"},[n("amp-image-lightbox",{staticClass:"gallery__lightbox",attrs:{id:"lightbox",layout:"nodisplay"}}),t._v(" "),n("Mockup",{attrs:{src:t.mockup.src,orientation:t.mockup.orientation,type:t.mockup.type}}),t._v(" "),n("Jumbotron",{attrs:{actions:t.jumbotron.actions,name:t.jumbotron.name,src:t.jumbotron.src,subtitle:t.jumbotron.subtitle,title:t.jumbotron.title}}),t._v(" "),n("div",{staticClass:"page__content"},[n("amp-position-observer",{attrs:{on:"enter:fadeIn.start","intersection-ratios":".3",layout:"nodisplay"}}),t._v(" "),n("TagsSection",{attrs:{name:"technologies",label:"TECHNOLOGY",items:t.technologies}}),t._v(" "),n("HTMLSection",{attrs:{name:"about",label:"ABOUT",items:t.about,carpet:t.carpets.about}}),t._v(" "),n("HTMLSection",{attrs:{name:"features",label:"FEATURES",items:t.features}}),t._v(" "),n("LinksSection",{attrs:{name:"team",label:"TEAM",items:t.team}}),t._v(" "),n("LinksSection",{attrs:{name:"references",label:"REFERENCES",items:t.references}}),t._v(" "),n("ActionsSection",{attrs:{name:"actions",items:t.actions}})],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);