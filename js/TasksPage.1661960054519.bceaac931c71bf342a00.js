"use strict";(self.webpackChunktasks_frontend=self.webpackChunktasks_frontend||[]).push([[550],{2112:(e,t,n)=>{t.MS={name:"WrenchIcon",height:512,width:512,svgPath:"M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z",yOffset:0,xOffset:0},t.R0=n(35183).createIcon(t.MS),t.ZP=t.R0},824:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ee});var r={};n.r(r),n.d(r,{nameFilter:()=>K});var a=n(15861),s=n(70885),c=n(87757),o=n.n(c),l=n(93264),i=n.n(l),u=n(45697),p=n.n(u),d=n(16530),m=n(99922),f=n(14748),b=n(80123),v=function(e){var t=e.className,n=e.tabIndex,r=e.tabsList,a=e.updateTab;return i().createElement(m.Tabs,{className:t,activeKey:n,onSelect:a},r.map((function(e,t){return i().createElement(m.Tab,{id:"tabs-page-".concat(t),key:"tabs-page-".concat(t),eventKey:t,title:i().createElement(m.TabTitleText,null,e)})})))};v.propTypes={className:p().string,tabIndex:p().number,tabsList:p().array,updateTab:p().func};const k=v;var y=n(64600),E=n(58997),x=n(12117),Z=n(57318),g=function(e){return e.content},h=function(e,t){return e.find((function(e){return e.props.type===t}))},w=function(e){var t=e.children,n=e.cardClass;return Array.isArray(t)||(t=[t]),i().createElement(m.Card,{className:n},i().createElement(m.CardTitle,{className:h(t,"title").props.className},h(t,"title")),i().createElement(m.CardBody,{className:h(t,"body").props.className},h(t,"body")),i().createElement(m.CardFooter,{className:h(t,"footer").props.className},h(t,"footer")))};w.propTypes={children:p().any,cardClass:p().string};const S=w;var T=n(35664),O=n(46808),_=n(45713),C=n(84564),P=function(e){var t,n=e.availableTasks,r=e.error,a=e.openTaskModal;return i().createElement("div",{"aria-label":"available-tasks-table"},r?i().createElement(_.Z,{icon:C.ZP,color:"#c9190b",title:"Available tasks cannot be displayed",text:E.Rl,error:"Error ".concat(null==r||null===(t=r.response)||void 0===t?void 0:t.status,": ").concat(null==r?void 0:r.message)}):null!=n&&n.length?null==n?void 0:n.map((function(e){return i().createElement(i().Fragment,{"aria-label":e.title,key:e.title},i().createElement(S,null,i().createElement(g,{content:e.title,type:"title"}),i().createElement(g,{className:"card-task-description",content:e.description,type:"body"}),i().createElement(g,{content:i().createElement(m.Flex,{direction:{default:"column"}},i().createElement(m.FlexItem,null,i().createElement("a",{href:"".concat(E.WP).concat(E.Hu,"/").concat(e.slug,"/playbook")},"Download preview of playbook")),i().createElement(m.FlexItem,null,i().createElement(O.Z,{slug:e.slug,isFirst:!0,variant:"primary",openTaskModal:a}))),type:"footer"})),i().createElement("br",null))})):i().createElement(_.Z,{title:E.kL,text:E.Fd}))};P.propTypes={availableTasks:p().array,error:p().object,openTaskModal:p().func};const j=P;var M=n(65811),F=n(67303),N=function(){var e=E.LP;return null==e?void 0:e.map((function(e,t){return i().createElement(i().Fragment,{key:"loading-".concat(t)},i().createElement(S,null,i().createElement(g,{content:i().createElement(T.Z,{size:T.i.md}),type:"title"}),i().createElement(g,{content:i().createElement(T.Z,{size:T.i.md}),type:"body"}),i().createElement(g,{content:i().createElement(T.Z,{size:T.i.md}),type:"footer"})),i().createElement("br",null))}))},I=function(e){var t=e.openTaskModal,n=(0,l.useState)([]),r=(0,s.Z)(n,2),c=r[0],u=r[1],p=(0,l.useState)(!1),d=(0,s.Z)(p,2),m=d[0],f=d[1],b=(0,l.useState)(),v=(0,s.Z)(b,2),k=v[0],y=v[1],E=function(e){(0,F.VZ)(e)?(y(e),(0,M.q)({variant:"danger",title:"Error",description:e.message,dismissable:!0,autoDismiss:!1})):u(e.data),f(!1)};return(0,l.useEffect)((function(){var e=function(){var e=(0,a.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,(0,Z.Cj)();case 3:t=e.sent,E(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),i().createElement("div",{"aria-label":"available-tasks"},m?i().createElement(N,null):i().createElement(j,{availableTasks:c,error:k,openTaskModal:t}))};I.propTypes={openTaskModal:p().func};const D=I;var L=n(4942),R=n(2112),z=n(79886),A=function(e,t){var n=e.id,r=e.task_title;return i().createElement(d.Link,{key:"task-title-".concat(t),to:"/executed/".concat(n)},r)};A.propTypes={id:p().number,task_title:p().any,index:p().number};var B={title:"Task",props:{width:35},sortByProp:"task_title",renderExport:function(e){return e.task_title},renderFunc:(0,z.Rg)(A)},W={title:"Systems",props:{width:20},sortByProp:"systems_count",renderExport:function(e){return e.system_count}},q={title:"Run date/time",props:{width:20},sortByProp:"end_time",renderExport:function(e){return e.run_date_time},renderFunc:function(e,t,n){return n.run_date_time}},H=[B,W,q];const G=[B,W,q];var K={type:n(83237).Y.text,label:"Task",filter:function(e,t){return e.filter((function(e){return e.task_title.toLowerCase().includes(t.toLowerCase())}))}},V=n(23690),J=n(95387),Q=n(11207);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){(0,L.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const X=function(){var e,t=Object.values(r),n=(0,l.useState)(E.vg),c=(0,s.Z)(n,2),u=c[0],p=c[1],d=(0,l.useState)(E.LG),m=(0,s.Z)(d,2),f=m[0],b=m[1],v=(0,l.useState)(),k=(0,s.Z)(v,2),x=k[0],g=k[1],h=(0,l.useState)(),w=(0,s.Z)(h,2),S=w[0],T=w[1],O=(0,l.useState)(!1),P=(0,s.Z)(O,2),j=P[0],M=P[1],N=(0,l.useState)(!1),I=(0,s.Z)(N,2),D=I[0],L=I[1],A=(0,l.useState)(!1),B=(0,s.Z)(A,2),W=B[0],q=B[1],K=(0,l.useState)(!1),U=(0,s.Z)(K,2),X=U[0],$=U[1],ee=(0,l.useState)({}),te=(0,s.Z)(ee,2),ne=te[0],re=te[1],ae=(0,l.useState)(!1),se=(0,s.Z)(ae,2),ce=se[0],oe=se[1],le=(0,l.useState)([]),ie=(0,s.Z)(le,2),ue=ie[0],pe=ie[1],de=function(){var e=(0,a.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(),oe(!0),e.next=4,(0,F.tQ)(t,T);case 4:if(n=e.sent,!Object.keys(n).length){e.next=15;break}return e.next=8,(0,F.n7)(n,T);case 8:if(!(r=e.sent).length){e.next=13;break}return pe((0,F.AC)(r)),e.next=13,b(n);case 13:e.next=18;break;case 15:return oe(!1),e.next=18,b({});case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),me=function(){var e=(0,a.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,(0,Z.nW)("?limit=1000&offset=0");case 3:t=e.sent,ve(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fe=function(){var e=(0,a.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re(t);case 2:$(!0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),be=function(e,t){var n=function(e,t){e(t)};return function(r){return[{title:"Run this task again",onClick:function(e,r,a){return n(t,a.task.title.props.id)}},{title:"Delete",isDisabled:"Completed"!==r.task.title.props.status,onClick:function(t,r,a){n(e,a.task.title.props)}}]}}(fe,de),ve=function(){var e=(0,a.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,F.VZ)(t)){e.next=5;break}(0,F.sc)(t),g(t),e.next=8;break;case 5:return t.data.map((function(e){return"Completed"===e.status?e.run_date_time=(0,z.Ws)(e.end_time):e.run_date_time=e.status})),e.next=8,p(t.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ke=function(){var e=(0,a.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(E.vg);case 2:me();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){me()}),[]),(0,l.useEffect)((0,a.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!j&&!D){e.next=7;break}return e.next=3,ke();case 3:M(!1),L(!1),e.next=11;break;case 7:if(!W){e.next=11;break}return e.next=10,ke();case 10:q(!1);case 11:case"end":return e.stop()}}),e)}))),[D,j,W]),i().createElement(i().Fragment,null,i().createElement(y.Z,{description:f.task_description,error:S,isOpen:ce,selectedSystems:ue,setIsRunTaskAgain:q,setModalOpened:oe,slug:f.task_slug,title:f.task_title}),i().createElement(Q.Z,{id:ne.id,isOpen:X,setIsCancel:L,setIsDelete:M,setModalOpened:$,startTime:ne.start_time,status:ne.status,title:ne.task_title}),i().createElement("div",{"aria-label":"completed-tasks"},x?i().createElement(_.Z,{icon:C.ZP,color:"#c9190b",title:"Completed tasks cannot be displayed",text:E.Nq,error:"Error ".concat(null==x||null===(e=x.response)||void 0===e?void 0:e.status,": ").concat(null==x?void 0:x.message)}):0===u.length?i().createElement(_.Z,{icon:R.ZP,color:"#6a6e73",title:E.Uo,text:E.R_}):i().createElement(J.Z,{label:"completed-tasks-table",ouiaId:"completed-tasks-table",columns:G,items:u,filters:{filterConfig:t},options:Y(Y({},E.t_),{},{actionResolver:be,exportable:Y(Y({},E.t_.exportable),{},{columns:H})}),emptyRows:(0,V.f)("tasks"),isStickyHeader:!0})))};var $=function(e){var t=e.tab,n=(0,d.useHistory)(),r=(0,l.useState)(t),c=(0,s.Z)(r,2),u=c[0],p=c[1],v=(0,l.useState)(!1),g=(0,s.Z)(v,2),h=g[0],w=g[1],S=(0,l.useState)({}),T=(0,s.Z)(S,2),O=T[0],_=T[1],C=(0,l.useState)(),P=(0,s.Z)(C,2),j=P[0],F=P[1];(0,l.useEffect)((function(){0===t&&n.push("available")}),[]);var N=function(){var e=(0,a.Z)(o().mark((function e(t){var n,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,Z.Sl)(t);case 2:null!=(a=e.sent)&&null!==(n=a.response)&&void 0!==n&&n.status&&200!==(null==a||null===(r=a.response)||void 0===r?void 0:r.status)?(F(a),(0,M.q)({variant:"danger",title:"Error",description:a.message,dismissable:!0,autoDismiss:!1})):_(a),w(!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i().createElement(i().Fragment,null,i().createElement(y.Z,{description:O.description,error:j,isOpen:h,selectedSystems:[],setModalOpened:w,slug:O.slug,title:O.title}),i().createElement(b.Z,null,i().createElement(x.Z,{flexContents:E.j7,flexProps:E.Jc})),i().createElement(k,{className:"tabs-background",tabIndex:u,updateTab:function(e,t){n.push(t?"executed":"available"),p(t)},tabsList:E.EZ}),i().createElement(f.Z,null,i().createElement(m.Stack,{hasGutter:!0},i().createElement(m.StackItem,null,0===u?i().createElement(D,{openTaskModal:N}):i().createElement(X,{openTaskModal:N})))))};$.propTypes={tab:p().number};const ee=$}}]);
//# sourceMappingURL=../sourcemaps/TasksPage.73c1384cc70c410699c7015eb175b6d4.js.map