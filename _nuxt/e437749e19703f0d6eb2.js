(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{125:function(e,t,n){"use strict";n(21);var i={props:{name:{type:String,default:""},src:{type:String,default:""},title:{type:String,default:""},subtitle:{type:String,default:""},actions:{type:Array,default:[],validator:function(e){return e&&e.length&&e.forEach(function(e){if(!e||"string"!=typeof e.label||"string"!=typeof e.url)return!1}),!0}},theme:{type:String,default:"light"}}},s=n(7),a=Object(s.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"jumbotron"},[n("amp-position-observer",{attrs:{on:"exit:fadeIn.start","intersection-ratios":"0.2",layout:"nodisplay"}}),e._v(" "),n("amp-position-observer",{attrs:{on:"enter:fadeOut.start","intersection-ratios":"0.2",layout:"nodisplay"}}),e._v(" "),n("div",{staticClass:"jumbotron__content"},[e.src?n("amp-img",{class:["jumbotron__image",e.theme,e.name],attrs:{height:"1",src:e.src,width:"1"}}):e._e(),e._v(" "),n("span",{staticClass:"stylized jumbotron__title"},[e._v(e._s(e.title))]),e._v(" "),n("span",{staticClass:"stylized jumbotron__subtitle"},[e._v(e._s(e.subtitle))]),e._v(" "),e.actions.length?n("div",{staticClass:"jumbotron__actions"},e._l(e.actions,function(t){return n("a",{key:t.url,staticClass:"jumbotron__link",attrs:{href:t.url,target:t.in?"_self":"_blank"}},[n("div",{staticClass:"code button jumbotron__button"},[e._v("\n          "+e._s(t.label)+"\n        ")])])})):e._e()],1)],1)},[],!1,null,null,null);a.options.__file="Jumbotron.vue";t.a=a.exports},126:function(e,t,n){"use strict";n(32),n(21);var i={props:{carpet:{type:String,default:""},name:{type:String,default:""},label:{type:String,default:""},items:{type:Array,default:[],validator:function(e){return e&&e.length&&e.forEach(function(e){if(!e||"string"!=typeof e.name||"string"!=typeof e.text||"string"!=typeof e.title)return!1}),!0}}}},s=n(7),a=Object(s.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.items.length?n("div",{class:["project__section",e.name]},[e.carpet?n("amp-fx-flying-carpet",{staticClass:"section__flying-carpet",attrs:{height:"1"}},[n("amp-img",{staticClass:"section__flying-carpet-image",attrs:{src:e.carpet,height:"1",width:"1"}})],1):e._e(),e._v(" "),n("div",{staticClass:"section__title"},[e._v(e._s(e.label))]),e._v(" "),e._l(e.items,function(t){return n("div",{key:t.name,class:["section__items",t.name]},[n("div",{staticClass:"section__subtitle"},[e._v(e._s(t.title))]),e._v(" "),n("div",{staticClass:"section__sub-row"},[t.video?n("amp-video",{staticClass:"section__item-image",attrs:{controls:"",autoplay:"",loop:"",noaudio:"",height:"1",poster:t.poster,width:"1"}},[n("source",{attrs:{src:t.webm,type:"video/webm"}}),e._v(" "),n("source",{attrs:{src:t.video,type:"video/mp4"}})]):t.src?n("amp-img",{staticClass:"section__item-image",attrs:{height:"1",on:"tap:lightbox",role:"button",tabindex:"0",src:t.src,width:"1"}}):e._e(),e._v(" "),t.text?n("div",{class:["section__item-text",t.name],domProps:{innerHTML:e._s(t.text)}}):e._e()],1)])})],2):e._e()},[],!1,null,null,null);a.options.__file="HTMLSection.vue";t.a=a.exports},127:function(e,t,n){"use strict";var i={props:{src:{type:String,default:""},orientation:{type:String,default:"landscape"},type:{type:String,default:"wide"}}},s=n(7),a=Object(s.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["mockup",e.orientation,e.type]},[n("div",{staticClass:"mockup__container"},[n("div",{staticClass:"mockup__image"},[e.src?n("amp-img",{staticClass:"isometric__image",attrs:{height:"wide"===e.type?"portrait"===e.orientation?"64vw":"48vw":"portrait"===e.orientation?"64vw":"40vw",src:e.src,width:"wide"===e.type?"portrait"===e.orientation?"48vw":"64vw":"portrait"===e.orientation?"40vw":"64vw"}}):e._e()],1),e._v(" "),n("div",{staticClass:"mockup__shadow"})])])},[],!1,null,null,null);a.options.__file="Mockup.vue";t.a=a.exports},128:function(e,t,n){"use strict";n(21);var i={props:{name:{type:String,default:""},label:{type:String,default:""},items:{type:Array,default:[],validator:function(e){return e&&e.length&&e.forEach(function(e){if(!e||"string"!=typeof e.description||"string"!=typeof e.label)return!1}),!0}}}},s=n(7),a=Object(s.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.items.length?n("div",{class:["project__section",e.name]},[n("div",{staticClass:"section__title"},[e._v(e._s(e.label))]),e._v(" "),n("div",{class:["section__items",e.name]},e._l(e.items,function(t){return n("div",{key:t.label,staticClass:"section__item"},[n("a",{class:["section__item-link",{disabled:!t.url}],attrs:{href:t.url,target:"_blank"}},[t.src?n("amp-img",{staticClass:"section__item-image",attrs:{src:t.src,height:"1",width:"1"}}):e._e(),e._v(" "),n("div",{staticClass:"section__item-content"},[t.label?n("span",{staticClass:"section__item-label"},[e._v(e._s(t.label))]):e._e(),e._v(" "),t.description?n("span",{staticClass:"section__item-description"},[e._v(e._s(t.description))]):e._e()])],1)])}))]):e._e()},[],!1,null,null,null);a.options.__file="LinksSection.vue";t.a=a.exports},129:function(e,t,n){"use strict";n(21);var i={props:{name:{type:String,default:""},items:{type:Array,default:[],validator:function(e){return e&&e.length&&e.forEach(function(e){if(!e||"string"!=typeof e.label||"string"!=typeof e.url)return!1}),!0}}}},s=n(7),a=Object(s.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.items.length?n("div",{class:["project__section",e.name]},[n("div",{staticClass:"project__actions"},e._l(e.items,function(t){return n("a",{key:t.url,staticClass:"project__link",attrs:{href:t.url,target:t.in?"_self":"_blank"}},[n("div",{staticClass:"code button project__button"},[e._v("\n        "+e._s(t.label)+"\n      ")])])}))]):e._e()},[],!1,null,null,null);a.options.__file="ActionsSection.vue";t.a=a.exports},130:function(e,t,n){"use strict";n(32),n(21);var i={props:{name:{type:String,default:""},label:{type:String,default:""},items:{type:Array,default:[],validator:function(e){return e&&e.length&&e.forEach(function(e){if(!e||"string"!=typeof e.name||"array"!=typeof e.tags||"string"!=typeof e.title)return!1;tags.forEach(function(e){if(!e||"string"!=typeof e.description||"string"!=typeof e.label)return!1})}),!0}}}},s=n(7),a=Object(s.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.items.length?n("div",{class:["project__section",e.name]},[n("div",{staticClass:"section__title"},[e._v(e._s(e.label))]),e._v(" "),n("div",{staticClass:"section__container"},e._l(e.items,function(t){return n("div",{key:t.name,class:["section__items",t.name]},[n("div",{staticClass:"section__subtitle"},[e._v(e._s(t.title))]),e._v(" "),n("div",{staticClass:"section__row"},e._l(t.tags,function(t){return n("div",{key:t.label,staticClass:"section__item tag"},[t.src?n("amp-img",{staticClass:"section__item-icon",attrs:{src:t.src,height:"1",width:"1"}}):e._e(),e._v(" "),t.label?n("span",{staticClass:"section__item-label tag"},[e._v(e._s(t.label))]):e._e(),e._v(" "),t.description?n("span",{staticClass:"section__item-description"},[e._v(e._s(t.description))]):e._e()],1)}))])}))]):e._e()},[],!1,null,null,null);a.options.__file="TagsSection.vue";t.a=a.exports},138:function(e,t,n){"use strict";n.r(t);var i=n(129),s=n(126),a=n(125),r=n(127),o=n(128),l=n(130),c={components:{ActionsSection:i.a,HTMLSection:s.a,Jumbotron:a.a,Mockup:r.a,LinksSection:o.a,TagsSection:l.a},data:function(){return{jumbotron:{title:"SAT Solver",subtitle:"Group research on efficiency of satisfiability resolution strategies.",actions:[{label:"GitHub Repo",url:"https://github.com/hliejun/sat-solver"},{label:"Findings",url:"https://github.com/hliejun/SAT-Solver/blob/master/CS4244-SATSolver-Report.pdf"}]},mockup:{src:"/images/projects/satsolver-1.jpg",orientation:"landscape",type:"wide"},technologies:[{name:"build",title:"BUILD",tags:[{label:"Java"},{label:"JUnit"},{label:"Shell Script"}]},{name:"tools",title:"TOOLS",tags:[{label:"IntelliJ"},{label:"Bash"}]},{name:"platforms",title:"PLATFORMS",tags:[{label:"UNIX"}]}],about:[{name:"description",title:"DESCRIPTION",text:"\n            This research compares different satisfiability resolution\n            techniques, such as DPLL and CDCL with different branching\n            and conflict resolution heuristics. In this project, we\n            implemented several heuristics for solving satisfiability\n            and made comparisons through cnf formatted test cases. We\n            also modelled the Einstein's Puzzle into CNF form to be used\n            with our solvers.\n          "},{name:"motivation",title:"MOTIVATION",text:"\n            The motivation behind creating the solvers was to understand\n            the DPLL and CDCL algorithms through implementation, as well\n            as to compare and benchmark different heuristics.\n          "},{name:"constraints",title:"CHALLENGES",text:"\n            The challenge in this project was finding and implementing\n            heuristics for conflict resolution and picking branch variables\n            that can improve the solvers. We went through several research\n            papers before settling with the more common techniques that\n            could be implemented within the project timeframe.\n          "}],design:[{name:"solvers",title:"SOLVERS",text:"\n            We implemented 2 solvers for this project:<br>\n            <br>\n            <u>Davis–Putnam–Logemann–Loveland (DPLL)</u><br>\n            The DPLL algorithm is a backtracking search algorithm that\n            performs chronological backtracking until the variables are\n            exhausted. We wrote it in both recursive and iterative forms.<br>\n            <br>\n            <u>Conflict-Driven Clause Learning (CDCL)</u><br>\n            The CDCL algorithm performs conflict clause learning and\n            non-chronological backtracking by resolving an implication\n            graph. CDCL can be customised with different heuristics for\n            clause learning and picking branching variables.\n          "},{name:"heuristics",title:"CDCL HEURISTICS",text:"\n            For the CDCL solver, we implemented 3 variations of branching\n            heuristics:<br>\n            <br>\n            <u>2-Clause</u><br>\n            Pick an unassigned variable that occurred the most across\n            2­-clauses. This heuristic forces 2-­clauses to become assertive\n            after decision­ making.<br>\n            <br>\n            <u>All Clause</u><br>\n            Pick an unassigned variable that occurred the most across\n            all clauses.<br>\n            <br>\n            <u>Random</u><br>\n            Pick an unassigned variable randomly from a list of unassigned\n            symbols.<br>\n            <br>\n            For the conflict analysis and clause learning heuristic, we\n            implemented 1-UIP:<br>\n            <br>\n            <u>1-Unique Implication Point (1-UIP)</u><br>\n            We used the implication graph to extract antecedent clauses\n            to apply resolution with, starting from the conflict clause\n            antecedent to the conflict node. However, the resolution is\n            terminated as soon as we have reached a state where only 1\n            variable in the resolved clause belongs to the conflict level.\n            This provides us with an assertive clause that can be propagated\n            after backtracking to the highest level of the remaining variables\n            in the resolved clause.\n          "},{name:"puzzle",title:"EINSTEIN PUZZLE",text:"\n            The Einstein Puzzle is a logic puzzle that establishes a list\n            of conditions among 5 neighbours. There are ﬁve houses in ﬁve\n            diﬀerent colors. In each house lives a person with a diﬀerent\n            nationality. The ﬁve owners drink a certain type of beverage,\n            smoke a certain brand of cigar, and keep a certain pet. No owners\n            have the same pet, smoke the same brand of cigar or drink the\n            same beverage.<br>\n            <br>\n            <u>Question</u><br>\n            Who owns the fish?<br>\n            <br>\n            <u>Hints</u><br>\n            <ul>\n              <li>The Brit lives in the red house.</li>\n              <li>The Swede keeps dogs as pets.</li>\n              <li>The Dane drinks tea.</li>\n              <li>The green house is on the left of the white house.</li>\n              <li>The green house’s owner drinks coﬀee.</li>\n              <li>The person who smokes Pall Mall rears birds.</li>\n              <li>The owner of the yellow house smokes Dunhill.</li>\n              <li>The man living in the center house drinks milk.</li>\n              <li>The Norwegian lives in the ﬁrst house.</li>\n              <li>The man who smokes Blends lives next to the one who keeps cats.</li>\n              <li>The man who keeps the horse lives next to the man who smokes Dunhill.</li>\n              <li>The owner who smokes Bluemasters drinks beer.</li>\n              <li>The man who keeps the horse lives next to the man who smokes Dunhill.</li>\n              <li>The German smokes Prince.</li>\n              <li>The Norwegian lives next to the blue house.</li>\n              <li>The man who smokes Blends has a neighbor who drinks water.</li>\n            </ul>\n            <br>\n            <u>Assumptions</u><br>\n            <ul>\n              <li>The owner is the resident of each house.</li>\n              <li>One of the residents owns the ﬁsh.</li>\n              <li>The term neighbor in the last hint refers only to a directly adjacent neighbor.</li>\n              <li>The houses are on the same side of the street.</li>\n              <li>They are next to each other, and are ordered from left to right as you face them.</li>\n            </ul>\n            <br>\n            To model this problem, we created 150 variables to capture\n            states and possible combinations. From these 150 variables,\n            we designed rules that comply with the conditions specified\n            by the puzzle. These rules were represented by 1300 clauses,\n            categorised into several sections.<br>\n            <br>\n            <u>Simple Rules</u><br>\n            2-clauses to represent specified conditions that bind 2\n            properties.<br>\n            (i.e. If person P is Dane, then person P drinks tea.)<br>\n            <br>\n            <u>Proximity Rules</u><br>\n            Clauses representing implications between states (ownership of\n            traits) and positions of the houses.<br>\n            (i.e. If person P is in first house and has green house, then\n            if person Q is in second house, then person Q has white house.)<br>\n            <br>\n            <u>Exactly-1 Rules</u><br>\n            Clauses that limit the ownership of each category of traits\n            for a single owner.<br>\n            (i.e. If person P is in the first house, then person P cannot\n            be in the second to fifth house, etc.)<br>\n            <br>\n            <u>Unicity Rules</u><br>\n            Clauses that define the exclusivity of traits between the owners.<br>\n            (i.e. If person P is in the first house, then person Q is not\n            in the first house, etc.)<br>\n            <br>\n            These set of literals and clauses were written in Conjunctive\n            Normal Form (CNF) and used with our solvers to solve the puzzle.\n          "}],team:[{label:"Chase Tiong",description:"\n            Chase was responsible for writing the recursive DPLL solver,\n            designing the data structures to represent literals and clauses,\n            writing unit tests and shell scripts, analysis and benchmarking\n            of results.\n          ",src:"/images/profiles/chase.jpg",url:"https://github.com/ChaseTiong"},{label:"Huang Lie Jun",description:"\n            I wrote the iterative DPLL solver, the implication graph data\n            structures and modelled the Einstein's Puzzle. Chase and I\n            worked on the CDCL solver and heuristics together.\n          ",src:"/images/profiles/liejun.jpg",url:"https://github.com/hliejun"}],references:[{label:"SATLIB Benchmark Problems",description:"\n            A collection of satisfiability benchmark problems in cnf form.\n          ",src:"/images/links/ubc.jpg",url:"https://www.cs.ubc.ca/~hoos/SATLIB/benchm.html"},{label:"Exponential Recency Weighted Average Branching Heuristic for SAT Solvers",description:"\n            ERWA branching heuristics for CDCL solvers.\n          ",src:"/images/links/semanticscholar.jpg",url:"https://pdfs.semanticscholar.org/7861/8983dec4a92a9c5a1909e31bc8b95a5705a5.pdf"},{label:"On Freezing and Reactivating Learnt Clauses",description:"\n            Clause learning heuristics for CDCL solvers.\n          ",src:"/images/links/semanticscholar.jpg",url:"https://pdfs.semanticscholar.org/a1cd/dbc236cf94161f578dd91f77c7410b7ba5cf.pdf"},{label:"Clause Learning in SAT Seminar Automatic Problem Solving",description:"\n            Clause learning with implementation of implication graph and\n            use of unique implication points.\n          ",src:"/images/links/princeton.jpg",url:"https://www.cs.princeton.edu/courses/archive/fall13/cos402/readings/SAT_learning_clauses.pdf"},{label:"CDCL SAT Solvers",description:"\n            Detailed notes on CDCL solvers and its constituent procedures.\n          ",src:"/images/links/satassociation.jpg",url:"https://satassociation.org/articles/FAIA185-0131.pdf"},{label:"VSIDS Branching Heuristics in CDCL SAT Solvers",description:"\n            VSID branching heuristics for CDCL solvers.\n          ",src:"/images/links/arxiv.jpg",url:"https://arxiv.org/pdf/1506.08905.pdf"},{label:"Practical SAT Solving",description:"\n            Reference SAT solving lecture series.\n          ",src:"/images/links/kit.jpg",url:"https://baldur.iti.kit.edu/sat"}],actions:[{label:"HypeDyn Stories",url:"/projects/hypedyn",in:!0},{label:"Food Logging",url:"/projects/foodlogging",in:!0}]}}},u=n(7),h=Object(u.a)(c,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page satsolver project"},[n("Mockup",{attrs:{src:e.mockup.src,orientation:e.mockup.orientation,type:e.mockup.type}}),e._v(" "),n("Jumbotron",{attrs:{actions:e.jumbotron.actions,name:e.jumbotron.name,src:e.jumbotron.src,subtitle:e.jumbotron.subtitle,title:e.jumbotron.title}}),e._v(" "),n("div",{staticClass:"page__content"},[n("amp-position-observer",{attrs:{on:"enter:fadeIn.start","intersection-ratios":".1",layout:"nodisplay"}}),e._v(" "),n("TagsSection",{attrs:{name:"technologies",label:"TECHNOLOGY",items:e.technologies}}),e._v(" "),n("HTMLSection",{attrs:{name:"about",label:"ABOUT",items:e.about}}),e._v(" "),n("HTMLSection",{attrs:{name:"design",label:"DESIGN",items:e.design}}),e._v(" "),n("LinksSection",{attrs:{name:"team",label:"TEAM",items:e.team}}),e._v(" "),n("LinksSection",{attrs:{name:"references",label:"REFERENCES",items:e.references}}),e._v(" "),n("ActionsSection",{attrs:{name:"actions",items:e.actions}})],1)],1)},[],!1,null,null,null);h.options.__file="satsolver.vue";t.default=h.exports}}]);