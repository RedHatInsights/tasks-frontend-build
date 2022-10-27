/*! For license information please see 382.1666892455782.f6501bb2e7b279e22a14.js.LICENSE.txt */
(self.webpackChunktasks_frontend=self.webpackChunktasks_frontend||[]).push([[382],{8679:(t,n,e)=>{"use strict";var r=e(59864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function u(t){return r.isMemo(t)?a:c[t.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=a;var s=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,d=Object.prototype;t.exports=function t(n,e,r){if("string"!=typeof e){if(d){var o=h(e);o&&o!==d&&t(n,o,r)}var a=f(e);l&&(a=a.concat(l(e)));for(var c=u(n),v=u(e),m=0;m<a.length;++m){var y=a[m];if(!(i[y]||r&&r[y]||v&&v[y]||c&&c[y])){var g=p(e,y);try{s(n,y,g)}catch(t){}}}}return n}},69921:(t,n)=>{"use strict";var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,o=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,c=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,f=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,p=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,v=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,y=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,w=e?Symbol.for("react.responder"):60118,x=e?Symbol.for("react.scope"):60119;function b(t){if("object"==typeof t&&null!==t){var n=t.$$typeof;switch(n){case r:switch(t=t.type){case f:case l:case i:case c:case a:case h:return t;default:switch(t=t&&t.$$typeof){case s:case p:case m:case v:case u:return t;default:return n}}case o:return n}}}function P(t){return b(t)===l}n.AsyncMode=f,n.ConcurrentMode=l,n.ContextConsumer=s,n.ContextProvider=u,n.Element=r,n.ForwardRef=p,n.Fragment=i,n.Lazy=m,n.Memo=v,n.Portal=o,n.Profiler=c,n.StrictMode=a,n.Suspense=h,n.isAsyncMode=function(t){return P(t)||b(t)===f},n.isConcurrentMode=P,n.isContextConsumer=function(t){return b(t)===s},n.isContextProvider=function(t){return b(t)===u},n.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===r},n.isForwardRef=function(t){return b(t)===p},n.isFragment=function(t){return b(t)===i},n.isLazy=function(t){return b(t)===m},n.isMemo=function(t){return b(t)===v},n.isPortal=function(t){return b(t)===o},n.isProfiler=function(t){return b(t)===c},n.isStrictMode=function(t){return b(t)===a},n.isSuspense=function(t){return b(t)===h},n.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===i||t===l||t===c||t===a||t===h||t===d||"object"==typeof t&&null!==t&&(t.$$typeof===m||t.$$typeof===v||t.$$typeof===u||t.$$typeof===s||t.$$typeof===p||t.$$typeof===g||t.$$typeof===w||t.$$typeof===x||t.$$typeof===y)},n.typeOf=b},59864:(t,n,e)=>{"use strict";t.exports=e(69921)},77382:(t,n,e)=>{"use strict";e.r(n),e.d(n,{BrowserRouter:()=>xt,HashRouter:()=>bt,Link:()=>Rt,MemoryRouter:()=>G,NavLink:()=>Tt,Prompt:()=>X,Redirect:()=>et,Route:()=>at,Router:()=>J,StaticRouter:()=>pt,Switch:()=>ht,generatePath:()=>nt,matchPath:()=>it,useHistory:()=>mt,useLocation:()=>yt,useParams:()=>gt,useRouteMatch:()=>wt,withRouter:()=>dt});var r=e(89611);function o(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,(0,r.Z)(t,n)}var i=e(93264),a=e.n(i),c=e(87462);function u(t){return"/"===t.charAt(0)}function s(t,n){for(var e=n,r=e+1,o=t.length;r<o;e+=1,r+=1)t[e]=t[r];t.pop()}function f(t){return t.valueOf?t.valueOf():Object.prototype.valueOf.call(t)}const l=function t(n,e){if(n===e)return!0;if(null==n||null==e)return!1;if(Array.isArray(n))return Array.isArray(e)&&n.length===e.length&&n.every((function(n,r){return t(n,e[r])}));if("object"==typeof n||"object"==typeof e){var r=f(n),o=f(e);return r!==n||o!==e?t(r,o):Object.keys(Object.assign({},n,e)).every((function(r){return t(n[r],e[r])}))}return!1};function p(t,n){if(!t)throw new Error("Invariant failed")}function h(t){return"/"===t.charAt(0)?t:"/"+t}function d(t){return"/"===t.charAt(0)?t.substr(1):t}function v(t,n){return function(t,n){return 0===t.toLowerCase().indexOf(n.toLowerCase())&&-1!=="/?#".indexOf(t.charAt(n.length))}(t,n)?t.substr(n.length):t}function m(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function y(t){var n=t.pathname,e=t.search,r=t.hash,o=n||"/";return e&&"?"!==e&&(o+="?"===e.charAt(0)?e:"?"+e),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function g(t,n,e,r){var o;"string"==typeof t?(o=function(t){var n=t||"/",e="",r="",o=n.indexOf("#");-1!==o&&(r=n.substr(o),n=n.substr(0,o));var i=n.indexOf("?");return-1!==i&&(e=n.substr(i),n=n.substr(0,i)),{pathname:n,search:"?"===e?"":e,hash:"#"===r?"":r}}(t),o.state=n):(void 0===(o=(0,c.Z)({},t)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==n&&void 0===o.state&&(o.state=n));try{o.pathname=decodeURI(o.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return e&&(o.key=e),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=function(t,n){void 0===n&&(n="");var e,r=t&&t.split("/")||[],o=n&&n.split("/")||[],i=t&&u(t),a=n&&u(n),c=i||a;if(t&&u(t)?o=r:r.length&&(o.pop(),o=o.concat(r)),!o.length)return"/";if(o.length){var f=o[o.length-1];e="."===f||".."===f||""===f}else e=!1;for(var l=0,p=o.length;p>=0;p--){var h=o[p];"."===h?s(o,p):".."===h?(s(o,p),l++):l&&(s(o,p),l--)}if(!c)for(;l--;l)o.unshift("..");!c||""===o[0]||o[0]&&u(o[0])||o.unshift("");var d=o.join("/");return e&&"/"!==d.substr(-1)&&(d+="/"),d}(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function w(){var t=null,n=[];return{setPrompt:function(n){return t=n,function(){t===n&&(t=null)}},confirmTransitionTo:function(n,e,r,o){if(null!=t){var i="function"==typeof t?t(n,e):t;"string"==typeof i?"function"==typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(t){var e=!0;function r(){e&&t.apply(void 0,arguments)}return n.push(r),function(){e=!1,n=n.filter((function(t){return t!==r}))}},notifyListeners:function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];n.forEach((function(t){return t.apply(void 0,e)}))}}}var x=!("undefined"==typeof window||!window.document||!window.document.createElement);function b(t,n){n(window.confirm(t))}var P="popstate",E="hashchange";function C(){try{return window.history.state||{}}catch(t){return{}}}function O(t){void 0===t&&(t={}),x||p(!1);var n,e=window.history,r=(-1===(n=window.navigator.userAgent).indexOf("Android 2.")&&-1===n.indexOf("Android 4.0")||-1===n.indexOf("Mobile Safari")||-1!==n.indexOf("Chrome")||-1!==n.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,o=!(-1===window.navigator.userAgent.indexOf("Trident")),i=t,a=i.forceRefresh,u=void 0!==a&&a,s=i.getUserConfirmation,f=void 0===s?b:s,l=i.keyLength,d=void 0===l?6:l,O=t.basename?m(h(t.basename)):"";function k(t){var n=t||{},e=n.key,r=n.state,o=window.location,i=o.pathname+o.search+o.hash;return O&&(i=v(i,O)),g(i,r,e)}function R(){return Math.random().toString(36).substr(2,d)}var S=w();function A(t){(0,c.Z)(H,t),H.length=e.length,S.notifyListeners(H.location,H.action)}function T(t){(function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")})(t)||M(k(t.state))}function $(){M(k(C()))}var L=!1;function M(t){L?(L=!1,A()):S.confirmTransitionTo(t,"POP",f,(function(n){n?A({action:"POP",location:t}):function(t){var n=H.location,e=_.indexOf(n.key);-1===e&&(e=0);var r=_.indexOf(t.key);-1===r&&(r=0);var o=e-r;o&&(L=!0,Z(o))}(t)}))}var U=k(C()),_=[U.key];function j(t){return O+y(t)}function Z(t){e.go(t)}var N=0;function F(t){1===(N+=t)&&1===t?(window.addEventListener(P,T),o&&window.addEventListener(E,$)):0===N&&(window.removeEventListener(P,T),o&&window.removeEventListener(E,$))}var B=!1,H={length:e.length,action:"POP",location:U,createHref:j,push:function(t,n){var o="PUSH",i=g(t,n,R(),H.location);S.confirmTransitionTo(i,o,f,(function(t){if(t){var n=j(i),a=i.key,c=i.state;if(r)if(e.pushState({key:a,state:c},null,n),u)window.location.href=n;else{var s=_.indexOf(H.location.key),f=_.slice(0,s+1);f.push(i.key),_=f,A({action:o,location:i})}else window.location.href=n}}))},replace:function(t,n){var o="REPLACE",i=g(t,n,R(),H.location);S.confirmTransitionTo(i,o,f,(function(t){if(t){var n=j(i),a=i.key,c=i.state;if(r)if(e.replaceState({key:a,state:c},null,n),u)window.location.replace(n);else{var s=_.indexOf(H.location.key);-1!==s&&(_[s]=i.key),A({action:o,location:i})}else window.location.replace(n)}}))},go:Z,goBack:function(){Z(-1)},goForward:function(){Z(1)},block:function(t){void 0===t&&(t=!1);var n=S.setPrompt(t);return B||(F(1),B=!0),function(){return B&&(B=!1,F(-1)),n()}},listen:function(t){var n=S.appendListener(t);return F(1),function(){F(-1),n()}}};return H}var k="hashchange",R={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+d(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:d,decodePath:h},slash:{encodePath:h,decodePath:h}};function S(t){var n=t.indexOf("#");return-1===n?t:t.slice(0,n)}function A(){var t=window.location.href,n=t.indexOf("#");return-1===n?"":t.substring(n+1)}function T(t){window.location.replace(S(window.location.href)+"#"+t)}function $(t){void 0===t&&(t={}),x||p(!1);var n=window.history,e=(window.navigator.userAgent.indexOf("Firefox"),t),r=e.getUserConfirmation,o=void 0===r?b:r,i=e.hashType,a=void 0===i?"slash":i,u=t.basename?m(h(t.basename)):"",s=R[a],f=s.encodePath,l=s.decodePath;function d(){var t=l(A());return u&&(t=v(t,u)),g(t)}var P=w();function E(t){(0,c.Z)(B,t),B.length=n.length,P.notifyListeners(B.location,B.action)}var C=!1,O=null;function $(){var t,n,e=A(),r=f(e);if(e!==r)T(r);else{var i=d(),a=B.location;if(!C&&(n=i,(t=a).pathname===n.pathname&&t.search===n.search&&t.hash===n.hash))return;if(O===y(i))return;O=null,function(t){if(C)C=!1,E();else{P.confirmTransitionTo(t,"POP",o,(function(n){n?E({action:"POP",location:t}):function(t){var n=B.location,e=_.lastIndexOf(y(n));-1===e&&(e=0);var r=_.lastIndexOf(y(t));-1===r&&(r=0);var o=e-r;o&&(C=!0,j(o))}(t)}))}}(i)}}var L=A(),M=f(L);L!==M&&T(M);var U=d(),_=[y(U)];function j(t){n.go(t)}var Z=0;function N(t){1===(Z+=t)&&1===t?window.addEventListener(k,$):0===Z&&window.removeEventListener(k,$)}var F=!1,B={length:n.length,action:"POP",location:U,createHref:function(t){var n=document.querySelector("base"),e="";return n&&n.getAttribute("href")&&(e=S(window.location.href)),e+"#"+f(u+y(t))},push:function(t,n){var e="PUSH",r=g(t,void 0,void 0,B.location);P.confirmTransitionTo(r,e,o,(function(t){if(t){var n=y(r),o=f(u+n);if(A()!==o){O=n,function(t){window.location.hash=t}(o);var i=_.lastIndexOf(y(B.location)),a=_.slice(0,i+1);a.push(n),_=a,E({action:e,location:r})}else E()}}))},replace:function(t,n){var e="REPLACE",r=g(t,void 0,void 0,B.location);P.confirmTransitionTo(r,e,o,(function(t){if(t){var n=y(r),o=f(u+n);A()!==o&&(O=n,T(o));var i=_.indexOf(y(B.location));-1!==i&&(_[i]=n),E({action:e,location:r})}}))},go:j,goBack:function(){j(-1)},goForward:function(){j(1)},block:function(t){void 0===t&&(t=!1);var n=P.setPrompt(t);return F||(N(1),F=!0),function(){return F&&(F=!1,N(-1)),n()}},listen:function(t){var n=P.appendListener(t);return N(1),function(){N(-1),n()}}};return B}function L(t,n,e){return Math.min(Math.max(t,n),e)}function M(t){void 0===t&&(t={});var n=t,e=n.getUserConfirmation,r=n.initialEntries,o=void 0===r?["/"]:r,i=n.initialIndex,a=void 0===i?0:i,u=n.keyLength,s=void 0===u?6:u,f=w();function l(t){(0,c.Z)(x,t),x.length=x.entries.length,f.notifyListeners(x.location,x.action)}function p(){return Math.random().toString(36).substr(2,s)}var h=L(a,0,o.length-1),d=o.map((function(t){return g(t,void 0,"string"==typeof t?p():t.key||p())})),v=y;function m(t){var n=L(x.index+t,0,x.entries.length-1),r=x.entries[n];f.confirmTransitionTo(r,"POP",e,(function(t){t?l({action:"POP",location:r,index:n}):l()}))}var x={length:d.length,action:"POP",location:d[h],index:h,entries:d,createHref:v,push:function(t,n){var r="PUSH",o=g(t,n,p(),x.location);f.confirmTransitionTo(o,r,e,(function(t){if(t){var n=x.index+1,e=x.entries.slice(0);e.length>n?e.splice(n,e.length-n,o):e.push(o),l({action:r,location:o,index:n,entries:e})}}))},replace:function(t,n){var r="REPLACE",o=g(t,n,p(),x.location);f.confirmTransitionTo(o,r,e,(function(t){t&&(x.entries[x.index]=o,l({action:r,location:o}))}))},go:m,goBack:function(){m(-1)},goForward:function(){m(1)},canGo:function(t){var n=x.index+t;return n>=0&&n<x.entries.length},block:function(t){return void 0===t&&(t=!1),f.setPrompt(t)},listen:function(t){return f.appendListener(t)}};return x}var U=e(45697),_=e.n(U),j=1073741823,Z="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e.g?e.g:{};function N(t){var n=[];return{on:function(t){n.push(t)},off:function(t){n=n.filter((function(n){return n!==t}))},get:function(){return t},set:function(e,r){t=e,n.forEach((function(n){return n(t,r)}))}}}const F=a().createContext||function(t,n){var e,r,a,c="__create-react-context-"+((Z[a="__global_unique_id__"]=(Z[a]||0)+1)+"__"),u=function(t){function e(){var n;return(n=t.apply(this,arguments)||this).emitter=N(n.props.value),n}o(e,t);var r=e.prototype;return r.getChildContext=function(){var t;return(t={})[c]=this.emitter,t},r.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var e,r=this.props.value,o=t.value;((i=r)===(a=o)?0!==i||1/i==1/a:i!=i&&a!=a)?e=0:(e="function"==typeof n?n(r,o):j,0!=(e|=0)&&this.emitter.set(t.value,e))}var i,a},r.render=function(){return this.props.children},e}(i.Component);u.childContextTypes=((e={})[c]=_().object.isRequired,e);var s=function(n){function e(){var t;return(t=n.apply(this,arguments)||this).state={value:t.getValue()},t.onUpdate=function(n,e){0!=((0|t.observedBits)&e)&&t.setState({value:t.getValue()})},t}o(e,n);var r=e.prototype;return r.componentWillReceiveProps=function(t){var n=t.observedBits;this.observedBits=null==n?j:n},r.componentDidMount=function(){this.context[c]&&this.context[c].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?j:t},r.componentWillUnmount=function(){this.context[c]&&this.context[c].off(this.onUpdate)},r.getValue=function(){return this.context[c]?this.context[c].get():t},r.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},e}(i.Component);return s.contextTypes=((r={})[c]=_().object,r),{Provider:u,Consumer:s}};var B=e(39658),H=e.n(B),I=(e(59864),e(63366)),D=e(8679),W=e.n(D),V=function(t){var n=F();return n.displayName=t,n},K=V("Router-History"),q=function(t){var n=F();return n.displayName=t,n},z=q("Router"),J=function(t){function n(n){var e;return(e=t.call(this,n)||this).state={location:n.history.location},e._isMounted=!1,e._pendingLocation=null,n.staticContext||(e.unlisten=n.history.listen((function(t){e._isMounted?e.setState({location:t}):e._pendingLocation=t}))),e}o(n,t),n.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var e=n.prototype;return e.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},e.componentWillUnmount=function(){this.unlisten&&this.unlisten()},e.render=function(){return a().createElement(z.Provider,{value:{history:this.props.history,location:this.state.location,match:n.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},a().createElement(K.Provider,{children:this.props.children||null,value:this.props.history}))},n}(a().Component),G=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).history=M(n.props),n}return o(n,t),n.prototype.render=function(){return a().createElement(J,{history:this.history,children:this.props.children})},n}(a().Component),Q=function(t){function n(){return t.apply(this,arguments)||this}o(n,t);var e=n.prototype;return e.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},e.componentDidUpdate=function(t){this.props.onUpdate&&this.props.onUpdate.call(this,this,t)},e.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},e.render=function(){return null},n}(a().Component);function X(t){var n=t.message,e=t.when,r=void 0===e||e;return a().createElement(z.Consumer,null,(function(t){if(t||p(!1),!r||t.staticContext)return null;var e=t.history.block;return a().createElement(Q,{onMount:function(t){t.release=e(n)},onUpdate:function(t,r){r.message!==n&&(t.release(),t.release=e(n))},onUnmount:function(t){t.release()},message:n})}))}var Y={},tt=0;function nt(t,n){return void 0===t&&(t="/"),void 0===n&&(n={}),"/"===t?t:function(t){if(Y[t])return Y[t];var n=H().compile(t);return tt<1e4&&(Y[t]=n,tt++),n}(t)(n,{pretty:!0})}function et(t){var n=t.computedMatch,e=t.to,r=t.push,o=void 0!==r&&r;return a().createElement(z.Consumer,null,(function(t){t||p(!1);var r=t.history,i=t.staticContext,u=o?r.push:r.replace,s=g(n?"string"==typeof e?nt(e,n.params):(0,c.Z)({},e,{pathname:nt(e.pathname,n.params)}):e);return i?(u(s),null):a().createElement(Q,{onMount:function(){u(s)},onUpdate:function(t,n){var e,r,o=g(n.to);e=o,r=(0,c.Z)({},s,{key:o.key}),e.pathname===r.pathname&&e.search===r.search&&e.hash===r.hash&&e.key===r.key&&l(e.state,r.state)||u(s)},to:e})}))}var rt={},ot=0;function it(t,n){void 0===n&&(n={}),("string"==typeof n||Array.isArray(n))&&(n={path:n});var e=n,r=e.path,o=e.exact,i=void 0!==o&&o,a=e.strict,c=void 0!==a&&a,u=e.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(n,e){if(!e&&""!==e)return null;if(n)return n;var r=function(t,n){var e=""+n.end+n.strict+n.sensitive,r=rt[e]||(rt[e]={});if(r[t])return r[t];var o=[],i={regexp:H()(t,o,n),keys:o};return ot<1e4&&(r[t]=i,ot++),i}(e,{end:i,strict:c,sensitive:s}),o=r.regexp,a=r.keys,u=o.exec(t);if(!u)return null;var f=u[0],l=u.slice(1),p=t===f;return i&&!p?null:{path:e,url:"/"===e&&""===f?"/":f,isExact:p,params:a.reduce((function(t,n,e){return t[n.name]=l[e],t}),{})}}),null)}var at=function(t){function n(){return t.apply(this,arguments)||this}return o(n,t),n.prototype.render=function(){var t=this;return a().createElement(z.Consumer,null,(function(n){n||p(!1);var e=t.props.location||n.location,r=t.props.computedMatch?t.props.computedMatch:t.props.path?it(e.pathname,t.props):n.match,o=(0,c.Z)({},n,{location:e,match:r}),i=t.props,u=i.children,s=i.component,f=i.render;return Array.isArray(u)&&0===u.length&&(u=null),a().createElement(z.Provider,{value:o},o.match?u?"function"==typeof u?u(o):u:s?a().createElement(s,o):f?f(o):null:"function"==typeof u?u(o):null)}))},n}(a().Component);function ct(t){return"/"===t.charAt(0)?t:"/"+t}function ut(t,n){if(!t)return n;var e=ct(t);return 0!==n.pathname.indexOf(e)?n:(0,c.Z)({},n,{pathname:n.pathname.substr(e.length)})}function st(t){return"string"==typeof t?t:y(t)}function ft(t){return function(){p(!1)}}function lt(){}var pt=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).handlePush=function(t){return n.navigateTo(t,"PUSH")},n.handleReplace=function(t){return n.navigateTo(t,"REPLACE")},n.handleListen=function(){return lt},n.handleBlock=function(){return lt},n}o(n,t);var e=n.prototype;return e.navigateTo=function(t,n){var e=this.props,r=e.basename,o=void 0===r?"":r,i=e.context,a=void 0===i?{}:i;a.action=n,a.location=function(t,n){return t?(0,c.Z)({},n,{pathname:ct(t)+n.pathname}):n}(o,g(t)),a.url=st(a.location)},e.render=function(){var t=this.props,n=t.basename,e=void 0===n?"":n,r=t.context,o=void 0===r?{}:r,i=t.location,u=void 0===i?"/":i,s=(0,I.Z)(t,["basename","context","location"]),f={createHref:function(t){return ct(e+st(t))},action:"POP",location:ut(e,g(u)),push:this.handlePush,replace:this.handleReplace,go:ft(),goBack:ft(),goForward:ft(),listen:this.handleListen,block:this.handleBlock};return a().createElement(J,(0,c.Z)({},s,{history:f,staticContext:o}))},n}(a().Component),ht=function(t){function n(){return t.apply(this,arguments)||this}return o(n,t),n.prototype.render=function(){var t=this;return a().createElement(z.Consumer,null,(function(n){n||p(!1);var e,r,o=t.props.location||n.location;return a().Children.forEach(t.props.children,(function(t){if(null==r&&a().isValidElement(t)){e=t;var i=t.props.path||t.props.from;r=i?it(o.pathname,(0,c.Z)({},t.props,{path:i})):n.match}})),r?a().cloneElement(e,{location:o,computedMatch:r}):null}))},n}(a().Component);function dt(t){var n="withRouter("+(t.displayName||t.name)+")",e=function(n){var e=n.wrappedComponentRef,r=(0,I.Z)(n,["wrappedComponentRef"]);return a().createElement(z.Consumer,null,(function(n){return n||p(!1),a().createElement(t,(0,c.Z)({},r,n,{ref:e}))}))};return e.displayName=n,e.WrappedComponent=t,W()(e,t)}var vt=a().useContext;function mt(){return vt(K)}function yt(){return vt(z).location}function gt(){var t=vt(z).match;return t?t.params:{}}function wt(t){var n=yt(),e=vt(z).match;return t?it(n.pathname,t):e}var xt=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).history=O(n.props),n}return o(n,t),n.prototype.render=function(){return a().createElement(J,{history:this.history,children:this.props.children})},n}(a().Component),bt=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).history=$(n.props),n}return o(n,t),n.prototype.render=function(){return a().createElement(J,{history:this.history,children:this.props.children})},n}(a().Component),Pt=function(t,n){return"function"==typeof t?t(n):t},Et=function(t,n){return"string"==typeof t?g(t,null,null,n):t},Ct=function(t){return t},Ot=a().forwardRef;void 0===Ot&&(Ot=Ct);var kt=Ot((function(t,n){var e=t.innerRef,r=t.navigate,o=t.onClick,i=(0,I.Z)(t,["innerRef","navigate","onClick"]),u=i.target,s=(0,c.Z)({},i,{onClick:function(t){try{o&&o(t)}catch(n){throw t.preventDefault(),n}t.defaultPrevented||0!==t.button||u&&"_self"!==u||function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)||(t.preventDefault(),r())}});return s.ref=Ct!==Ot&&n||e,a().createElement("a",s)})),Rt=Ot((function(t,n){var e=t.component,r=void 0===e?kt:e,o=t.replace,i=t.to,u=t.innerRef,s=(0,I.Z)(t,["component","replace","to","innerRef"]);return a().createElement(z.Consumer,null,(function(t){t||p(!1);var e=t.history,f=Et(Pt(i,t.location),t.location),l=f?e.createHref(f):"",h=(0,c.Z)({},s,{href:l,navigate:function(){var n=Pt(i,t.location);(o?e.replace:e.push)(n)}});return Ct!==Ot?h.ref=n||u:h.innerRef=u,a().createElement(r,h)}))})),St=function(t){return t},At=a().forwardRef;void 0===At&&(At=St);var Tt=At((function(t,n){var e=t["aria-current"],r=void 0===e?"page":e,o=t.activeClassName,i=void 0===o?"active":o,u=t.activeStyle,s=t.className,f=t.exact,l=t.isActive,h=t.location,d=t.sensitive,v=t.strict,m=t.style,y=t.to,g=t.innerRef,w=(0,I.Z)(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a().createElement(z.Consumer,null,(function(t){t||p(!1);var e=h||t.location,o=Et(Pt(y,e),e),x=o.pathname,b=x&&x.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),P=b?it(e.pathname,{path:b,exact:f,sensitive:d,strict:v}):null,E=!!(l?l(P,e):P),C=E?function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return n.filter((function(t){return t})).join(" ")}(s,i):s,O=E?(0,c.Z)({},m,{},u):m,k=(0,c.Z)({"aria-current":E&&r||null,className:C,style:O,to:o},w);return St!==At?k.ref=n||g:k.innerRef=g,a().createElement(Rt,k)}))}))},76585:t=>{t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},39658:(t,n,e)=>{var r=e(76585);t.exports=function t(n,e,o){return r(e)||(o=e||o,e=[]),o=o||{},n instanceof RegExp?function(t,n){var e=t.source.match(/\((?!\?)/g);if(e)for(var r=0;r<e.length;r++)n.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(t,n)}(n,e):r(n)?function(n,e,r){for(var o=[],i=0;i<n.length;i++)o.push(t(n[i],e,r).source);return f(new RegExp("(?:"+o.join("|")+")",l(r)),e)}(n,e,o):function(t,n,e){return p(i(t,e),n,e)}(n,e,o)},t.exports.parse=i,t.exports.compile=function(t,n){return c(i(t,n),n)},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=p;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(t,n){for(var e,r=[],i=0,a=0,c="",f=n&&n.delimiter||"/";null!=(e=o.exec(t));){var l=e[0],p=e[1],h=e.index;if(c+=t.slice(a,h),a=h+l.length,p)c+=p[1];else{var d=t[a],v=e[2],m=e[3],y=e[4],g=e[5],w=e[6],x=e[7];c&&(r.push(c),c="");var b=null!=v&&null!=d&&d!==v,P="+"===w||"*"===w,E="?"===w||"*"===w,C=e[2]||f,O=y||g;r.push({name:m||i++,prefix:v||"",delimiter:C,optional:E,repeat:P,partial:b,asterisk:!!x,pattern:O?s(O):x?".*":"[^"+u(C)+"]+?"})}}return a<t.length&&(c+=t.substr(a)),c&&r.push(c),r}function a(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function c(t,n){for(var e=new Array(t.length),o=0;o<t.length;o++)"object"==typeof t[o]&&(e[o]=new RegExp("^(?:"+t[o].pattern+")$",l(n)));return function(n,o){for(var i="",c=n||{},u=(o||{}).pretty?a:encodeURIComponent,s=0;s<t.length;s++){var f=t[s];if("string"!=typeof f){var l,p=c[f.name];if(null==p){if(f.optional){f.partial&&(i+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(r(p)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var h=0;h<p.length;h++){if(l=u(p[h]),!e[s].test(l))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===h?f.prefix:f.delimiter)+l}}else{if(l=f.asterisk?encodeURI(p).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):u(p),!e[s].test(l))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+l+'"');i+=f.prefix+l}}else i+=f}return i}}function u(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function f(t,n){return t.keys=n,t}function l(t){return t&&t.sensitive?"":"i"}function p(t,n,e){r(n)||(e=n||e,n=[]);for(var o=(e=e||{}).strict,i=!1!==e.end,a="",c=0;c<t.length;c++){var s=t[c];if("string"==typeof s)a+=u(s);else{var p=u(s.prefix),h="(?:"+s.pattern+")";n.push(s),s.repeat&&(h+="(?:"+p+h+")*"),a+=h=s.optional?s.partial?p+"("+h+")?":"(?:"+p+"("+h+"))?":p+"("+h+")"}}var d=u(e.delimiter||"/"),v=a.slice(-d.length)===d;return o||(a=(v?a.slice(0,-d.length):a)+"(?:"+d+"(?=$))?"),a+=i?"$":o&&v?"":"(?="+d+"|$)",f(new RegExp("^"+a,l(e)),n)}}}]);