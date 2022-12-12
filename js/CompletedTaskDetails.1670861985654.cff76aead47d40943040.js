"use strict";(self.webpackChunktasks_frontend=self.webpackChunktasks_frontend||[]).push([[292],{19694:(e,t,n)=>{t.RI={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},t.LP=n(35183).createIcon(t.RI),t.ZP=t.LP},31369:(e,t,n)=>{t.nQ={name:"InfoCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",yOffset:0,xOffset:0},t.uM=n(35183).createIcon(t.nQ),t.ZP=t.uM},97149:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ie});var r=n(4942),l=n(42982),a=n(15861),c=n(70885),s=n(87757),o=n.n(s),i=n(93264),u=n.n(i),m=n(16530),p=n(42019),d=n(14748),f=n(80123),y=n(39173),E=n(99922),v=n(84564),g=n(45697),b=n.n(g),h=n(79886),x=function(e){var t=e.alert,n=e.content;return u().createElement(E.Split,null,t?u().createElement(u().Fragment,null,u().createElement(E.SplitItem,{style:{paddingRight:"8px"}},u().createElement(v.ZP,{color:"#C9190B"})),u().createElement(E.SplitItem,{style:{paddingRight:"16px"}},u().createElement("span",{style:{color:"#C9190B"}},"Alert"))):null,u().createElement(E.SplitItem,{color:"#A30000"},n))};x.propTypes={alert:b().bool,content:b().string};const O=x;var Z=function(e,t){var n=e.system,r=e.display_name;return r?u().createElement("a",{key:"system-title-".concat(t),href:insights.chrome.isBeta()?"/beta/insights/inventory/".concat(n):"/insights/inventory/".concat(n)},r):u().createElement("span",{style:{color:"#72767B"}},"System deleted")};Z.propTypes={system:b().string,display_name:b().node};var w={title:"System name",props:{width:30},sortByProp:"display_name",renderExport:function(e){return e.display_name||"System deleted"},renderFunc:(0,h.Rg)(Z)},P={title:"Status",props:{width:10},sortByProp:"status",renderExport:function(e){return e.status}},k={title:"Message",props:{width:35},sortByFunction:function(e){return e.results.message},renderExport:function(e){return e.results.message},renderFunc:function(e,t,n){return u().createElement(O,{content:n.results.message,alert:n.results.alert||"Failure"===n.status||"Timeout"===n.status})}},j=[w,P,k];const S=[w,P,k];var T=n(83237),C=[{type:T.Y.text,label:"Name",filter:function(e,t){return e.filter((function(e){return e.display_name?e.display_name.toLowerCase().includes(t.toLowerCase()):null}))}}],I=[{type:T.Y.checkbox,label:"Status",filter:function(e,t){return e.filter((function(e){return t.includes(e.status.toLowerCase())}))},items:[{label:"Running",value:"running"},{label:"Success",value:"success"},{label:"Failure",value:"failure"},{label:"Timeout",value:"timeout"}]}],_=n(58997),F=n(12117),B=n(45713),L=n(64600),R=n(11207),M=n(23690),D=n(87462),A=n(45987),N=["href"],H=["children"],z=function(e){var t=e.href,n=(0,A.Z)(e,N);return u().createElement(m.Link,(0,D.Z)({},n,{to:t}))};z.propTypes={href:b().string};var G=function(e){var t=e.children,n=(0,A.Z)(e,H);return u().createElement(E.BreadcrumbItem,(0,D.Z)({},n,{component:z}),t)};G.propTypes={children:b().node};const Q=G;var K=n(67303),Y=n(85333),J=n(43707),W=n(76871),q=n(19694),U=n(31369),V=function(e){var t=e.severity,n=e.title;return u().createElement("span",null,"info"===t?u().createElement("span",{style:{marginRight:"8px"}},u().createElement(U.ZP,{color:"#2B9AF3"})):"low"===t?u().createElement("span",{style:{marginRight:"8px"}},u().createElement(q.ZP,{color:"#F0AB00"})):"high"===t?u().createElement("span",{style:{marginRight:"8px"}},u().createElement(v.ZP,{color:"#C9190B"})):void 0,"info"===t?u().createElement("span",{style:{color:"#002952"}},u().createElement("strong",null,n)):"low"===t?u().createElement("span",{style:{color:"#795000"}},u().createElement("strong",null,n)):"high"===t?u().createElement("span",{style:{color:"#A30000"}},u().createElement("strong",null,n)):void 0)};V.propTypes={severity:b().string,title:b().string};const X=V;var $=function(e){var t=e.color,n=e.icon,r=e.text;return u().createElement(E.Label,{color:t,icon:n,style:{marginTop:"16px",marginBottom:"4px"},className:"pf-m-compact"},r)};$.propTypes={color:b().string,icon:b().any,text:b().string};const ee=$;var te=function(e){var t=e.entry,n=t.detail,r=t.key,l=t.severity,a=t.summary,c=t.title,s=function(e,t){return u().createElement(E.Grid,{hasGutter:!0,className:"entry-detail-title"},u().createElement(E.GridItem,{span:2,className:"entry-detail-content"},e),u().createElement(E.GridItem,{xl2:5,xl:5,l:6,m:7,sm:8},"function"==typeof t?t():t))};return u().createElement(u().Fragment,null,u().createElement("div",null,"info"===l?u().createElement(ee,{color:"blue",icon:u().createElement(U.ZP,null),text:"Info"}):"low"===l?u().createElement(ee,{color:"orange",icon:u().createElement(q.ZP,null),text:"Low risk"}):"high"===l?u().createElement(ee,{color:"red",icon:u().createElement(v.ZP,null),text:"High risk"}):void 0),u().createElement("div",{className:"entry-title"},c),u().createElement("div",null,u().createElement(u().Fragment,null,s("Summary",a),null!=n&&n.remediations?s("Remediation",(function(){return n.remediations.map((function(e,t){var n="remediation-".concat(t);return u().createElement("div",{key:n},t>0?u().createElement("span",null,u().createElement("br",null)):null,u().createElement("span",{style:{fontFamily:"overpass-mono"}},"[",e.type,"] ",e.context))}))})):null,s("Key",r))))};te.propTypes={entry:b().object};const ne=te;function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ae=function(e){var t,n,l,a=(t=e.item.results.report_json.entries,n=[],l=function(e){return e.sort((function(e,t){return"high"===e.severity&&"high"!==t.severity||"low"===e.severity&&"info"===t.severity?-1:"high"===t.severity&&"high"!==e.severity||"low"===t.severity&&"info"===e.severity?1:0}))}(t),l.forEach((function(e){n.push({parent:u().createElement(X,{severity:e.severity,title:e.title}),child:u().createElement(ne,{entry:e})})})),n),s=0,o=(0,i.useState)(Object.fromEntries(Object.entries(a).map((function(e){return[(0,c.Z)(e,1)[0],Boolean(!1)]})))),m=(0,c.Z)(o,2),p=m[0],d=m[1],f=function(e,t){d(le(le({},p),{},(0,r.Z)({},t,!p[t])))};return u().createElement("div",null,u().createElement(W.TableComposable,{variant:"compact",style:{marginBottom:"30px","--pf-c-table__expandable-row--after--border-width--base":"0"}},u().createElement(W.Tbody,null,a.map((function(e,t){return u().createElement(u().Fragment,{key:t},function(e,t){var n=u().createElement(W.Tr,{key:s},u().createElement(W.Td,{expand:{rowIndex:t,isExpanded:p[t],onToggle:f}}),u().createElement(W.Td,null,e));return s+=1,n}(e.parent,t),function(e,t){var n=u().createElement(W.Tr,{className:!0===p[t]?"pf-m-expanded":null,key:s,isExpanded:!0===p[t]},u().createElement(W.Td,null),u().createElement(W.Td,null,e));return s+=1,n}(e.child,t))})))))};ae.propTypes={item:b().object};const ce=ae;function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const ie=function(){var e,t=(0,m.useParams)().id,n=(0,i.useState)(_.iS),r=(0,c.Z)(n,2),s=r[0],g=r[1],b=(0,i.useState)(_.Pu),h=(0,c.Z)(b,2),x=h[0],O=h[1],Z=(0,i.useState)(!0),w=(0,c.Z)(Z,2),P=w[0],k=w[1],T=(0,i.useState)(),D=(0,c.Z)(T,2),A=D[0],N=D[1],H=(0,i.useState)(!1),z=(0,c.Z)(H,2),G=z[0],W=z[1],q=(0,i.useState)([]),U=(0,c.Z)(q,2),V=U[0],X=U[1],$=(0,i.useState)(!1),ee=(0,c.Z)($,2),te=ee[0],ne=ee[1],re=(0,i.useState)(!1),le=(0,c.Z)(re,2),ae=le[0],se=le[1],ie=(0,i.useState)(!1),ue=(0,c.Z)(ie,2),me=ue[0],pe=ue[1],de=(0,m.useHistory)(),fe=(0,J.TE)("inventory",["inventory:*:*","inventory:*:read"]),ye=fe.hasAccess,Ee=fe.isLoading,ve=function(){var e=(0,a.Z)(o().mark((function e(){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.next=3,g(_.iS);case 3:return e.next=5,O(_.Pu);case 5:return e.next=7,(0,K.tQ)(t,N);case 7:if(n=e.sent,!Object.keys(n).length){e.next=17;break}return e.next=11,(0,K.n7)(n,N);case 11:if(!(r=e.sent).length){e.next=17;break}return e.next=15,g(n);case 15:return e.next=17,O(r);case 17:k(!1);case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){ve()}),[t]),(0,i.useEffect)((function(){X((0,K.AC)(x))}),[x]),(0,i.useEffect)((0,a.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ae&&(de.push("/executed"),se(!1)),!me){e.next=9;break}return e.next=4,g(_.iS);case 4:return e.next=6,O(_.Pu);case 6:return e.next=8,ve();case 8:pe(!1);case 9:case"end":return e.stop()}}),e)}))),[me,ae]),u().createElement("div",null,u().createElement(L.Z,{description:s.task_description,error:A,isOpen:G,selectedSystems:V,setModalOpened:W,slug:s.task_slug,title:s.task_title}),u().createElement(R.Z,{id:s.id,isOpen:te,setIsCancel:pe,setIsDelete:se,setModalOpened:ne,startTime:s.start_time,status:s.status,title:s.task_title}),A?u().createElement(B.Z,{icon:v.ZP,color:"#c9190b",title:"Task cannot be displayed",text:_.eJ,error:"Error ".concat(null==A||null===(e=A.response)||void 0===e?void 0:e.status,": ").concat(null==A?void 0:A.message)}):u().createElement(u().Fragment,null,u().createElement(f.Z,null,u().createElement(E.Breadcrumb,{ouiaId:"completed-tasks-details-breadcrumb"},u().createElement(Q,{to:"/executed"},"Tasks"),u().createElement(E.BreadcrumbItem,{isActive:!0},s.task_title)),u().createElement(E.Flex,{direction:{default:"column",md:"row"}},u().createElement(E.Flex,{direction:{default:"column"},flex:{default:"flex_1"}},u().createElement(E.FlexItem,null,u().createElement(y.Z,{title:s.task_title})),u().createElement(E.FlexItem,null,s.task_description)),u().createElement(F.Z,{data:s,flexContents:(0,_.HK)(s.task_slug,W,s.status,ne),flexProps:_.Wb}))),u().createElement(d.Z,null,u().createElement(E.Card,null,u().createElement(E.Flex,{className:"completed-task-details-info-border",justifyContent:{default:"justifyContentSpaceBetween"},direction:{default:"column",md:"row"}},u().createElement(F.Z,{data:s,flexContents:_.MZ,flexProps:_.EM}))),u().createElement("br",null),u().createElement(E.Card,null,!Ee&&ye?u().createElement(p.Z,{label:"".concat(s.id,"-completed-jobs"),ouiaId:"".concat(s.id,"-completed-jobs-table"),columns:S,items:x,filters:{filterConfig:[].concat((0,l.Z)(C),(0,l.Z)(I))},options:oe(oe({},_.t_),{},{exportable:oe(oe({},_.t_.exportable),{},{columns:j}),detailsComponent:x.some((function(e){return(0,K.HH)(e)}))?ce:void 0}),emptyRows:(0,M.f)("jobs"),isStickyHeader:!0,isTableLoading:P}):u().createElement(Y.Z,{serviceName:"Inventory"})))))}}}]);
//# sourceMappingURL=../sourcemaps/CompletedTaskDetails.1cd0cb219c85c7ac5e71f459454e6743.js.map