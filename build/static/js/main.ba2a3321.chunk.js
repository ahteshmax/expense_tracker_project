(this.webpackJsonpspeechly=this.webpackJsonpspeechly||[]).push([[0],{415:function(e,t,a){},416:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(9),r=a.n(c),l=a(19),i=a(30),u=a(25),m=function(e,t){var a;switch(t.type){case"DELETE_TRANSACTION":return a=e.filter((function(e){return e.id!==t.payload})),localStorage.setItem("transactions",JSON.stringify(a)),a;case"DELETE_ALL_TRANSACTION":return localStorage.removeItem("transactions"),console.log("clear called"),window.location.reload(!0),e;case"ADD_TRANSACTION":return a=[t.payload].concat(Object(u.a)(e)),localStorage.setItem("transactions",JSON.stringify(a)),a;default:return e}},s=JSON.parse(localStorage.getItem("transactions"))||[{amount:0,category:"Demo",type:"Income",date:"2021-10-16",id:"44c68123-5b86-4cc8-b915-bb9e16cebe6a"},{amount:0,category:"Demo",type:"Expense",date:"2021-10-16",id:"0f72e66e-e144-4a72-bbc1-c3c92018635e"}],d=Object(n.createContext)(s),p=function(e){var t=e.children,a=Object(n.useReducer)(m,s),c=Object(i.a)(a,2),r=c[0],l=c[1],u=r.reduce((function(e,t){return"Expense"===t.type?e-t.amount:e+t.amount}),0);return o.a.createElement(d.Provider,{value:{transactions:r,balance:u,deleteTransaction:function(e){l({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){l({type:"ADD_TRANSACTION",payload:e})},deleteAllTransaction:function(){l({type:"DELETE_ALL_TRANSACTION"}),console.log("clear called")}}},t)},g=a(468),f=(a(258),a(462)),b=a(464),E=a(465),y=a(41),O=a(188),h=a(459),v=Object(h.a)((function(){return{income:{borderBottom:"10px solid rgba(0, 255, 0, 0.5)"},expense:{borderBottom:"10px solid rgba(255, 0, 0, 0.5)"}}})),j=["#123123","#154731","#165f40","#16784f","#14915f","#10ac6e","#0bc77e","#04e38d","#00ff9d"],x=["#b50d12","#bf2f1f","#c9452c","#d3583a","#dc6a48","#e57c58","#ee8d68","#f79d79","#ffae8a","#cc474b","#f55b5f"],S=[{type:"Business",amount:0,color:j[0]},{type:"Investments",amount:0,color:j[1]},{type:"Extra income",amount:0,color:j[2]},{type:"Deposits",amount:0,color:j[3]},{type:"Lottery",amount:0,color:j[4]},{type:"Gifts",amount:0,color:j[5]},{type:"Salary",amount:0,color:j[6]},{type:"Savings",amount:0,color:j[7]},{type:"Rental income",amount:0,color:j[8]},{type:"Rental income 2",amount:0,color:j[8]},{type:"Rental income 3",amount:0,color:j[8]},{type:"Rental income 4",amount:0,color:j[8]},{type:"Rental income 5",amount:0,color:j[8]}],C=[{type:"Bills",amount:0,color:x[0]},{type:"Car",amount:0,color:x[1]},{type:"Clothes",amount:0,color:x[2]},{type:"Travel",amount:0,color:x[3]},{type:"Food",amount:0,color:x[4]},{type:"Shopping",amount:0,color:x[5]},{type:"House",amount:0,color:x[6]},{type:"Entertainment",amount:0,color:x[7]},{type:"Phone",amount:0,color:x[8]},{type:"Pets",amount:0,color:x[9]},{type:"Other",amount:0,color:x[10]}],w=null===JSON.parse(window.localStorage.getItem("incomeCategorieslocal"))?S:JSON.parse(window.localStorage.getItem("incomeCategorieslocal")),N=null===JSON.parse(window.localStorage.getItem("expenseCategorieslocal"))?C:JSON.parse(window.localStorage.getItem("expenseCategorieslocal")),I=function(e){Object(n.useEffect)((function(){w=null===JSON.parse(window.localStorage.getItem("incomeCategorieslocal"))?S:JSON.parse(window.localStorage.getItem("incomeCategorieslocal")),N=null===JSON.parse(window.localStorage.getItem("expenseCategorieslocal"))?C:JSON.parse(window.localStorage.getItem("expenseCategorieslocal"))}),[w,N]),S.forEach((function(e){return e.amount=0})),C.forEach((function(e){return e.amount=0}));var t=Object(n.useContext)(d).transactions.filter((function(t){return t.type===e})),a=t.reduce((function(e,t){return e+t.amount}),0),o="Income"===e?w:N;t.forEach((function(e){var t=o.find((function(t){return t.type===e.category}));t&&(t.amount+=e.amount)}));var c=o.filter((function(e){return e.amount>0})),r={datasets:[{data:c.map((function(e){return e.amount})),backgroundColor:c.map((function(e){return e.color}))}],labels:c.map((function(e){return e.type}))};return{filteredCategories:c,total:a,chartData:r}},T=function(e){var t=e.title,a=e.subheader,n=I(t),c=n.total,r=n.chartData,l=v(),i=[];return function(){for(var e=0;e<r.labels.length;e++)i.push(r.labels[e]+" = "+r.datasets[0].data[e])}(),o.a.createElement(f.a,{className:"Income"===t?l.income:l.expense},o.a.createElement(b.a,{title:t,subheader:a}),o.a.createElement(E.a,null,o.a.createElement(y.a,{variant:"h5"},"$",c),o.a.createElement(O.Doughnut,{data:r}),o.a.createElement(y.a,{variant:"h5"},i.map((function(e){return o.a.createElement("li",{key:e.index,style:{fontSize:18,color:"black",lineHeight:1.5,padding:1}}," ",e," ")}))),console.log(r.labels),console.log(r.datasets)))},A=a(481),k=Object(h.a)((function(e){return{media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},cartContent:{paddingTop:0},divider:{margin:"20px 0"}}})),D=a(10),J=a(469),R=a(486),L=a(482),_=a(473),B=a(488),F=a(474),W=a(484),M=a(485),P=a(483),H=Object(h.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),z=function(e){var t=e.open,a=e.setOpen,n=H(),c=function(e,t){"clickaway"!==t&&a(!1)};return o.a.createElement("div",{className:n.root},o.a.createElement(M.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:t,autoHideDuration:6e3,onClose:c},o.a.createElement(P.a,{onClose:c,severity:"success",elevation:6,variant:"filled"},"Transaction successfully created.")))},G=function(e){var t=new Date(e),a="".concat(t.getMonth()+1),n="".concat(t.getDate()),o=t.getFullYear();return a.length<2&&(a="0".concat(a)),n.length<2&&(n="0".concat(n)),[o,a,n].join("-")},$=Object(h.a)((function(){return{radioGroup:{display:"flex",justifyContent:"center",marginBottom:"-10px"},button:{marginTop:"20px"},buttonAdd:{marginTop:"2px"}}})),U=["#123123","#154731","#165f40","#16784f","#14915f","#10ac6e","#0bc77e","#04e38d","#00ff9d"],V=["#b50d12","#bf2f1f","#c9452c","#d3583a","#dc6a48","#e57c58","#ee8d68","#f79d79","#ffae8a","#cc474b","#f55b5f"],Y=null===JSON.parse(window.localStorage.getItem("incomeCategorieslocal"))?S:JSON.parse(window.localStorage.getItem("incomeCategorieslocal")),q=null===JSON.parse(window.localStorage.getItem("expenseCategorieslocal"))?C:JSON.parse(window.localStorage.getItem("expenseCategorieslocal"));console.log(Y);var K={amount:"",category:"",type:"Income",date:G(new Date)},Q=function(){Object(n.useEffect)((function(){}),[Y,q]);var e=$(),t=Object(n.useContext)(d).addTransaction,a=Object(n.useState)(K),c=Object(i.a)(a,2),r=c[0],m=c[1],s=Object(n.useState)(""),p=Object(i.a)(s,2),f=p[0],b=p[1],E=Object(l.useSpeechContext)().segment,O=o.a.useState(!1),h=Object(i.a)(O,2),v=h[0],j=h[1],x=function(){!Number.isNaN(Number(r.amount))&&r.date.includes("-")&&(Y.map((function(e){return e.type})).includes(r.category)?m(Object(D.a)(Object(D.a)({},r),{},{type:"Income"})):q.map((function(e){return e.type})).includes(r.category)&&m(Object(D.a)(Object(D.a)({},r),{},{type:"Expense"})),j(!0),t(Object(D.a)(Object(D.a)({},r),{},{amount:Number(r.amount),id:Object(W.a)()})),m(K))};Object(n.useEffect)((function(){if(E){if("add_expense"===E.intent.intent)m(Object(D.a)(Object(D.a)({},r),{},{type:"Expense"}));else if("add_income"===E.intent.intent)m(Object(D.a)(Object(D.a)({},r),{},{type:"Income"}));else{if(E.isFinal&&"create_transaction"===E.intent.intent)return x();if(E.isFinal&&"cancel_transaction"===E.intent.intent)return m(K)}E.entities.forEach((function(e){var t="".concat(e.value.charAt(0)).concat(e.value.slice(1).toLowerCase());switch(e.type){case"amount":m(Object(D.a)(Object(D.a)({},r),{},{amount:e.value}));break;case"category":Y.map((function(e){return e.type})).includes(t)?m(Object(D.a)(Object(D.a)({},r),{},{type:"Income",category:t})):q.map((function(e){return e.type})).includes(t)&&m(Object(D.a)(Object(D.a)({},r),{},{type:"Expense",category:t}));break;case"date":m(Object(D.a)(Object(D.a)({},r),{},{date:e.value}))}})),E.isFinal&&r.amount&&r.category&&r.type&&r.date&&x()}}),[E]);var S="Income"===r.type?Y:q;return o.a.createElement(g.a,{container:!0,spacing:2},o.a.createElement(z,{open:v,setOpen:j}),o.a.createElement(g.a,{item:!0,xs:12},o.a.createElement(y.a,{align:"center",variant:"subtitle2",gutterBottom:!0},E?o.a.createElement("div",{className:"segment"},E.words.map((function(e){return e.value})).join(" ")):null)),o.a.createElement(g.a,{item:!0,xs:6},o.a.createElement(J.a,{fullWidth:!0},o.a.createElement(R.a,null,"Type"),o.a.createElement(L.a,{value:r.type,onChange:function(e){return m(Object(D.a)(Object(D.a)({},r),{},{type:e.target.value}))}},o.a.createElement(_.a,{value:"Income"},"Income"),o.a.createElement(_.a,{value:"Expense"},"Expense")))),o.a.createElement(g.a,{item:!0,xs:6},o.a.createElement(J.a,{fullWidth:!0},o.a.createElement(R.a,null,"Category"),o.a.createElement(L.a,{value:r.category,onChange:function(e){return m(Object(D.a)(Object(D.a)({},r),{},{category:e.target.value}))}},S.map((function(e){return o.a.createElement(_.a,{key:e.type,value:e.type},e.type)}))))),o.a.createElement(g.a,{item:!0,xs:6},o.a.createElement(B.a,{type:"number",label:"Amount",value:r.amount,onChange:function(e){return m(Object(D.a)(Object(D.a)({},r),{},{amount:e.target.value}))},fullWidth:!0})),o.a.createElement(g.a,{item:!0,xs:6},o.a.createElement(B.a,{fullWidth:!0,label:"Date",type:"date",value:r.date,onChange:function(e){return m(Object(D.a)(Object(D.a)({},r),{},{date:G(e.target.value)}))}})),o.a.createElement(F.a,{className:e.button,variant:"outlined",color:"primary",fullWidth:!0,onClick:x},"Create"),o.a.createElement(g.a,{item:!0,xs:6},o.a.createElement(J.a,{fullWidth:!0},o.a.createElement(R.a,null,"Type"),o.a.createElement(L.a,{value:r.type,onChange:function(e){return m(Object(D.a)(Object(D.a)({},r),{},{type:e.target.value}))}},o.a.createElement(_.a,{value:"Income"},"Income"),o.a.createElement(_.a,{value:"Expense"},"Expense")))),o.a.createElement(g.a,{item:!0,xs:6},o.a.createElement(B.a,{type:"text",label:"Category Name",onChange:function(e){return b(e.target.value)},fullWidth:!0})),o.a.createElement(F.a,{className:e.buttonAdd,variant:"outlined",color:"primary",fullWidth:!0,onClick:function(){"Income"===r.type?window.localStorage.setItem("incomeCategorieslocal",JSON.stringify([].concat(Object(u.a)(Y),[{type:"".concat(f),amount:0,color:U[Math.floor(7*Math.random())]}]))):window.localStorage.setItem("expenseCategorieslocal",JSON.stringify([].concat(Object(u.a)(q),[{type:"".concat(f),amount:0,color:V[Math.floor(7*Math.random())]}]))),window.location.reload()}},"Add Categore"))},X=a(472),Z=a(475),ee=a(420),te=a(476),ae=a(489),ne=a(478),oe=a(479),ce=a(467),re=a(477),le=a(480),ie=a(97),ue=a(96),me=Object(h.a)((function(e){return{avatarIncome:{color:"#fff",backgroundColor:ie.a[500]},avatarExpense:{color:e.palette.getContrastText(ue.a[500]),backgroundColor:ue.a[500]},list:{maxHeight:"auto",overflow:"auto"}}})),se=function(){var e=me(),t=Object(n.useContext)(d),a=t.transactions,c=t.deleteTransaction,r=t.deleteAllTransaction;return o.a.createElement(X.a,{dense:!1,className:e.list},a.map((function(t){return o.a.createElement(Z.a,{direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0,key:t.id},o.a.createElement(ee.a,null,o.a.createElement(te.a,null,o.a.createElement(ae.a,{className:"Income"===t.type?e.avatarIncome:e.avatarExpense},o.a.createElement(re.a,null))),o.a.createElement(ne.a,{primary:t.category,secondary:"$".concat(t.amount," - ").concat(t.date)}),o.a.createElement(oe.a,null,o.a.createElement(ce.a,{edge:"end","aria-label":"delete",onClick:function(){return c(t.id)}},o.a.createElement(le.a,null)))))})),o.a.createElement("p",{style:{fontSize:18,color:"red",padding:1,border:"1px solid red"}},"DELETE_ALL_TRANSACTION",o.a.createElement(ce.a,{edge:"end","aria-label":"delete All",onClick:function(){return r()}},o.a.createElement(le.a,null))),o.a.createElement("p",{style:{fontSize:18,color:"red",padding:1,border:"1px solid red"}},"DELETE_Categories ",o.a.createElement(ce.a,{edge:"end","aria-label":"delete All",onClick:function(){return localStorage.removeItem("incomeCategorieslocal"),localStorage.removeItem("expenseCategorieslocal"),console.log(" cate deleted called"),void window.location.reload(!0)}},o.a.createElement(le.a,null))))},de=(Math.round(Math.random()),function(){return o.a.createElement("div",{elevation:3,style:{textAlign:"center",padding:"0 10%"}})}),pe=function(){var e=k(),t=Object(n.useContext)(d).balance;return o.a.createElement(f.a,{className:e.root},o.a.createElement(b.a,{title:"Finance Tracker",subheader:"For Personal Use"}),o.a.createElement(E.a,null,o.a.createElement(y.a,{align:"center",variant:"h5"},"Total Balance $",t),o.a.createElement(y.a,{variant:"subtitle1",style:{lineHeight:"1.5em",marginTop:"20px"}},o.a.createElement(de,null)),o.a.createElement(A.a,{className:e.divider}),o.a.createElement(Q,null)),o.a.createElement(E.a,{className:e.cartContent},o.a.createElement(g.a,{container:!0,spacing:2},o.a.createElement(g.a,{item:!0,xs:12},o.a.createElement(se,null)))))},ge=a(22),fe=Object(h.a)((function(e){return{desktop:Object(ge.a)({},e.breakpoints.up("sm"),{display:"none"}),mobile:Object(ge.a)({},e.breakpoints.down("sm"),{display:"none"}),main:Object(ge.a)({},e.breakpoints.up("sm"),{paddingBottom:"5%"}),last:Object(ge.a)({},e.breakpoints.down("sm"),{marginBottom:e.spacing(3),paddingBottom:"200px"}),grid:{"& > *":{margin:e.spacing(2)}}}})),be=a(193),Ee=a.n(be),ye=o.a.createRef(),Oe=function(){var e=fe(),t=Object(l.useSpeechContext)().speechState,a=Object(n.useRef)(null),c=G(new Date),r=Object(n.useState)(0),u=Object(i.a)(r,2),m=(u[0],u[1],Object(n.useState)(0)),s=Object(i.a)(m,2),d=(s[0],s[1],window),p=document,f=p.documentElement;p.getElementsByTagName("body")[0],f.clientWidth;d.innerHeight;var b={orientation:"portrait",unit:"in",format:[Math.floor(document.body.scrollWidth/50),Math.floor(document.body.scrollHeight/40)]};return Object(n.useEffect)((function(){t===l.SpeechState.Recording&&a.current.scrollIntoView()}),[t]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{width:"auto",height:"auto",background:"blue"},ref:ye},o.a.createElement(g.a,{className:e.grid,container:!0,spacing:0,alignItems:"center",justifyContent:"center"},o.a.createElement(g.a,{item:!0,xs:12,sm:4,className:e.mobile},o.a.createElement(T,{title:"Income"})),o.a.createElement(g.a,{ref:a,item:!0,xs:12,sm:3,className:e.main},o.a.createElement(pe,null)),o.a.createElement(g.a,{item:!0,xs:12,sm:4,className:e.desktop},o.a.createElement(T,{title:"Income"})),o.a.createElement(g.a,{item:!0,xs:12,sm:4,className:e.last},o.a.createElement(T,{title:"Expense"})),o.a.createElement(Ee.a,{targetRef:ye,filename:c+"PDF.pdf",options:b,x:.5,y:.5,scale:1},(function(e){var t=e.toPdf;return o.a.createElement("button",{style:{fontSize:18,color:"grey",padding:1},onClick:t},"Generate Pdf File")})))))};a(415);r.a.render(o.a.createElement(l.SpeechProvider,{appId:"7c4aee08-1073-4a32-b862-ebe1850e0732",language:"en-US"},o.a.createElement(p,null,o.a.createElement(Oe,null))),document.getElementById("root"))}},[[416,1,2]]]);
//# sourceMappingURL=main.ba2a3321.chunk.js.map