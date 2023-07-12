(self.webpackChunktasks_frontend=self.webpackChunktasks_frontend||[]).push([[376],{48187:(e,t,r)=>{"use strict";r.d(t,{Z:()=>E});var n=r(70885),o=r(93264),i=r.n(o),c=r(16530),a=r(37282),s=r(18220),l=r(60076),u=r(67336),p=r(65645),f=r(83215),O=r(55140),d=r(4147);const E=function(e){var t=(0,c.useHistory)(),r=(0,O.Z)(),E=(0,a.useDispatch)();return(0,o.useEffect)((function(){var e;if(r){(0,u.JH)().register({notifications:f.ee});var o=r.init(),i=o.identifyApp,c=o.on;i(d.Kn.b),e=c("APP_NAVIGATION",(function(e){return t.push("/".concat(e.navId))})),c("GLOBAL_FILTER_UPDATE",(function(e){var t,o=e.data,i=(null==r||null===(t=r.mapGlobalFilter)||void 0===t?void 0:t.call(r,o,!1,!0))||[],c=(0,n.Z)(i,3),a=c[0],l=c[1],u=c[2];E(s.Z.setGlobalFilterTags(u)),E(s.Z.setGlobalFilterWorkloads(a)),E(s.Z.setGlobalFilterSIDs(l))}))}return function(){e()}}),[r]),i().createElement(o.Fragment,null,i().createElement(p.ZP,null),i().createElement(l.Z,{childProps:e}))}},28412:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var n=r(93264),o=r.n(n),i=r(16530),c=r(37282),a=r(24311),s=r(48187),l=r(35240);const u=function(){var e=(0,a.S1)();return o().createElement(a.gE.Provider,{value:{getRegistry:function(){return e}}},o().createElement(c.Provider,{store:e.getStore()},o().createElement(i.BrowserRouter,{basename:(0,l.eb)(window.location.pathname)},o().createElement(s.Z,null))))}},83600:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(93264),o=r.n(n),i=r(45697),c=r.n(i),a=r(43707),s=r(85333),l=function(e){var t=e.children,r=e.requiredPermissions,n=void 0===r?[]:r,i=(0,a.TE)("tasks",n),c=i.hasAccess;return i.isLoading?"":c?t:o().createElement(s.Z,{serviceName:"Tasks"})};l.propTypes={children:c().node,requiredPermissions:c().array};const u=l},60076:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(4942),o=r(93264),i=r.n(o),c=r(45697),a=r.n(c),s=r(16530),l=r(63366),u=r(83600);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=function(e){var t=e.component,r=e.isExact,n=e.path,o=e.props,c=void 0===o?{}:o,a=e.requiredPermissions,l={isExact:r,path:n},p=f(f({},c),{},{route:f({},e)});return i().createElement(s.Route,l,i().createElement(u.Z,{requiredPermissions:a},i().createElement(t,p)))};O.propTypes={component:a().node,isExact:a().bool,path:a().string,props:a().object};var d=(0,o.lazy)((function(){return Promise.all([r.e(607),r.e(453),r.e(550)]).then(r.bind(r,85655))})),E=[{path:"/executed/:id",isExact:!0,requiredPermissions:["tasks:*:*"],component:(0,o.lazy)((function(){return Promise.all([r.e(607),r.e(453),r.e(292)]).then(r.bind(r,97149))}))},{path:"/available",isExact:!0,requiredPermissions:["tasks:*:*"],component:d,props:{tab:0}},{path:"/executed",isExact:!0,requiredPermissions:["tasks:*:*"],component:d,props:{tab:1}},{path:"/",isExact:!0,requiredPermissions:["tasks:*:*"],component:d,props:{tab:0}}],b=function(){return i().createElement(o.Suspense,{fallback:i().createElement(l.Bullseye,null,i().createElement(l.Spinner,null))},i().createElement(s.Switch,null,E.map(O),i().createElement(s.Route,null,i().createElement(s.Redirect,{to:"/"}))))}},18220:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(80187);const o={setGlobalFilterTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:n.Z.SET_GLOBAL_FILTER_TAGS,payload:e}},setGlobalFilterWorkloads:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:n.Z.SET_GLOBAL_FILTER_WORKLOADS,payload:e}},setGlobalFilterSIDs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:n.Z.SET_GLOBAL_FILTER_SIDS,payload:e}}}},80187:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n={SET_GLOBAL_FILTER_TAGS:"SET_GLOBAL_FILTER_TAGS",SET_GLOBAL_FILTER_WORKLOADS:"SET_GLOBAL_FILTER_WORKLOADS",SET_GLOBAL_FILTER_SIDS:"SET_GLOBAL_FILTER_SIDS"}},24311:(e,t,r)=>{"use strict";r.d(t,{gE:()=>g,zw:()=>_,bh:()=>S,S1:()=>m});var n,o=r(4942),i=r(42982),c=r(93264),a=r(9036),s=r(67336),l=r(68573),u=r.n(l),p=r(83215),f=r(80187);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E,b=(0,a.Gg)((n={},(0,o.Z)(n,f.Z.SET_GLOBAL_FILTER_TAGS,(function(){var e=arguments.length>1?arguments[1]:void 0;return d(d({},arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),{},{tagsFilter:e.payload})})),(0,o.Z)(n,f.Z.SET_GLOBAL_FILTER_WORKLOADS,(function(){var e=arguments.length>1?arguments[1]:void 0;return d(d({},arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),{},{workloadsFilter:e.payload})})),(0,o.Z)(n,f.Z.SET_GLOBAL_FILTER_SIDS,(function(){var e=arguments.length>1?arguments[1]:void 0;return d(d({},arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),{},{sidsFilter:e.payload})})),n));function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=(0,c.createContext)({getRegistry:function(){}});function m(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(E=(0,s.JH)({},[u()].concat((0,i.Z)(t.filter((function(e){return void 0!==e})))))).register({notifications:p.ee,globalFilterState:b}),E}function S(){return E.getStore()}var L=function(e,t){return e.map((function(e){return y(y({},e),{},{selected:t.includes(e.id)})}))},_=function(){var e;return(0,a.Gg)((e={},(0,o.Z)(e,"INVENTORY_INIT",(function(){return{rows:[],total:0}})),(0,o.Z)(e,"RESET_PAGE",(function(e){return y(y({},e),{},{page:1,perPage:10})})),(0,o.Z)(e,"SELECT_ENTITIES",(function(e,t){var r=t.payload.selected;return y(y({},e),{},{rows:L(e.rows||[],r)})})),e))}},45467:()=>{},81754:()=>{},11452:()=>{},34946:()=>{},80598:()=>{},10108:()=>{},30187:()=>{},93398:()=>{},46928:()=>{},66822:()=>{},49854:()=>{},74181:()=>{},11177:()=>{},4147:e=>{"use strict";e.exports={Kn:{b:"tasks"}}}}]);