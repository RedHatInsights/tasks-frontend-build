"use strict";(self.webpackChunktasks_frontend=self.webpackChunktasks_frontend||[]).push([[292],{1627:(e,t,n)=>{n.r(t),n.d(t,{default:()=>W});var r=n(4942),s=n(42982),a=n(15861),l=n(70885),c=n(87757),o=n.n(c),u=n(93264),i=n.n(u),d=n(16530),m=n(95387),p=n(14748),f=n(80123),b=n(39173),y=n(99922),E=n(84564),x=n(45697),v=n.n(x),h=n(79886),k=function(e,t){var n=e.system,r=e.display_name;return i().createElement("a",{key:"system-title-".concat(t),href:insights.chrome.isBeta()?"/beta/insights/inventory/".concat(n):"/insights/inventory/".concat(n)},r)};k.propTypes={system:v().string,display_name:v().node};var Z={title:"System name",props:{width:35},sortByProp:"display_name",renderExport:function(e){return e.display_name},renderFunc:(0,h.Rg)(k)},g={title:"Status",props:{width:20},sortByProp:"status",renderExport:function(e){return e.status}},w={title:"Message",props:{width:20},sortByProp:"message",renderExport:function(e){return e.message}},O=[Z,g,w];const S=[Z,g,w];var _=n(83237),j=[{type:_.Y.text,label:"System",filter:function(e,t){return e.filter((function(e){return e.display_name.toLowerCase().includes(t.toLowerCase())}))}}],P=[{type:_.Y.checkbox,label:"Status",filter:function(e,t){return e.filter((function(e){return t.includes(e.status.toLowerCase())}))},items:[{label:"Running",value:"running"},{label:"Success",value:"success"},{label:"Failure",value:"failure"},{label:"Timeout",value:"timeout"},{label:"Cancelled",value:"cancelled"}]}],C=n(58997),B=n(12117),F=n(45713),I=n(64600),T=n(11207),D=n(23690),M=n(87462),L=n(45987),H=["href"],R=["children"],A=function(e){var t=e.href,n=(0,L.Z)(e,H);return i().createElement(d.Link,(0,M.Z)({},n,{to:t}))};A.propTypes={href:v().string};var Y=function(e){var t=e.children,n=(0,L.Z)(e,R);return i().createElement(y.BreadcrumbItem,(0,M.Z)({},n,{component:A}),t)};Y.propTypes={children:v().node};const J=Y;var K=n(67303);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const W=function(){var e,t=(0,d.useParams)().id,n=(0,u.useState)(C.iS),r=(0,l.Z)(n,2),c=r[0],x=r[1],v=(0,u.useState)(C.Pu),h=(0,l.Z)(v,2),k=h[0],Z=h[1],g=(0,u.useState)(),w=(0,l.Z)(g,2),_=w[0],M=w[1],L=(0,u.useState)(!1),H=(0,l.Z)(L,2),R=H[0],A=H[1],Y=(0,u.useState)([]),N=(0,l.Z)(Y,2),W=N[0],q=N[1],z=(0,u.useState)(!1),G=(0,l.Z)(z,2),U=G[0],V=G[1],X=(0,u.useState)(!1),$=(0,l.Z)(X,2),ee=$[0],te=$[1],ne=(0,u.useState)(!1),re=(0,l.Z)(ne,2),se=re[0],ae=re[1],le=(0,d.useHistory)(),ce=function(){var e=(0,a.Z)(o().mark((function e(){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,K.tQ)(t,M);case 2:if(n=e.sent,!Object.keys(n).length){e.next=12;break}return e.next=6,(0,K.n7)(n,M);case 6:if(!(r=e.sent).length){e.next=12;break}return e.next=10,x(n);case 10:return e.next=12,Z(r);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){ce()}),[]),(0,u.useEffect)((function(){q((0,K.AC)(k))}),[k]),(0,u.useEffect)((0,a.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ee&&(le.push("/executed"),te(!1)),!se){e.next=9;break}return e.next=4,x(C.iS);case 4:return e.next=6,Z(C.Pu);case 6:return e.next=8,ce();case 8:ae(!1);case 9:case"end":return e.stop()}}),e)}))),[se,ee]),i().createElement("div",null,i().createElement(I.Z,{description:c.task_description,error:_,isOpen:R,selectedSystems:W,setModalOpened:A,slug:c.task_slug,title:c.task_title}),i().createElement(T.Z,{id:c.id,isOpen:U,setIsCancel:ae,setIsDelete:te,setModalOpened:V,startTime:c.start_time,status:c.status,title:c.task_title}),_?i().createElement(F.Z,{icon:E.ZP,color:"#c9190b",title:"Task cannot be displayed",text:C.eJ,error:"Error ".concat(null==_||null===(e=_.response)||void 0===e?void 0:e.status,": ").concat(null==_?void 0:_.message)}):i().createElement(i().Fragment,null,i().createElement(f.Z,null,i().createElement(y.Breadcrumb,{ouiaId:"completed-tasks-details-breadcrumb"},i().createElement(J,{to:"/executed"},"Tasks"),i().createElement(y.BreadcrumbItem,{isActive:!0},c.task_title)),i().createElement(y.Flex,{direction:{default:"column",md:"row"}},i().createElement(y.Flex,{direction:{default:"column"},flex:{default:"flex_1"}},i().createElement(y.FlexItem,null,i().createElement(b.Z,{title:c.task_title})),i().createElement(y.FlexItem,null,c.description)),i().createElement(B.Z,{data:c,flexContents:(0,C.HK)(c.task_slug,A,c.status,V),flexProps:C.Wb}))),i().createElement(p.Z,null,i().createElement(y.Card,null,i().createElement(y.Flex,{className:"completed-task-details-info-border",justifyContent:{default:"justifyContentSpaceBetween"},direction:{default:"column",md:"row"}},i().createElement(B.Z,{data:c,flexContents:C.MZ,flexProps:C.EM}))),i().createElement("br",null),i().createElement(y.Card,null,i().createElement(m.Z,{label:"".concat(c.id,"-completed-jobs"),ouiaId:"".concat(c.id,"-completed-jobs-table"),columns:S,items:k,filters:{filterConfig:[].concat((0,s.Z)(P),(0,s.Z)(j))},options:Q(Q({},C.t_),{},{exportable:Q(Q({},C.t_.exportable),{},{columns:O})}),emptyRows:(0,D.f)("jobs"),isStickyHeader:!0})))))}}}]);
//# sourceMappingURL=../sourcemaps/CompletedTaskDetails.2c6093e235d51a0d09be8413f8230460.js.map