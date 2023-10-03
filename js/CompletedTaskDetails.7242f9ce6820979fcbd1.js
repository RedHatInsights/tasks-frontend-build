"use strict";(self.webpackChunktasks_frontend=self.webpackChunktasks_frontend||[]).push([[292],{19694:(e,t,r)=>{t.RI={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},t.LP=r(35183).createIcon(t.RI),t.ZP=t.LP},31369:(e,t,r)=>{t.nQ={name:"InfoCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",yOffset:0,xOffset:0},t.uM=r(35183).createIcon(t.nQ),t.ZP=t.uM},19545:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Ee});var n=r(4942),o=r(42982),l=r(87462),a=r(15861),s=r(70885),c=r(64687),i=r.n(c),u=r(93264),m=r.n(u),p=r(62012),d=r(42019),f=r(89376),y=r(39173),v=r(63366),E=r(84564),b=r(45697),g=r.n(b),C=r(79886),x=function(e){var t=e.alert,r=e.content;return m().createElement(v.Split,null,t?m().createElement(m().Fragment,null,m().createElement(v.SplitItem,{style:{paddingRight:"8px"}},m().createElement(E.ZP,{color:"#C9190B"})),m().createElement(v.SplitItem,{style:{paddingRight:"16px"}},m().createElement("span",{style:{color:"#C9190B"}},"Alert"))):null,m().createElement(v.SplitItem,{color:"#A30000"},r))};x.propTypes={alert:g().bool,content:g().oneOfType([g().string,g().object])};const h=x;var Z=r(52033),k=r(55140),w=function(e,t){var r,n=e.system,o=e.display_name,l=(0,k.Z)();return o?(0,Z.d)(n,o,"system-title-".concat(t),null==l||null===(r=l.isBeta)||void 0===r?void 0:r.call(l)):m().createElement("span",{style:{color:"#72767B"}},"System deleted")};w.propTypes={system:g().string,display_name:g().node};var O={title:"System name",props:{width:30},sortByProp:"display_name",renderExport:function(e){return e.display_name||"System deleted"},renderFunc:(0,C.Rg)(w)},P={title:"Status",props:{width:10},sortByProp:"status",renderExport:function(e){return e.status}},S={title:"Message",props:{width:35},sortByFunction:function(e){return e.results.message},renderExport:function(e){return e.results.message},renderFunc:function(e,t,r){return m().createElement(h,{content:r.results.message,alert:r.results.alert||"Failure"===r.status||"Timeout"===r.status})}},_=[O,P,S];const j=[O,P,S];var L=r(83237),B=[{type:L.Y.text,label:"Name",filter:function(e,t){return e.filter((function(e){return e.display_name?e.display_name.toLowerCase().includes(t.toLowerCase()):null}))}}],T=[{type:L.Y.checkbox,label:"Status",filter:function(e,t){return e.filter((function(e){return t.includes(e.status.toLowerCase())}))},items:[{label:"Running",value:"running"},{label:"Success",value:"success"},{label:"Failure",value:"failure"},{label:"Timeout",value:"timeout"}]}],I=r(58997),M=r(12117),F=r(45713),A=r(64600),R=r(11207),D=r(23690),N=r(45987),H=r(92397),z=["href"],G=["children"],J=function(e){var t=e.href,r=(0,N.Z)(e,z);return m().createElement(H.Z,(0,l.Z)({},r,{to:t}))};J.propTypes={href:g().string};var Q=function(e){var t=e.children,r=(0,N.Z)(e,G);return m().createElement(v.BreadcrumbItem,(0,l.Z)({},r,{component:J}),t)};Q.propTypes={children:g().node};const W=Q;var K=r(67303),Y=r(85333),q=r(43707),U=r(13678),V=r(19694),X=r(31369);const $={converttorhelpreanalysisSeverityMap:{error:{text:"Inhibitor",icon:m().createElement(E.ZP,{color:"#C9190B"}),titleColor:"#A30000",severityColor:"red",severityLevel:2500},overridable:{text:"Overridable",icon:m().createElement(E.ZP,{color:"#C9190B"}),titleColor:"#A30000",severityColor:"red",severityLevel:2e3},skip:{text:"Skipped",icon:m().createElement(E.ZP,{color:"#C9190B"}),titleColor:"#A30000",severityColor:"red",severityLevel:1500},warning:{text:"Warning",icon:m().createElement(V.ZP,{color:"#F0AB00"}),titleColor:"#795000",severityColor:"orange",severityLevel:1e3},info:{text:"Info",icon:m().createElement(X.ZP,{color:"#2B9AF3"}),titleColor:"#002952",severityColor:"blue",severityLevel:500}},converttorhelpreanalysisstageSeverityMap:{error:{text:"Inhibitor",icon:m().createElement(E.ZP,{color:"#C9190B"}),titleColor:"#A30000",severityColor:"red",severityLevel:2500},overridable:{text:"Overridable",icon:m().createElement(E.ZP,{color:"#C9190B"}),titleColor:"#A30000",severityColor:"red",severityLevel:2e3},skip:{text:"Skipped",icon:m().createElement(E.ZP,{color:"#C9190B"}),titleColor:"#A30000",severityColor:"red",severityLevel:1500},warning:{text:"Warning",icon:m().createElement(V.ZP,{color:"#F0AB00"}),titleColor:"#795000",severityColor:"orange",severityLevel:1e3},info:{text:"Info",icon:m().createElement(X.ZP,{color:"#2B9AF3"}),titleColor:"#002952",severityColor:"blue",severityLevel:500}},leapppreupgradeSeverityMap:{high:{text:"High risk",icon:m().createElement(E.ZP,{color:"#C9190B"}),titleColor:"#A30000",severityColor:"red",severityLevel:1500},low:{text:"Low risk",icon:m().createElement(V.ZP,{color:"#F0AB00"}),titleColor:"#795000",severityColor:"orange",severityLevel:1e3},info:{text:"Info",icon:m().createElement(X.ZP,{color:"#2B9AF3"}),titleColor:"#002952",severityColor:"blue",severityLevel:500}}};var ee=function(e){var t=e.severity,r=e.taskConstantMapper,n=e.title;return m().createElement("span",null,m().createElement("span",{style:{marginRight:"8px"}},$[r][t.toLowerCase()].icon),m().createElement("span",{style:{color:$[r][t.toLowerCase()].titleColor}},m().createElement("strong",null,n)))};ee.propTypes={severity:g().string,taskConstantMapper:g().string,title:g().string};const te=ee;var re=function(e){var t=e.color,r=e.icon,n=e.text;return m().createElement(v.Label,{color:t,icon:r,style:{marginTop:"16px",marginBottom:"4px"},className:"pf-m-compact"},n)};re.propTypes={color:g().string,icon:g().any,text:g().string};const ne=re;var oe=function(e){var t,r=e.entry,n=e.taskConstantMapper,o=r.detail,l=r.key,a=r.severity,s=r.summary,c=r.title,i=function(e,t){return m().createElement(v.Grid,{hasGutter:!0,className:"entry-detail-title"},m().createElement(v.GridItem,{span:2,className:"entry-detail-content"},e),m().createElement(v.GridItem,{xl2:5,xl:5,l:6,m:7,sm:8,style:{whiteSpace:"pre-line"}},"function"==typeof t?t():t))};return m().createElement(m().Fragment,null,m().createElement("div",null,m().createElement(ne,{color:$[n][a.toLowerCase()].severityColor,icon:$[n][a.toLowerCase()].icon,text:$[n][a.toLowerCase()].text})),m().createElement("div",{className:"entry-title"},c),m().createElement("div",null,m().createElement(m().Fragment,null,i("Summary",s),null!=o&&null!==(t=o.diagnosis)&&void 0!==t&&t.context?i("Diagnosis",(function(){return m().createElement("div",null,m().createElement("span",null,o.diagnosis.context))})):null,null!=o&&o.remediations?i("Remediation",(function(){return o.remediations.map((function(e,t){var r="remediation-".concat(t);return m().createElement("div",{key:r},t>0?m().createElement("span",null,m().createElement("br",null)):null,m().createElement("span",{style:{fontFamily:"overpass-mono"}},"[",e.type,"] ",e.context))}))})):null,i("Key",l))))};oe.propTypes={entry:g().object,taskConstantMapper:g().string};const le=oe;var ae=function(e,t,r){var n,o=r.toLowerCase().replace(/-/g,""),l=[];return t?(n=function(e,t){return e.sort((function(e,r){var n=$[t][e.severity.toLowerCase()].severityLevel,o=$[t][r.severity.toLowerCase()].severityLevel;return n>o?-1:o>n?1:0}))}(e,"".concat(o,"SeverityMap")),n.forEach((function(e){l.push({parent:m().createElement(te,{severity:e.severity,title:e.title,taskConstantMapper:"".concat(o,"SeverityMap")}),child:m().createElement(le,{entry:e,taskConstantMapper:"".concat(o,"SeverityMap")})})}))):l=(n=e)[0],l},se=r(37015);function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ue=function(e){var t,r=e.rowPairs,o=e.isReportJson,l=0,a=(0,u.useState)(Object.fromEntries(Object.entries(r).map((function(e){return[(0,s.Z)(e,1)[0],Boolean(!1)]})))),c=(0,s.Z)(a,2),i=c[0],p=c[1],d=function(e,t){p(ie(ie({},i),{},(0,n.Z)({},t,!i[t])))};return o?r.map((function(e,t){return m().createElement(m().Fragment,{key:t},function(e,t){var r=m().createElement(U.Tr,{key:l},m().createElement(U.Td,{expand:{rowIndex:t,isExpanded:i[t],onToggle:d}}),m().createElement(U.Td,null,e));return l+=1,r}(e.parent,t),function(e,t){var r=m().createElement(U.Tr,{className:!0===i[t]?"pf-m-expanded":null,key:l,isExpanded:!0===i[t]},m().createElement(U.Td,null),m().createElement(U.Td,null,e));return l+=1,r}(e.child,t))})):m().createElement(v.CodeBlock,{style:(t={},(0,n.Z)(t,se.c_code_block__header_BorderBottomColor.name,se.global_palette_white),(0,n.Z)(t,"backgroundColor","#ffffff"),t)},m().createElement(v.CodeBlockCode,null,r))};ue.propTypes={isReportJson:g().bool,rowPairs:g().array};const me=ue;var pe=function(e){var t=e.taskSlug,r=e.item,n=!!r.results.report_json,o=r.results.report_json?ae(r.results.report_json.entries,n,t):ae([r.results.report],n,t);return m().createElement("div",null,m().createElement(U.TableComposable,{variant:"compact",style:{marginBottom:"30px","--pf-c-table__expandable-row--after--border-width--base":"0"}},m().createElement(U.Tbody,null,m().createElement(me,{rowPairs:o,isReportJson:n}))))};pe.propTypes={item:g().object,taskSlug:g().string};const de=pe;var fe=r(98773);function ye(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ve(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ye(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const Ee=function(){var e,t=(0,p.useParams)().id,r=(0,u.useState)(I.iS),n=(0,s.Z)(r,2),c=n[0],b=n[1],g=(0,u.useState)(I.Pu),C=(0,s.Z)(g,2),x=C[0],h=C[1],Z=(0,u.useState)(!0),w=(0,s.Z)(Z,2),O=w[0],P=w[1],S=(0,u.useState)(),L=(0,s.Z)(S,2),N=L[0],H=L[1],z=(0,u.useState)(!1),G=(0,s.Z)(z,2),J=G[0],Q=G[1],U=(0,u.useState)([]),V=(0,s.Z)(U,2),X=V[0],$=V[1],ee=(0,u.useState)(!1),te=(0,s.Z)(ee,2),re=te[0],ne=te[1],oe=(0,u.useState)(!1),le=(0,s.Z)(oe,2),ae=le[0],se=le[1],ce=(0,u.useState)(!1),ie=(0,s.Z)(ce,2),ue=ie[0],me=ie[1],pe=(0,k.Z)(),ye=(0,q.TE)("inventory",["inventory:hosts:*","inventory:hosts:read"]),Ee=ye.hasAccess,be=ye.isLoading,ge=(0,fe.Z)(),Ce=function(){var e=(0,a.Z)(i().mark((function e(){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),e.next=3,b(I.iS);case 3:return e.next=5,h(I.Pu);case 5:return e.next=7,(0,K.tQ)(t,H);case 7:if(r=e.sent,!Object.keys(r).length){e.next=17;break}return e.next=11,(0,K.n7)(r,H);case 11:if(!(n=e.sent).length){e.next=17;break}return e.next=15,b(r);case 15:return e.next=17,h(n);case 17:P(!1);case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,u.useEffect)((function(){Ce()}),[t]),(0,u.useEffect)((function(){c&&pe.updateDocumentTitle("".concat(c.task_title," - Tasks | Red Hat Insights"))}),[pe,c]),(0,u.useEffect)((function(){$((0,K.AC)(x))}),[x]),(0,u.useEffect)((function(){ae&&(ge("/executed"),se(!1)),ue&&(Ce(),me(!1))}),[ue,ae]);var xe=(0,u.useMemo)((function(){return function(e){return m().createElement(de,(0,l.Z)({taskSlug:c.task_slug},e))}}),[x]);return m().createElement("div",null,m().createElement(A.Z,{description:c.task_description,error:N,isOpen:J,selectedSystems:X,setModalOpened:Q,slug:c.task_slug,title:c.task_title}),m().createElement(R.Z,{id:c.id,isOpen:re,setIsCancel:me,setIsDelete:se,setModalOpened:ne,startTime:c.start_time,status:c.status,title:c.task_title}),N?m().createElement(F.Z,{icon:E.ZP,color:"#c9190b",title:"Task cannot be displayed",text:I.eJ,error:"Error ".concat(null==N||null===(e=N.response)||void 0===e?void 0:e.status,": ").concat(null==N?void 0:N.message)}):m().createElement(m().Fragment,null,m().createElement(f.Z,null,m().createElement(v.Breadcrumb,{ouiaId:"completed-tasks-details-breadcrumb"},m().createElement(W,{to:"/executed"},"Tasks"),m().createElement(v.BreadcrumbItem,{isActive:!0},c.task_title)),m().createElement(v.Flex,{direction:{default:"column",md:"row"}},m().createElement(v.Flex,{direction:{default:"column"},flex:{default:"flex_1"}},m().createElement(v.FlexItem,null,m().createElement(y.Z,{title:c.task_title})),m().createElement(v.FlexItem,null,c.task_description)),m().createElement(M.Z,{data:c,flexContents:(0,I.HK)(c.task_slug,Q,c.status,ne),flexProps:I.Wb}))),m().createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section"},m().createElement(v.Card,null,m().createElement(v.Flex,{className:"completed-task-details-info-border",justifyContent:{default:"justifyContentSpaceBetween"},direction:{default:"column",md:"row"}},m().createElement(M.Z,{data:c,flexContents:I.MZ,flexProps:I.EM}))),m().createElement("br",null),m().createElement(v.Card,null,!be&&Ee?m().createElement(d.Z,{label:"".concat(c.id,"-completed-jobs"),ouiaId:"".concat(c.id,"-completed-jobs-table"),columns:j,items:x,filters:{filterConfig:[].concat((0,o.Z)(B),(0,o.Z)(T))},options:ve(ve({},I.t_),{},{exportable:ve(ve({},I.t_.exportable),{},{columns:_}),detailsComponent:x.some((function(e){return(0,K.HH)(e)}))?xe:void 0}),emptyRows:(0,D.f)("jobs"),isStickyHeader:!0,isTableLoading:O}):m().createElement(Y.Z,{serviceName:"Inventory"})))))}}}]);