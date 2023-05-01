/*! For license information please see 110.1682977749974.99dd93a2e033e251484c.js.LICENSE.txt */
(self.webpackChunktasks_frontend=self.webpackChunktasks_frontend||[]).push([[110,438,101],{40400:(t,e,r)=>{"use strict";r.d(e,{Jh:()=>n,IU:()=>u});var n,o=r(70655),i=r(93264);!function(t){t.sm="sm",t.md="md",t.lg="lg",t.xl="xl"}(n||(n={}));let c=0;function u({name:t,xOffset:e=0,yOffset:r=0,width:u,height:a,svgPath:s}){var l;return l=class extends i.Component{constructor(){super(...arguments),this.id="icon-title-"+c++}render(){const t=this.props,{size:c,color:l,title:f,noVerticalAlign:p}=t,y=(0,o.__rest)(t,["size","color","title","noVerticalAlign"]),v=Boolean(f),d=(t=>{switch(t){case n.sm:return"1em";case n.md:return"1.5em";case n.lg:return"2em";case n.xl:return"3em";default:return"1em"}})(c),h=-.125*Number.parseFloat(d),m=p?null:{verticalAlign:`${h}em`},b=[e,r,u,a].join(" ");return i.createElement("svg",Object.assign({style:m,fill:l,height:d,width:d,viewBox:b,"aria-labelledby":v?this.id:null,"aria-hidden":!v||null,role:"img"},y),v&&i.createElement("title",{id:this.id},f),i.createElement("path",{d:s}))}},l.displayName=t,l.defaultProps={color:"currentColor",size:n.sm,noVerticalAlign:!1},l}},36438:(t,e,r)=>{"use strict";r.d(e,{I4:()=>o,Tw:()=>i,ZP:()=>c});var n=r(40400);const o={name:"CloseIcon",height:1024,width:730,svgPath:"M725.499315,767.757345 L469.242169,511.500499 L725.499315,255.243653 C729.196254,251.545719 731.096195,247.248119 731,242.4498 C731,237.653479 728.997365,233.35588 725.299427,229.558002 L647.542773,151.701495 C643.743891,147.903617 639.446287,146 634.64996,146 C629.852635,146 625.55503,147.803673 621.857092,151.500607 L365.5,407.857398 L109.241857,151.500607 C105.544917,147.803673 101.246314,145.904733 96.4499876,146 C91.6526619,146.104622 87.3550577,148.002562 83.5571748,151.701495 L5.7005771,229.457058 C1.90269428,233.255936 0,237.553535 0,242.350855 C0,247.148175 1.80175055,251.444775 5.50068853,255.143709 L261.857779,511.500499 L5.50068853,767.757345 C1.80175055,771.454279 -0.0961914123,775.752878 0,779.750645 C0.103697157,784.547965 2.00263857,788.845564 5.7005771,792.642443 L83.4572306,871.299502 C87.2541139,875.096381 91.5527176,877 96.3500433,877 C101.147369,877 105.444973,875.197325 109.142912,871.499391 L365.400058,615.241545 L621.657203,871.499391 C625.355142,875.197325 629.652746,877.095265 634.449072,877 C639.246398,877 643.545002,874.997437 647.342885,871.299502 L725.099538,793.54294 C728.896421,789.745062 730.796362,785.446463 730.796362,780.649143 C731.096195,775.752878 729.196254,771.454279 725.499315,767.757345",yOffset:0,xOffset:0},i=(0,n.IU)(o),c=i},65645:(t,e,r)=>{"use strict";r.d(e,{ZP:()=>B});var n=r(37282),o=r(87462),i=r(15671),c=r(43144);function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var a=r(89611);function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&(0,a.Z)(t,e)}var l=r(71002);function f(t,e){if(e&&("object"===(0,l.Z)(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return u(t)}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}var y=r(4942),v=r(93264),d=r.n(v),h=r(3644),m=r(45697),b=r.n(m),g=r(45987),w=r(41448),O=r(68774),j=r(68340),E=r(56715),P=r(36438);var _=function(t){s(a,t);var e,r,n=(e=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=p(e);if(r){var o=p(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return f(this,t)});function a(t){var e;return(0,i.Z)(this,a),e=n.call(this,t),(0,y.Z)(u(e),"handleDismiss",(function(){e.props.onDismiss(e.props.id)})),(0,y.Z)(u(e),"setDismissTimeout",(function(){e.props.autoDismiss&&(e.dismissTimeout=setTimeout((function(){return e.handleDismiss()}),e.props.dismissDelay))})),(0,y.Z)(u(e),"clearDismissTimeout",(function(){e.dismissTimeout&&clearTimeout(e.dismissTimeout)})),e.handleDismiss=e.handleDismiss.bind(u(e)),e.setDismissTimeout(),e}return(0,c.Z)(a,[{key:"componentWillUnmount",value:function(){this.clearDismissTimeout()}},{key:"render",value:function(){var t=this.props,e=t.description,r=t.dismissable,n=(t.onDismiss,t.dismissDelay,t.title),i=t.sentryId,c=t.requestId,u=(t.autoDismiss,(0,g.Z)(t,["description","dismissable","onDismiss","dismissDelay","title","sentryId","requestId","autoDismiss"]));return d().createElement(w.b,(0,o.Z)({className:"notification-item",title:n&&n.replace(/<\/?[^>]+(>|$)/g,"")},u,{actionClose:r?d().createElement(E.g,{"aria-label":"close-notification",variant:"plain",onClick:this.handleDismiss},d().createElement(P.ZP,null)):null,onMouseEnter:this.clearDismissTimeout,onMouseLeave:this.setDismissTimeout}),"string"==typeof e?e.replace(/<\/?[^>]+(>|$)/g,""):e,i&&d().createElement(O.D,null,d().createElement(j.x,{component:j.q.small},"Tracking Id: ",i)),c&&d().createElement(O.D,null,d().createElement(j.x,{component:j.q.small},"Request Id: ",c)))}}]),a}(v.Component);_.propTypes={autoDismiss:b().bool,dismissable:b().bool,onDismiss:b().func.isRequired,id:b().string.isRequired,variant:b().oneOf(["info","success","warning","danger"]).isRequired,title:b().node.isRequired,description:b().node,dismissDelay:b().number,requestId:b().string,sentryId:b().string},_.defaultProps={dismissDelay:8e3,autoDismiss:!0,dismissable:!0};const x=_;var S=r(32203),I=r(62394),C=r(47173),T=r(44733),A=r(86487),N=r(86050),D=function(t){var e=t.page,r=t.onSetPage,n=t.onClearAll,o=t.count;return d().createElement(S.Z,{className:"notification-item"},d().createElement(I.e,null,d().createElement(A.a,null,d().createElement(N.Z,null,d().createElement(C.zx,{variant:C.Wu.link,className:"ins-c-pagination__clear-all",onClick:n},"Clear all")),d().createElement(N.Z,null,d().createElement(T.t,{itemCount:o,variant:T.a.bottom,perPageOptions:[{title:"5",value:5}],titles:{items:"Notifications"},perPage:5,page:e,onSetPage:r})))))};D.propTypes={count:b().number,page:b().number,onSetPage:b().func,onClearAll:b().func},D.defaultProps={count:0,page:1,onSetPage:Function,onClearAll:Function};const Z=D;var R=function(t){s(a,t);var e,r,n=(e=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=p(e);if(r){var o=p(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return f(this,t)});function a(){var t;(0,i.Z)(this,a);for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return t=n.call.apply(n,[this].concat(r)),(0,y.Z)(u(t),"state",{page:1}),(0,y.Z)(u(t),"onSetPage",(function(e,r){t.setState({page:r})})),t}return(0,c.Z)(a,[{key:"render",value:function(){var t=this.state.page,e=this.props,r=e.notifications,n=e.removeNotification,i=e.rootId,c=e.onClearAll,u=r&&r.length<=5?r:r&&r.slice(5*(t-1),5*t);return!r||Array.isArray(r)&&0===r.length?null:(0,h.createPortal)(d().createElement("div",{className:"notifications-portal"},r&&r.length>5&&d().createElement(Z,{onSetPage:this.onSetPage,count:r.length,page:t,onClearAll:c}),u.map((function(t){return d().createElement(x,(0,o.Z)({onDismiss:n,key:t.id},t))}))),document.getElementById(i)||document.body)}}]),a}(v.Component);R.propTypes={notifications:b().arrayOf(b().shape({id:b().string.isRequired,title:b().string.isRequired,variant:b().string.isRequired,description:b().node,dismissable:b().bool})),removeNotification:b().func.isRequired,onClearAll:b().func,rootId:b().string};const k=R;var L=r(21458);const B=(0,n.connect)((function(t,e){var r=t.notifications;return{notifications:e.notifications||r}}),(function(t,e){return{removeNotification:e.removeNotification?e.removeNotification:function(e){return t((0,L.FV)(e))},onClearAll:e.clearNotifications?e.clearNotifications:function(){return t((0,L.L1)())}}}))(k)},17558:(t,e,r)=>{"use strict";r.d(e,{Dv:()=>o,Kf:()=>i,wt:()=>c});var n="@@INSIGHTS-CORE/NOTIFICATIONS/",o="".concat(n,"ADD_NOTIFICATION"),i="".concat(n,"REMOVE_NOTIFICATION"),c="".concat(n,"CLEAR_NOTIFICATIONS")},21458:(t,e,r)=>{"use strict";r.d(e,{wN:()=>o,FV:()=>i,L1:()=>c});var n=r(17558),o=function(t){return{type:n.Dv,payload:t}},i=function(t){return{type:n.Kf,payload:t}},c=function(){return{type:n.wt}}},83215:(t,e,r)=>{"use strict";r.d(e,{wN:()=>o.wN,ee:()=>p});var n=r(17558),o=r(21458),i=r(4942),c=r(42982);function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){(0,i.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var s=function(t,e){var r=e.payload;return[].concat((0,c.Z)(t),[a({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},r)])},l=function(t,e){var r=e.payload,n=t.findIndex((function(t){return t.id===r}));return[].concat((0,c.Z)(t.slice(0,n)),(0,c.Z)(t.slice(n+1)))},f=[];const p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case n.Dv:return s(t,e);case n.Kf:return l(t,e);case n.wt:return[];default:return t}}},43707:(t,e,r)=>{"use strict";r.d(e,{TE:()=>s});var n=r(93264);function o(t,e){var r,n,o,i,c,u,a,s,l;return void 0===t&&(t=""),void 0===e&&(e=!1),u=this,a=void 0,l=function(){var u,a,s;return function(t,e){var r,n,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,n=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,(function(l){switch(l.label){case 0:return u=window.insights,[4,null===(n=null===(r=null==u?void 0:u.chrome)||void 0===r?void 0:r.auth)||void 0===n?void 0:n.getUser()];case 1:return a=l.sent(),s={isOrgAdmin:(null===(i=null===(o=null==a?void 0:a.identity)||void 0===o?void 0:o.user)||void 0===i?void 0:i.is_org_admin)||!1},[4,null===(c=null==u?void 0:u.chrome)||void 0===c?void 0:c.getUserPermissions(t,e)];case 2:return[2,(s.permissions=l.sent()||null,s)]}}))},new((s=void 0)||(s=Promise))((function(t,e){function r(t){try{o(l.next(t))}catch(t){e(t)}}function n(t){try{o(l.throw(t))}catch(t){e(t)}}function o(e){var o;e.done?t(e.value):(o=e.value,o instanceof s?o:new s((function(t){t(o)}))).then(r,n)}o((l=l.apply(u,a||[])).next())}))}function i(t){return"object"==typeof t}function c(t,e){return!!t&&t.some((function(t){return e.includes(i(t)?null==t?void 0:t.permission:t)}))}function u(t,e){return!!t&&e.every((function(e){return t.some((function(t){var r,n=(null===(r=i(t)?null==t?void 0:t.permission:t)||void 0===r?void 0:r.split(":"))||[],o=e.split(":");return n.slice(0).reduce((function(t,e,r,n){return!1===t?(n.splice(r),t):"*"===e||e===(null==o?void 0:o[r])}),!0)||n.join(":")===e}))}))}(0,n.createContext)({isLoading:!0,isOrgAdmin:!1,permissions:[]});var a=function(){return a=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},a.apply(this,arguments)};function s(t,e,r,i){var s=this,l=(0,n.useState)({isLoading:!0,hasAccess:!1,isOrgAdmin:!1,permissions:[]}),f=l[0],p=l[1];return(0,n.useEffect)((function(){var n,l,f,y,v=!1;return p((function(t){return a(a({},t),{isLoading:!0})})),n=s,l=void 0,y=function(){var n,a,s;return function(t,e){var r,n,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,n=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,(function(l){switch(l.label){case 0:return[4,o(t,r)];case 1:return n=l.sent(),a=n.isOrgAdmin,s=n.permissions,!v&&p({isLoading:!1,isOrgAdmin:a,permissions:s,hasAccess:i?u(s,e):c(s,e)}),[2]}}))},new((f=void 0)||(f=Promise))((function(t,e){function r(t){try{i(y.next(t))}catch(t){e(t)}}function o(t){try{i(y.throw(t))}catch(t){e(t)}}function i(e){var n;e.done?t(e.value):(n=e.value,n instanceof f?n:new f((function(t){t(n)}))).then(r,o)}i((y=y.apply(n,l||[])).next())})),function(){v=!0}}),[t,r]),f}},9036:(t,e,r)=>{"use strict";r.d(e,{Gg:()=>h,ZP:()=>b});var n=r(4942);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var u="function"==typeof Symbol&&Symbol.observable||"@@observable",a=function(){return Math.random().toString(36).substring(7).split("").join(".")},s={INIT:"@@redux/INIT"+a(),REPLACE:"@@redux/REPLACE"+a(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+a()}};function l(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function f(t,e,r){var n;if("function"==typeof e&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error(c(0));if("function"==typeof e&&void 0===r&&(r=e,e=void 0),void 0!==r){if("function"!=typeof r)throw new Error(c(1));return r(f)(t,e)}if("function"!=typeof t)throw new Error(c(2));var o=t,i=e,a=[],p=a,y=!1;function v(){p===a&&(p=a.slice())}function d(){if(y)throw new Error(c(3));return i}function h(t){if("function"!=typeof t)throw new Error(c(4));if(y)throw new Error(c(5));var e=!0;return v(),p.push(t),function(){if(e){if(y)throw new Error(c(6));e=!1,v();var r=p.indexOf(t);p.splice(r,1),a=null}}}function m(t){if(!l(t))throw new Error(c(7));if(void 0===t.type)throw new Error(c(8));if(y)throw new Error(c(9));try{y=!0,i=o(i,t)}finally{y=!1}for(var e=a=p,r=0;r<e.length;r++)(0,e[r])();return t}function b(t){if("function"!=typeof t)throw new Error(c(10));o=t,m({type:s.REPLACE})}function g(){var t,e=h;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new Error(c(11));function r(){t.next&&t.next(d())}return r(),{unsubscribe:e(r)}}})[u]=function(){return this},t}return m({type:s.INIT}),(n={dispatch:m,subscribe:h,getState:d,replaceReducer:b})[u]=g,n}function p(t){for(var e=Object.keys(t),r={},n=0;n<e.length;n++){var o=e[n];"function"==typeof t[o]&&(r[o]=t[o])}var i,u=Object.keys(r);try{!function(t){Object.keys(t).forEach((function(e){var r=t[e];if(void 0===r(void 0,{type:s.INIT}))throw new Error(c(12));if(void 0===r(void 0,{type:s.PROBE_UNKNOWN_ACTION()}))throw new Error(c(13))}))}(r)}catch(t){i=t}return function(t,e){if(void 0===t&&(t={}),i)throw i;for(var n=!1,o={},a=0;a<u.length;a++){var s=u[a],l=r[s],f=t[s],p=l(f,e);if(void 0===p)throw e&&e.type,new Error(c(14));o[s]=p,n=n||p!==f}return(n=n||u.length!==Object.keys(t).length)?o:t}}function y(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce((function(t,e){return function(){return t(e.apply(void 0,arguments))}}))}function v(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return function(){var r=t.apply(void 0,arguments),n=function(){throw new Error(c(15))},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},u=e.map((function(t){return t(o)}));return n=y.apply(void 0,u)(r.dispatch),i(i({},r),{},{dispatch:n})}}}var d=function(){return d=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},d.apply(this,arguments)};function h(t,e){return void 0===e&&(e={}),function(r,n){return void 0===r&&(r=e),Object.prototype.hasOwnProperty.call(t,n.type)?t[n.type](r,n):r}}var m=function(){function t(t,e,r){void 0===t&&(t={}),void 0===e&&(e=[]),void 0===r&&(r=y);var n="undefined"!=typeof window&&window.REDUX_DEVTOOLS_EXTENSION_COMPOSE||r;this.store=f((function(e){return void 0===e&&(e=t),e}),t,n(v.apply(void 0,e))),this.reducers={}}return t.prototype.getStore=function(){return this.store},t.prototype.register=function(t){var e=this;return this.reducers=d(d({},this.reducers),t),this.store.replaceReducer(p(d({},this.reducers))),function(){e.reducers=Object.entries(e.reducers).filter((function(e){var r=e[0];return!Object.keys(t).includes(r)})).reduce((function(t,e){var r,n=e[0],o=e[1];return d(d({},t),((r={})[n]=o,r))}),{}),e.store.replaceReducer(p(d({},e.reducers)))}},t}();new m;const b=m},67336:(t,e,r)=>{"use strict";r.d(e,{JH:()=>c});var n,o=r(9036),i=function(){return i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)};function c(t,e,r){return void 0===t&&(t={}),void 0===e&&(e=[]),function(t,e,r){return void 0===t&&(t={}),void 0===e&&(e=[]),n||(n=new o.ZP(t,function(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))}([],e,!0),r)),n.register({routerData:function(t,e){var r=e.type,n=e.payload;return i(i({},t),"@@INSIGHTS-CORE/NAVIGATION"===r?n:{})}}),n}(t,e,r)}},35240:(t,e,r)=>{"use strict";r.d(e,{eb:()=>n}),r(82492),r(67523);function n(t,e){void 0===e&&(e=2);var r=t.split("/")[1],n=["beta","preview"].includes(r),o="/",i=t.replace(/(#|\?).*/,"").split("/");return i.shift(),n&&(i.shift(),o="/".concat(r,"/")),function(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))}([],new Array(e),!0).reduce((function(t,r,n){return"".concat(t).concat(i[n]||"").concat(n<e-1?"/":"")}),o)}},85333:(t,e,r)=>{"use strict";r.d(e,{Z:()=>s});var n=r(93264),o=r.n(n),i=r(63366),c=r(67646),u=function(){return u=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},u.apply(this,arguments)},a=function(){return o().createElement(o().Fragment,null,"Contact your organization administrator(s) for more information or visit ",o().createElement("a",{href:"./settings/my-user-access"},"My User Access"),"  to learn more about your permissions.")};const s=function(t){var e=t.prevPageButtonText,r=void 0===e?"Return to previous page":e,n=t.toLandingPageText,s=void 0===n?"Go to landing page":n,l=t.title,f=t.actions,p=void 0===f?null:f,y=t.serviceName,v=t.icon,d=void 0===v?c.LockIcon:v,h=t.description,m=void 0===h?o().createElement(a,null):h,b=t.showReturnButton,g=void 0===b||b,w=t.className,O=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(t,["prevPageButtonText","toLandingPageText","title","actions","serviceName","icon","description","showReturnButton","className"]),j=l||"You do not have access to ".concat(y);return o().createElement(i.EmptyState,u({variant:i.EmptyStateVariant.full,className:"ins-c-not-authorized ".concat(w||"")},O),o().createElement(i.EmptyStateIcon,{icon:d}),o().createElement(i.Title,{headingLevel:"h5",size:"lg"},j),o().createElement(i.EmptyStateBody,null,m),p,g&&(document.referrer?o().createElement(i.Button,{variant:"primary",onClick:function(){return history.back()}},r):o().createElement(i.Button,{variant:"primary",component:"a",href:"."},s)))}},55140:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});var n=r(54025),o=function(){return o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},o.apply(this,arguments)};const i=function(t){var e,r=(0,n.useScalprum)(),i=(null===(e=r.api)||void 0===e?void 0:e.chrome)||{};return i=o(o({},i),{initialized:r.initialized}),"function"==typeof t?t(i):i}},29932:t=>{t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}},47816:(t,e,r)=>{var n=r(28483),o=r(3674);t.exports=function(t,e){return t&&n(t,e,o)}},97786:(t,e,r)=>{var n=r(71811),o=r(40327);t.exports=function(t,e){for(var r=0,i=(e=n(e,t)).length;null!=t&&r<i;)t=t[o(e[r++])];return r&&r==i?t:void 0}},13:t=>{t.exports=function(t,e){return null!=t&&e in Object(t)}},2958:(t,e,r)=>{var n=r(46384),o=r(90939);t.exports=function(t,e,r,i){var c=r.length,u=c,a=!i;if(null==t)return!u;for(t=Object(t);c--;){var s=r[c];if(a&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++c<u;){var l=(s=r[c])[0],f=t[l],p=s[1];if(a&&s[2]){if(void 0===f&&!(l in t))return!1}else{var y=new n;if(i)var v=i(f,p,l,t,e,y);if(!(void 0===v?o(p,f,3,i,y):v))return!1}}return!0}},67206:(t,e,r)=>{var n=r(91573),o=r(16432),i=r(6557),c=r(1469),u=r(39601);t.exports=function(t){return"function"==typeof t?t:null==t?i:"object"==typeof t?c(t)?o(t[0],t[1]):n(t):u(t)}},91573:(t,e,r)=>{var n=r(2958),o=r(1499),i=r(42634);t.exports=function(t){var e=o(t);return 1==e.length&&e[0][2]?i(e[0][0],e[0][1]):function(r){return r===t||n(r,t,e)}}},16432:(t,e,r)=>{var n=r(90939),o=r(27361),i=r(79095),c=r(15403),u=r(89162),a=r(42634),s=r(40327);t.exports=function(t,e){return c(t)&&u(e)?a(s(t),e):function(r){var c=o(r,t);return void 0===c&&c===e?i(r,t):n(e,c,3)}}},40371:t=>{t.exports=function(t){return function(e){return null==e?void 0:e[t]}}},79152:(t,e,r)=>{var n=r(97786);t.exports=function(t){return function(e){return n(e,t)}}},80531:(t,e,r)=>{var n=r(62705),o=r(29932),i=r(1469),c=r(33448),u=n?n.prototype:void 0,a=u?u.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(i(e))return o(e,t)+"";if(c(e))return a?a.call(e):"";var r=e+"";return"0"==r&&1/e==-1/0?"-0":r}},71811:(t,e,r)=>{var n=r(1469),o=r(15403),i=r(55514),c=r(79833);t.exports=function(t,e){return n(t)?t:o(t,e)?[t]:i(c(t))}},1499:(t,e,r)=>{var n=r(89162),o=r(3674);t.exports=function(t){for(var e=o(t),r=e.length;r--;){var i=e[r],c=t[i];e[r]=[i,c,n(c)]}return e}},222:(t,e,r)=>{var n=r(71811),o=r(35694),i=r(1469),c=r(65776),u=r(41780),a=r(40327);t.exports=function(t,e,r){for(var s=-1,l=(e=n(e,t)).length,f=!1;++s<l;){var p=a(e[s]);if(!(f=null!=t&&r(t,p)))break;t=t[p]}return f||++s!=l?f:!!(l=null==t?0:t.length)&&u(l)&&c(p,l)&&(i(t)||o(t))}},15403:(t,e,r)=>{var n=r(1469),o=r(33448),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,c=/^\w*$/;t.exports=function(t,e){if(n(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!o(t))||c.test(t)||!i.test(t)||null!=e&&t in Object(e)}},89162:(t,e,r)=>{var n=r(13218);t.exports=function(t){return t==t&&!n(t)}},42634:t=>{t.exports=function(t,e){return function(r){return null!=r&&r[t]===e&&(void 0!==e||t in Object(r))}}},24523:(t,e,r)=>{var n=r(88306);t.exports=function(t){var e=n(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}},55514:(t,e,r)=>{var n=r(24523),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,c=n((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,(function(t,r,n,o){e.push(n?o.replace(i,"$1"):r||t)})),e}));t.exports=c},40327:(t,e,r)=>{var n=r(33448);t.exports=function(t){if("string"==typeof t||n(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},27361:(t,e,r)=>{var n=r(97786);t.exports=function(t,e,r){var o=null==t?void 0:n(t,e);return void 0===o?r:o}},79095:(t,e,r)=>{var n=r(13),o=r(222);t.exports=function(t,e){return null!=t&&o(t,e,n)}},33448:(t,e,r)=>{var n=r(44239),o=r(37005);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==n(t)}},67523:(t,e,r)=>{var n=r(89465),o=r(47816),i=r(67206);t.exports=function(t,e){var r={};return e=i(e,3),o(t,(function(t,o,i){n(r,e(t,o,i),t)})),r}},88306:(t,e,r)=>{var n=r(83369);function o(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var c=t.apply(this,n);return r.cache=i.set(o,c)||i,c};return r.cache=new(o.Cache||n),r}o.Cache=n,t.exports=o},82492:(t,e,r)=>{var n=r(42980),o=r(21463)((function(t,e,r){n(t,e,r)}));t.exports=o},39601:(t,e,r)=>{var n=r(40371),o=r(79152),i=r(15403),c=r(40327);t.exports=function(t){return i(t)?n(c(t)):o(t)}},79833:(t,e,r)=>{var n=r(80531);t.exports=function(t){return null==t?"":n(t)}},70655:(t,e,r)=>{"use strict";r.r(e),r.d(e,{__extends:()=>o,__assign:()=>i,__rest:()=>c,__decorate:()=>u,__param:()=>a,__metadata:()=>s,__awaiter:()=>l,__generator:()=>f,__createBinding:()=>p,__exportStar:()=>y,__values:()=>v,__read:()=>d,__spread:()=>h,__spreadArrays:()=>m,__await:()=>b,__asyncGenerator:()=>g,__asyncDelegator:()=>w,__asyncValues:()=>O,__makeTemplateObject:()=>j,__importStar:()=>E,__importDefault:()=>P,__classPrivateFieldGet:()=>_,__classPrivateFieldSet:()=>x});var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},n(t,e)};function o(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var i=function(){return i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)};function c(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}function u(t,e,r,n){var o,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,n);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(c=(i<3?o(c):i>3?o(e,r,c):o(e,r))||c);return i>3&&c&&Object.defineProperty(e,r,c),c}function a(t,e){return function(r,n){e(r,n,t)}}function s(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function l(t,e,r,n){return new(r||(r=Promise))((function(o,i){function c(t){try{a(n.next(t))}catch(t){i(t)}}function u(t){try{a(n.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(c,u)}a((n=n.apply(t,e||[])).next())}))}function f(t,e){var r,n,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,n=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}function p(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}function y(t,e){for(var r in t)"default"===r||e.hasOwnProperty(r)||(e[r]=t[r])}function v(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function d(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),c=[];try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)c.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return c}function h(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(d(arguments[e]));return t}function m(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),o=0;for(e=0;e<r;e++)for(var i=arguments[e],c=0,u=i.length;c<u;c++,o++)n[o]=i[c];return n}function b(t){return this instanceof b?(this.v=t,this):new b(t)}function g(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(t,e||[]),i=[];return n={},c("next"),c("throw"),c("return"),n[Symbol.asyncIterator]=function(){return this},n;function c(t){o[t]&&(n[t]=function(e){return new Promise((function(r,n){i.push([t,e,r,n])>1||u(t,e)}))})}function u(t,e){try{(r=o[t](e)).value instanceof b?Promise.resolve(r.value.v).then(a,s):l(i[0][2],r)}catch(t){l(i[0][3],t)}var r}function a(t){u("next",t)}function s(t){u("throw",t)}function l(t,e){t(e),i.shift(),i.length&&u(i[0][0],i[0][1])}}function w(t){var e,r;return e={},n("next"),n("throw",(function(t){throw t})),n("return"),e[Symbol.iterator]=function(){return this},e;function n(n,o){e[n]=t[n]?function(e){return(r=!r)?{value:b(t[n](e)),done:"return"===n}:o?o(e):e}:o}}function O(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,r=t[Symbol.asyncIterator];return r?r.call(t):(t=v(t),e={},n("next"),n("throw"),n("return"),e[Symbol.asyncIterator]=function(){return this},e);function n(r){e[r]=t[r]&&function(e){return new Promise((function(n,o){!function(t,e,r,n){Promise.resolve(n).then((function(e){t({value:e,done:r})}),e)}(n,o,(e=t[r](e)).done,e.value)}))}}}function j(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function E(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function P(t){return t&&t.__esModule?t:{default:t}}function _(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)}function x(t,e,r){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,r),r}},30907:(t,e,r)=>{"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,{Z:()=>n})},15671:(t,e,r)=>{"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.d(e,{Z:()=>n})},43144:(t,e,r)=>{"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}r.d(e,{Z:()=>o})},4942:(t,e,r)=>{"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,{Z:()=>n})},87462:(t,e,r)=>{"use strict";function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},n.apply(this,arguments)}r.d(e,{Z:()=>n})},45987:(t,e,r)=>{"use strict";r.d(e,{Z:()=>o});var n=r(35245);function o(t,e){if(null==t)return{};var r,o,i=(0,n.Z)(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(o=0;o<c.length;o++)r=c[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}},35245:(t,e,r)=>{"use strict";function n(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}r.d(e,{Z:()=>n})},89611:(t,e,r)=>{"use strict";function n(t,e){return n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(t,e)}r.d(e,{Z:()=>n})},42982:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});var n=r(30907),o=r(40181);function i(t){return function(t){if(Array.isArray(t))return(0,n.Z)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,o.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},71002:(t,e,r)=>{"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}r.d(e,{Z:()=>n})},40181:(t,e,r)=>{"use strict";r.d(e,{Z:()=>o});var n=r(30907);function o(t,e){if(t){if("string"==typeof t)return(0,n.Z)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(t,e):void 0}}}}]);
//# sourceMappingURL=../sourcemaps/110.b7ca7dd3e4f02600b17d7a75a86cafd7.js.map