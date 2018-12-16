(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{126:function(t,e,i){"use strict";i(32),i(17);var s={props:{carpet:{type:String,default:""},name:{type:String,default:""},label:{type:String,default:""},items:{type:Array,default:[],validator:function(t){return t&&t.length&&t.forEach(function(t){if(!t||"string"!=typeof t.name||"string"!=typeof t.text||"string"!=typeof t.title)return!1}),!0}}}},n=i(3),a=Object(n.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.items.length?i("div",{class:["project__section",t.name]},[t.carpet?i("amp-fx-flying-carpet",{staticClass:"section__flying-carpet",attrs:{height:"1"}},[i("amp-img",{staticClass:"section__flying-carpet-image",attrs:{src:t.carpet,height:"1",width:"1"}})],1):t._e(),t._v(" "),i("div",{staticClass:"section__title"},[t._v(t._s(t.label))]),t._v(" "),t._l(t.items,function(e){return i("div",{key:e.name,class:["section__items",e.name]},[i("div",{staticClass:"section__subtitle"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"section__sub-row"},[e.video?i("amp-video",{staticClass:"section__item-image",attrs:{controls:"",autoplay:"",loop:"",noaudio:"",height:"1",poster:e.poster,width:"1"}},[i("source",{attrs:{src:e.webm,type:"video/webm"}}),t._v(" "),i("source",{attrs:{src:e.video,type:"video/mp4"}})]):e.src?i("amp-img",{staticClass:"section__item-image",attrs:{height:"1",on:"tap:lightbox",role:"button",tabindex:"0",src:e.src,width:"1"}}):t._e(),t._v(" "),e.text?i("div",{class:["section__item-text",e.name],domProps:{innerHTML:t._s(e.text)}}):t._e()],1)])})],2):t._e()},[],!1,null,null,null);a.options.__file="HTMLSection.vue";e.a=a.exports},127:function(t,e,i){"use strict";i(17);var s={props:{name:{type:String,default:""},label:{type:String,default:""},items:{type:Array,default:[],validator:function(t){return t&&t.length&&t.forEach(function(t){if(!t||"string"!=typeof t.description||"string"!=typeof t.label)return!1}),!0}}}},n=i(3),a=Object(n.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.items.length?i("div",{class:["project__section",t.name]},[i("div",{staticClass:"section__title"},[t._v(t._s(t.label))]),t._v(" "),i("div",{class:["section__items",t.name]},t._l(t.items,function(e){return i("div",{key:e.label,staticClass:"section__item"},[i("a",{class:["section__item-link",{disabled:!e.url}],attrs:{href:e.url,target:"_blank"}},[e.src?i("amp-img",{staticClass:"section__item-image",attrs:{src:e.src,height:"1",width:"1"}}):t._e(),t._v(" "),i("div",{staticClass:"section__item-content"},[e.label?i("span",{staticClass:"section__item-label"},[t._v(t._s(e.label))]):t._e(),t._v(" "),e.description?i("span",{staticClass:"section__item-description"},[t._v(t._s(e.description))]):t._e()])],1)])}))]):t._e()},[],!1,null,null,null);a.options.__file="LinksSection.vue";e.a=a.exports},128:function(t,e,i){"use strict";i(32),i(17);var s={props:{name:{type:String,default:""},label:{type:String,default:""},items:{type:Array,default:[],validator:function(t){return t&&t.length&&t.forEach(function(t){if(!t||"string"!=typeof t.name||"array"!=typeof t.tags||"string"!=typeof t.title)return!1;tags.forEach(function(t){if(!t||"string"!=typeof t.description||"string"!=typeof t.label)return!1})}),!0}}}},n=i(3),a=Object(n.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.items.length?i("div",{class:["project__section",t.name]},[i("div",{staticClass:"section__title"},[t._v(t._s(t.label))]),t._v(" "),i("div",{staticClass:"section__container"},t._l(t.items,function(e){return i("div",{key:e.name,class:["section__items",e.name]},[i("div",{staticClass:"section__subtitle"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"section__row"},t._l(e.tags,function(e){return i("div",{key:e.label,staticClass:"section__item tag"},[e.src?i("amp-img",{staticClass:"section__item-icon",attrs:{src:e.src,height:"1",width:"1"}}):t._e(),t._v(" "),e.label?i("span",{staticClass:"section__item-label tag"},[t._v(t._s(e.label))]):t._e(),t._v(" "),e.description?i("span",{staticClass:"section__item-description"},[t._v(t._s(e.description))]):t._e()],1)}))])}))]):t._e()},[],!1,null,null,null);a.options.__file="TagsSection.vue";e.a=a.exports},129:function(t,e,i){"use strict";var s={props:{src:{type:String,default:""},orientation:{type:String,default:"landscape"},type:{type:String,default:"wide"}}},n=i(3),a=Object(n.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["mockup",t.orientation,t.type]},[i("div",{staticClass:"mockup__container"},[i("div",{staticClass:"mockup__image"},[t.src?i("amp-img",{staticClass:"isometric__image",attrs:{height:"wide"===t.type?"portrait"===t.orientation?"64vw":"48vw":"portrait"===t.orientation?"64vw":"40vw",src:t.src,width:"wide"===t.type?"portrait"===t.orientation?"48vw":"64vw":"portrait"===t.orientation?"40vw":"64vw"}}):t._e()],1),t._v(" "),i("div",{staticClass:"mockup__shadow"})])])},[],!1,null,null,null);a.options.__file="Mockup.vue";e.a=a.exports},130:function(t,e,i){"use strict";i(17);var s={props:{name:{type:String,default:""},items:{type:Array,default:[],validator:function(t){return t&&t.length&&t.forEach(function(t){if(!t||"string"!=typeof t.label||"string"!=typeof t.url)return!1}),!0}}}},n=i(3),a=Object(n.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.items.length?i("div",{class:["project__section",t.name]},[i("div",{staticClass:"project__actions"},t._l(t.items,function(e){return i("a",{key:e.url,staticClass:"project__link",attrs:{href:e.url,target:e.in?"_self":"_blank"}},[i("div",{staticClass:"code button project__button"},[t._v("\n        "+t._s(e.label)+"\n      ")])])}))]):t._e()},[],!1,null,null,null);a.options.__file="ActionsSection.vue";e.a=a.exports},152:function(t,e,i){"use strict";i.r(e);var s=i(130),n=i(126),a=i(47),o=i(129),r=i(127),l=i(128),c={components:{ActionsSection:s.a,HTMLSection:n.a,Jumbotron:a.a,Mockup:o.a,LinksSection:r.a,TagsSection:l.a},head:function(){return{title:"UrbanZoom Assistant - hliejun",meta:[{hid:"description",name:"description",content:"Google Assistant and Twilio agent that performs property valuation homes in Singapore."}]}},data:function(){return{jumbotron:{title:"UrbanZoom Assistant",subtitle:"Google Assistant and Twilio agent that performs property valuation homes in Singapore.",actions:[{label:"Try the Action",url:"https://assistant.google.com/services/a/uid/0000002516830acd?hl=en&source=web"},{label:"Dial In (SG)",url:"tel:+6531388416"}]},mockup:{src:"/images/projects/urbanzoom-1.jpg",orientation:"portrait",type:"narrow"},technologies:[{name:"build",title:"BUILD",tags:[{label:"Express"},{label:"Dialogflow"},{label:"TwiML"}]},{name:"tools",title:"TOOLS",tags:[{label:"Google Actions"},{label:"Postman"}]},{name:"platforms",title:"PLATFORMS",tags:[{label:"Firebase"},{label:"Google App Engine"}]}],carpets:{about:"/images/projects/urbanzoom-2.jpg"},about:[{name:"description",title:"DESCRIPTION",text:"\n            UrbanZoom agent is a Google Assistant application built for property price\n            prediction of Singapore homes, with support for Google Assistant users,\n            Google Home devices, as well as non-technical users through phone calls.\n            The agent handles queries on property price valuation for a specified\n            postal code, providing accurate predictions on HDB and condominium prices,\n            also known as ZoomValue. Users will provide a postal code, the flat type\n            (for HDBs), floor number, unit number and floor area (auto-fill available)\n            to complete the query.\n          "},{name:"motivation",title:"MOTIVATION",text:"\n            The UrbanZoom action was created to make UrbanZoom property valuation\n            API accessible to consumers, regardless of their technical knowledge\n            and skills. This application was also created to demonstrate the\n            accessibility and ease of integrating the UrbanZoom API for property\n            valuation into web-based applications. I saw this project as a chance to\n            try out the Dialogflow API, as well as to learn about voice UX design.\n          "},{name:"constraints",title:"CHALLENGES",text:"\n            One of the biggest challenges would be to ensure accuracy and reliability\n            in speech-to-text recognition of addresses. For users with Singaporean accent\n            and especially for non-English speaking pioneers, getting the right addresses\n            from voice commands would be difficult. This was made worse with complex and native\n            addresses. My workaround was to prompt for postal addresses, then improve the\n            reliability of reading floor, unit numbers and postal code from voice commands.\n            The results were localised through a dictionary of corrections, generated from a\n            series of tests conducted by locals.<br>\n            <br>\n            This agent was built before the availability of Google Duplex. As such, one-click\n            voice call integrations were unavailable, at least not directly. I integrated the\n            agent with Twilio Programmable Voice service to receive and parse commands through\n            phone calls and ensured that the Dialogflow agent webhook was generic enough to\n            support services other than Google Assistant, such as Telegram bot and Facebook\n            Messenger.<br>\n            <br>\n            Another issue I had encountered would be the cold-start timings when serving the\n            webhook off Firebase Functions. Due to poor cold-start timings on Firebase Functions,\n            connections with the agent tend to time-out and break off midway, especially when\n            traffic to the webhook was low or sporadic. Switching over to Google App Engine\n            improved the experience tremendously.\n          "}],features:[{name:"accuracy",title:"ACCURACY",src:"/images/projects/urbanzoom-3.jpg",text:"\n            UrbanZoom Assistant utilises the UrbanZoom API for highly accurate\n            property valuation results. This allows the agent to provide reliable\n            answers to user queries.\n          "},{name:"guided",title:"GUIDED INTERFACE",video:"/videos/project-urbanzoom-01.mp4",webm:"/videos/project-urbanzoom-01.webm",text:"\n            Dialogues with UrbanZoom Assistant are guided with clear instructions\n            and feedback to prompt users for required fields such as postal code,\n            floor and unit number. Housing type is automatically derived from the\n            postal code, matching addresses are suggested when the user provide an\n            incomplete postal code and the floor area is automatically fetched for\n            homes already in the database.\n          "},{name:"agnostic",title:"DEVICE AGNOSTIC",src:"/images/projects/urbanzoom-4.jpg",text:"\n            Integrating with Google Action means the agent can be accessed through\n            all Google Assistant enabled devices, regardless of the input surface.\n            The agent can be used with Google Home, iOS, Android and third-party\n            Google Assistant enabled devices. With Twilio integration, the application\n            is also accessible from land lines, mobile phones or VOIP devices.\n            However, note that the calls are not toll-free, and charges might be\n            incurred by your service provider.\n          "}],references:[{label:"Dialogflow Fulfillment Webhook API",description:"\n            Fulfillment API repository with guide on handling Dialogflow requests and\n            custom responses using Promises.\n          ",src:"/images/links/github.jpg",url:"https://github.com/dialogflow/dialogflow-fulfillment-nodejs"},{label:"Dialogflow Client API",description:"\n            Client API repository for constructing Dialogflow queries from generic\n            third-party applications or agents.\n          ",src:"/images/links/github.jpg",url:"https://github.com/googleapis/nodejs-dialogflow"},{label:"Twilio TwiML Guide",description:"\n            Instructions to control call sessions, handle voice and keypad inputs,\n            build queries and hold calls.\n          ",src:"/images/links/twilio.jpg",url:"https://www.twilio.com/docs/voice/twiml"}],actions:[{label:"React Chat",url:"/projects/reactchat",in:!0},{label:"Little Lives",url:"/projects/littlelives",in:!0}]}}},u=i(3),p=Object(u.a)(c,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page urbanzoom project"},[i("amp-image-lightbox",{staticClass:"gallery__lightbox",attrs:{id:"lightbox",layout:"nodisplay"}}),t._v(" "),i("Mockup",{attrs:{src:t.mockup.src,orientation:t.mockup.orientation,type:t.mockup.type}}),t._v(" "),i("Jumbotron",{attrs:{actions:t.jumbotron.actions,name:t.jumbotron.name,src:t.jumbotron.src,subtitle:t.jumbotron.subtitle,title:t.jumbotron.title}}),t._v(" "),i("div",{staticClass:"page__content"},[i("amp-position-observer",{attrs:{on:"enter:fadeIn.start","intersection-ratios":".3",layout:"nodisplay"}}),t._v(" "),i("TagsSection",{attrs:{name:"technologies",label:"TECHNOLOGY",items:t.technologies}}),t._v(" "),i("HTMLSection",{attrs:{name:"about",label:"ABOUT",items:t.about,carpet:t.carpets.about}}),t._v(" "),i("HTMLSection",{attrs:{name:"features",label:"FEATURES",items:t.features}}),t._v(" "),i("LinksSection",{attrs:{name:"references",label:"REFERENCES",items:t.references}}),t._v(" "),i("ActionsSection",{attrs:{name:"actions",items:t.actions}})],1)],1)},[],!1,null,null,null);p.options.__file="urbanzoom.vue";e.default=p.exports}}]);