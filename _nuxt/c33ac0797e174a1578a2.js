(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{133:function(e,t,n){"use strict";var o={props:{name:{type:String,default:""},items:{type:Array,default:function(){return[]},validator:function(e){return e&&e.length&&e.forEach(function(element){if(!element||"string"!=typeof element.label||"string"!=typeof element.url)return!1}),!0}}}},r=n(4),component=Object(r.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.items.length?n("div",{class:["project__section",e.name]},[n("div",{staticClass:"project__actions"},e._l(e.items,function(t){return n("a",{key:t.url,staticClass:"project__link",attrs:{href:t.url,target:t.in?"_self":"_blank",rel:t.in?void 0:"noopener"}},[n("div",{staticClass:"code button project__button"},[e._v("\n        "+e._s(t.label)+"\n      ")])])}),0)]):e._e()},[],!1,null,null,null);t.a=component.exports},134:function(e,t,n){"use strict";n(39);var o={props:{carpet:{type:String,default:""},carpetFallback:{type:String,default:""},name:{type:String,default:""},label:{type:String,default:""},items:{type:Array,default:function(){return[]},validator:function(e){return e&&e.length&&e.forEach(function(element){if(!element||"string"!=typeof element.name||"string"!=typeof element.text||"string"!=typeof element.title)return!1}),!0}}}},r=n(4),component=Object(r.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.items.length?n("div",{class:["project__section",e.name]},[e.carpet?n("amp-fx-flying-carpet",{staticClass:"section__flying-carpet",attrs:{height:"1"}},[n("amp-img",{staticClass:"section__flying-carpet-image",attrs:{src:e.carpet,height:"1",width:"1"}},[n("amp-img",{staticClass:"section__flying-carpet-image",attrs:{fallback:"",src:e.carpetFallback,height:"1",width:"1"}})],1)],1):e._e(),e._v(" "),n("div",{staticClass:"section__title"},[e._v("\n    "+e._s(e.label)+"\n  ")]),e._v(" "),e._l(e.items,function(t){return n("div",{key:t.name,class:["section__items",t.name]},[n("div",{staticClass:"section__subtitle"},[e._v("\n      "+e._s(t.title)+"\n    ")]),e._v(" "),n("div",{staticClass:"section__sub-row"},[t.video?n("amp-video",{staticClass:"section__item-image",attrs:{controls:"",autoplay:"",loop:"",noaudio:"",height:"1",poster:t.poster,width:"1"}},[n("source",{attrs:{src:t.video,type:"video/mp4"}})]):t.src?n("amp-img",{staticClass:"section__item-image",attrs:{height:"1",on:"tap:lightbox",role:"button",tabindex:"0",src:t.webp,width:"1"}},[n("amp-img",{staticClass:"section__item-image--fallback",attrs:{fallback:"",height:"1",on:"tap:lightbox",role:"button",tabindex:"0",src:t.src,width:"1"}})],1):e._e(),e._v(" "),t.text?n("div",{class:["section__item-text",t.name],domProps:{innerHTML:e._s(t.text)}}):e._e()],1)])})],2):e._e()},[],!1,null,null,null);t.a=component.exports},135:function(e,t,n){"use strict";var o={props:{src:{type:String,default:""},webp:{type:String,default:""},orientation:{type:String,default:"landscape"},type:{type:String,default:"wide"}}},r=n(4),component=Object(r.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["mockup",e.orientation,e.type]},[n("div",{staticClass:"mockup__container"},[n("div",{staticClass:"mockup__image"},[e.src?n("amp-img",{staticClass:"isometric__image",attrs:{height:"wide"===e.type?"portrait"===e.orientation?"64vw":"48vw":"portrait"===e.orientation?"64vw":"40vw",src:e.webp,width:"wide"===e.type?"portrait"===e.orientation?"48vw":"64vw":"portrait"===e.orientation?"40vw":"64vw"}},[n("amp-img",{staticClass:"isometric__image",attrs:{height:"wide"===e.type?"portrait"===e.orientation?"64vw":"48vw":"portrait"===e.orientation?"64vw":"40vw",src:e.src,width:"wide"===e.type?"portrait"===e.orientation?"48vw":"64vw":"portrait"===e.orientation?"40vw":"64vw"}})],1):e._e()],1),e._v(" "),n("div",{staticClass:"mockup__shadow"})])])},[],!1,null,null,null);t.a=component.exports},136:function(e,t,n){"use strict";var o={props:{name:{type:String,default:""},label:{type:String,default:""},items:{type:Array,default:function(){return[]},validator:function(e){return e&&e.length&&e.forEach(function(element){if(!element||"string"!=typeof element.description||"string"!=typeof element.label)return!1}),!0}}}},r=n(4),component=Object(r.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.items.length?n("div",{class:["project__section",e.name]},[n("div",{staticClass:"section__title"},[e._v("\n    "+e._s(e.label)+"\n  ")]),e._v(" "),n("div",{class:["section__items",e.name]},e._l(e.items,function(t){return n("div",{key:t.label,staticClass:"section__item"},[n("a",{class:["section__item-link",{disabled:!t.url}],attrs:{href:t.url,target:"_blank",rel:"noopener"}},[t.src?n("amp-img",{staticClass:"section__item-image",attrs:{src:t.src,height:"1",width:"1"}}):e._e(),e._v(" "),n("div",{staticClass:"section__item-content"},[t.label?n("span",{staticClass:"section__item-label"},[e._v(e._s(t.label))]):e._e(),e._v(" "),t.description?n("span",{staticClass:"section__item-description"},[e._v(e._s(t.description))]):e._e()])],1)])}),0)]):e._e()},[],!1,null,null,null);t.a=component.exports},137:function(e,t,n){"use strict";n(39);var o={props:{name:{type:String,default:""},label:{type:String,default:""},items:{type:Array,default:function(){return[]},validator:function(e){return e&&e.length&&e.forEach(function(element){if(!element||"string"!=typeof element.name||"string"!=typeof element.title||!Array.isArray(element.tags))return!1;element.tags.forEach(function(e){if(!e||"string"!=typeof e.description||"string"!=typeof e.label)return!1})}),!0}}}},r=n(4),component=Object(r.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.items.length?n("div",{class:["project__section",e.name]},[n("div",{staticClass:"section__title"},[e._v("\n    "+e._s(e.label)+"\n  ")]),e._v(" "),n("div",{staticClass:"section__container"},e._l(e.items,function(t){return n("div",{key:t.name,class:["section__items",t.name]},[n("div",{staticClass:"section__subtitle"},[e._v("\n        "+e._s(t.title)+"\n      ")]),e._v(" "),n("div",{staticClass:"section__row"},e._l(t.tags,function(t){return n("div",{key:t.label,staticClass:"section__item tag"},[t.src?n("amp-img",{staticClass:"section__item-icon",attrs:{src:t.src,height:"1",width:"1"}}):e._e(),e._v(" "),t.label?n("span",{staticClass:"section__item-label tag"},[e._v(e._s(t.label))]):e._e(),e._v(" "),t.description?n("span",{staticClass:"section__item-description"},[e._v(e._s(t.description))]):e._e()],1)}),0)])}),0)]):e._e()},[],!1,null,null,null);t.a=component.exports},146:function(e,t,n){"use strict";(function(e){var o=n(133),r=n(134),l=n(53),c=n(135),d=n(136),m=n(137);t.a={components:{ActionsSection:o.a,HTMLSection:r.a,Jumbotron:l.a,Mockup:c.a,LinksSection:d.a,TagsSection:m.a},head:function(){return{title:"Little Lives Check-In - hliejun/projects",meta:[{hid:"title",name:"title",content:"Little Lives Check-In - hliejun/projects"},{hid:"description",name:"description",content:"Face Check-In features built into Little Check-In iOS application."},{property:"og:title",content:"Little Lives Check-In - hliejun/projects"},{property:"og:description",content:"Face Check-In features built into Little Check-In iOS application."},{property:"og:url",content:"hliejun.github.io"},{property:"og:image",content:"https://hliejun.github.io/images/previews/little-lives.jpg"}],link:[{rel:"canonical",href:"".concat(e.env.HOST,"/projects/littlelives")}]}},data:function(){return{jumbotron:{title:"Little Lives Check-In",subtitle:"Face Check-In features built into Little Check-In iOS application.",actions:[{label:"About Little Lives",url:"https://www.littlelives.com"}]},mockup:{webp:"/images/projects/littlelives-1.webp",src:"/images/projects/littlelives-1.jpg",orientation:"portrait",type:"wide"},technologies:[{name:"build",title:"BUILD",tags:[{label:"Swift"},{label:"Alamofire"},{label:"Vision"},{label:"Azure Face"},{label:"CoreData"},{label:"SnapKit"}]},{name:"tools",title:"TOOLS",tags:[{label:"XCode"},{label:"Jazzy"},{label:"SwiftLint"}]},{name:"platforms",title:"PLATFORMS",tags:[{label:"iOS"}]}],carpets:{about:"/images/projects/littlelives-2.webp",aboutFallback:"/images/projects/littlelives-2.jpg"},about:[{name:"description",title:"DESCRIPTION",text:"\n            Little Lives Check-In is an iOS application optimised for\n            iPads and used to perform check-in on re-schoolers by taking\n            individual or group photos. The application uses face recognition\n            technology to register attendance for individuals in the photos\n            and sends the check-in photo along with other details to parents.\n          "},{name:"motivation",title:"MOTIVATION",text:"\n            This application was built with the goal to speed up the check-in\n            process of pre-schoolers. The face recognition solution was explored\n            as it not only could boost efficiency, but also provide entertainment\n            value and novel technical branding to the process. Detecting additional\n            information such as emotions of children at check-in could prove useful\n            to parents. As part of our software engineering module, it was also an\n            opportunity to hone our software architecture design skills.\n          "},{name:"constraints",title:"CHALLENGES",text:"\n            The main issue we faced was speed and performance of the face-tracking,\n            especially on older iPads. Since visual computations tend to be expensive,\n            the lack of processing power on old tablet models would result in sluggishness\n            of the interface and overheating, especially when processing multiple faces\n            simultaneously. We moved heavy processes to the cloud by using Azure Face API\n            for emotion and face detection, as well as face recognition, and performed\n            object tracking offline periodically using the iOS Vision API.<br>\n            <br>\n            Another issue would be the recognition accuracy for young children. We\n            filtered, normalised and tagged a good amount of photos of participating\n            pre-schoolers to train the model on Azure Face. We also proposed that newly\n            taken and normalised profiles should be used in training and updating the model\n            to progressively keep up with the children's growth.<br>\n            <br>\n            A key concern would be to track faces of active children who tend to move\n            about in the frame. We improved our tracking fidelity by toggling between\n            authoritative face detection using Azure Face API and auxillary object tracking\n            on Vision API. With object tracking being less computation-intensive, we could\n            afford higher refresh rates and more reliable tracking with relatively lesser\n            performance trade-off.\n          "}],design:[{name:"architecture",title:"ARCHITECTURE",webp:"/images/projects/littlelives-3.webp",src:"/images/projects/littlelives-3.jpg",text:"\n            Little Lives Check-In was written in a VIPER (Views, Interactors, Presenters,\n            Entities, Router) architecture, along with Data Access Objects, Service Workers\n            and Adapters for access to both networked and local services, and database\n            resources. The design ultimately geared towards an extensible application\n            that could be integrated with other third party data storage, recognition\n            services and maintained modularity of front-end components.\n          "}],features:[{name:"group",title:"MULTI-FACE RECOGNITION",webp:"/images/projects/littlelives-4.webp",src:"/images/projects/littlelives-4.jpg",text:"\n            Mutiple faces can be detected and recognised in a single picture.\n          "},{name:"tracking",title:"LIVE FACE TRACKING",video:"/videos/project-littlelives-01.mp4",webm:"/videos/project-littlelives-01.webm",text:"\n            Faces will be boxed and tracked when previewing before taking the photo.\n          "},{name:"emotion",title:"EMOTION DETECTION",webp:"/images/projects/littlelives-5.webp",src:"/images/projects/littlelives-5.jpg",text:"\n            All faces will be tagged with their detected emotions if network is available.\n          "},{name:"manual",title:"MANUAL SEARCH & TAG",webp:"/images/projects/littlelives-6.webp",src:"/images/projects/littlelives-6.jpg",text:"\n            In the occasion that a face is tagged wrongly or has no valid tags,\n            you may manually search and tag the face using the school registry.\n          "},{name:"access",title:"ACCESS CONTROL",webp:"/images/projects/littlelives-7.webp",src:"/images/projects/littlelives-7.jpg",text:"\n            Passwords can be set to lock certain views such as the check-in view\n            from unauthorised access to the check-in feature.\n          "},{name:"nda",text:"\n            <i>\n            NOTE:<br>\n            Due to non-disclosure agreement, the screengrabs did not feature children at the pre-schools.\n            Instead, we used stock photos and faces of celebrities, politicians and myself.\n            </i>\n          "}],team:[{label:"Abel Lim",description:"\n            Abel was responsible for writing data access objects, offline face\n            service and face tracking.\n          ",src:"/images/profiles/abel.jpg",url:"https://github.com/abellimz"},{label:"Joel Lim",description:"\n            Joel wrote the access control module and face rectangles logic.\n          ",src:"/images/profiles/joel.jpg",url:"https://aljorhythm.github.io"},{label:"Nicholas Lui",description:"\n            Nicholas was in-charged of writing network services, Azure Face\n            service and data entities.\n          ",src:"/images/profiles/nicholas.jpg",url:"https://github.com/nicholasluimy"},{label:"Huang Lie Jun",description:"\n            I wrote the views, interactors, presenters and controllers, linking\n            the UI with services and data layers.\n          ",src:"/images/profiles/liejun.jpg",url:"https://github.com/hliejun"}],references:[{label:"VIPER Design Pattern",description:"\n            Guide to the VIPER design principles, structure and implementations.\n          ",src:"/images/links/medium.jpg",url:"https://medium.com/@smalam119/viper-design-pattern-for-ios-application-development-7a9703902af6"},{label:"Azure Face API",description:"\n            Instructions to using Azure Face for emotion detection, face detection\n            and face recognition.\n          ",src:"/images/links/azure.jpg",url:"https://docs.microsoft.com/en-us/azure/cognitive-services/face/overview"},{label:"AVCapture and Vision API",description:"\n            Details on how to process and link the camera frame inputs with detection\n            and tracking using Vision.\n          ",src:"/images/links/apple.jpg",url:"https://developer.apple.com/documentation/vision/recognizing_objects_in_live_capture"}],actions:[{label:"UrbanZoom",url:"/projects/urbanzoom",in:!0},{label:"Pokémania",url:"/projects/pokemania",in:!0}]}}}}).call(this,n(81))},170:function(e,t,n){"use strict";n.r(t);var o=n(146).a,r=n(4),component=Object(r.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page littlelives project"},[n("amp-image-lightbox",{staticClass:"gallery__lightbox",attrs:{id:"lightbox",layout:"nodisplay"}}),e._v(" "),n("Mockup",{attrs:{webp:e.mockup.webp,src:e.mockup.src,orientation:e.mockup.orientation,type:e.mockup.type}}),e._v(" "),n("Jumbotron",{attrs:{actions:e.jumbotron.actions,name:e.jumbotron.name,src:e.jumbotron.src,subtitle:e.jumbotron.subtitle,title:e.jumbotron.title}}),e._v(" "),n("div",{staticClass:"page__content"},[n("amp-position-observer",{attrs:{on:"enter:fadeIn.start","intersection-ratios":".1",layout:"nodisplay"}}),e._v(" "),n("TagsSection",{attrs:{name:"technologies",label:"TECHNOLOGY",items:e.technologies}}),e._v(" "),n("HTMLSection",{attrs:{name:"about",label:"ABOUT",items:e.about,carpet:e.carpets.about,"carpet-fallback":e.carpets.aboutFallback}}),e._v(" "),n("HTMLSection",{attrs:{name:"design",label:"DESIGN",items:e.design}}),e._v(" "),n("HTMLSection",{attrs:{name:"features",label:"FEATURES",items:e.features}}),e._v(" "),n("LinksSection",{attrs:{name:"team",label:"TEAM",items:e.team}}),e._v(" "),n("LinksSection",{attrs:{name:"references",label:"REFERENCES",items:e.references}}),e._v(" "),n("ActionsSection",{attrs:{name:"actions",items:e.actions}})],1)],1)},[],!1,null,null,null);t.default=component.exports}}]);