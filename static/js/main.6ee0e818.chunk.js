(this.webpackJsonpphramamanagement=this.webpackJsonpphramamanagement||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(15),d=n.n(i),a=(n(22),n(2)),r=n(3),o=n(6),l=(n(23),n(0)),j=function(){var e,t="test-admin",n="test-admin",s={First_name:"test-sales",Password:"test-sales",Avatar:"fas fa-user-tie",DOB:"26/07/1995",Exp:"5",Gender:"Male",Second_name:"-",id:1631540396845,img:"https://www.sasscaffold.com.au/wp-content/uploads/2019/10/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg"};!function(){if(JSON.parse(localStorage.getItem("TeamStock")))e=JSON.parse(localStorage.getItem("TeamStock"));else{var t=[];t.push(s),localStorage.setItem("TeamStock",JSON.stringify(t))}}(),console.log(e);var i=Object(c.useState)(!1),d=Object(o.a)(i,2),a=d[0],j=d[1],b=Object(c.useState)(!1),m=Object(o.a)(b,2),h=m[0],O=m[1];return Object(l.jsxs)("div",{id:"mainlogin",children:[a&&Object(l.jsx)(r.a,{to:"/storemanager"}),h&&Object(l.jsx)(r.a,{to:"/sales"}),Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"wrapper fadeInDown",children:Object(l.jsxs)("div",{id:"formContent",children:[Object(l.jsx)("h2",{className:"active",id:"head",children:" Manager Login "}),Object(l.jsx)("div",{className:"fadeIn first",children:Object(l.jsx)("img",{src:"https://mpng.subpng.com/20180402/otw/kisspng-project-management-information-technology-computer-manager-5ac2ee961ab602.4831266015227245021094.jpg",id:"icon",alt:"User Icon"})}),Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{type:"text",id:"managerlogin",className:"fadeIn second",name:"login",placeholder:"login"}),Object(l.jsx)("input",{type:"text",id:"managerpassword",className:"fadeIn third",name:"login",placeholder:"password"}),Object(l.jsx)("button",{id:"buttoning",onClick:function(){return function(){var e=document.getElementById("managerlogin").value,c=document.getElementById("managerpassword").value;console.log(e,c),""===e||""===c?alert("please fill all the fields"):e.toLowerCase()===t&&c===n?j(!0):alert("Either username or password is wrong")}()},children:"login"})]})]})})}),Object(l.jsx)("div",{children:Object(l.jsx)("div",{class:"wrapper fadeInDown",children:Object(l.jsxs)("div",{id:"formContent",children:[Object(l.jsx)("h2",{class:"active",id:"head",children:"Executive Login"}),Object(l.jsx)("div",{class:"fadeIn first",children:Object(l.jsx)("img",{src:"https://mpng.subpng.com/20180402/otw/kisspng-project-management-information-technology-computer-manager-5ac2ee961ab602.4831266015227245021094.jpg",id:"icon",alt:"User Icon"})}),Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{type:"text",id:"exelogin",class:"fadeIn second",name:"login",placeholder:"login"}),Object(l.jsx)("input",{type:"text",id:"exepassword",class:"fadeIn third",name:"login",placeholder:"password"}),Object(l.jsx)("button",{id:"buttoning",onClick:function(){return function(){console.log(e);var t=0,n=document.getElementById("exelogin").value.toLowerCase(),c=document.getElementById("exepassword").value;if(""==n||""==c)alert("please fill all the fields");else{for(var s=0;s<e.length;s++){if(console.log("ch",e[s].First_name,n,e[s].Password,c),e[s].First_name.toLowerCase()==n&&c==e[s].Password){t=1,O(!0);break}t=0}0===t&&alert("Either username or password is wrong")}}()},children:"login"})]})]})})})]})},b=n(4),m=(n(33),function(){var e=[{id:1,Name:"Paracetamol",MafName:"Cipla",Price:15,Stock:100,Discount:20},{id:2,Name:"Saradon",MafName:"Accure",Price:50,Stock:200,Discount:10},{id:3,Name:"Vicks 500",MafName:"Vicks",Price:80,Stock:500,Discount:50},{id:4,Name:"Disprin",MafName:"Azure",Price:20,Stock:100,Discount:0},{id:5,Name:"Ibuprofen",MafName:"Dr. Reddy",Price:50,Stock:10,Discount:30}],t=[{id:1,First_name:"Shubham",Second_name:"Upadhyay",Avatar:"fas fa-user-tie",DOB:"26/07/1995",Gender:"Male",Exp:5,Password:"abc",img:"https://www.sasscaffold.com.au/wp-content/uploads/2019/10/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg"},{id:2,First_name:"Shubham",Second_name:"Upadhyay",Avatar:"fas fa-user-tie",DOB:"26/07/1995",Gender:"Male",Exp:5,Password:"abc",img:"https://www.sasscaffold.com.au/wp-content/uploads/2019/10/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg"},{id:3,First_name:"Shubham",Second_name:"Upadhyay",Avatar:"fas fa-user-tie",DOB:"26/07/1995",Gender:"Male",Exp:5,Password:"abc",img:"https://www.sasscaffold.com.au/wp-content/uploads/2019/10/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg"},{id:4,First_name:"Shubham",Second_name:"Upadhyay",Avatar:"fas fa-user-tie",DOB:"26/07/1995",Gender:"Male",Exp:5,Password:"abc",img:"https://www.sasscaffold.com.au/wp-content/uploads/2019/10/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg"}],n=[],c=[],s=[],i=[];localStorage.getItem("MedicineStock")?c=JSON.parse(localStorage.getItem("MedicineStock")):(c=e,localStorage.setItem("MedicineStock",JSON.stringify(c))),localStorage.getItem("TeamStock")?s=JSON.parse(localStorage.getItem("TeamStock")):(s=t,localStorage.setItem("TeamStock",JSON.stringify(s))),localStorage.getItem("orderStock")?i=JSON.parse(localStorage.getItem("orderStock")):(i=n,localStorage.setItem("orderStock",JSON.stringify(i)));var d=function(e,t){for(var n=[],c=0;c<t;c++)n.push(e.pop());return n};return Object(l.jsxs)("div",{id:"maindiv",children:[Object(l.jsxs)("nav",{id:"navbaring",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{id:"welcome",children:"Welcome"}),Object(l.jsxs)(a.b,{to:"/login",children:["  ",Object(l.jsx)("button",{id:"logouting",children:"Logout"})," "]}),Object(l.jsx)("h3",{id:"name",children:"Aministrator "})]}),Object(l.jsxs)("div",{id:"desdiv",children:[Object(l.jsx)("h3",{id:"des",children:"Store Manager"}),Object(l.jsxs)(a.b,{to:"/storemanager",style:{textDecoration:"none"},children:[" ",Object(l.jsx)("i",{id:"homecoming",class:"fas fa-user-tie"})]})]})]}),Object(l.jsxs)("div",{id:"contentDiv",children:[Object(l.jsxs)("div",{id:"manageInventory",children:[Object(l.jsx)("h1",{children:"Manage Inventory"}),Object(l.jsx)("div",{id:"inventory",children:d(c,4).map((function(e){return Object(l.jsx)(h,Object(b.a)({},e))}))}),Object(l.jsxs)(a.b,{to:"/medInv",children:[" ",Object(l.jsx)("button",{id:"manageInvButton",class:"buttonClass",children:"Manage More"})]})]}),Object(l.jsxs)("div",{id:"ManageTeam",children:[Object(l.jsx)("h1",{children:"Manage Team"}),Object(l.jsx)("div",{id:"Team",children:d(s,2).map((function(e){return Object(l.jsx)(O,Object(b.a)({},e))}))}),Object(l.jsxs)(a.b,{to:"/myteam",children:["  ",Object(l.jsx)("button",{id:"manageTeamButton",class:"buttonClass",children:"Manage More"})]})]}),Object(l.jsxs)("div",{id:"manageOrders",children:[Object(l.jsx)("h1",{children:"Manage Orders"}),Object(l.jsx)("div",{id:"orders",children:d(i,1).map((function(e){return Object(l.jsx)(u,Object(b.a)({},e))}))}),Object(l.jsxs)(a.b,{to:"/order",children:[" ",Object(l.jsx)("button",{id:"manageOrderButton",class:"buttonClass",children:"Manage More"})," "]})]})]})]})}),h=function(e){var t=e.Name,n=e.MafName,c=e.Stock;return Object(l.jsxs)("div",{id:"meddetails",children:[Object(l.jsx)("h3",{children:t}),Object(l.jsx)("h3",{children:n}),Object(l.jsxs)("h4",{children:["In Stock",Object(l.jsxs)("span",{class:"ml",children:[c," Units"]})]})]})},O=function(e){var t=e.First_name,n=e.Second_name,c=e.Avatar;return Object(l.jsxs)("div",{id:"TeamDetails",children:[Object(l.jsx)("i",{class:c}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:t}),Object(l.jsx)("span",{style:{marginLeft:"5px"},children:n})]})]})},u=function(e){var t=e.name,n=e.id,c=(e.createdby,e.total);return Object(l.jsxs)("div",{id:"orderdetails",children:[Object(l.jsxs)("h3",{children:["Name: ",t]}),Object(l.jsxs)("h4",{children:["Order No.",Object(l.jsx)("span",{children:n})]}),Object(l.jsxs)("h4",{children:["Total ",Object(l.jsxs)("span",{children:["Rs. ",c]})]})]})},x=(n(34),function(){var e=JSON.parse(localStorage.getItem("orderStock"));return Object(l.jsxs)("div",{id:"maindiv",children:[Object(l.jsxs)("nav",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{id:"welcome",children:"Welcome"}),Object(l.jsxs)(a.b,{to:"/login",children:["  ",Object(l.jsx)("button",{id:"logout",children:"Logout"})," "]}),Object(l.jsx)("h3",{id:"name",children:"Test Sales"})]}),Object(l.jsxs)("div",{id:"desdiv",children:[Object(l.jsx)("h3",{id:"des",children:"Sales Executive"}),Object(l.jsx)("i",{id:"homecoming",class:"fas fa-user-tie"})]})]}),Object(l.jsxs)("div",{id:"content",children:[Object(l.jsx)("h1",{children:"Orders"}),Object(l.jsx)(a.b,{to:"/exeordupexe",children:Object(l.jsx)("button",{class:"buttonClass3",children:"NEW ORDER"})}),Object(l.jsx)("div",{id:"ordercontainer",children:e.map((function(e){return Object(l.jsx)(p,Object(b.a)({},e))}))})]})]})}),p=function(e){var t=e.id,n=e.name,c=e.mobile,s=e.products,i=e.total;e.createdby;return Object(l.jsxs)("div",{id:"orderDetailing",children:[Object(l.jsxs)("h3",{children:["Order No -",Object(l.jsx)("span",{children:t})]}),Object(l.jsxs)("h3",{children:["Customer Name - ",Object(l.jsx)("span",{children:n})]}),Object(l.jsxs)("h3",{children:["Mob: ",c]}),Object(l.jsxs)("div",{id:"medHold",children:[" ",s.map((function(e){return Object(l.jsx)(g,Object(b.a)({},e))}))]}),Object(l.jsxs)("h3",{children:["Total-",Object(l.jsxs)("span",{children:["Rs. ",i]})]})]})},g=function(e){var t=e.mediName,n=e.quantity;return Object(l.jsxs)("h3",{id:"product",children:[Object(l.jsx)("span",{children:t}),Object(l.jsx)("span",{children:n})]})},f=(n(35),function(){var e=JSON.parse(localStorage.getItem("MedicineStock")),t=Object(c.useState)(e.length),n=Object(o.a)(t,2),s=n[0],i=n[1];return Object(l.jsxs)("div",{id:"maindiv",children:[Object(l.jsxs)("nav",{id:"mnginvnav",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{id:"welcome",children:"Welcome"}),Object(l.jsx)("h3",{id:"name",children:"Aministrator"})]}),Object(l.jsxs)("div",{id:"search",children:[Object(l.jsx)("input",{type:Text,id:"searchField",Placeholder:"Search medicine",onKeyUp:function(){!function(){var e=JSON.parse(localStorage.getItem("MedicineStock")),t=document.getElementById("searchField").value;if(""==t)console.log("khali hai");else var n=e.filter((function(e){return e.Name.toLowerCase().includes(t.toLowerCase())||e.MafName.toLowerCase().includes(t.toLowerCase())}));console.log(n)}()}}),Object(l.jsx)("span",{children:Object(l.jsx)("i",{class:"fas fa-search"})})]}),Object(l.jsxs)("div",{id:"desdiv",children:[Object(l.jsx)("h3",{id:"des",children:"Store Manager"}),Object(l.jsxs)(a.b,{to:"/storemanager",style:{textDecoration:"none"},children:[" ",Object(l.jsx)("i",{id:"homecoming",class:"fas fa-user-tie"})]})]})]}),Object(l.jsxs)("div",{id:"contentArea",children:[Object(l.jsxs)("div",{id:"head",children:[Object(l.jsx)("h2",{children:"Inventory Management"}),Object(l.jsx)("button",{class:"buttonClassbz",onClick:function(){document.getElementById("additem").style.display="flex"},children:"ADD ITEM"})]}),Object(l.jsxs)("div",{id:"additem",children:[Object(l.jsxs)("div",{id:"cancel",children:[Object(l.jsx)("h3",{children:"Add Medicine"}),Object(l.jsx)("i",{class:"far fa-window-close",onClick:function(){document.getElementById("additem").style.display="none"}})]}),Object(l.jsx)("input",{id:"addMediname",type:Text,placeholder:"Name",class:"addform"}),Object(l.jsx)("input",{id:"addMediManufacturer",type:Text,placeholder:"Manufacturer",class:"addform"}),Object(l.jsx)("input",{id:"addMediPrice",type:Text,placeholder:"Price",class:"addform"}),Object(l.jsx)("input",{id:"addMediDiscount",type:Text,placeholder:"Discount",class:"addform"}),Object(l.jsx)("input",{id:"addMediStock",type:Text,placeholder:"Stock",class:"addform"}),Object(l.jsx)("button",{class:"buttonClass1",id:"btn",onClick:function(){!function(){var t={id:(new Date).getTime(),Name:document.getElementById("addMediname").value,MafName:document.getElementById("addMediManufacturer").value,Price:document.getElementById("addMediPrice").value,Discount:document.getElementById("addMediDiscount").value,Stock:document.getElementById("addMediStock").value};e.push(t),console.log(e),localStorage.setItem("MedicineStock",JSON.stringify(e)),console.log("local",JSON.stringify(e)),i(s+1),document.getElementById("additem").style.display="none"}()},children:"ADD ITEM"})]}),Object(l.jsx)("div",{id:"medHolder",children:e.map((function(e){return Object(l.jsx)(v,Object(b.a)({},e))}))})]})]})}),v=function(e){var t=e.id,n=e.Name,c=e.MafName,s=e.Price,i=e.Discount,d=e.Stock,r="/CRUDmed?id="+t;return Object(l.jsx)(a.b,{to:r,style:{width:"22%",textDecoration:"none"},children:Object(l.jsxs)("div",{id:"itemDetail",children:[Object(l.jsx)("h2",{children:n}),Object(l.jsx)("h3",{children:c}),Object(l.jsxs)("h3",{children:["Rs ",Object(l.jsx)("span",{children:s}),",",Object(l.jsxs)("span",{class:"margining",id:"discount",children:[i,Object(l.jsx)("span",{children:"% off"})]})]}),Object(l.jsxs)("p",{children:["Stock ",Object(l.jsx)("span",{children:d})]})]})})},y=(n(36),function(){var e=JSON.parse(localStorage.getItem("TeamStock")),t=Object(c.useState)(e.length),n=Object(o.a)(t,2),s=n[0],i=n[1];return Object(l.jsxs)("div",{id:"maindiv",children:[Object(l.jsxs)("nav",{id:"editTeamNav",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{id:"welcome",children:"Welcome"}),Object(l.jsx)("h3",{id:"name",children:"Aministrator"})]}),Object(l.jsxs)("div",{id:"search",children:[Object(l.jsx)("input",{type:Text,id:"searchField",Placeholder:"Search Member",onKeyUp:function(){!function(){var e=JSON.parse(localStorage.getItem("TeamStock")),t=document.getElementById("searchField").value;if(""==t)console.log("khali hai");else var n=e.filter((function(e){return e.First_name.toLowerCase().includes(t.toLowerCase())||e.Second_name.toLowerCase().includes(t.toLowerCase())||e.DOB.toLowerCase().includes(t.toLowerCase())}));console.log(n)}()}}),Object(l.jsx)("span",{children:Object(l.jsx)("i",{class:"fas fa-search"})})]}),Object(l.jsxs)("div",{id:"desdiv",children:[Object(l.jsx)("h3",{id:"des",children:"Store Manager"}),Object(l.jsxs)(a.b,{to:"/storemanager",style:{textDecoration:"none"},children:[" ",Object(l.jsx)("i",{id:"homecoming",class:"fas fa-user-tie"})]})]})]}),Object(l.jsxs)("div",{id:"contentArea",children:[Object(l.jsxs)("div",{id:"head",children:[Object(l.jsx)("h2",{children:"Team Management"}),Object(l.jsx)("button",{onClick:function(){return document.getElementById("addMember").style.display="flex"},class:"buttonClassaz",children:"ADD MEMBER"})]}),Object(l.jsxs)("div",{id:"addMember",children:[Object(l.jsxs)("div",{id:"canceled",children:[" ",Object(l.jsx)("h2",{children:"Add team Member"}),Object(l.jsx)("i",{class:"far fa-window-close",onClick:function(){document.getElementById("addMember").style.display="none"}})]}),Object(l.jsx)("input",{type:Text,placeholder:"First Name",class:"addform",id:"firstname"}),Object(l.jsx)("input",{type:Text,placeholder:"Second Name",class:"addform",id:"secondname"}),Object(l.jsx)("input",{type:Text,placeholder:"Gender",class:"addform",id:"gender"}),Object(l.jsx)("input",{type:Text,placeholder:"Date of Birth",class:"addform",id:"dob"}),Object(l.jsx)("input",{type:Text,placeholder:"Experience",class:"addform",id:"experience"}),Object(l.jsx)("input",{type:"password",placeholder:"Password",class:"addform",id:"pass"}),Object(l.jsx)("button",{onClick:function(){return function(){var t={id:(new Date).getTime(),First_name:document.getElementById("firstname").value,Second_name:document.getElementById("secondname").value,Avatar:"fas fa-user-tie",DOB:document.getElementById("dob").value,Gender:document.getElementById("gender").value,Exp:document.getElementById("experience").value,Password:document.getElementById("pass").value,img:"https://www.sasscaffold.com.au/wp-content/uploads/2019/10/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg"};e.push(t),console.log(e),localStorage.setItem("TeamStock",JSON.stringify(e)),console.log("local",JSON.stringify(e)),i(s+1),document.getElementById("addMember").style.display="none"}()},class:"buttonClass2",id:"btn2",children:"ADD MEMBER"})]}),Object(l.jsx)("div",{id:"TeamHolder",children:e.map((function(e){return Object(l.jsx)(S,Object(b.a)({},e))}))})]})]})}),S=function(e){var t=e.id,n=e.First_name,c=e.Second_name,s=e.Gender,i=e.Exp,d=e.img,r=e.Password,o=e.DOB,j="/CRUDteam?id="+t;return Object(l.jsx)(a.b,{to:j,style:{textDecoration:"none"},children:Object(l.jsxs)("div",{id:"TeamDetail",style:{textDecoration:"none",width:"100%"},children:[Object(l.jsx)("div",{id:"teamImg",children:Object(l.jsx)("img",{src:d})}),Object(l.jsxs)("div",{id:"memdetail",children:[Object(l.jsx)("div",{children:Object(l.jsxs)("h3",{children:[Object(l.jsxs)("span",{id:"firstName",children:["Name: ",n]}),Object(l.jsx)("span",{children:c})]})}),Object(l.jsx)("h4",{children:s}),Object(l.jsxs)("h4",{children:["DOB: ",o]}),Object(l.jsxs)("h4",{children:["Exp Years: ",i," "]}),Object(l.jsxs)("h4",{children:["Password: ",r]})]})]})})},N=(n(37),function(){var e=JSON.parse(localStorage.getItem("orderStock"));return Object(l.jsxs)("div",{id:"maindiv",children:[Object(l.jsxs)("nav",{id:"manageordnav",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{id:"welcome",children:"Welcome"}),Object(l.jsx)("h3",{id:"name",children:"Aministrator"})]}),Object(l.jsxs)("div",{id:"search",children:[Object(l.jsx)("input",{type:Text,id:"searchField",Placeholder:"Search Order",onKeyUp:function(){!function(){var e=JSON.parse(localStorage.getItem("orderStock")),t=document.getElementById("searchField").value;if(""==t)console.log("khali hai");else var n=e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())||e.mobile.toLowerCase().includes(t.toLowerCase())}));console.log(n)}()}}),Object(l.jsx)("span",{children:Object(l.jsx)("i",{class:"fas fa-search"})})]}),Object(l.jsxs)("div",{id:"desdiv",children:[Object(l.jsx)("h3",{id:"des",children:"Store Manager"}),Object(l.jsxs)(a.b,{to:"/storemanager",style:{textDecoration:"none"},children:[" ",Object(l.jsx)("i",{id:"homecoming",class:"fas fa-user-tie"})]})]})]}),Object(l.jsxs)("div",{id:"content",children:[Object(l.jsx)("h1",{children:"Manage Orders"}),Object(l.jsx)(a.b,{to:"/neworder",children:Object(l.jsx)("button",{class:"buttonClass3",children:"NEW ORDER"})}),Object(l.jsx)("div",{id:"ordercontainer",children:e.map((function(e){return Object(l.jsx)(I,Object(b.a)({},e))}))})]})]})}),I=function(e){var t=e.id,n=e.name,c=e.mobile,s=e.products,i=e.total,d=(e.createdby,"/CRUDorder?id="+t);return Object(l.jsxs)(a.b,{to:d,style:{textDecoration:"none",width:"40%"},children:[Object(l.jsxs)("div",{id:"orderDetail",children:[Object(l.jsxs)("h3",{children:["Order No -",Object(l.jsx)("span",{children:t})]}),Object(l.jsxs)("h3",{children:["Customer Name - ",Object(l.jsx)("span",{children:n})]}),Object(l.jsxs)("h3",{children:["Mob: ",c]}),Object(l.jsx)("div",{id:"medHold",children:s.map((function(e){return Object(l.jsx)(E,Object(b.a)({},e))}))}),Object(l.jsxs)("h3",{children:["Rs. ",i]})]})," "]})},E=function(e){var t=e.mediName,n=e.quantity;return Object(l.jsxs)("div",{id:"product",children:[Object(l.jsxs)("span",{children:["Name: ",t]}),Object(l.jsxs)("span",{style:{marginLeft:"3%"},children:["Qty: ",n]})]})},w=(n(38),function(e){var t=Object(r.g)().search,n=new URLSearchParams(t).get("id");console.log(n);var c,s=JSON.parse(localStorage.getItem("MedicineStock"));console.log(c);return Object(l.jsxs)("div",{id:"maindiv",children:[function(){for(var e=0;e<s.length;e++)if(s[e].id==n){c=s[e];break}}(),Object(l.jsxs)("nav",{id:"crudmednav",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{id:"welcome",children:"Welcome"}),Object(l.jsx)("h3",{id:"name",children:"Shubham Upadhyay"})]}),Object(l.jsxs)("div",{id:"desdiv",children:[Object(l.jsx)("h3",{id:"des",children:"Store Manager"}),Object(l.jsxs)(a.b,{to:"/storemanager",style:{textDecoration:"none"},children:[" ",Object(l.jsx)("i",{id:"homecoming",class:"fas fa-user-tie"})]})]})]}),Object(l.jsxs)("div",{id:"formdiving",children:[Object(l.jsx)("h1",{children:"Manage Medicine"}),Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{class:"setwidth",children:[" ",Object(l.jsxs)("span",{contentEditable:"false",class:"editing",children:["Name:",Object(l.jsxs)("span",{id:"medName1",className:"medName1",contentEditable:"true",children:[" ",c.Name]})]}),"  "]}),Object(l.jsxs)("div",{class:"setwidth",children:["  ",Object(l.jsxs)("span",{contentEditable:"false",class:"editing",children:["Maf Name:  ",Object(l.jsxs)("span",{id:"mafName1",className:"mafName1",contentEditable:!0,children:[c.MafName," "]})]})]}),Object(l.jsxs)("div",{class:"setwidth",children:["  ",Object(l.jsxs)("span",{contentEditable:"false",class:"editing",children:["In Stock:",Object(l.jsx)("span",{id:"stocks1",className:"stock1",contentEditable:"true",children:c.Stock})]})]}),Object(l.jsxs)("div",{class:"setwidth",children:["  ",Object(l.jsxs)("span",{contentEditable:"false",class:"editing",children:["Price: Rs",Object(l.jsx)("span",{id:"price1",className:"price1",contentEditable:!0,children:c.Price})]})]}),Object(l.jsxs)("div",{class:"setwidth",children:["  ",Object(l.jsxs)("span",{contentEditable:"false",class:"editing",children:["Discount: ",Object(l.jsx)("span",{id:"discount1",className:"discount1",contentEditable:!0,children:c.Discount}),Object(l.jsx)("span",{children:"%"})]})]})]}),Object(l.jsxs)("div",{id:"buttonDiv",children:[Object(l.jsx)(a.b,{to:"/medInv",onClick:function(){return function(){var e,t;for(t=0;t<s.length;t++)if(s[t].id==n){e=s[t];break}var c={id:e.id,Name:document.getElementById("medName1").innerText,MafName:document.getElementById("mafName1").innerText,Price:document.getElementById("price1").innerText,Discount:document.getElementById("discount1").innerText,Stock:document.getElementById("stocks1").innerText};s[t]=c,localStorage.setItem("MedicineStock",JSON.stringify(s))}()},children:Object(l.jsx)("button",{class:"buttonClass4",id:"update",children:"Update"})}),Object(l.jsx)(a.b,{to:"/medInv",onClick:function(){return function(){for(var e,t=0;t<s.length;t++)if(s[t].id==n){e=t;break}localStorage.setItem("MedicineStock",JSON.stringify(s.slice(0,e).concat(s.slice(e+1))))}()},children:Object(l.jsx)("button",{class:"buttonClass4",id:"delete",children:"Delete"})})]})]})]})}),k=(n(39),function(e){var t=Object(r.g)().search,n=new URLSearchParams(t).get("id");console.log(n);var c,s=JSON.parse(localStorage.getItem("TeamStock"));console.log(c);return Object(l.jsxs)("div",{id:"maindiv",children:[function(){for(var e=0;e<s.length;e++)if(s[e].id==n){c=s[e];break}}(),Object(l.jsxs)("nav",{id:"teammemnav",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{id:"welcome",children:"Welcome"}),Object(l.jsx)("h3",{id:"name",children:"Aministrator"})]}),Object(l.jsxs)("div",{id:"desdiv",children:[Object(l.jsx)("h3",{id:"des",children:"Store Manager"}),Object(l.jsxs)(a.b,{to:"/storemanager",style:{textDecoration:"none"},children:[" ",Object(l.jsx)("i",{id:"homecoming",class:"fas fa-user-tie"})]})]})]}),Object(l.jsxs)("div",{id:"formdivi",children:[Object(l.jsx)("h1",{children:"Manage Sales Executive"}),Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{class:"widthadjust",children:[" ",Object(l.jsx)("span",{children:"First Name"}),"   ",Object(l.jsx)("p",{id:"fName",contentEditable:"true",children:c.First_name})]}),Object(l.jsxs)("div",{class:"widthadjust",children:[Object(l.jsx)("span",{children:" Second Name"})," ",Object(l.jsxs)("p",{id:"sName",contentEditable:!0,children:[c.Second_name," "]})]}),Object(l.jsxs)("div",{class:"widthadjust",children:[Object(l.jsx)("span",{children:" DOB "}),Object(l.jsx)("p",{id:"dob",contentEditable:"true",children:c.DOB})]}),Object(l.jsxs)("div",{class:"widthadjust",children:[Object(l.jsx)("span",{children:" Gender "}),Object(l.jsx)("p",{id:"gender",contentEditable:!0,children:c.Gender})]}),Object(l.jsxs)("div",{class:"widthadjust",children:[Object(l.jsx)("span",{children:" Exp Yrs "}),Object(l.jsx)("p",{id:"exp",contentEditable:!0,children:c.Exp})]}),Object(l.jsxs)("div",{class:"widthadjust",children:[Object(l.jsx)("span",{children:" Password "}),Object(l.jsx)("p",{id:"pass",contentEditable:!0,children:c.Password})]})]}),Object(l.jsxs)("div",{id:"buttonDiv",children:[Object(l.jsx)(a.b,{to:"/myteam",onClick:function(){return function(){var e,t;for(t=0;t<s.length;t++)if(s[t].id==n){e=s[t];break}var c={id:e.id,First_name:document.getElementById("fName").innerText,Second_name:document.getElementById("sName").innerText,DOB:document.getElementById("dob").innerText,Gender:document.getElementById("gender").innerText,Exp:document.getElementById("exp").innerText,Password:document.getElementById("pass").innerText,Avatar:"fas fa-user-tie",img:"https://www.sasscaffold.com.au/wp-content/uploads/2019/10/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg"};s[t]=c,localStorage.setItem("TeamStock",JSON.stringify(s))}()},children:Object(l.jsx)("button",{class:"buttonClass4",id:"update",children:"Update"})}),Object(l.jsx)(a.b,{to:"/myteam",onClick:function(){return function(){for(var e,t=0;t<s.length;t++)if(s[t].id==n){e=t;break}localStorage.setItem("TeamStock",JSON.stringify(s.slice(0,e).concat(s.slice(e+1))))}()},children:Object(l.jsx)("button",{class:"buttonClass4",id:"delete",children:"Delete"})})]})]})]})}),M=(n(40),function(e){var t=Object(c.useState)(0),n=Object(o.a)(t,2),s=n[0],i=n[1],d=Object(c.useState)([]),j=Object(o.a)(d,2),m=j[0],h=j[1],O=JSON.parse(localStorage.getItem("MedicineStock")),u=Object(r.g)().search,x=new URLSearchParams(u).get("id");console.log(x);var p,g=JSON.parse(localStorage.getItem("orderStock"));console.log(p);return Object(l.jsxs)("div",{id:"maindiv",children:[function(){for(var e=0;e<g.length;e++)if(g[e].id==x){p=g[e];break}}(),Object(l.jsxs)("nav",{id:"crudordnav",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{id:"welcome",children:"Welcome"}),Object(l.jsx)("h3",{id:"name",children:"Shubham Upadhyay"})]}),Object(l.jsxs)("div",{id:"desdiv",children:[Object(l.jsx)("h3",{id:"des",children:"Store Manager"}),Object(l.jsxs)(a.b,{to:"/storemanager",style:{textDecoration:"none"},children:[" ",Object(l.jsx)("i",{id:"homecoming",class:"fas fa-user-tie"})]})]})]}),Object(l.jsxs)("div",{id:"formDiv",children:[Object(l.jsx)("h1",{children:"Manage Order"}),Object(l.jsxs)("h4",{children:["Order Number ",Object(l.jsx)("span",{id:"orderNo",children:p.id})]}),Object(l.jsxs)("form",{children:[Object(l.jsx)("p",{id:"Nameing",contentEditable:"true",class:"edit",children:p.name}),Object(l.jsx)("p",{id:"mobile",contentEditable:"true",class:"edit",children:p.mobile}),Object(l.jsxs)("div",{id:"ordset",children:["  ",p.products.map((function(e){return Object(l.jsx)(C,Object(b.a)({},e))}))]}),Object(l.jsx)("p",{id:"total",children:p.total})]}),Object(l.jsx)("div",{children:Object(l.jsx)("buttton",{id:"addmed",className:"buttonClass7",onClick:function(){document.getElementById("addMed").style.display="flex"},children:" Add more "})}),Object(l.jsxs)("div",{id:"buttonDiving",children:[Object(l.jsx)(a.b,{to:"/order",onClick:function(){return function(){var e,t;for(t=0;t<g.length;t++)if(g[t].id==x){e=g[t];break}var n={id:e.id,createdby:e.createdby,products:m,mobile:document.getElementById("mobile").innerText,name:document.getElementById("Nameing").innerText,total:document.getElementById("total").innerText};g[t]=n,localStorage.setItem("orderStock",JSON.stringify(g))}()},children:Object(l.jsx)("button",{className:"buttonClass7",id:"update",children:"Update"})}),Object(l.jsx)(a.b,{to:"/order",onClick:function(){return function(){for(var e,t=0;t<g.length;t++)if(g[t].id==x){e=t;break}localStorage.setItem("orderStock",JSON.stringify(g.slice(0,e).concat(g.slice(e+1))))}()},children:Object(l.jsx)("button",{className:"buttonClass7",id:"delete",children:"Delete"})})]})]}),Object(l.jsxs)("div",{id:"addMed",children:[Object(l.jsx)("h2",{children:"MEDICINE LIST"}),Object(l.jsx)("div",{id:"hold",children:O.map((function(e){return Object(l.jsx)(D,Object(b.a)({},e))}))}),Object(l.jsx)("buttton",{id:"addmed",className:"buttonClass4",onClick:function(){return function(){for(var e,t=document.getElementsByClassName("dataget"),n=t.length,c=[],d=0;d<n;d++)c.push({mediName:t[d].children[0].innerHTML,quantity:t[d].children[3].innerHTML});console.log(c),h(c);for(var a=0;a<g.length;a++)if(g[a].id==x){e=a;break}g[e].products=c,localStorage.setItem("orderStock",JSON.stringify(g)),i(s+1),document.getElementById("addMed").style.display="none"}()},children:" Done"})]})]})}),C=function(e){var t=e.mediName,n=e.quantity;return Object(l.jsxs)("div",{id:"product",children:[Object(l.jsx)("span",{children:t}),Object(l.jsxs)("span",{children:["Qty: ",n]})]})},D=function(e){e.id;var t=e.Name,n=e.Price;return Object(l.jsxs)("div",{id:"medhold",className:"dataget",children:[Object(l.jsx)("p",{children:t}),Object(l.jsx)("p",{children:n}),Object(l.jsx)("span",{id:"minus",onClick:function(e){var t=parseInt(e.target.parentElement.childNodes[3].childNodes[0].data);t>0?(t-=1,e.target.parentElement.childNodes[3].childNodes[0].data=t):alert("Cant be less than 0")},children:"-"}),Object(l.jsx)("span",{children:"0"}),Object(l.jsx)("span",{id:"plus",onClick:function(e){var t=parseInt(e.target.parentElement.childNodes[3].childNodes[0].data);t+=1,e.target.parentElement.childNodes[3].childNodes[0].data=t,console.log(document.getElementsByClassName("dataget")),console.log(document.getElementsByClassName("dataget")[0].children[0].innerHTML),console.log(document.getElementsByClassName("dataget")[0].children[3].innerHTML)},children:"+"})]})},B=(n(41),function(e){var t=Object(c.useState)(0),n=Object(o.a)(t,2),s=(n[0],n[1],Object(c.useState)([])),i=Object(o.a)(s,2),d=i[0],r=i[1],j=JSON.parse(localStorage.getItem("MedicineStock")),m=function(){for(var e=0,t=0;t<d.length;t++){for(var n=0,c=0;c<j.length;c++)if(d[t].mediName===j[c].Name){n=parseInt(j[t].Price);break}e+=parseInt(d[t].quantity)*n}return e};return Object(l.jsxs)("div",{id:"maindiv",children:[Object(l.jsxs)("nav",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{id:"welcome",children:"Welcome"}),Object(l.jsx)("h3",{id:"name",children:"Aministrator"})]}),Object(l.jsxs)("div",{id:"desdiv",children:[Object(l.jsx)("h3",{id:"des",children:"Store Manager"}),Object(l.jsxs)(a.b,{to:"/storemanager",style:{textDecoration:"none"},children:[" ",Object(l.jsx)("i",{id:"homecoming",class:"fas fa-user-tie"})]})]})]}),Object(l.jsxs)("div",{id:"formdiv",children:[Object(l.jsx)("h1",{children:"Create New Order"}),Object(l.jsxs)("h4",{children:["Order Number ",Object(l.jsx)("span",{id:"orderNo"})]}),Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{type:Text,id:"Name",placeholder:"Name"}),Object(l.jsx)("input",{type:Text,id:"moblie",placeholder:"Mobile"}),Object(l.jsx)("div",{id:"holderBox",children:d.map((function(e){return Object(l.jsx)(P,Object(b.a)({},e))}))}),Object(l.jsxs)("p",{id:"total",children:["Total Rs. ",m()]})]}),Object(l.jsxs)("div",{id:"buttonDiv",children:[Object(l.jsx)("buttton",{id:"addmed",className:"buttonClass5",onClick:function(){document.getElementById("addMed").style.display="flex"},children:" Add Medicine "}),Object(l.jsxs)(a.b,{to:"/order",children:[" ",Object(l.jsx)("button",{id:"Confirm Order",className:"buttonClass4",onClick:function(){return function(){if(null===document.getElementById("Name").value)alert("all fileds requried");else{var e=JSON.parse(localStorage.getItem("orderStock")),t={id:(new Date).getTime(),name:document.getElementById("Name").value,mobile:document.getElementById("moblie").value,products:d,total:document.getElementById("total").innerText};e.push(t),localStorage.setItem("orderStock",JSON.stringify(e)),console.log(document.getElementById("Name").value)}}()},children:" Confirm"})]})]})]}),Object(l.jsxs)("div",{id:"addMed",children:[Object(l.jsxs)("div",{id:"cross",children:[Object(l.jsx)("h2",{children:"MEDICINE LIST"}),Object(l.jsx)("i",{class:"far fa-window-close",onClick:function(){document.getElementById("addMed").style.display="none"}})]}),Object(l.jsx)("div",{id:"hold",children:Object(l.jsx)("div",{id:"test",children:j.map((function(e){return Object(l.jsx)(T,Object(b.a)({},e))}))})}),Object(l.jsx)("buttton",{id:"addmed",className:"buttonClass5",onClick:function(){return function(){for(var e=document.getElementsByClassName("dataget"),t=e.length,n=[],c=0;c<t;c++)n.push({mediName:e[c].children[0].innerHTML,quantity:e[c].children[3].innerHTML});r(n),alert("after render of hook"),m(),document.getElementById("addMed").style.display="none"}()},children:" ADD"})]})]})}),T=function(e){e.id;var t=e.Name,n=e.Price;return Object(l.jsxs)("div",{id:"medhold",className:"dataget",children:[Object(l.jsx)("p",{children:t}),Object(l.jsx)("p",{children:n}),Object(l.jsx)("span",{id:"minus",onClick:function(e){var t=parseInt(e.target.parentElement.childNodes[3].childNodes[0].data);t>0?(t-=1,e.target.parentElement.childNodes[3].childNodes[0].data=t):alert("Cant be less than 0")},children:"-"}),Object(l.jsx)("span",{children:"0"}),Object(l.jsx)("span",{id:"plus",onClick:function(e){var t=parseInt(e.target.parentElement.childNodes[3].childNodes[0].data);t+=1,e.target.parentElement.childNodes[3].childNodes[0].data=t},children:"+"})]})},P=function(e){var t=e.mediName,n=e.quantity;return Object(l.jsxs)("div",{id:"prod",children:[Object(l.jsx)("span",{children:t}),Object(l.jsxs)("span",{id:"xyz",children:["Qty.",n]})]})},L=(n(42),function(e){var t=Object(c.useState)(0),n=Object(o.a)(t,2),s=(n[0],n[1],Object(c.useState)([])),i=Object(o.a)(s,2),d=i[0],r=i[1],j=JSON.parse(localStorage.getItem("MedicineStock")),m=function(){for(var e=0,t=0;t<d.length;t++){for(var n=0,c=0;c<j.length;c++)if(d[t].mediName===j[c].Name){n=parseInt(j[t].Price);break}e+=parseInt(d[t].quantity)*n}return e};return Object(l.jsxs)("div",{id:"maindiv",children:[Object(l.jsxs)("nav",{id:"con",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{id:"welcome",children:"Welcome"}),Object(l.jsxs)(a.b,{to:"/login",children:["  ",Object(l.jsx)("button",{id:"logout",children:"Logout"})," "]}),Object(l.jsx)("h3",{id:"name",children:"Test Sales"})]}),Object(l.jsxs)("div",{id:"desdiv",children:[Object(l.jsx)("h3",{id:"des",children:"Sales Executive"}),Object(l.jsxs)(a.b,{to:"/sales",style:{textDecoration:"none"},children:[" ",Object(l.jsx)("i",{id:"homecoming",class:"fas fa-user-tie"})]})]})]}),Object(l.jsxs)("div",{id:"formdiv",children:[Object(l.jsx)("h1",{children:"Create Order"}),Object(l.jsxs)("h4",{children:["Order Number ",Object(l.jsx)("span",{id:"orderNo"})]}),Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{type:Text,id:"Name",placeholder:"Name"}),Object(l.jsx)("input",{type:Text,id:"moblie",placeholder:"Mobile"}),Object(l.jsxs)("div",{id:"holderBoxing",children:[" ",d.map((function(e){return Object(l.jsx)(_,Object(b.a)({},e))}))]}),Object(l.jsxs)("p",{id:"total",children:["Rs.",m()]})]}),Object(l.jsxs)("div",{id:"buttonDiv",children:[Object(l.jsx)("buttton",{id:"addmed",className:"buttonClass5",onClick:function(){document.getElementById("addMed").style.display="flex"},children:" Add Medicine "}),Object(l.jsxs)(a.b,{to:"/sales",children:[" ",Object(l.jsx)("button",{id:"Confirm Order",className:"buttonClass4",onClick:function(){return function(){var e=JSON.parse(localStorage.getItem("orderStock")),t={id:(new Date).getTime(),name:document.getElementById("Name").value,mobile:document.getElementById("moblie").value,products:d,total:document.getElementById("total").innerText};e.push(t),localStorage.setItem("orderStock",JSON.stringify(e))}()},children:" Confirm"})]})]})]}),Object(l.jsxs)("div",{id:"addMed",children:[Object(l.jsx)("h2",{children:"MEDICINE LIST"}),Object(l.jsx)("div",{id:"hold",children:j.map((function(e){return Object(l.jsx)(J,Object(b.a)({},e))}))}),Object(l.jsx)("buttton",{id:"addmed",className:"buttonClass4",onClick:function(){return function(){for(var e=document.getElementsByClassName("dataget"),t=e.length,n=[],c=0;c<t;c++)n.push({mediName:e[c].children[0].innerHTML,quantity:e[c].children[3].innerHTML});r(n),alert("after render of hook"),m(),document.getElementById("addMed").style.display="none"}()},children:" ADD"})]})]})}),J=function(e){e.id;var t=e.Name,n=e.Price;return Object(l.jsxs)("div",{id:"medhold",className:"dataget",children:[Object(l.jsx)("p",{children:t}),Object(l.jsx)("p",{children:n}),Object(l.jsx)("span",{id:"minus",onClick:function(e){var t=parseInt(e.target.parentElement.childNodes[3].childNodes[0].data);t>0?(t-=1,e.target.parentElement.childNodes[3].childNodes[0].data=t):alert("Cant be less than 0")},children:"-"}),Object(l.jsx)("span",{children:"0"}),Object(l.jsx)("span",{id:"plus",onClick:function(e){var t=parseInt(e.target.parentElement.childNodes[3].childNodes[0].data);t+=1,e.target.parentElement.childNodes[3].childNodes[0].data=t},children:"+"})]})},_=function(e){var t=e.mediName,n=e.quantity;return Object(l.jsxs)("div",{id:"proding",children:[Object(l.jsx)("span",{children:t}),Object(l.jsxs)("span",{id:"xyz",children:["Qty.",n]})]})},A=function(){return Object(l.jsx)(a.a,{children:Object(l.jsx)("div",{children:Object(l.jsxs)(r.d,{children:[Object(l.jsx)(r.b,{path:"/storemanager",component:m}),Object(l.jsx)(r.b,{path:"/sales",component:x}),Object(l.jsx)(r.b,{path:"/medInv",component:f}),Object(l.jsx)(r.b,{path:"/myteam",component:y}),Object(l.jsx)(r.b,{path:"/order",component:N}),Object(l.jsx)(r.b,{path:"/CRUDmed",component:w}),Object(l.jsx)(r.b,{path:"/CRUDteam",component:k}),Object(l.jsx)(r.b,{path:"/CRUDorder",component:M}),Object(l.jsx)(r.b,{path:"/NewOrder",component:B}),Object(l.jsx)(r.b,{path:"/exeordup",component:L}),Object(l.jsx)(r.b,{path:"/exeordupexe",component:L}),Object(l.jsx)(r.b,{path:"/login",component:j}),Object(l.jsx)(j,{})]})})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,d=t.getTTFB;n(e),c(e),s(e),i(e),d(e)}))};d.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(A,{})}),document.getElementById("root")),F()}},[[43,1,2]]]);
//# sourceMappingURL=main.6ee0e818.chunk.js.map