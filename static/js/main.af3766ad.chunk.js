(this["webpackJsonpryan-pupil-mathematics"]=this["webpackJsonpryan-pupil-mathematics"]||[]).push([[0],{101:function(_,e,a){"use strict";a.r(e);var t=a(0),n=a.n(t),r=a(26),l=a.n(r),s=a(127),o=a(128),i=a(132),c=a(43),u=a(18),E=a(40),m=a(20),d=a(29),p=a(64),O=function(_){return Object(d.c)({router:Object(E.b)(_)})},D=Object(m.a)(),P=d.d;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M,h=a(33),b=a(34),y=a(37),C=a(36),f=a(102),A=a(104),I=a(45),T=a(122),W=a(71),B=a.n(W),L=a(70),R=a.n(L),U=a(44),K=a.n(U),g=function(_){Object(y.a)(a,_);var e=Object(C.a)(a);function a(_){var t;return Object(h.a)(this,a),(t=e.call(this,_)).state={},t}return Object(b.a)(a,[{key:"render",value:function(){var _=this;return n.a.createElement("div",{className:K.a.container},n.a.createElement(f.a,{position:"static"},n.a.createElement(A.a,null,n.a.createElement(I.a,{variant:"h6",className:K.a.title},"\u6cfa\u5c11\u7684\u6570\u5b66(",n.a.createElement(R.a,null),")\u6e38\u620f"))),n.a.createElement("div",{className:K.a.body},n.a.createElement(T.a,{variant:"contained",color:"primary",className:K.a["create-button"],endIcon:n.a.createElement(B.a,null),onClick:function(){_.props.history.replace("/create-game")},fullWidth:!0,size:"large"},"\u65b0\u6e38\u620f")))}}]),a}(n.a.Component),k=a(15),w=a(13),v=a(82),j=a(133),N=a(123),S=a(130),q=a(124),x=a(125),z=a(131),H=a(126),V=a(134),G=a(129),$=a(51),F=a.n($),J=a(72),Z=a.n(J),Q=a(14),X=a.n(Q),Y=function(_){Object(y.a)(a,_);var e=Object(C.a)(a);function a(_){var t;return Object(h.a)(this,a),(t=e.call(this,_)).state={range:5,addition:!0,subtraction:!1,level:0,minutes:1},t.handleRangeChange=t.handleRangeChange.bind(Object(k.a)(t)),t.handleAdditionStatusChange=t.handleAdditionStatusChange.bind(Object(k.a)(t)),t.handleSubtractionStatusChange=t.handleSubtractionStatusChange.bind(Object(k.a)(t)),t.handleLevelChange=t.handleLevelChange.bind(Object(k.a)(t)),t.handleMinutesChange=t.handleMinutesChange.bind(Object(k.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(k.a)(t)),t}return Object(b.a)(a,[{key:"handleRangeChange",value:function(_,e){this.setState({range:e})}},{key:"handleAdditionStatusChange",value:function(_){this.setState({addition:Object(w.get)(_,["target","checked"],!1)})}},{key:"handleSubtractionStatusChange",value:function(_){this.setState({subtraction:Object(w.get)(_,["target","checked"],!1)})}},{key:"handleLevelChange",value:function(_){this.setState({level:parseInt(Object(w.get)(_,["target","value"],0),10)})}},{key:"handleMinutesChange",value:function(_,e){this.setState({minutes:e})}},{key:"handleSubmit",value:function(_){_.preventDefault();var e=this.state,a=e.range,t=e.addition,n=e.subtraction,r=e.level,l=e.minutes;!1!==t||!1!==n?this.props.history.push("/game/".concat(a,"/").concat(!0===t?1:0,"/").concat(!0===n?1:0,"/").concat(r,"/").concat(l,"/")):console.warn("")}},{key:"render",value:function(){var _=this,e=this.state,a=e.range,t=e.addition,r=e.subtraction,l=e.level,s=e.minutes;return n.a.createElement("div",{className:X.a.container},n.a.createElement(f.a,{position:"static"},n.a.createElement(A.a,null,n.a.createElement(v.a,{className:X.a.menuButton,color:"inherit","aria-label":"back",onClick:function(){_.props.history.replace("/")}},n.a.createElement(F.a,null)),n.a.createElement(I.a,{variant:"h6",className:X.a.title},"\u6e38\u620f\u89c4\u5219"))),n.a.createElement("form",{action:"",className:X.a.body,onSubmit:this.handleSubmit},n.a.createElement(j.a,{component:"fieldset",className:X.a["form-control"],fullWidth:!0},n.a.createElement(N.a,{component:"legend",className:X.a["form-legend"]},"\u7b97\u672f\u8fd0\u7b97\u8303\u56f4\uff1a",a," \u4ee5\u5185\u8fd0\u7b97"),n.a.createElement(S.a,{value:a,step:null,marks:[{value:5,label:"5"},{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"},{value:40,label:"40"},{value:50,label:"50"}],min:5,max:50,valueLabelDisplay:"auto",onChange:this.handleRangeChange})),n.a.createElement(j.a,{component:"fieldset",error:!1===t&&!1===r,className:X.a["form-control"],fullWidth:!0},n.a.createElement(N.a,{component:"legend",className:X.a["form-legend"]},"\u7b97\u672f\u8fd0\u7b97\u89c4\u5219"),n.a.createElement(q.a,null,n.a.createElement(x.a,{control:n.a.createElement(z.a,{checked:t,onChange:this.handleAdditionStatusChange,name:"addition"}),label:"\u52a0\u6cd5"}),n.a.createElement(x.a,{control:n.a.createElement(z.a,{checked:r,onChange:this.handleSubtractionStatusChange,name:"subtraction"}),label:"\u51cf\u6cd5"})),!1===t&&!1===r&&n.a.createElement(H.a,null,"\u70b9\u51fb\u201c\u52a0\u6cd5\u201d\u6216\u8005\u201c\u51cf\u6cd5\u201d\u5f00\u542f\u5bf9\u5e94\u7684\u7b97\u672f\u8fd0\u7b97\u89c4\u5219")),n.a.createElement(j.a,{component:"fieldset",fullWidth:!0,className:X.a["form-control"]},n.a.createElement(N.a,{component:"legend",className:X.a["form-legend"]},"\u6e38\u620f\u96be\u5ea6"),n.a.createElement(V.a,{value:l,onChange:this.handleLevelChange},n.a.createElement(x.a,{value:0,control:n.a.createElement(G.a,null),label:"\u4f4e - 2\u4e2a\u9009\u9879"}),n.a.createElement(x.a,{value:1,control:n.a.createElement(G.a,null),label:"\u4e2d - 3\u4e2a\u9009\u9879"}),n.a.createElement(x.a,{value:2,control:n.a.createElement(G.a,null),label:"\u9ad8 - 4\u4e2a\u9009\u9879"}))),n.a.createElement(j.a,{component:"fieldset",className:X.a["form-control"],fullWidth:!0},n.a.createElement(N.a,{component:"legend",className:X.a["form-legend"]},"\u6e38\u620f\u65f6\u957f\uff08\u5206\u949f\uff09"),n.a.createElement(S.a,{value:s,step:null,marks:[{value:1,label:"1"},{value:3,label:"3"},{value:5,label:"5"},{value:10,label:"10"}],min:1,max:10,valueLabelDisplay:"auto",onChange:this.handleMinutesChange})),n.a.createElement(T.a,{type:"submit",variant:"contained",color:"primary",className:X.a.submit,size:"large",endIcon:n.a.createElement(Z.a,null),fullWidth:!0},"\u5f00\u59cb\u6e38\u620f")))}}]),a}(n.a.Component),__=a(73),e_=a(79),a_=Object(e_.a)({palette:{primary:{main:"#3f51b5"},background:{default:"#f5f5f5"}}}),t_=Object(d.e)(O(D),M,P(Object(d.a)(Object(p.a)(D))));function n_(){return n.a.createElement(i.a,{theme:a_},n.a.createElement(c.a,{store:t_},n.a.createElement(s.a,null),n.a.createElement(E.a,{history:D},n.a.createElement(u.c,null,n.a.createElement(u.a,{exact:!0,path:"/",component:g}),n.a.createElement(u.a,{exact:!0,path:"/create-game",component:Y}),n.a.createElement(u.a,{exact:!0,path:"/game/:range/:addition/:subtraction/:level/:minutes",component:__.a}),n.a.createElement(u.a,{render:function(){return n.a.createElement(o.a,{variant:"outlined",severity:"warning"},"This is a warning alert \u2014 check it out!")}})))))}l.a.render(n.a.createElement(n_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(_){_.unregister()})).catch((function(_){console.error(_.message)}))},14:function(_,e,a){_.exports={container:"styles_container__3Fg3N",menuButton:"styles_menuButton__oFkwH",title:"styles_title__1l5Cd",body:"styles_body__3CTd4","form-control":"styles_form-control__34t3_","form-legend":"styles_form-legend__3RNdp"}},24:function(_,e,a){"use strict";e.a=function(_,e){return Math.round(Math.random()*(e-_))+_}},44:function(_,e,a){_.exports={container:"styles_container__B4raN",title:"styles_title__3UTfv",body:"styles_body__8z6TY",footer:"styles_footer__VsClN"}},73:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_runner_work_ryan_pupil_mathematics_ryan_pupil_mathematics_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(80),_home_runner_work_ryan_pupil_mathematics_ryan_pupil_mathematics_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(33),_home_runner_work_ryan_pupil_mathematics_ryan_pupil_mathematics_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(34),_home_runner_work_ryan_pupil_mathematics_ryan_pupil_mathematics_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(15),_home_runner_work_ryan_pupil_mathematics_ryan_pupil_mathematics_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(37),_home_runner_work_ryan_pupil_mathematics_ryan_pupil_mathematics_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(36),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),lodash__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(13),lodash__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__),_material_ui_core__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(102),_material_ui_core__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(104),_material_ui_core__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(82),_material_ui_core__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(45),_material_ui_core__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(83),_material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(51),_material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(_material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_13__),_material_ui_icons_Timer__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(74),_material_ui_icons_Timer__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(_material_ui_icons_Timer__WEBPACK_IMPORTED_MODULE_14__),_material_ui_icons_AccessAlarm__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(78),_material_ui_icons_AccessAlarm__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(_material_ui_icons_AccessAlarm__WEBPACK_IMPORTED_MODULE_15__),_material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(75),_material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_16___default=__webpack_require__.n(_material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_16__),_material_ui_icons_SentimentVerySatisfied__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(76),_material_ui_icons_SentimentVerySatisfied__WEBPACK_IMPORTED_MODULE_17___default=__webpack_require__.n(_material_ui_icons_SentimentVerySatisfied__WEBPACK_IMPORTED_MODULE_17__),_material_ui_icons_SentimentVeryDissatisfied__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(77),_material_ui_icons_SentimentVeryDissatisfied__WEBPACK_IMPORTED_MODULE_18___default=__webpack_require__.n(_material_ui_icons_SentimentVeryDissatisfied__WEBPACK_IMPORTED_MODULE_18__),_assets_scripts_randomInt__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(24),_styles_module_css__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(8),_styles_module_css__WEBPACK_IMPORTED_MODULE_20___default=__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_20__),Game=function(_React$Component){Object(_home_runner_work_ryan_pupil_mathematics_ryan_pupil_mathematics_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Game,_React$Component);var _super=Object(_home_runner_work_ryan_pupil_mathematics_ryan_pupil_mathematics_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.a)(Game);function Game(_){var e;Object(_home_runner_work_ryan_pupil_mathematics_ryan_pupil_mathematics_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,Game),e=_super.call(this,_);var a=Object(lodash__WEBPACK_IMPORTED_MODULE_7__.get)(_,["match","params"],{}),t=Object(lodash__WEBPACK_IMPORTED_MODULE_7__.isNil)(a.range)?a.range:parseInt(a.range,10),n=[];"1"==="".concat(a.addition)&&n.push("+"),"1"==="".concat(a.subtraction)&&n.push("-");var r=2+(Object(lodash__WEBPACK_IMPORTED_MODULE_7__.isNil)(a.level)?0:parseInt(a.level,10)),l=Object(lodash__WEBPACK_IMPORTED_MODULE_7__.isNil)(a.minutes)?a.minutes:parseInt(a.minutes,10);return e.state={isPlaying:!1,countDown:60*l,x:null,y:null,operator:null,z:null,options:[],optionLength:r,range:t,operators:n,history:[],answer:null,isPushToHistoryPending:!1},e.countDownDelayer=null,e.handlePlayingClick=e.handlePlayingClick.bind(Object(_home_runner_work_ryan_pupil_mathematics_ryan_pupil_mathematics_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(e)),e.handleOptionClick=e.handleOptionClick.bind(Object(_home_runner_work_ryan_pupil_mathematics_ryan_pupil_mathematics_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(e)),e.makeAlgorism=e.makeAlgorism.bind(Object(_home_runner_work_ryan_pupil_mathematics_ryan_pupil_mathematics_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(e)),e}return Object(_home_runner_work_ryan_pupil_mathematics_ryan_pupil_mathematics_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(Game,[{key:"componentDidMount",value:function(){this.makeAlgorism()}},{key:"componentWillUnmount",value:function(){null!==this.countDownDelayer&&(clearTimeout(this.countDownDelayer),this.countDownDelayer=null)}},{key:"countDownDelay",value:function(){var _=this,e=this.state.countDown;if(!(e<=0)){var a=e-1;this.countDownDelayer=Object(lodash__WEBPACK_IMPORTED_MODULE_7__.delay)((function(){_.setState({countDown:a},(function(){var e=_.state,a=e.countDown,t=e.history;a>0?_.countDownDelay():window.localStorage.setItem("".concat(+new Date),JSON.stringify(t))}))}),1e3)}}},{key:"makeAlgorism",value:function makeAlgorism(){console.time("> makeAlgorism");var _this$state=this.state,range=_this$state.range,optionLength=_this$state.optionLength,operators=_this$state.operators,operator=1===operators.length?operators[0]:operators[Object(_assets_scripts_randomInt__WEBPACK_IMPORTED_MODULE_19__.a)(0,operators.length-1)],x=Object(_assets_scripts_randomInt__WEBPACK_IMPORTED_MODULE_19__.a)(0,range),y=Object(_assets_scripts_randomInt__WEBPACK_IMPORTED_MODULE_19__.a)(0,range);if("-"===operator)for(x=Object(_assets_scripts_randomInt__WEBPACK_IMPORTED_MODULE_19__.a)(1,range);x<y;)y=Object(_assets_scripts_randomInt__WEBPACK_IMPORTED_MODULE_19__.a)(0,range);for(var z=eval("".concat(x).concat(operator).concat(y)),zAtOptionIndex=Object(_assets_scripts_randomInt__WEBPACK_IMPORTED_MODULE_19__.a)(0,optionLength-1),options=[],i=optionLength-1;i>=0;i-=1)if(i===zAtOptionIndex)options[i]=z;else{for(var r=Object(_assets_scripts_randomInt__WEBPACK_IMPORTED_MODULE_19__.a)(0,2*range);Object(lodash__WEBPACK_IMPORTED_MODULE_7__.includes)(options,r)||r===z;)r=Object(_assets_scripts_randomInt__WEBPACK_IMPORTED_MODULE_19__.a)(0,2*range);options[i]=r}console.timeEnd("> makeAlgorism"),this.setState({isPushToHistoryPending:!1,answer:null,x:x,y:y,z:z,options:options,operator:operator})}},{key:"handlePlayingClick",value:function(){var _=this;this.setState({isPlaying:!0},(function(){_.countDownDelay()}))}},{key:"handleOptionClick",value:function(_){var e=this;!1===this.state.isPushToHistoryPending&&(console.log("answerOptionIndex: ",_),this.setState((function(e){var a=e.x,t=e.y,n=e.z,r=e.options,l=e.operator,s=e.history;return{isPushToHistoryPending:!0,answer:_,history:s.concat([[a,l,t,n,r,_]])}}),(function(){Object(lodash__WEBPACK_IMPORTED_MODULE_7__.delay)(e.makeAlgorism,600)})))}},{key:"render",value:function(){var _=this,e=this.state,a=e.isPlaying,t=e.countDown,n=e.x,r=e.y,l=e.z,s=e.operator,o=e.options,i=e.isPushToHistoryPending,c=e.answer,u=e.history;return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_20___default.a.exam},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.a,{position:"static"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.a,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.a,{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_20___default.a.menuButton,color:"inherit","aria-label":"back",onClick:function(){_.props.history.replace("/")}},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_13___default.a,null)),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.a,{variant:"h6",className:_styles_module_css__WEBPACK_IMPORTED_MODULE_20___default.a.title},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_Timer__WEBPACK_IMPORTED_MODULE_14___default.a,null),"\xa0",Object(lodash__WEBPACK_IMPORTED_MODULE_7__.padStart)("".concat(Math.floor(t/60)),2,"0"),"\xa0:\xa0",Object(lodash__WEBPACK_IMPORTED_MODULE_7__.padStart)("".concat(Math.floor(t%60)),2,"0")))),!1===a&&react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_20___default.a["start-wrapper"]},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.a,{color:"primary",className:_styles_module_css__WEBPACK_IMPORTED_MODULE_20___default.a["start-button"],onClick:this.handlePlayingClick},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_16___default.a,{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_20___default.a["start-button-icon"]}))),a&&t>0&&react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_20___default.a.playground},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_20___default.a["playground-x"]},n),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_20___default.a["playground-operator"]},s),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_20___default.a["playground-y"]},r)),null===c?react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_20___default.a.options},o.map((function(e,a){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.a,{color:"primary",className:_styles_module_css__WEBPACK_IMPORTED_MODULE_20___default.a["options-button"],key:"option_".concat(a,"_").concat(e),disabled:i,onClick:function(){_.handleOptionClick(e)}},e)}))):react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_20___default.a["answer-wrapper"]},c===l?react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_SentimentVerySatisfied__WEBPACK_IMPORTED_MODULE_17___default.a,{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_20___default.a["answer-correct"]}):react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_SentimentVeryDissatisfied__WEBPACK_IMPORTED_MODULE_18___default.a,{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_20___default.a["answer-incorrect"]}))),a&&0===t&&react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_20___default.a.timeout},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_AccessAlarm__WEBPACK_IMPORTED_MODULE_15___default.a,{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_20___default.a["timeout-icon"]}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.a,{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_20___default.a["timeout-title"]},"\u5b9d\u8d1d\uff0c\u6e38\u620f\u7ed3\u675f\u4e86"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.a,{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_20___default.a["timeout-p"]},"\u4f60\u4e00\u5171\u56de\u7b54\u4e86\xa0",react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",{style:{color:"#b71c1c",fontWeight:"700",fontStyle:"italic"}},u.length),"\xa0\u9053\u9898\u76ee"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.a,{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_20___default.a["timeout-p"]},"\u7b54\u5bf9\u4e86\xa0",react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",{style:{color:"#388e3c",fontWeight:"700",fontStyle:"italic"}},u.filter((function(_){var e=Object(_home_runner_work_ryan_pupil_mathematics_ryan_pupil_mathematics_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_,6);return e[3]===e[5]})).length),"\xa0\u9053\u9898\u76ee")))}}]),Game}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);__webpack_exports__.a=Game},8:function(_,e,a){_.exports={container:"styles_container__2Z19z",title:"styles_title__2Hq_E","start-wrapper":"styles_start-wrapper__3p3ZH","start-button":"styles_start-button__8znnd","start-button-icon":"styles_start-button-icon__3BLvV",playground:"styles_playground__XnQmh","playground-x":"styles_playground-x__2WyQm","playground-operator":"styles_playground-operator__Ul5G6","playground-y":"styles_playground-y__2fmCk",options:"styles_options__2Rksi","options-button":"styles_options-button__3tm7H","answer-wrapper":"styles_answer-wrapper__1x1pk","answer-correct":"styles_answer-correct__1kcrs","answer-incorrect":"styles_answer-incorrect__1DXHC",timeout:"styles_timeout___AmIf","timeout-icon":"styles_timeout-icon__3U9wd","timeout-title":"styles_timeout-title__1ZWeb","timeout-p":"styles_timeout-p__1eNFv"}},89:function(_,e,a){_.exports=a(101)}},[[89,1,2]]]);
//# sourceMappingURL=main.af3766ad.chunk.js.map