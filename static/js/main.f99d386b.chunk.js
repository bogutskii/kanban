(this.webpackJsonpkanban=this.webpackJsonpkanban||[]).push([[0],{17:function(e,t,a){e.exports=a(38)},22:function(e,t,a){},23:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),s=a.n(o),c=(a(22),a(8)),m=a(2),l=a(9),i=(a(23),a(24),a(1)),u=a(7),d=a.n(u),b=[{nameBoard:"todo",color:"primary",tasks:[{id:Object(i.v4)(),name:"todo1",taskText:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece"}]},{nameBoard:"progress",color:"secondary",tasks:[{id:Object(i.v4)(),name:"todo2",taskText:"Some text2"},{id:Object(i.v4)(),name:"todo3",taskText:"There are many variations of passages of Lorem Ipsum available"}]},{nameBoard:"review",color:"warning",tasks:[{id:Object(i.v4)(),name:"todo 4",taskText:"Some text"},{id:Object(i.v4)(),name:"todo 5",taskText:"Some text5"}]},{nameBoard:"done",color:"success",tasks:[{id:Object(i.v4)(),name:"todo 6",taskText:"It is a long established fact that a reader will be distracted by the readable content of a page when"},{id:Object(i.v4)(),name:"todo 7",taskText:"Some text7"},{id:Object(i.v4)(),name:"todo 8",taskText:""},{id:Object(i.v4)(),name:"todo 9",taskText:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some"}]}];d.a.setAppElement("#root");var p=function(){var e=Object(n.useState)(b),t=Object(l.a)(e,2),a=t[0],o=t[1],s=Object(n.useState)(!1),i=Object(l.a)(s,2),u=i[0],p=i[1];return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"mb-4 mt-4"},"Kanban"),r.a.createElement("button",{className:"btn btn-light mb-10",onClick:function(){return p(!0)}},"Create task"),r.a.createElement(d.a,{className:"modal-dialog",isOpen:u,onRequestClose:function(){return p(!1)}},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title"},"Create new task")),r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("label",{className:"input-group-text"},"Board")),r.a.createElement("select",{className:"custom-select"},a.map((function(e,t){return r.a.createElement("option",{value:t},e.nameBoard)})))),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Title")),r.a.createElement("input",{className:"form-control",required:!0})),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Text tasks")),r.a.createElement("textarea",{className:"form-control","aria-label":"With textarea"}))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return p(!1)}},"Cancel"),r.a.createElement("button",{type:"button",className:"btn btn-primary"},"Save")))),r.a.createElement("div",{className:"row"},a.map((function(e){return r.a.createElement("div",{className:"col-sm d-flex",key:e.nameBoard},r.a.createElement("div",{className:"w-100 border-top border-".concat(e.color," border-width-4")},r.a.createElement("h3",null,e.nameBoard),e.tasks.map((function(t){return r.a.createElement("div",{className:"card mb-2",key:t.id},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.name,r.a.createElement("button",{type:"button",className:"btn btn-light float-right","data-toggle":"modal",href:"#modal",onClick:function(){return function(e){if(window.confirm("Are you sure?")){var t=a.map((function(t,a){if(t.nameBoard===e.columnName){var n=t.tasks.findIndex((function(t){return t.id===e.taskId}));return Object(m.a)(Object(m.a)({},t),t.tasks.splice(n,1))}return t}));o(t)}}({columnName:e.nameBoard,taskId:t.id})}},"\xd7")),r.a.createElement("p",null,t.taskText),r.a.createElement("button",{type:"button",className:"btn btn-light",onClick:function(){return function(e){var t=a.map((function(t){if(t.nameBoard===e.columnName){var a=t.tasks,n=t.tasks.findIndex((function(t){return t.id===e.taskId}));if(n>0){var r=[a[n-1],a[n]];return a[n]=r[0],a[n-1]=r[1],Object(m.a)(Object(m.a)({},t),{},{tasks:a})}}return t}));o(t)}({columnName:e.nameBoard,taskId:t.id})}}," \u2191"),r.a.createElement("button",{type:"button",className:"btn btn-light",onClick:function(){return function(e){var t=a.map((function(t){if(t.nameBoard===e.columnName){var a=t.tasks,n=t.tasks.findIndex((function(t){return t.id===e.taskId}));if(n<a.length-1){var r=[a[n+1],a[n]];return a[n]=r[0],a[n+1]=r[1],Object(m.a)(Object(m.a)({},t),{},{tasks:a})}}return t}));o(t)}({columnName:e.nameBoard,taskId:t.id})}}," \u2193"),r.a.createElement("button",{type:"button",className:"btn btn-light",onClick:function(){return function(e){var t=a.map((function(t,n){if(t.nameBoard===e.columnName&&n>0){var r,o=t.tasks.findIndex((function(t){return t.id===e.taskId}));return(r=a[n-1].tasks).push.apply(r,Object(c.a)(t.tasks.splice(o,1))),Object(m.a)({},t)}return t}));o(t)}({columnName:e.nameBoard,taskId:t.id})}}," \u2190"),r.a.createElement("button",{type:"button",className:"btn btn-light",onClick:function(){return function(e){var t=a.map((function(t,n){if(t.nameBoard===e.columnName&&n<a.length-1){var r,o=t.tasks.findIndex((function(t){return t.id===e.taskId}));return(r=a[n+1].tasks).push.apply(r,Object(c.a)(t.tasks.splice(o,1))),Object(m.a)({},t)}return t}));o(t)}({columnName:e.nameBoard,taskId:t.id})}}," \u2192")))}))))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.f99d386b.chunk.js.map