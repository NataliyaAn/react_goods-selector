(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,o){},16:function(e,t,o){"use strict";o.r(t);var c=o(3),n=o.n(c),a=o(4),s=o(5),d=o(8),i=o(7),l=o(1),r=o.n(l),b=(o(13),o(14),o(6)),u=o.n(b),h=o(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(e){Object(d.a)(o,e);var t=Object(i.a)(o);function o(){var e;Object(a.a)(this,o);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={selectedGood:"Jam",activeGood:!0},e.indexGood=j.indexOf("Jam"),e.handleClick=function(t){e.indexGood=e.props.goods.indexOf(t),e.setState({selectedGood:t,activeGood:!0})},e.handleClickClear=function(){e.indexGood=-1,e.setState({selectedGood:"",activeGood:!1})},e}return Object(s.a)(o,[{key:"render",value:function(){var e=this,t=this.state,o=t.selectedGood,c=t.activeGood;return Object(h.jsxs)("main",{className:"section container",children:[!0===c?Object(h.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(o," is selected"),Object(h.jsx)("button",{"aria-label":"button","data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.handleClickClear})]}):Object(h.jsx)("h1",{className:"title",children:"No goods selected"}),Object(h.jsx)("table",{className:"table",children:Object(h.jsx)("tbody",{children:this.props.goods.map((function(t){return Object(h.jsxs)("tr",{"data-cy":"Good",className:u()({"has-background-success-light":e.props.goods.indexOf(t)===e.indexGood}),children:[Object(h.jsx)("td",{children:e.indexGood!==e.props.goods.indexOf(t)?Object(h.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){e.handleClick(t)},children:"+"}):Object(h.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:e.handleClickClear,children:"-"})}),Object(h.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:t},t)]})}))})})]})}}]),o}(r.a.Component);n.a.render(Object(h.jsx)(p,{goods:j}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.6d22c948.chunk.js.map