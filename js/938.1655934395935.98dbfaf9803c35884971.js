(self.webpackChunktasks_frontend=self.webpackChunktasks_frontend||[]).push([[938],{12117:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(87462),i=r(93264),o=r.n(i),a=r(99922),l=r(45697),s=r.n(l),c=function(e){return o().createElement(a.FlexItem,{className:e.classname},e.children||e)},u=function(e){var t=e.data,r=e.flexContents,i=e.flexProps;return r.map((function(e){return o().createElement(a.Flex,(0,n.Z)({key:e.match},i),Array.isArray(e.children)?e.children.map((function(e){return c(e)})):c(e.children),e.match?e.renderFunc?c(e.renderFunc(e.match.map((function(e){return t[e]})))):c(t[e.match]):null)}))};u.propTypes={data:s().any,flexContents:s().array,flexProps:s().object};const f=u},65811:(e,t,r)=>{"use strict";r.d(t,{q:()=>o});var n=r(30319),i=r(83215),o=function(e){var t;t=(0,i.wN)(e),(0,n.bh)().dispatch(t)}},79886:(e,t,r)=>{"use strict";r.d(t,{Ws:()=>f,og:()=>p,jj:()=>d,Rg:()=>b,dY:()=>m,$s:()=>h,eV:()=>g});var n=r(87462),i=r(42982),o=r(70885),a=r(93264),l=r.n(a),s=r(30381),c=r.n(s),u=function(e){return("null"===e||!e)&&"Running"},f=function(e){return u(e)||c().utc(e).format("DD MMM YYYY, HH:mm UTC")},p=function(e){var t=(0,o.Z)(e,2),r=t[0],n=t[1];return u(n)||"".concat(f(n)," (").concat(c().duration(c()(f(n),"DD MMM YYYY, HH:mm").diff(c()(f(r),"DD MMM YYYY HH:mm"))).asHours()," hours)")},d=function(e){return(0,i.Z)(new Set(e))},b=function(e,t){return function(r,i,o){return l().createElement(e,(0,n.Z)({},o,t))}},m=function(e,t,r){return t.sort((function(t,n){return"asc"===r?"number"==typeof t[e]?t[e]-n[e]:String(t[e]).localeCompare(String(n[e])):"number"==typeof t[e]?-t[e]+n[e]:-String(t[e]).localeCompare(String(n[e]))}))},h=function e(t,r,n){var i=r.split("."),o=i.shift();return void 0!==t[o]?i.length>0?e(t[o],i.join("."),n):t[o]:n},g=function(e){return e.split(/[-_\W]+/g).map((function(e){return e.trim()})).map((function(e){return e[0].toUpperCase()+e.substring(1)})).join("")}},24423:(e,t,r)=>{"use strict";r.d(t,{Z:()=>he});var n=r(87462),i=r(4942),o=r(93264),a=r.n(o),l=r(45697),s=r.n(l),c=r(99922),u=r(28251),f=r(3962),p=r(65550);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=function(e){var t,r;return e.key||(null===(t=e.original)||void 0===t?void 0:t.toLowerCase())||(null===(r=e.sortByProp)||void 0===r?void 0:r.toLowerCase())},h=function(e,t,r){return t.map((function(t){return{title:t.renderFunc?t.renderFunc(void 0,void 0,e,r):e[m(t)]}}))};const g=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=null!=r&&r.filter?r.filter(e):e,i=null!=r&&r.sorter?r.sorter(n):n,o=null!=r&&r.paginator?null==r?void 0:r.paginator(n):i,a=o.map((function(e,r){return h(e,t,r)})),l=null!=r&&r.pagination?b(b({},r.pagination),{},{itemCount:n.length}):void 0;return{tableProps:{rows:a},toolbarProps:{pagination:l}}};var j=r(42982),v=r(15861),y=r(70885),O=r(71002),P=r(87757),F=r.n(P),w=r(45987),k=r(43144),C=r(15671),Z=r(83237),x=function(e){return e.split(" ").join("").toLowerCase()};const E=(0,k.Z)((function e(t){var r=this;(0,C.Z)(this,e),(0,i.Z)(this,"buildFilterFilterString",(function(e,t){var r=e.type,n=e.filterString;if("hidden"!==r&&!t)return[];switch(r){case Z.Y.text:return[n(t)];case Z.Y.checkbox:return t.map((function(e){return n(e)}));case Z.Y.group:return n(t);case"hidden":return n();default:return[]}})),(0,i.Z)(this,"combineFilterStrings",(function(e){var t=e.map((function(e){return e.length})).filter((function(e){return e>0})).length>=2;return e.map((function(e){return e.join(" or ")})).join(t?" and ":"")})),(0,i.Z)(this,"buildFilterString",(function(e){var t=r.config.map((function(t){return r.buildFilterFilterString(t,e[x(t.label)])})).filter((function(e){return e.length>0}));return r.combineFilterStrings(t)})),this.filterConfig=t,this.config=this.filterConfig.config}));var S=function(e){return function(t){return String(t.value)===String(e)}};const D=(0,k.Z)((function e(t){var r=this;(0,C.Z)(this,e),(0,i.Z)(this,"textFilterChip",(function(e,t){return t&&""!==t?{category:e,chips:[{name:t}]}:null})),(0,i.Z)(this,"checkboxFilterChip",(function(e,t){return t&&t.length>0?{category:e,chips:t.map((function(t){return{name:r.filterConfig.labelForValue(t,e)}}))}:null})),(0,i.Z)(this,"radioFilterChip",(function(e,t){return t&&""!==t?{category:e,chips:[{name:r.filterConfig.labelForValue(t,e)}]}:null})),(0,i.Z)(this,"groupFilterChip",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,n=Object.keys(t).flatMap((function(e){var n=r.items.find(S(e));return Object.keys(t[e]).map((function(r){return t[e][r]?[].concat((0,j.Z)(n.groupSelectable?[{label:n.label,value:n.value}]:[]),(0,j.Z)((null==n?void 0:n.items)||[])).find(S(r)):null}))})).filter((function(e){return!!e}));return t&&n.length>0?{category:e,chips:n.map((function(e){return{name:e.label}}))}:null})),(0,i.Z)(this,"chipFor",(function(e,t){var n=r.filterConfig.getCategoryForLabel(e),i=n||{label:e,type:null},o=i.label;switch(i.type){case Z.Y.text:return r.textFilterChip(o,t);case Z.Y.checkbox:return r.checkboxFilterChip(o,t);case Z.Y.radio:return r.radioFilterChip(o,t);case Z.Y.group:return r.groupFilterChip(o,t,n);default:return null}})),(0,i.Z)(this,"chipsFor",(function(e){return Object.keys(e).map((function(t){return r.chipFor(t,e[t])})).filter((function(e){return!!e}))})),this.filterConfig=t,this.config=this.filterConfig.config}));function _(e){var t=function(e,t){if("object"!==(0,O.Z)(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==(0,O.Z)(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===(0,O.Z)(t)?t:String(t)}function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var z=function(e){return"Filter by ".concat(e.toLowerCase())};const V=(0,k.Z)((function e(t){var r=this;(0,C.Z)(this,e),(0,i.Z)(this,"chipBuilder",null),(0,i.Z)(this,"filterBuilder",null),(0,i.Z)(this,"addConfigItem",(function(e){return r.config=r.config.filter((function(t){return t.label!==e.label})).concat(e)})),(0,i.Z)(this,"getChipBuilder",(function(e){return e&&(r.config=e),r.chipBuilder=r.chipBuilder?r.chipBuilder:new D(r)})),(0,i.Z)(this,"getFilterBuilder",(function(e){return e&&(r.config=e),r.filterBuilder=r.filterBuilder?r.filterBuilder:new E(r)})),(0,i.Z)(this,"toTextFilterConfig",(function(e,t,r){return{type:Z.Y.text,label:e.label,placeholder:z(e.label),id:x(e.label),filterValues:(0,i.Z)({value:r},e.event||"onChange",(function(r,n){t(x(e.label),n)}))}})),(0,i.Z)(this,"toCheckboxFilterConfig",(function(e,t,r){return{type:Z.Y.checkbox,label:e.label,placeholder:z(e.label),id:x(e.label),filterValues:{value:r,items:e.items,onChange:function(r,n){t(x(e.label),n)}}}})),(0,i.Z)(this,"toRadioFilterConfig",(function(e,t,r){return{type:Z.Y.radio,label:e.label,placeholder:z(e.label),id:x(e.label),filterValues:{value:r,items:e.items,onChange:function(r,n){t(x(e.label),n)}}}})),(0,i.Z)(this,"toGroupedFilterConfig",(function(e,t,r){return{type:Z.Y.group,label:e.label,id:x(e.label),className:e.className,filterValues:{selected:r,onChange:function(r,n){t(x(e.label),n)},groups:e.items.map((function(e){return B(B({},e),{},{type:"checkbox",items:e.items.map((function(e){return B(B({},e),{},{type:"checkbox"})}))})}))}}})),(0,i.Z)(this,"toFilterConfigItem",(function(e,t,n){switch(e.type){case Z.Y.text:return r.toTextFilterConfig(e,t,n);case Z.Y.checkbox:return r.toCheckboxFilterConfig(e,t,n);case Z.Y.radio:return r.toRadioFilterConfig(e,t,n);case Z.Y.group:return r.toGroupedFilterConfig(e,t,n);default:return null}})),(0,i.Z)(this,"buildConfiguration",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;return B(B({},n),{},{items:(i||r.config).map((function(n){return r.toFilterConfigItem(n,e,t[x(n.label)])})).filter((function(e){return!!e}))})})),(0,i.Z)(this,"defaultValueForFilter",(function(e){switch(e.type){case Z.Y.text:return"";case Z.Y.checkbox:return[];case"hidden":return e.default||!1;default:return}})),(0,i.Z)(this,"initialDefaultState",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return(t||r.config).reduce((function(t,n){var i=x(n.key||n.label),o=e[i]||r.defaultValueForFilter(n);return t[i]=o||void 0,t}),{})})),(0,i.Z)(this,"categoryLabelForValue",(function(e){var t=r.config.filter((function(t){return!!t.items&&t.items.map((function(e){return e.value})).includes(e)}))[0];return t?t.label:e})),(0,i.Z)(this,"getCategoryForLabel",(function(e){return r.config.filter((function(t){return x(t.key||t.label)===x(e)}))[0]||{}})),(0,i.Z)(this,"getItemByLabelOrValue",(function(e,t){var n=r.getCategoryForLabel(t),i=((n.type!==Z.Y.group?n.items:n.items.flatMap((function(e){return e.items.map((function(t){return B(B({},t),{},{parentValue:e.value})}))})))||[]).filter((function(t){return t.value===e||t.label===e}));return 1===i.length?i[0]:i.length>1?(console.info("Multiple items found for ".concat(e," in ").concat(t,"! Returning first one.")),i[0]):void console.info("No item found for "+e+" in ",t)})),(0,i.Z)(this,"labelForValue",(function(e,t){var n=r.getItemByLabelOrValue(e,t);return n?n.label:e})),(0,i.Z)(this,"valueForLabel",(function(e,t){var n=r.getItemByLabelOrValue(e,t);return n?n.value:e})),(0,i.Z)(this,"applyFilterToObjectArray",(function(e,t){var n=(0,j.Z)(e);return Object.keys(t).forEach((function(e){var i=r.getCategoryForLabel(e),o=t[e];i&&o&&(o.length>0||"hidden"===i.type&&"boolean"==typeof o)&&(n=i.filter(n,o))})),n})),(0,i.Z)(this,"removeFilterFromFilterState",(function(e,t){return"string"==typeof e?"":e.filter((function(e){return e!==t}))})),(0,i.Z)(this,"removeFilterFromGroupFilterState",(function(e,t,r){var n=e[r.parentValue],o=r.value,a=(n[o],(0,w.Z)(n,[o].map(_)));return B(B({},e),{},(0,i.Z)({},r.parentValue,a))})),(0,i.Z)(this,"removeFilterWithChip",(function(e,t){var n=e.category,o=e.chips[0].name,a=r.getItemByLabelOrValue(o,n),l=a?a.value:o,s=x(n),c=t[s],u=(r.getCategoryForLabel(n).type===Z.Y.group?r.removeFilterFromGroupFilterState:r.removeFilterFromFilterState)(c,l,a);return B(B({},t),{},(0,i.Z)({},s,u))})),this.config=t}));var I=function(e){var t=e.isChecked,r=e.setActiveFilter;return a().createElement(c.Switch,{"aria-label":"selected-filter-swtich",id:"selected-filter-swtich",label:"Selected only",isChecked:t,onChange:function(){return r("selected",!t)}})};I.propTypes={isChecked:s().bool,setActiveFilter:s().func};const T=I,A=function(e){var t=e.setActiveFilter,r=e.activeFilters,n=!!e.selectedFilter,i={type:"hidden",label:"selectFilter",key:"selected",default:!0,filter:function(e,t){return e.filter((function(e){var r;return(null==e||null===(r=e.rowProps)||void 0===r?void 0:r.selected)===t}))}},o=!0===r.selected;return n?{filterItem:i,toolbarProps:{dedicatedAction:a().createElement(T,{setActiveFilter:t,isChecked:o})}}:{}};function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var R=function(e){return Object.values(e).filter((function(e){return(0,O.Z)(e)===Object?Object.values(e).length>0:(0,O.Z)(e)===Array?e.length>0:!!e}))},N=new V([]),H=function(e,t){return"function"==typeof e?e(t):e};const U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.filters,r=e.selectedFilter,n=e.onDeleteFilter,a=!!t,l=t||{},s=l.filterConfig,c=void 0===s?[]:s,u=l.activeFilters,f=(0,o.useState)({}),p=(0,y.Z)(f,2),d=p[0],b=p[1],m=H(u,d),h=function(e,t){b((function(r){return M(M({},r),{},(0,i.Z)({},e,t))}))},g=function(e){N.addConfigItem(e),b(N.initialDefaultState(d))},O=function(){return b(N.initialDefaultState())},P=function(e){return b(N.removeFilterWithChip(e,d))},w=function(){var e=(0,v.Z)(F().mark((function e(t,r){var i,o=arguments;return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.next=3,i;case 3:if(!e.sent){e.next=7;break}O(),e.next=8;break;case 7:P(r[0]);case 8:n&&n(r,i);case 9:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),k=function(e){return N.applyFilterToObjectArray(e,d)},C=A({activeFilters:d,setActiveFilter:h,selectedFilter:r}),Z=C.toolbarProps,x=C.filterItem,E=(0,o.useMemo)((function(){return R(d)}),[d]),S=[].concat((0,j.Z)(c),(0,j.Z)(x?[x]:[]));return(0,o.useEffect)((function(){return N.config=[],S.filter((function(e){return!!e})).forEach(g),b(N.initialDefaultState(m||[]),c),function(){N.config=[]}}),[JSON.stringify(m)]),a?{filter:k,selectedFilterToolbarProps:Z,toolbarProps:{filterConfig:N.buildConfiguration(h,d,{},S),activeFiltersConfig:{filters:N.getChipBuilder(S).chipsFor(d),onDelete:w}},setActiveFilter:h,activeFilters:d,activeFilterValues:E,addConfigItem:g,filterConfigBuilder:N,filterString:function(){return N.getFilterBuilder(S).buildFilterString(d)}}:{}};function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.perPage,r=void 0===t?10:t,n=!1!==(null==e?void 0:e.pagination),i=(0,o.useState)({perPage:r,page:1}),a=(0,y.Z)(i,2),l=a[0],s=a[1],c=function(e){return s(q(q({},l),e))},u=function(e,t){return c(q(q({},l),{},{page:t}))},f=function(e,t){return c({page:1,perPage:t})},p=function(e){var t=l.page,r=l.perPage,n=(t-1)*r,i=n+r;return e.slice(n,i)},d=function(e){var t=e<0?l.page+e:e;c({page:t>0?t:1})};return n?{paginator:p,setPage:d,toolbarProps:{pagination:q(q({},l),{},{onSetPage:u,onPerPageSelect:f})}}:{}};var K=r(79886),J={csv:"text/csv",json:"application/json"},$=function(e){return"compliance-export-"+(new Date).toISOString()+"."+e},Q=function(e){return"data:".concat(J[e],";charset=utf-8")},X=function(e,t){var r=document.createElement("a");r.href=e,r.download=t,r.click()},ee=function(e,t){var r=t.exportKey,n=t.renderExport,i=r?(0,K.$s)(e,r):e;return n?n(i):i},te=function(e){var t=e.items,r=e.columns,n=[r.map((function(e){return e.original||e.title})).join(",")].concat((0,j.Z)(t.map((function(e){return r.map((function(t){return'"'.concat(ee(e,t),'"')})).join(",")}))));return encodeURI("".concat(Q("csv"),",").concat(n.join("\n")))},re=function(e){var t=e.items,r=e.columns,n=t.map((function(e){return r.reduce((function(t,r){var n=(0,K.eV)(r.original||r.title),i=ee(e,r);return t[n]=i,t}),{})}));return encodeURI("".concat(Q("json"),",").concat(JSON.stringify(n)))},ne=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e&&e.apply(void 0,r)},ie=function(e){var t=e.exporter,r=e.columns,n=void 0===r?[]:r,i=e.isDisabled,o=void 0!==i&&i,a=e.onStart,l=e.onComplete,s=e.onError,c=n.filter((function(e){return!1!==e.export&&(e.exportKey||e.renderExport)})),u=function(){var e=(0,v.Z)(F().mark((function e(r){var n,i;return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ne(a),e.next=3,t().then((function(e){return ne(l,e),e})).catch((function(e){return ne(s,e)}));case 3:if(n=e.sent,i="csv"===r?te:re,!n){e.next=9;break}return e.abrupt("return",X(i({items:n,columns:c}),$(r)));case 9:return console.info("No items returned for export"),e.abrupt("return");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{toolbarProps:{exportConfig:{isDisabled:o,onSelect:function(e,t){return u(t)}}}}},oe=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=null==r?void 0:r.exportable,i="object"===(0,O.Z)(r.exportable)?r.exportable:{},o=i.columns,a=i.onStart,l=i.onComplete,s=(o||t).filter((function(e){return t.includes(e)})),c=ie({exporter:function(){return Promise.resolve(e)},columns:s,isDisabled:0===e.length,onStart:a,onComplete:l});return n?c:{}};function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function le(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var se=function(e){return e.map((function(e){return le(le({},e),function(e){return e.sortByProp||e.sortByFunction}(e)?{transforms:(0,K.jj)([].concat((0,j.Z)((null==e?void 0:e.transforms)||[]),[u.sortable]))}:{})}))},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return("function"==typeof e.onSelect||e.hasRadioSelect?1:0)+(void 0!==e.detailsComponent)},ue=function(e,t,r){var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(0,o.useState)(t.sortBy||{index:0,direction:"asc"}),n=(0,y.Z)(r,2),i=n[0],a=n[1],l=function(e,t,r){a({index:t,direction:r})},s=e[i.index-ce(t)],c=function(e){return(0,K.dY)((null==s?void 0:s.sortByProp)||(null==s?void 0:s.sortByFunction),e,i.direction)};return{sorter:c,tableProps:{onSort:l,sortBy:i,cells:se(e)}}}(t,r),i=n.tableProps,a=n.sorter;return{tableProps:le(le({},i),{},{sortBy:e.length>0?i.sortBy:void 0}),sorter:a}};function fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function pe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var de=function(e,t,r){var n=t?t(e):e;return r?r(n):n};function be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var me=function(e){var t=e.label,r=e.ouiaId,o=e.items,l=void 0===o?[]:o,s=e.columns,d=void 0===s?[]:s,b=e.filters,m=void 0===b?[]:b,h=e.options,j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=G(r),i=n.toolbarProps,o=n.setPage,a=n.paginator,l=U(pe(pe({},r),{},{setPage:o})),s=l.toolbarProps,c=l.filter,u=l.selectedFilterToolbarProps,f=ue(e,t,r),p=f.tableProps,d=f.sorter,b=oe(de(e,c,d),t,r).toolbarProps,m=g(e,t,{pagination:null==i?void 0:i.pagination,paginator:a,filter:c,sorter:d}),h=m.toolbarProps,j=m.tableProps,v=pe(pe(pe(pe(pe({},i),s),u),h),b),y=pe(pe({cells:t},j),p);return{toolbarProps:v,tableProps:y}}(l,d,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?be(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):be(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({filters:m},void 0===h?{}:h)),v=j.toolbarProps,y=j.tableProps;return a().createElement(a().Fragment,null,a().createElement(f.Z,v),a().createElement(u.Table,(0,n.Z)({"aria-label":t,ouiaId:r},y),a().createElement(u.TableHeader,null),a().createElement(u.TableBody,null)),a().createElement(p.Z,{isFooter:!0,results:-1,selected:-1},a().createElement(c.Pagination,{variant:c.PaginationVariant.bottom})))};me.propTypes={label:s().string,ouiaId:s().string,items:s().array.isRequired,columns:s().array.isRequired,filters:s().object,options:s().object,toolbarProps:s().object};const he=me},22271:(e,t,r)=>{"use strict";r.d(t,{Qv:()=>n,bK:()=>i});var n=[{title:"taskA",id:1,start:"2022-04-21T10:10:00",end:"null",run_date_time:"Running",initiated_by:"Michael",status:"running",system_count:10},{title:"taskB",id:2,start:"2022-04-20T10:10:00",end:"2022-04-20T11:10:00",run_date_time:"20 Apr 2022, 11:10 UTC",initiated_by:"Michael",status:"complete",system_count:5}],i=[{id:82,display_name:"host01.example.com",host_id:"00112233-4455-6677-8899aabbccddeeff",message:"Vulnerability found.",status:"completed"},{id:83,display_name:"host02.example.com",host_id:"00112233-4455-6677-8899aabbccddeefg",message:"No vulnerability found.",status:"completed"},{id:84,display_name:"host03.example.com",host_id:"00112233-4455-6677-8899aabbccddeefh",message:"No vulnerability found.",status:"completed"},{id:85,display_name:"host04.example.com",host_id:"00112233-4455-6677-8899aabbccddeefi",message:"Vulnerability found.",status:"completed"},{id:86,display_name:"host05.example.com",host_id:"00112233-4455-6677-8899aabbccddeefj",message:"Vulnerability found.",status:"completed"},{id:87,display_name:"host06.example.com",host_id:"00112233-4455-6677-8899aabbccddeefk",message:"No vulnerability found.",status:"completed"}]},34105:(e,t,r)=>{"use strict";r.d(t,{Hu:()=>v,HK:()=>D,Wb:()=>E,MZ:()=>S,EM:()=>Z,Fd:()=>C,kL:()=>k,LP:()=>I,fH:()=>y,WP:()=>j,Rl:()=>w,j7:()=>z,Jc:()=>x,EZ:()=>F,t_:()=>V});var n=r(42982),i=r(93264),o=r.n(i),a=r(99922),l=r(39173),s=r(65811),c=r(79886),u=r(50470),f=r(45697),p=r.n(f),d=function(e){var t=e.body,r=e.content,n=e.footer,i=e.header,l=e.label;return o().createElement("div",null,o().createElement(a.Popover,{"aria-label":l,headerContent:i,bodyContent:t,footerContent:n},r))};d.propTypes={body:p().any,content:p().any,footer:p().any,header:p().any,label:p().string};const b=d;var m=r(55795),h=r(35664),g=new Date,j="/api/tasks/v1",v="/task",y="/system",O="https://access.redhat.com/documentation/en-us/red_hat_insights/",P="".concat(g.getFullYear(),"/html/"),F=["Available tasks","Completed tasks"],w=["Available tasks cannot be displayed at this time. Please retry and if the problem persists contact your system administrator.",""],k="No available tasks",C=["This is a temporary message while we wait for mock-ups"],Z={direction:{default:"column"}},x={flex:{default:"flex_1"},alignItems:{default:"alignItemsCenter"},flexWrap:{default:"nowrap"}},E={align:{default:"alignRigt"}},S=[{children:o().createElement("b",null,"Systems"),match:["system_count"]},{children:o().createElement("b",null,"Run start"),match:["start"],renderFunc:function(e){return c.Ws.apply(void 0,(0,n.Z)(e))}},{children:o().createElement("b",null,"Run end"),match:["start","end"],renderFunc:function(e,t){return(0,c.og)(e,t)}},{children:o().createElement("b",null,"Initiated by"),match:["initiated_by"]},{children:o().createElement("b",null,"Systems with messages"),match:["messages_count"]}],D=[{children:o().createElement(a.Button,{variant:"secondary",ouiaId:"run-this-task-again-button"},"Run this task again")},{children:o().createElement(a.Button,{variant:"primary",ouiaId:"download-report-button"},"Download report")}],_=o().createElement("div",null,"About tasks"),Y=o().createElement("div",null,"Tasks allows you to run resource-intensive additional troubleshooting on your connected systems. Ansible Playbooks are written by Red Hat to do the selected tasks.",o().createElement("br",null)," ",o().createElement("br",null),"Eligible systems include systems connected to console.redhat.com with rhc, or Satellite with Cloud Connector."),B=o().createElement("div",null,o().createElement("a",{href:"".concat(O).concat(P,"red_hat_connector_configuration_guide/index")},o().createElement("span",null,"Using rhc with systems ",o().createElement(u.ZP,null))),o().createElement("br",null),o().createElement("a",{href:"".concat(O).concat(P,"using_cloud_connector_to_remediate_issues_across_your_red_hat_satellite_infrastructure/index")},o().createElement("span",null,"Configure Cloud Connector and Satellite ",o().createElement(u.ZP,null)))),z=[{children:[{children:o().createElement(l.Z,{title:"Tasks"}),classname:"page-header-title"},{children:o().createElement(b,{label:"tasks-header-popover",header:_,body:Y,footer:B,content:o().createElement(m.ZP,null)})}]}],V={exportable:{onStart:function(){(0,s.q)({variant:"info",title:"Preparing export",description:"Once complete, your download will start automatically."})},onComplete:function(){(0,s.q)({variant:"success",title:"Downloading export"})}}},I=[{title:o().createElement(h.Z,{size:h.i.md})},{description:o().createElement(h.Z,{size:h.i.md})}]},46700:(e,t,r)=>{var n={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function i(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id=46700}}]);
//# sourceMappingURL=../sourcemaps/938.5abeabdb4ef8fe9289a15988c59ac9b8.js.map