(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(t,e,n){},12:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(6),s=n.n(r),i=(n(11),n(12),n(2)),o=n.n(i),l=n(3),d=n(4),u=n(0),j=function(){var t=Object(c.useState)(""),e=Object(d.a)(t,2),n=e[0],a=e[1],r=function(){var t=Object(l.a)(o.a.mark((function t(e){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.prev=1,c={peak_name:n},t.next=5,fetch("/peak",{method:"Post",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 5:t.sent,window.location="/",t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0.message);case 12:case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)("h1",{className:"text-center mt-5 text-white",children:"\ud83e\uddd7\u200d\u2642\ufe0fPeak Tracker\ud83d\uddfb"}),Object(u.jsxs)("form",{className:"d-flex mt-5",onSubmit:r,children:[Object(u.jsx)("input",{type:"text",className:"form-control",placeholder:"Peak Name",onChange:function(t){return a(t.target.value)}}),Object(u.jsx)("button",{className:"btn btn-success",children:"Add"})]})]})},b=function(t){var e=t.peak;console.log(e);var n=Object(c.useState)(e.bag_date),a=Object(d.a)(n,2),r=a[0],s=a[1],i=function(){var t=Object(l.a)(o.a.mark((function t(n){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,c={bag_date:r},t.next=5,fetch("http://localhost:5000/peak/".concat(e.peak_id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 5:t.sent,window.location="/",t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0.message);case 12:case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)("button",{type:"button",class:"btn btn-info","data-bs-toggle":"modal","data-bs-target":"#id".concat(e.peak_id),children:"Edit"}),Object(u.jsx)("div",{class:"modal",id:"id".concat(e.peak_id),onClick:function(){return s(r)},children:Object(u.jsx)("div",{class:"modal-dialog",children:Object(u.jsxs)("div",{class:"modal-content",children:[Object(u.jsxs)("div",{class:"modal-header",children:[Object(u.jsx)("h4",{class:"modal-title",children:"Edit Date"}),Object(u.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal",onClick:function(){return s(r)}})]}),Object(u.jsx)("div",{className:"modal-body",children:Object(u.jsx)("input",{type:"text",className:"form-control",placeholder:"YYYY-MM-DD",onChange:function(t){return s(t.target.value)}})}),Object(u.jsxs)("div",{class:"modal-footer",children:[Object(u.jsx)("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:function(t){return i(t)},children:"Confirm"}),Object(u.jsx)("button",{type:"button",class:"btn btn-danger","data-bs-dismiss":"modal",onClick:function(){return s(r)},children:"Exit"})]})]})})})]})},h=function(){var t=Object(c.useState)([]),e=Object(d.a)(t,2),n=e[0],a=e[1],r=function(){var t=Object(l.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:5000/peak");case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,a(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=Object(l.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:5000/peak/".concat(e),{method:"DELETE"});case 3:t.sent,a(n.filter((function(t){return t.peak_id!==e}))),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){r()}),[]),Object(u.jsx)(c.Fragment,{children:Object(u.jsxs)("table",{class:"table mt-5 text-white text-center",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{width:"300",children:"Mountain Peaks"}),Object(u.jsx)("th",{width:"300",children:"Elevation (ft)"}),Object(u.jsx)("th",{width:"300",children:"Summit Date"}),Object(u.jsx)("th",{width:"10"}),Object(u.jsx)("th",{width:"10"})]})}),Object(u.jsx)("tbody",{children:n.map((function(t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.peak_name}),Object(u.jsx)("td",{children:t.peak_elv}),Object(u.jsx)("td",{children:t.bag_date}),Object(u.jsx)("td",{children:Object(u.jsx)(b,{peak:t})}),Object(u.jsx)("td",{className:"w3-middle-align",children:Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){return s(t.peak_id)},children:"Delete"})})]},t.peak_id)}))})]})})};var p=function(){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(j,{}),Object(u.jsx)(h,{})]})};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.46d04f43.chunk.js.map