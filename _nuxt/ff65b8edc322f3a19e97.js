(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{133:function(t,e,n){"use strict";n(39);var o={props:{carpet:{type:String,default:""},name:{type:String,default:""},label:{type:String,default:""},items:{type:Array,default:function(){return[]},validator:function(t){return t&&t.length&&t.forEach(function(element){if(!element||"string"!=typeof element.name||"string"!=typeof element.text||"string"!=typeof element.title)return!1}),!0}}}},r=n(4),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("div",{class:["project__section",t.name]},[t.carpet?n("amp-fx-flying-carpet",{staticClass:"section__flying-carpet",attrs:{height:"1"}},[n("amp-img",{staticClass:"section__flying-carpet-image",attrs:{src:t.carpet,height:"1",width:"1"}})],1):t._e(),t._v(" "),n("div",{staticClass:"section__title"},[t._v("\n    "+t._s(t.label)+"\n  ")]),t._v(" "),t._l(t.items,function(e){return n("div",{key:e.name,class:["section__items",e.name]},[n("div",{staticClass:"section__subtitle"},[t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"section__sub-row"},[e.video?n("amp-video",{staticClass:"section__item-image",attrs:{controls:"",autoplay:"",loop:"",noaudio:"",height:"1",poster:e.poster,width:"1"}},[n("source",{attrs:{src:e.webm,type:"video/webm"}}),t._v(" "),n("source",{attrs:{src:e.video,type:"video/mp4"}})]):e.src?n("amp-img",{staticClass:"section__item-image",attrs:{height:"1",on:"tap:lightbox",role:"button",tabindex:"0",src:e.src,width:"1"}}):t._e(),t._v(" "),e.text?n("div",{class:["section__item-text",e.name],domProps:{innerHTML:t._s(e.text)}}):t._e()],1)])})],2):t._e()},[],!1,null,null,null);e.a=component.exports},134:function(t,e,n){"use strict";var o={props:{src:{type:String,default:""},orientation:{type:String,default:"landscape"},type:{type:String,default:"wide"}}},r=n(4),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["mockup",t.orientation,t.type]},[n("div",{staticClass:"mockup__container"},[n("div",{staticClass:"mockup__image"},[t.src?n("amp-img",{staticClass:"isometric__image",attrs:{height:"wide"===t.type?"portrait"===t.orientation?"64vw":"48vw":"portrait"===t.orientation?"64vw":"40vw",src:t.src,width:"wide"===t.type?"portrait"===t.orientation?"48vw":"64vw":"portrait"===t.orientation?"40vw":"64vw"}}):t._e()],1),t._v(" "),n("div",{staticClass:"mockup__shadow"})])])},[],!1,null,null,null);e.a=component.exports},135:function(t,e,n){"use strict";var o={props:{name:{type:String,default:""},label:{type:String,default:""},items:{type:Array,default:function(){return[]},validator:function(t){return t&&t.length&&t.forEach(function(element){if(!element||"string"!=typeof element.description||"string"!=typeof element.label)return!1}),!0}}}},r=n(4),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("div",{class:["project__section",t.name]},[n("div",{staticClass:"section__title"},[t._v("\n    "+t._s(t.label)+"\n  ")]),t._v(" "),n("div",{class:["section__items",t.name]},t._l(t.items,function(e){return n("div",{key:e.label,staticClass:"section__item"},[n("a",{class:["section__item-link",{disabled:!e.url}],attrs:{href:e.url,target:"_blank"}},[e.src?n("amp-img",{staticClass:"section__item-image",attrs:{src:e.src,height:"1",width:"1"}}):t._e(),t._v(" "),n("div",{staticClass:"section__item-content"},[e.label?n("span",{staticClass:"section__item-label"},[t._v(t._s(e.label))]):t._e(),t._v(" "),e.description?n("span",{staticClass:"section__item-description"},[t._v(t._s(e.description))]):t._e()])],1)])}),0)]):t._e()},[],!1,null,null,null);e.a=component.exports},136:function(t,e,n){"use strict";var o={props:{name:{type:String,default:""},items:{type:Array,default:function(){return[]},validator:function(t){return t&&t.length&&t.forEach(function(element){if(!element||"string"!=typeof element.label||"string"!=typeof element.url)return!1}),!0}}}},r=n(4),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("div",{class:["project__section",t.name]},[n("div",{staticClass:"project__actions"},t._l(t.items,function(e){return n("a",{key:e.url,staticClass:"project__link",attrs:{href:e.url,target:e.in?"_self":"_blank"}},[n("div",{staticClass:"code button project__button"},[t._v("\n        "+t._s(e.label)+"\n      ")])])}),0)]):t._e()},[],!1,null,null,null);e.a=component.exports},137:function(t,e,n){"use strict";n(39);var o={props:{name:{type:String,default:""},label:{type:String,default:""},items:{type:Array,default:function(){return[]},validator:function(t){return t&&t.length&&t.forEach(function(element){if(!element||"string"!=typeof element.name||"string"!=typeof element.title||!Array.isArray(element.tags))return!1;element.tags.forEach(function(t){if(!t||"string"!=typeof t.description||"string"!=typeof t.label)return!1})}),!0}}}},r=n(4),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("div",{class:["project__section",t.name]},[n("div",{staticClass:"section__title"},[t._v("\n    "+t._s(t.label)+"\n  ")]),t._v(" "),n("div",{staticClass:"section__container"},t._l(t.items,function(e){return n("div",{key:e.name,class:["section__items",e.name]},[n("div",{staticClass:"section__subtitle"},[t._v("\n        "+t._s(e.title)+"\n      ")]),t._v(" "),n("div",{staticClass:"section__row"},t._l(e.tags,function(e){return n("div",{key:e.label,staticClass:"section__item tag"},[e.src?n("amp-img",{staticClass:"section__item-icon",attrs:{src:e.src,height:"1",width:"1"}}):t._e(),t._v(" "),e.label?n("span",{staticClass:"section__item-label tag"},[t._v(t._s(e.label))]):t._e(),t._v(" "),e.description?n("span",{staticClass:"section__item-description"},[t._v(t._s(e.description))]):t._e()],1)}),0)])}),0)]):t._e()},[],!1,null,null,null);e.a=component.exports},156:function(t,e,n){"use strict";n.r(e);var o=n(136),r=n(133),l=n(53),c=n(134),m=n(135),d=n(137),h={components:{ActionsSection:o.a,HTMLSection:r.a,Jumbotron:l.a,Mockup:c.a,LinksSection:m.a,TagsSection:d.a},head:function(){return{title:"Missing Children - hliejun/projects",meta:[{hid:"description",name:"description",content:"Interactive pixel story made using Bitsy."},{property:"og:title",content:"Missing Children - hliejun/projects"},{property:"og:description",content:"Interactive pixel story made using Bitsy."},{property:"og:url",content:"hliejun.github.io"},{property:"og:image",content:"https://hliejun.github.io/images/meta/preview.png"}]}},data:function(){return{jumbotron:{title:"Missing Children of Ann Siang Hill",subtitle:"Interactive pixel story made using Bitsy.",actions:[{label:"Story",url:"https://hliejun.github.io/bitsy-story"},{label:"itch.io",url:"https://hliejun.itch.io/missing-children-of-ann-siang-hill"},{label:"About Bitsy",url:"https://ledoux.itch.io/bitsy"}]},mockup:{src:"/images/projects/bitsy-1.jpg",orientation:"landscape",type:"wide"},carpets:{about:"/images/projects/bitsy-2.jpg"},technologies:[{name:"build",title:"BUILD",tags:[{label:"Javascript"},{label:"HTML"},{label:"CSS"}]},{name:"tools",title:"TOOLS",tags:[{label:"Bitsy"}]},{name:"platforms",title:"PLATFORMS",tags:[{label:"itch.io"},{label:"GitHub Pages"}]}],about:[{name:"description",title:"DESCRIPTION",text:"\n            Set in the small town of Ann Siang Hill, an infamous cold case\n            on children going missing led to the abandonment of the ghastly\n            neighbourhood. Inspector Tan took the case into his own hands\n            for personal reasons, only to struggle between hallucinations\n            and reality. The mysterious visions he encounters as he travels\n            through the ghost town looking for clues leads him closer towards\n            the larger truth behind the disappearances of the children.<br>\n            <br>\n            Throughout the game, you will discover visions of the past through\n            the persona. This is indicated by entering a colorized version of\n            the scene. You may also pick up evidences from NPCs or props on\n            the ground. These evidences will hint at the places to go, or\n            unravel bits of pieces of the storyline. You are encouraged to\n            replay a couple of times to get the whole story!\n          "},{name:"motivation",title:"MOTIVATION",text:"\n            The goal of this pixel story was to learn about the agency of\n            exploration, unraveling a story through unordered discovery\n            and gameplay, driven by interactions and dialogues between\n            characters and key items. It was also an avenue for me to\n            fiddle with pixel art and game design.\n          "},{name:"constraints",title:"CHALLENGES",text:"\n            There were module limitations set on the use of sprites, rooms\n            and items. Bitsy hacks were not allowed too. However, these\n            restrictions did encourage interesting workarounds, such as\n            hiding entrypoints to conversation or event-triggered scenes\n            and using dialogues to guide players to these hiding spots.\n          "}],design:[{name:"world",title:"GAME WORLD",src:"/images/projects/bitsy-3.jpg",text:"\n            The game world comprises of 9 distinct scenes, 6 of them with\n            alternate dimensions. Key items are scattered among these scenes,\n            supplemented with monologues that unravel the plot. Characters can\n            only be found in scenes of the past. Interacting with these NPCs\n            will give clues to their identities, as well as the role they play\n            in the story. Depending on your possession of items, characters\n            will have different replies to your conversations.\n          "}],features:[{name:"dimensions",title:"ALTERNATE DIMENSIONS",video:"/videos/project-bitsy-01.mp4",webm:"/videos/project-bitsy-01.webm",text:"\n            You can travel between scenes to interact across dimensions. These\n            special dimensions represent the haunting of the past. To the\n            protagonist, it can be interpreted in many forms: hallucinations,\n            supernatural occurrences, time portals, recalls, etc. They are\n            distinct from the present dimensions in that they are coloured,\n            filled with NPCs and have slight differences in their setting.\n          "},{name:"hidden",title:"HIDDEN ITEMS",video:"/videos/project-bitsy-02.mp4",webm:"/videos/project-bitsy-02.webm",text:'\n            Some items are hidden from plain sight. This allows you to explore\n            the area, focus on dialogues and the storyline to make interactions\n            with the environment. It can also become a thrilling "treasure hunt"\n            if you prefer searching for them to listening for hints in dialogues.\n          '},{name:"intricate",title:"INTRICATE PIXEL ART & DIALOGUES",video:"/videos/project-bitsy-03.mp4",webm:"/videos/project-bitsy-03.webm",text:"\n            Each glyph, item, or character is designed meticulously to capture\n            traits, setting and character personalities in the scene. Some designs\n            are animated to illustrate events or create ambience.\n          "},{name:"parrot",title:"PARROT",video:"/videos/project-bitsy-04.mp4",webm:"/videos/project-bitsy-04.webm",text:"\n            You will find a parrot in the park scene, imitating random lines\n            of passers-by. The parrot is a mechanism to capture the story from\n            a spectator's point of view, and provides a different perspective\n            to the story. The imitated lines will hint at the story, as well\n            as your objectives in different scenes.\n          "}],references:[{label:"Balloon Diaspora",description:"\n            A game by Cardboard Computer focusing on the agency of exploration\n            and emotion through dialogues.\n          ",src:"/images/links/balloondiaspora.jpg",url:"http://cardboardcomputer.com/games/balloon-diaspora"},{label:"Glass",description:"\n            Interactive text story by Emily Short, putting the narrative in a\n            spectator's perspective.\n          ",src:"/images/links/glass.jpg",url:"http://inform7.com/learn/eg/glass/play.html"},{label:"Galatea",description:"\n            Also created by Emily Short, an interactive text story that inspires\n            player to form associations between key objects and entities with\n            story fragments.\n          ",src:"/images/links/galatea.jpg",url:"http://pr-if.org/play/galatea"}],actions:[{label:"Pokémania",url:"/projects/pokemania",in:!0},{label:"HypeDyn Stories",url:"/projects/hypedyn",in:!0}]}}},_=n(4),component=Object(_.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page bitsy project"},[n("amp-image-lightbox",{staticClass:"gallery__lightbox",attrs:{id:"lightbox",layout:"nodisplay"}}),t._v(" "),n("Mockup",{attrs:{src:t.mockup.src,orientation:t.mockup.orientation,type:t.mockup.type}}),t._v(" "),n("Jumbotron",{attrs:{actions:t.jumbotron.actions,name:t.jumbotron.name,src:t.jumbotron.src,subtitle:t.jumbotron.subtitle,title:t.jumbotron.title}}),t._v(" "),n("div",{staticClass:"page__content"},[n("amp-position-observer",{attrs:{on:"enter:fadeIn.start","intersection-ratios":".3",layout:"nodisplay"}}),t._v(" "),n("TagsSection",{attrs:{name:"technologies",label:"TECHNOLOGY",items:t.technologies}}),t._v(" "),n("HTMLSection",{attrs:{name:"about",label:"ABOUT",items:t.about,carpet:t.carpets.about}}),t._v(" "),n("HTMLSection",{attrs:{name:"design",label:"DESIGN",items:t.design}}),t._v(" "),n("HTMLSection",{attrs:{name:"features",label:"FEATURES",items:t.features}}),t._v(" "),n("LinksSection",{attrs:{name:"references",label:"REFERENCES",items:t.references}}),t._v(" "),n("ActionsSection",{attrs:{name:"actions",items:t.actions}})],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);