(function(t){function e(e){for(var a,o,r=e[0],l=e[1],c=e[2],u=0,m=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,r=1;r<s.length;r++){var l=s[r];0!==n[l]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},n={app:0},i=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"08ac":function(t,e,s){},"113a":function(t,e,s){"use strict";var a=s("c950"),n=s.n(a);n.a},"158c":function(t,e,s){"use strict";var a=s("ce1b"),n=s.n(a);n.a},"1a12":function(t,e,s){},"1fbc":function(t,e,s){"use strict";var a=s("2319"),n=s.n(a);n.a},2319:function(t,e,s){},"24fa":function(t,e,s){},3712:function(t,e,s){},"3b8a":function(t,e,s){"use strict";var a=s("3712"),n=s.n(a);n.a},"4c41":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid",attrs:{id:"app"}},[s("navbar"),t._v(" "),s("router-view")],1)},i=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-secondary"},[s("router-link",{staticClass:"navbar-brand postit text-light",attrs:{to:{name:"home"}}},[t._v("P♥ST IT")]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item",class:{active:"home"==t.$route.name}},[s("router-link",{staticClass:"nav-link text-warning nav",attrs:{to:{name:"home"}}},[t._v("Home")])],1),t._v(" "),t.$auth.isAuthenticated?s("li",{staticClass:"nav-item",class:{active:"boards"==t.$route.name}},[s("router-link",{staticClass:"nav-link text-warning nav",attrs:{to:{name:"boards"}}},[t._v("My-Dashboard")])],1):t._e()]),t._v(" "),s("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?s("button",{staticClass:"btn btn-success",on:{click:t.logout}},[t._v("logout")]):s("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v("Login")])])])],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],l=s("bc3a"),c=s.n(l);c.a.create({baseURL:"https://localhost:3000",withCredentials:!0});var d={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"),console.log("this.$auth.user: "),console.log(this.$auth.user)},async logout(){this.$store.dispatch("resetBearer"),await this.$auth.logout({returnTo:window.location.origin})}}},u=d,m=(s("5dfc"),s("2877")),p=Object(m["a"])(u,o,r,!1,null,null,null),h=p.exports,v=s("335d"),b={name:"App",async beforeCreate(){try{await Object(v["c"])(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile")}catch(t){this.$router.push({name:"home"})}},components:{Navbar:h}},f=b,k=(s("5c0b"),Object(m["a"])(f,n,i,!1,null,null,null)),g=k.exports,_=s("8c4f"),C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cork row justify-content-center"},[s("div",{staticClass:"home mt-5 text-primary"},[s("h1",{staticClass:"text-right pr-3 text-danger m-0"},[t._v("X")]),t._v(" "),s("p",{staticClass:"text-left pl-3"},[t._v("• POST IT")]),t._v(" "),s("p",{staticClass:"about pt-2"},[t._v("♥ where everthing sticks")]),t._v(" "),s("p",{staticClass:"by"},[t._v("By: Eva and Ricks")])])])}],$={name:"home",data(){return{}},computed:{},methods:{},components:{}},T=$,x=(s("1fbc"),Object(m["a"])(T,C,w,!1,null,"7e358bb7",null)),y=x.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cork boards row"},[s("h1",{staticClass:"col-12 text-light mt-5 header"},[t._v("STICK IT HERE!")]),t._v(" "),s("form",{staticClass:"col-12",on:{submit:function(e){return e.preventDefault(),t.addBoard(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.title,expression:"newBoard.title"}],staticClass:"input-front",attrs:{type:"text",placeholder:" add board...",required:""},domProps:{value:t.newBoard.title},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"title",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.description,expression:"newBoard.description"}],staticClass:"input-front",attrs:{type:"text",placeholder:" description..."},domProps:{value:t.newBoard.description},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"description",e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-secondary border-dark",attrs:{type:"submit"}},[t._v("+")])]),t._v(" "),s("div",{staticClass:"row m-5 justify-content-center"},t._l(t.boards,(function(e){return s("div",{key:e.id,staticClass:"boards-front m-5"},[s("div",{staticClass:"col-12 text-right ml-3"},[s("button",{staticClass:"btn pb-0",on:{click:function(s){t.deleteBoard(e.id)}}},[s("h4",{staticClass:"text-danger"},[t._v("X")])])]),t._v(" "),s("router-link",{staticClass:"col-5 front-board",attrs:{to:{name:"board",params:{boardId:e.id}}}},[t._v(t._s(e.title))])],1)})))])},B=[],L={name:"boards",mounted(){this.$store.dispatch("getBoards")},data(){return{newBoard:{title:"",description:""}}},computed:{boards(){return this.$store.state.boards}},methods:{addBoard(){this.$store.dispatch("addBoard",this.newBoard),this.newBoard={title:"",description:""}},deleteBoard(t){console.log("deleteBoard1",this.$route.params.boardId),console.log("deleteBoard2",t),this.$store.dispatch("deleteBoard",t)}}},D=L,O=(s("3b8a"),Object(m["a"])(D,I,B,!1,null,null,null)),j=O.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"board row"},[t.board.title?s("h1",{staticClass:"header title pt-5 pb-0 mb-0 mt-0 text-light col-12"},[t._v(t._s(t.board.title))]):t._e(),t._v(" "),s("add-list",{staticClass:"col-12"}),t._v(" "),s("div",{staticClass:"row m-2"},t._l(t.listItems,(function(t){return s("list",{key:t.id,attrs:{listData:t}})})))],1)},P=[],A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("form",{on:{submit:function(e){return e.preventDefault(),t.addList(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newList.title,expression:"newList.title"}],staticClass:"input-front pl-1",attrs:{type:"text",placeholder:"add list...",required:""},domProps:{value:t.newList.title},on:{input:function(e){e.target.composing||t.$set(t.newList,"title",e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-secondary border-dark",attrs:{type:"submit"}},[t._v("+")])])])},N=[],S={name:"AddList",data(){return{newList:{}}},methods:{addList(){this.newList.boardId=this.$route.params.boardId,this.$store.dispatch("addList",this.newList),this.newList={title:"",description:""}}}},U=S,M=(s("9e67"),Object(m["a"])(U,A,N,!1,null,null,null)),R=M.exports,q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-3 m-5 list"},[s("div",{staticClass:"row"},[s("h3",{staticClass:"listTitle pt-1 col-6"},[t._v(t._s(t.listData.title)+":")]),t._v(" "),s("div",{staticClass:"col-6 dltList"},[s("button",{staticClass:"btn pb-0",on:{click:function(e){t.deleteList(t.listData.id)}}},[s("h4",{staticClass:"text-danger"},[t._v("X")])])])]),t._v(" "),s("add-task",{attrs:{listData:t.listData}}),t._v(" "),t._l(t.taskItems,(function(t){return s("task",{key:t.id,attrs:{taskData:t}})}))],2)},X=[],H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 border mt-3 task"},[s("div",{staticClass:"row"},[s("h3",{staticClass:"text-primary text-left tskTitle col-10"},[t._v("• "+t._s(t.taskData.title))]),t._v(" "),s("div",{staticClass:"col-2"},[s("button",{staticClass:"btn btn-process",on:{click:function(e){t.deleteTask(t.taskData.id)}}},[s("h5",{staticClass:"text-danger"},[t._v("X")])])])]),t._v(" "),s("div",{staticClass:"row pl-1"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"select",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selected=e.target.multiple?s:s[0]},function(e){t.moveTask()}]}},[t._m(0),t._v(" "),t._l(t.listItems,(function(e){return s("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.title))])}))],2),t._v(" "),s("add-comment",{attrs:{taskData:t.taskData}}),t._v(" "),s("div",{staticClass:"col-12 pb-1 text-left comcom"},t._l(t.commentItems,(function(t){return s("comment",{key:t.id,attrs:{commentData:t}})})))],1)])},z=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("option",{attrs:{disabled:"",value:""}},[s("h3",{staticClass:"edit"},[t._v("M♥VE")])])}],J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-2"},[s("div",{staticClass:"row"},[s("p",{staticClass:"col-10 mt-2 cmtTitle"},[t._v("♥ "+t._s(t.commentData.title))]),t._v(" "),s("div",{staticClass:"col-2"},[s("button",{staticClass:"btn btn-process",on:{click:function(e){t.deleteComment(t.commentData.id)}}},[s("h5",{staticClass:"text-danger"},[t._v("X")])])])])])},K=[],W={name:"Comment",props:["commentData"],data(){return{}},methods:{deleteComment(t){this.$store.dispatch("deleteComment",this.commentData)}}},F=W,G=(s("113a"),Object(m["a"])(F,J,K,!1,null,null,null)),V=G.exports,Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-6 pl-4"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.addComment(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newComment.title,expression:"newComment.title"}],staticClass:"pl-1 inputNote",attrs:{type:"text",placeholder:"add note...",required:""},domProps:{value:t.newComment.title},on:{input:function(e){e.target.composing||t.$set(t.newComment,"title",e.target.value)}}})])])},Y=[],Z={name:"AddComment",props:["taskData"],data(){return{newComment:{}}},methods:{addComment(){console.log("comment",this.taskData),this.newComment.taskId=this.taskData.id,this.$store.dispatch("addComment",this.newComment),this.newComment={title:""}}}},tt=Z,et=(s("eec1"),Object(m["a"])(tt,Q,Y,!1,null,null,null)),st=et.exports,at={name:"Task",props:["taskData"],data(){return{selected:""}},computed:{listItems(){return this.$store.state.lists},commentItems(){return this.$store.state.comments[this.taskData.id]}},mounted(){this.$store.dispatch("getComments",this.taskData.id)},methods:{deleteTask(t){this.$store.dispatch("deleteTask",this.taskData)},moveTask(){console.log("moveTask",this.selected);let t={taskId:this.taskData.id,oldListId:this.taskData.listId,newListId:this.selected};this.$store.dispatch("moveTask",t)}},components:{Comment:V,AddComment:st}},nt=at,it=(s("fcc1"),Object(m["a"])(nt,H,z,!1,null,null,null)),ot=it.exports,rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("form",{staticClass:"row mb-3",on:{submit:function(e){return e.preventDefault(),t.addTask(e)}}},[s("h5",{staticClass:"m-1 pr-2 pl-3 tskName"},[t._v("Task:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask.title,expression:"newTask.title"}],staticClass:"pr-4 pl-2 inputTask",attrs:{type:"text",placeholder:"add task...",required:""},domProps:{value:t.newTask.title},on:{input:function(e){e.target.composing||t.$set(t.newTask,"title",e.target.value)}}})])])},lt=[],ct={name:"AddTask",props:["listData"],data(){return{newTask:{}}},methods:{addTask(){this.newTask.listId=this.listData.id,this.$store.dispatch("addTask",this.newTask),this.newTask={title:""}}}},dt=ct,ut=(s("82dd"),Object(m["a"])(dt,rt,lt,!1,null,null,null)),mt=ut.exports,pt={name:"List",props:["listData"],data(){return{}},computed:{taskItems(){return this.$store.state.tasks[this.listData.id]}},methods:{deleteList(t){this.$store.dispatch("deleteList",this.listData)}},mounted(){this.$store.dispatch("getTasks",this.listData.id)},components:{Task:ot,AddTask:mt}},ht=pt,vt=(s("f62b"),Object(m["a"])(ht,q,X,!1,null,null,null)),bt=vt.exports,ft={name:"board",computed:{board(){return this.$store.state.activeBoard},listItems(){return this.$store.state.lists}},mounted(){this.$store.dispatch("getActiveBoard",this.$route.params.boardId),this.$store.dispatch("getLists",this.$route.params.boardId)},components:{AddList:R,List:bt}},kt=ft,gt=(s("158c"),Object(m["a"])(kt,E,P,!1,null,null,null)),_t=gt.exports;a["a"].use(_["a"]);var Ct=new _["a"]({routes:[{path:"/",name:"home",component:y},{path:"/boards",name:"boards",component:j,beforeEnter:v["b"]},{path:"/boards/:boardId",name:"board",component:_t,beforeEnter:v["b"]},{path:"*",redirect:"/"}]}),wt=s("2f62");a["a"].use(wt["a"]);let $t=window.location.host.includes("localhost")?"//localhost:3000/":"/",Tt=c.a.create({baseURL:$t+"api/",timeout:3e3,withCredentials:!0});var xt=new wt["a"].Store({state:{user:{},boards:[],activeBoard:{},lists:[],tasks:{},comments:{}},mutations:{setUser(t,e){t.user=e},setBoards(t,e){t.boards=e},setActiveBoard(t,e){t.activeBoard=e},setLists(t,e){t.lists=e},setTasks(t,e){a["a"].set(t.tasks,e.listId,e.taskList)},setComments(t,e){a["a"].set(t.comments,e.taskId,e.commentList)}},actions:{setBearer({},t){Tt.defaults.headers.authorization=t},resetBearer(){Tt.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await Tt.get("/profile");t("setUser",e.data)}catch(e){console.error(e)}},getBoards({commit:t,dispatch:e}){Tt.get("boards").then(e=>{t("setBoards",e.data)})},getActiveBoard({commit:t,dispatch:e},s){Tt.get("boards/"+s).then(e=>{t("setActiveBoard",e.data)})},addBoard({commit:t,dispatch:e},s){Tt.post("boards",s).then(t=>{e("getBoards")})},deleteBoard({commit:t,dispatch:e},s){Tt.delete("boards/"+s).then(t=>{e("getBoards")})},getLists({commit:t,dispatch:e},s){Tt.get("boards/"+s+"/lists").then(e=>{t("setLists",e.data)})},addList({commit:t,dispatch:e},s){Tt.post("lists/",s).then(t=>{e("getLists",s.boardId)})},deleteList({commit:t,dispatch:e},s){Tt.delete("lists/"+s.id).then(t=>{e("getLists",s.boardId)})},getTasks({commit:t,dispatch:e},s){Tt.get("lists/"+s+"/tasks").then(e=>{let a={listId:s,taskList:e.data};t("setTasks",a)})},addTask({commit:t,dispatch:e},s){Tt.post("tasks/",s).then(t=>{e("getTasks",s.listId)})},deleteTask({commit:t,dispatch:e},s){Tt.delete("tasks/"+s.id).then(t=>{e("getTasks",s.listId)})},moveTask({commit:t,dispatch:e},s){let a={listId:s.newListId};Tt.put("tasks/"+s.taskId,a).then(t=>{e("getTasks",s.oldListId),e("getTasks",s.newListId)}),console.log("moveTask - end",a)},getComments({commit:t,dispatch:e},s){Tt.get("tasks/"+s+"/comments").then(e=>{let a={taskId:s,commentList:e.data};t("setComments",a)})},addComment({commit:t,dispatch:e},s){Tt.post("comments/",s).then(t=>{e("getComments",s.taskId)})},deleteComment({commit:t,dispatch:e},s){Tt.delete("comments/"+s.id).then(t=>{e("getComments",s.taskId)})}}});const yt="dev-wi7u-txh.auth0.com",It="https://kanban.com",Bt="auCTo5RzH1qtoWbUMbH6iKb6GFEabUw0";a["a"].use(v["a"],{domain:yt,clientId:Bt,audience:It,onRedirectCallback:t=>{Ct.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new a["a"]({router:Ct,store:xt,render:function(t){return t(g)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("9c0c"),n=s.n(a);n.a},"5dfc":function(t,e,s){"use strict";var a=s("1a12"),n=s.n(a);n.a},"65da":function(t,e,s){},"82dd":function(t,e,s){"use strict";var a=s("ff17"),n=s.n(a);n.a},"9c0c":function(t,e,s){},"9e67":function(t,e,s){"use strict";var a=s("08ac"),n=s.n(a);n.a},c950:function(t,e,s){},ce1b:function(t,e,s){},eec1:function(t,e,s){"use strict";var a=s("4c41"),n=s.n(a);n.a},f62b:function(t,e,s){"use strict";var a=s("65da"),n=s.n(a);n.a},fcc1:function(t,e,s){"use strict";var a=s("24fa"),n=s.n(a);n.a},ff17:function(t,e,s){}});