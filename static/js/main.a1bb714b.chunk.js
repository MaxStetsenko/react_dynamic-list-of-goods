(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{15:function(t,n,e){},17:function(t,n,e){"use strict";e.r(n);var o=e(8),r=e.n(o),a=e(7),s=e.n(a),c=e(9),i=e(2),u=e(3),l=e(5),d=e(4),b=e(1),h=e.n(b),j=(e(15),e(0)),f=function(t){Object(l.a)(e,t);var n=Object(d.a)(e);function e(){var t;Object(i.a)(this,e);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=n.call.apply(n,[this].concat(r))).state={},t}return Object(u.a)(e,[{key:"render",value:function(){var t=this.props.goods;return Object(j.jsx)("ul",{className:"goods__list",children:t.map((function(t){return Object(j.jsxs)("li",{className:"goodsItem",children:[Object(j.jsx)("div",{className:"goodsItem__preview",style:{backgroundColor:t.color}}),Object(j.jsx)("div",{className:"goodsItem__title",style:{color:t.color},children:t.name})]},t.id)}))})}}]),e}(h.a.Component),g=function(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){if(!t.ok)throw new Error("".concat(t.status," -- ").concat(t.statusText));return t.json()}))};function p(){return g()}var m=function(){return g().then((function(t){return t.slice(0,5)}))},O=function(){return g().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},v=function(t){Object(l.a)(e,t);var n=Object(d.a)(e);function e(){var t;Object(i.a)(this,e);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=n.call.apply(n,[this].concat(r))).state={goods:[],hasLoadingError:!1},t.loadData=function(){var n=Object(c.a)(s.a.mark((function n(e){var o;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.setState({hasLoadingError:!1}),n.prev=1,n.next=4,e();case 4:o=n.sent,t.setState({goods:o}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),t.setState({hasLoadingError:!0});case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}(),t}return Object(u.a)(e,[{key:"render",value:function(){var t=this,n=this.state,e=n.goods,o=n.hasLoadingError;return Object(j.jsxs)("section",{className:"goods",children:[Object(j.jsx)("h1",{className:"goods__title",children:"Dynamic list of goods"}),Object(j.jsxs)("div",{className:"goods__navigation btn-group",children:[Object(j.jsx)("button",{type:"button",className:"btn btn-outline-primary",onClick:function(){return t.loadData(p)},children:"Load All goods"}),Object(j.jsx)("button",{type:"button",className:"btn btn-outline-primary",onClick:function(){return t.loadData(m)},children:"Load 5 first goods"}),Object(j.jsx)("button",{type:"button",className:"btn btn-outline-primary",onClick:function(){return t.loadData(O)},children:"Load red goods"})]}),o?Object(j.jsx)("p",{children:"Oops ... Something went wrong, please try again"}):Object(j.jsx)(f,{goods:e})]})}}]),e}(h.a.Component),y=v;r.a.render(Object(j.jsx)(y,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.a1bb714b.chunk.js.map