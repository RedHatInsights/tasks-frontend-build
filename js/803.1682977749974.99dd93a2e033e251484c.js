(self.webpackChunktasks_frontend=self.webpackChunktasks_frontend||[]).push([[803],{65155:(e,t,r)=>{"use strict";r.r(t);var n=r(93264),o=r.n(n),c=r(3644),i=r.n(c),s=r(16530),a=r(37282),u=r(30319),l=r(4942),p=r(45697),f=r.n(p),m=r(63366),d=r(43707),b=r(85333),E=function(e){var t=e.children,r=e.requiredPermissions,n=void 0===r?[]:r,c=(0,d.TE)("tasks",n),i=c.hasAccess;return c.isLoading?"":i?t:o().createElement(b.Z,{serviceName:"Tasks"})};E.propTypes={children:f().node,requiredPermissions:f().array};const O=E;function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=function(e){var t=e.component,r=e.isExact,n=e.path,c=e.props,i=void 0===c?{}:c,a=e.requiredPermissions,u={isExact:r,path:n},l=v(v({},i),{},{route:v({},e)});return o().createElement(s.Route,u,o().createElement(O,{requiredPermissions:a},o().createElement(t,l)))};P.propTypes={component:f().node,isExact:f().bool,path:f().string,props:f().object};var g=(0,n.lazy)((function(){return Promise.all([r.e(623),r.e(453),r.e(550)]).then(r.bind(r,85655))})),h=[{path:"/executed/:id",isExact:!0,requiredPermissions:["tasks:*:*"],component:(0,n.lazy)((function(){return Promise.all([r.e(623),r.e(453),r.e(292)]).then(r.bind(r,97149))}))},{path:"/available",isExact:!0,requiredPermissions:["tasks:*:*"],component:g,props:{tab:0}},{path:"/executed",isExact:!0,requiredPermissions:["tasks:*:*"],component:g,props:{tab:1}},{path:"/",isExact:!0,requiredPermissions:["tasks:*:*"],component:g,props:{tab:0}}],j=function(){return o().createElement(n.Suspense,{fallback:o().createElement(m.Bullseye,null,o().createElement(m.Spinner,null))},o().createElement(s.Switch,null,h.map(P),o().createElement(s.Route,null,o().createElement(s.Redirect,{to:"/"}))))},w=r(67336),k=r(65645),S=r(83215),T=r(55140);const x="tasks",I=function(e){var t=(0,s.useHistory)(),r=(0,T.Z)();return(0,n.useEffect)((function(){var e;if(r){(0,w.JH)().register({notifications:S.ee});var n=r.init(),o=n.identifyApp,c=n.on;o(x),e=c("APP_NAVIGATION",(function(e){return t.push("/".concat(e.navId))}))}return function(){e()}}),[r]),o().createElement(n.Fragment,null,o().createElement(k.ZP,null),o().createElement(j,{childProps:e}))};var Z=r(35240);const q=function(){var e=(0,u.S1)();return o().createElement(u.gE.Provider,{value:{getRegistry:function(){return e}}},o().createElement(a.Provider,{store:e.getStore()},o().createElement(s.BrowserRouter,{basename:(0,Z.eb)(window.location.pathname)},o().createElement(I,null))))};var A=document.getElementById("root");i().render(o().createElement(q,null),A,(function(){return A.setAttribute("data-ouia-safe",!0)}))},30319:(e,t,r)=>{"use strict";r.d(t,{gE:()=>d,S1:()=>b,bh:()=>E,zw:()=>y});var n,o=r(4942),c=r(42982),i=r(93264),s=r(9036),a=r(67336),u=r(68573),l=r.n(u),p=r(83215);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=(0,i.createContext)({getRegistry:function(){}});function b(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(n=(0,a.JH)({},[l()].concat((0,c.Z)(t.filter((function(e){return void 0!==e})))))).register({notifications:p.ee}),n}function E(){return n.getStore()}var O=function(e,t){return e.map((function(e){return m(m({},e),{},{selected:t.includes(e.id)})}))},y=function(){var e;return(0,s.Gg)((e={},(0,o.Z)(e,"INVENTORY_INIT",(function(){return{rows:[],total:0}})),(0,o.Z)(e,"RESET_PAGE",(function(e){return m(m({},e),{},{page:1,perPage:10})})),(0,o.Z)(e,"SELECT_ENTITIES",(function(e,t){var r=t.payload.selected;return m(m({},e),{},{rows:O(e.rows||[],r)})})),e))}},45467:()=>{},81754:()=>{},11452:()=>{},34946:()=>{},80598:()=>{},10108:()=>{},30187:()=>{},93398:()=>{},46928:()=>{},66822:()=>{},49854:()=>{},74181:()=>{},11177:()=>{}}]);
//# sourceMappingURL=../sourcemaps/803.cba4fb71e7bc0e92db71872c4568adaa.js.map