(this["webpackJsonpfcc-javascript-calculator"]=this["webpackJsonpfcc-javascript-calculator"]||[]).push([[0],{21:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var a,i=n(0),d=n.n(i),r=n(7),o=n.n(r),s=(n(21),n(8)),l=n(9),c=n(2),h=n(16),b=n(15),u=n(10),p=n(11),f=Object(p.a)(a||(a=Object(u.a)(["\n\n@font-face {\n    font-family: 'Digital';\n    src: url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.eot');\n    src: url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.eot?#iefix')\n        format('embedded-opentype'),\n        url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.woff2')\n        format('woff2'),\n        url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.woff')\n        format('woff'),\n        url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.ttf')\n        format('truetype'),\n        url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.svg#Digital-7')\n        format('svg');\n}\n\n@font-face {\n    font-family: \"Cool\"; \n    src: url(\"//db.onlinewebfonts.com/t/df7addca2738b1d78171b7257e3b4ab9.eot\"); \n    src: url(\"//db.onlinewebfonts.com/t/df7addca2738b1d78171b7257e3b4ab9.eot?#iefix\") \n        format(\"embedded-opentype\"), \n        url(\"//db.onlinewebfonts.com/t/df7addca2738b1d78171b7257e3b4ab9.woff2\") \n        format(\"woff2\"), url(\"//db.onlinewebfonts.com/t/df7addca2738b1d78171b7257e3b4ab9.woff\") \n        format(\"woff\"), \n        url(\"//db.onlinewebfonts.com/t/df7addca2738b1d78171b7257e3b4ab9.ttf\") \n        format(\"truetype\"), \n        url(\"//db.onlinewebfonts.com/t/df7addca2738b1d78171b7257e3b4ab9.svg#Cool\") \n        format(\"svg\"); \n}\n\n    #root {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    width: 100%;\n    font-family: 'digital';\n    }\n\n    html {\n        margin: 0;\n        padding:0;\n    }\n\n    body {\n        background-position: center;\n        background-image: url(\"https://user-images.githubusercontent.com/20836468/115396602-7526ec80-a1e5-11eb-83b6-19ce0920105b.jpg\");\n        background-position: center;\n    }\n\n    #calculator {\n        display: flex;\n        padding: 10px;\n        ","\n        background-color: rgba(105,105,105, 0.8);\n        width: 420px;\n        ","\n        border-radius: 5px;\n        ","\n    }\n\n    #outer {\n        position: relative;\n        display: grid;\n        grid-gap: 10px;\n        width:100%;\n    }\n\n    #outerDisplay {\n        display: inline-block;\n        max-width: 420px;\n        grid-column : 1/5;\n        background-color: white;\n        overflow-wrap: break-word;\n        word-wrap: break-word;\n        text-align: right;\n    }\n\n    #upperDisplay{\n        min-height: 30px;\n        font-family: digital;\n        font-size: 30px;\n        color: orange;\n    }\n\n    #display {\n        min-height: 50px;\n    }\n\n    .display-grid-item{\n        font-size: 50px;\n        overflow-wrap: break-word;\n        word-wrap: break-word;\n    } \n\n    .grid-item {\n        background-color: rgba(255, 255, 255, 0.5);\n        border: 1px solid rgba(0, 0, 0, 0.8);\n        font-size: 30px;\n        text-align: center;\n        vertical-align: center;\n        min-height: 80px;\n        font-family: cool;\n    }\n\n    #clear {\n        grid-column: 1 / 3;\n        background-color: rgba(196,2,51, 0.8);\n    }\n\n    #equals {\n        grid-row: 5/7 !important;\n        grid-column: 4;\n        background-color: rgba(127,255,0, 0.8)\n    }\n\n    #decimal {\n        background-color: rgba(238,255,27, 0.8);\n    }\n\n    #zero {\n        grid-row: 6/7;\n        grid-column: 1/3;\n    }\n    "])),"","",""),m=n(1),g=n(27),j={zero:"0",one:"1",two:"2",three:"3",four:"4",five:"5",six:"6",seven:"7",eight:"8",nine:"9"},x={add:"+",subtract:"-",multiply:"*",divide:"/"},y=function(t){return Object(m.jsx)("button",{className:"grid-item",id:g.toWords(t.value),operation:t.value,onClick:t.handler,children:t.value},g.toWords(t.value))},v=function(t){return Object(m.jsx)("button",{className:"grid-item",id:t.id,operation:t.operation,onClick:t.handler,children:t.operation})},w=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={x:"",data:[],display:"0",memory:""},a.handleInput=a.handleInput.bind(Object(c.a)(a)),a}return Object(l.a)(n,[{key:"handleInput",value:function(t){var e=t.target.id,n="",a="",i=[],d=eval;switch(e){case"equals":n=this.filterInput(this.state.data.concat(this.state.x)).join("").replace(/,/g,"");try{a=d(n)}catch(r){a="0"}a||(a="0"),i=[a],this.setState({display:a,data:i,x:"",memory:n+"="+a});break;case"clear":this.setState({x:"",data:[],display:"0",memory:""});break;case"decimal":this.state.display.length<16?this.state.x.includes(".")||this.setState({x:this.state.x+".",display:this.state.display+".",memory:this.state.memory+"."}):this.limitReached();break;default:j[e]?this.handleDigit(e):this.handleOperator(x[e])}}},{key:"filterInput",value:function(t){for(var e=[],n=[],a=0;a<t.length;a++)""!==t[a]&&(isNaN(t[a])?e.push(t[a]):(e.length>1&&"-"===e.slice(-1).toString()?(n.push(e.slice(-2)),e=[]):e.length>1?(n.push(e.slice(-1)),e=[]):(n.push(e),e=[]),n.push(t[a])));return n}},{key:"handleDigit",value:function(t){var e,n,a;"0"===this.state.display?(e=j[t],n=j[t],a=this.state.memory+j[t]):(e=this.state.x+j[t],n=this.state.display+j[t],a=this.state.memory+j[t]);var i=n[0];i>="0"&&i<="9"||(n=n.slice(1)),this.setState({x:e,display:n,memory:a})}},{key:"handleOperator",value:function(t){var e=this.state.data,n="";""!==this.state.x&&e.push(this.state.x),n=this.state.memory.includes("=")?this.state.display+t:this.state.memory+t,e.push(t),this.setState({data:e,display:t,x:"",memory:n})}},{key:"render",value:function(){return Object(m.jsxs)("div",{id:"calculator",children:[Object(m.jsx)(f,{}),Object(m.jsxs)("div",{id:"outer",children:[Object(m.jsxs)("div",{id:"outerDisplay",className:"display-grid-item",children:[Object(m.jsx)("div",{id:"upperDisplay",children:this.state.memory}),Object(m.jsx)("div",{id:"display",children:this.state.display})]}),Object(m.jsx)(v,{id:"clear",operation:"CL",handler:this.handleInput}),Object(m.jsx)(v,{id:"divide",operation:"/",handler:this.handleInput}),Object(m.jsx)(v,{id:"multiply",operation:"*",handler:this.handleInput}),Object(m.jsx)(y,{value:7,handler:this.handleInput}),Object(m.jsx)(y,{value:8,handler:this.handleInput}),Object(m.jsx)(y,{value:9,handler:this.handleInput}),Object(m.jsx)(v,{id:"subtract",operation:"-",handler:this.handleInput}),Object(m.jsx)(y,{value:4,handler:this.handleInput}),Object(m.jsx)(y,{value:5,handler:this.handleInput}),Object(m.jsx)(y,{value:6,handler:this.handleInput}),Object(m.jsx)(v,{id:"add",operation:"+",handler:this.handleInput}),Object(m.jsx)(y,{value:1,handler:this.handleInput}),Object(m.jsx)(y,{value:2,handler:this.handleInput}),Object(m.jsx)(y,{value:3,handler:this.handleInput}),Object(m.jsx)(v,{id:"equals",operation:"=",handler:this.handleInput}),Object(m.jsx)(y,{value:0,handler:this.handleInput}),Object(m.jsx)(v,{id:"decimal",operation:".",handler:this.handleInput})]}),Object(m.jsx)("br",{})]})}}]),n}(i.Component),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,d=e.getLCP,r=e.getTTFB;n(t),a(t),i(t),d(t),r(t)}))};o.a.render(Object(m.jsx)(d.a.StrictMode,{children:Object(m.jsx)(w,{})}),document.getElementById("root")),O()}},[[29,1,2]]]);
//# sourceMappingURL=main.83474344.chunk.js.map