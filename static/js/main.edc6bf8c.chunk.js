(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),s=(n(9),n(1)),i=(n(10),n(11),n(12),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180"),alt:"monster"}),r.a.createElement("h2",null,e.monster.name),r.a.createElement("p",null,e.monster.email))}),l=function(e){return r.a.createElement("div",{className:"card-list"},e.monsterList.map((function(e){return r.a.createElement(i,{monster:e,key:e.id})})))},u=(n(13),function(e){var t=e.placeholder,n=e.searchHandler;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),m=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),i=Object(s.a)(o,2),m=i[0],h=i[1];Object(a.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]);var d=n.filter((function(e){return e.name.toLowerCase().includes(m.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monster Me"),r.a.createElement(u,{placeholder:"Search Monster",searchHandler:function(e){return h(e.target.value)}}),r.a.createElement(l,{monsterList:d}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.edc6bf8c.chunk.js.map