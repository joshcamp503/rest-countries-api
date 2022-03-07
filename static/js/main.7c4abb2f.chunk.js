(this["webpackJsonprest-countries-api"]=this["webpackJsonprest-countries-api"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(10),s=n.n(a),i=(n(16),n(6)),o=n(2),l=n(3),j=n(4),u=n(0),d=Object(c.createContext)(),b=function(e,t){return"CHANGE_MODE"===t.type?Object(j.a)(Object(j.a)({},e),{},{mode:t.payload}):e};function O(e){var t=e.children,n=Object(c.useReducer)(b,{mode:"light"}),r=Object(l.a)(n,2),a=r[0],s=r[1];return Object(u.jsx)(d.Provider,{value:Object(j.a)(Object(j.a)({},a),{},{changeMode:function(e){s({type:"CHANGE_MODE",payload:e})}}),children:t})}var h=function(){var e=Object(c.useContext)(d);if(void 0===e)throw new Error("useMode must be used inside a ModeProvider");return e};n(18),n(19);function m(){var e=h(),t=e.changeMode,n=e.mode;return Object(u.jsx)("div",{className:"mode-selector",children:Object(u.jsxs)("button",{onClick:function(){t("dark"===n?"light":"dark")},children:[Object(u.jsx)("i",{className:"far fa-moon",style:{color:"hsl(200, 15%, 8%)",filter:"dark"===n?"invert(100%)":"invert(20%)"}}),"Dark Mode"]})})}function x(){var e=h().mode;return Object(u.jsxs)("nav",{className:"navbar ".concat(e),children:[Object(u.jsx)(i.b,{to:"/",onClick:function(){return window.location.reload()},style:{textDecoration:"none",color:"inherit"},children:Object(u.jsx)("h3",{children:"Where in the world?"})}),Object(u.jsx)(m,{})]})}var f=n(9),p=n.n(f),v=n(11),g=Object(c.createContext)(),N=function(e,t){switch(t.type){case"FILTER_COUNTRIES":return Object(j.a)(Object(j.a)({},e),{},{countries:t.payload});case"SET_SEARCH_TERM":return Object(j.a)(Object(j.a)({},e),{},{searchTerm:t.payload});case"GET_COUNTRIES":return console.log(t.payload),Object(j.a)(Object(j.a)({},e),{},{countries:t.payload,defaultState:t.payload});default:return e}};function y(e){var t=e.children,n=Object(c.useReducer)(N,{countries:[],searchTerm:"",defaultState:[]}),r=Object(l.a)(n,2),a=r[0],s=r[1],i=function(e){s({type:"GET_COUNTRIES",payload:e})},o=function(e,t){var n=Object(c.useState)(null),r=Object(l.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(!1),o=Object(l.a)(i,2),j=o[0],u=o[1],d=Object(c.useState)(null),b=Object(l.a)(d,2),O=b[0],h=b[1];return Object(c.useEffect)((function(){var n=new AbortController,c=function(){var c=Object(v.a)(p.a.mark((function c(){var r,a;return p.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return u(!0),c.prev=1,c.next=4,fetch(e,{signal:n.signal});case 4:if((r=c.sent).ok){c.next=7;break}throw new Error(r.statusText);case 7:return c.next=9,r.json();case 9:a=c.sent,u(!1),s(a),t(a),h(null),c.next=19;break;case 16:c.prev=16,c.t0=c.catch(1),"AbortError"===c.t0.name?console.log("The fetch was aborted"):(u(!1),h("Could not fetch the data"));case 19:case"end":return c.stop()}}),c,null,[[1,16]])})));return function(){return c.apply(this,arguments)}}();return c(),function(){n.abort()}}),[e]),{data:a,isPending:j,error:O}}("https://restcountries.com/v3.1/all",i),d=o.data,b=o.isPending,O=o.error;return Object(u.jsx)(g.Provider,{value:Object(j.a)(Object(j.a)({},a),{},{getCountries:i,setSearchTerm:function(e){s({type:"SET_SEARCH_TERM",payload:e})},filterCountries:function(e,t){if(!t.classList.contains("option"))return!1;var n=a.defaultState,c=t.textContent;e="All"===c?n.map((function(e){return e})):n.filter((function(e){return e.region===c})),s({type:"FILTER_COUNTRIES",payload:e})},data:d,isPending:b,error:O}),children:t})}var C=function(){var e=Object(c.useContext)(g);if(void 0===e)throw new Error("useCountries() must be used inside a CountriesProvider");return e};n(21);function E(){var e=C(),t=e.countries,n=e.searchTerm,c=h().mode;console.log(t);return Object(u.jsx)("div",{className:"country-list",children:function(e){return t.filter((function(t){return t.name.common.toLowerCase().includes(e.toLowerCase())}))}(n).map((function(e,t){return Object(u.jsx)("div",{className:"country-card ".concat(c," grow"),children:Object(u.jsxs)(i.b,{to:"/country/".concat(e.name.common),style:{textDecoration:"none",color:"inherit"},children:[Object(u.jsx)("div",{className:"flag-container",children:Object(u.jsx)("img",{src:e.flags.png,alt:"country flag"})}),Object(u.jsxs)("div",{className:"info-container",children:[Object(u.jsx)("h3",{children:e.name.common}),Object(u.jsxs)("p",{children:["Population: ",Object(u.jsx)("span",{children:e.population})]}),Object(u.jsxs)("p",{children:["Region: ",Object(u.jsx)("span",{children:e.region})]}),Object(u.jsxs)("p",{children:["Capital: ",Object(u.jsx)("span",{children:e.capital})]})]})]})},t)}))})}n(22);function w(){var e=C(),t=e.countries,n=e.searchTerm,c=e.setSearchTerm,r=e.filterCountries,a=h().mode;return Object(u.jsx)("div",{className:"search ".concat(a),children:Object(u.jsxs)("form",{className:"search-form",onSubmit:function(e){return e.preventDefault()},children:[Object(u.jsxs)("div",{className:"search-bar-container grow",children:[Object(u.jsx)("i",{className:"fas fa-search"}),Object(u.jsx)("input",{className:"search-bar",id:"search-bar",type:"search",placeholder:"Search for a country...",value:n,onChange:function(e){c(e.target.value)}})]}),Object(u.jsxs)("div",{className:"select-menu",onClick:function(e){var t=document.querySelector(".options-menu"),n=document.querySelector(".select-menu i");t.classList.toggle("active"),n.classList.toggle("fa-angle-down"),n.classList.toggle("fa-angle-up")},children:[Object(u.jsx)("p",{className:"filter-title",children:"Filter by Region"}),Object(u.jsx)("i",{className:"fas fa-angle-down"}),Object(u.jsx)("div",{className:"options-menu-container",children:Object(u.jsxs)("ul",{className:"options-menu",onClick:function(e){r(t,e.target),function(e){e.preventDefault(),document.querySelector(".filter-title").textContent=e.target.textContent}(e)},children:[Object(u.jsx)("li",{className:"option",children:"All"}),Object(u.jsx)("li",{className:"option",children:"Africa"}),Object(u.jsx)("li",{className:"option",children:"Americas"}),Object(u.jsx)("li",{className:"option",children:"Asia"}),Object(u.jsx)("li",{className:"option",children:"Europe"}),Object(u.jsx)("li",{className:"option",children:"Oceania"})]})})]})]})})}function S(){var e=C(),t=e.data,n=e.isPending,c=e.error,r=h().mode;return Object(u.jsxs)("div",{className:"home ".concat(r),children:[Object(u.jsx)(w,{}),c&&Object(u.jsx)("p",{className:"error",children:c}),n&&Object(u.jsx)("p",{className:"loading",children:" Loading..."}),t&&Object(u.jsx)(E,{})]})}n(23),n(24);function k(e){var t=e.country,n=e.countries,c=e.handleClick,r=Object.entries(t.name.nativeName).map((function(e){return e[1].common})),a=!!t.currencies&&Object.entries(t.currencies).map((function(e){return e[1].name})),s=Object.entries(t.languages).map((function(e){return e[1]})),i=t.borders,o=n.filter((function(e){return!!i&&i.includes(e.cca3)})),l=o.map((function(e){return e.name.common}));return Object(u.jsxs)("div",{className:"country-details",children:[Object(u.jsx)("div",{className:"flag-container",children:Object(u.jsx)("img",{src:t.flags.png,alt:"country flag"})}),Object(u.jsxs)("div",{className:"info-container",children:[Object(u.jsx)("h3",{children:t.name.common}),Object(u.jsxs)("div",{className:"demographics-container",children:[Object(u.jsxs)("div",{className:"general-info",children:[Object(u.jsxs)("p",{children:["Native Name: ",Object(u.jsx)("span",{children:r.join(", ")})]}),Object(u.jsxs)("p",{children:["Population: ",Object(u.jsx)("span",{children:t.population})]}),Object(u.jsxs)("p",{children:["Region: ",Object(u.jsx)("span",{children:t.region})]}),Object(u.jsxs)("p",{children:["Sub Region: ",Object(u.jsx)("span",{children:t.subregion})]}),Object(u.jsxs)("p",{children:["Capital: ",Object(u.jsx)("span",{children:t.capital})]})]}),Object(u.jsxs)("div",{className:"technical-info",children:[Object(u.jsxs)("p",{children:["Top Level Domain: ",Object(u.jsx)("span",{children:t.tld})]}),Object(u.jsxs)("p",{children:["Currencies: ",a&&Object(u.jsx)("span",{children:a.join(", ")})]}),Object(u.jsxs)("p",{children:["Languages: ",Object(u.jsx)("span",{children:s.join(", ")})]})]})]}),Object(u.jsxs)("div",{className:"border-countries",children:[Object(u.jsx)("h4",{children:"Border Countries: "}),Object(u.jsx)("div",{className:"border-countries-container",children:l.map((function(e,t){return Object(u.jsx)("button",{className:"grow",onClick:c,children:Object(u.jsx)("p",{children:e})},t)}))})]})]})]})}function T(){var e=h().mode,t=Object(o.f)(),n=Object(o.g)().id,c=C(),r=c.countries,a=c.isPending,s=c.error,i=r.filter((function(e){return e.name.common===n})),j=Object(l.a)(i,1)[0];console.log(j);var d=function(e){"Back"===e.target.textContent?t("/"):t("/country/".concat(e.target.textContent))};return Object(u.jsx)("div",{className:"country-page ".concat(e),children:Object(u.jsxs)("div",{className:"country-page-content",children:[Object(u.jsxs)("button",{className:"back-btn grow",onClick:d,children:[Object(u.jsx)("i",{className:"fas fa-angle-double-left"}),Object(u.jsx)("span",{children:"Back"})]}),s&&Object(u.jsx)("p",{className:"error",children:s}),a&&Object(u.jsx)("p",{className:"loading",children:" Loading..."}),j&&Object(u.jsx)(k,{country:j,countries:r,handleClick:d})]})})}var R=function(){var e=h().mode;return Object(u.jsx)("div",{className:"App ".concat(e),children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(x,{}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/",element:Object(u.jsx)(S,{})}),Object(u.jsx)(o.a,{path:"country/:id",element:Object(u.jsx)(T,{})})]})]})})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(O,{children:Object(u.jsx)(y,{children:Object(u.jsx)(R,{})})})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.7c4abb2f.chunk.js.map