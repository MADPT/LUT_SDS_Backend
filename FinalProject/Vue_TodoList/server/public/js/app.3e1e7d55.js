(function(e){function t(t){for(var n,d,a=t[0],i=t[1],u=t[2],l=0,f=[];l<a.length;l++)d=a[l],Object.prototype.hasOwnProperty.call(r,d)&&r[d]&&f.push(r[d][0]),r[d]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);s&&s(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,a=1;a<o.length;a++){var i=o[a];0!==r[i]&&(n=!1)}n&&(c.splice(t--,1),e=d(d.s=o[0]))}return e}var n={},r={app:0},c=[];function d(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,d),o.l=!0,o.exports}d.m=e,d.c=n,d.d=function(e,t,o){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(d.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)d.d(o,n,function(t){return e[t]}.bind(null,n));return o},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var s=i;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"326c":function(e,t,o){"use strict";o("a4d9")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),r={class:"relative overflow-hidden bg-gray-100 h-screen p-4"},c={class:"flex flex-col shadow-lg bg-white my-auto"},d={key:0,class:"p-4 text-xl font-extrabold text-black"},a={key:1},i={key:2,class:"bg-red-600"},u={class:"p-4 font-medium text-white truncate"};function s(e,t,o,s,l,f){var b=Object(n["k"])("Header"),p=Object(n["k"])("AddTodo"),h=Object(n["k"])("Todos");return Object(n["i"])(),Object(n["c"])("main",r,[Object(n["f"])("div",c,[Object(n["f"])(b,{todos:l.todos},null,8,["todos"]),l.loading?(Object(n["i"])(),Object(n["c"])("h1",d,"Loading...")):Object(n["d"])("",!0),l.loading||l.error?Object(n["d"])("",!0):(Object(n["i"])(),Object(n["c"])("div",a,[Object(n["f"])(p,{onAddTodo:f.addTodo},null,8,["onAddTodo"]),Object(n["f"])(h,{todos:l.todos,onUpdateTodo:f.updateTodo,onDelTodo:f.deleteTodo},null,8,["todos","onUpdateTodo","onDelTodo"])])),l.error?(Object(n["i"])(),Object(n["c"])("div",i,[Object(n["f"])("p",u,Object(n["l"])(l.error),1)])):Object(n["d"])("",!0)])])}o("4de4"),o("c740"),o("96cf");var l=o("1da1"),f=(o("d3b7"),o("d4ec")),b=o("bee2"),p=o("bc3a"),h=o.n(p),v="api/todos",j=function(){function e(){Object(f["a"])(this,e)}return Object(b["a"])(e,null,[{key:"addTodo",value:function(e){return h.a.post(v,{title:e})}},{key:"getTodos",value:function(){return new Promise((function(e,t){h.a.get(v).then((function(t){var o=t.data;e(o)})).catch((function(e){t(e)}))}))}},{key:"updateTodo",value:function(e,t){return h.a.patch("".concat(v,"/").concat(e),t)}},{key:"deleteTodo",value:function(e){return h.a.delete("".concat(v,"/").concat(e))}}]),e}(),O=j,g={class:"header"},m={class:"font-bold text-md p-4 text-black"},y=Object(n["e"])(" Todo List "),x={class:"text-gray-500 dark:text-gray-300"};function w(e,t,o,r,c,d){return Object(n["i"])(),Object(n["c"])("header",g,[Object(n["f"])("p",m,[y,Object(n["f"])("span",x," ("+Object(n["l"])(o.todos.length)+") ",1)])])}var T={name:"Header",props:["todos"]};T.render=w;var k=T,_={type:"submit",value:"Submit",class:"w-10 h-10 bg-white text-gray-300 border-gray-300 rounded hover:bg-gray-300 hover:text-white border focus:outline-none transition ease-in duration-100"},E=Object(n["f"])("div",{class:"border-t-2 border-gray-100"},null,-1);function A(e,t,o,r,c,d){var a=Object(n["k"])("font-awesome-icon");return Object(n["i"])(),Object(n["c"])("div",null,[Object(n["f"])("form",{class:"relative px-4 pb-4 flex",onSubmit:t[2]||(t[2]=function(){return d.addTodo&&d.addTodo.apply(d,arguments)})},[Object(n["n"])(Object(n["f"])("input",{class:"flex-1 px-4 mr-4 rounded border border-gray-300 border-transparent bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.title=e}),type:"text",name:"title",placeholder:"Add Todo...",required:""},null,512),[[n["m"],c.title]]),Object(n["f"])("button",_,[Object(n["f"])(a,{icon:"plus"})])],32),E])}var S={name:"AddTodo",data:function(){return{title:""}},methods:{addTodo:function(e){e.preventDefault(),this.$emit("add-todo",this.title),this.title=""}}};S.render=A;var $=S;function P(e,t,o,r,c,d){var a=Object(n["k"])("TodoItem");return Object(n["i"])(),Object(n["c"])("ul",null,[(Object(n["i"])(!0),Object(n["c"])(n["a"],null,Object(n["j"])(o.todos,(function(e){return Object(n["i"])(),Object(n["c"])(a,{key:e._id,todo:e},null,8,["todo"])})),128))])}var R={class:"todo__item px-4 text-gray-600 justify-between py-3 border-b-2 border-gray-100 bg-white hover:bg-gray-100"},C={class:"todo__check-text flex flex-row items-center w-full pr-4"},D={class:"mr-4 bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center"},M=Object(n["f"])("svg",{class:"fill-current hidden w-4 h-4 text-green-500 pointer-events-none hover:block hover:opacity-50",viewBox:"0 0 20 20"},[Object(n["f"])("path",{d:"M0 11l2-2 5 5L18 3l2 2L7 18z"})],-1),I={class:"todo__buttons flex flex-row items-center"},L={class:"todo__buttons flex flex-row items-center"};function U(e,t,o,r,c,d){var a=Object(n["k"])("font-awesome-icon");return Object(n["i"])(),Object(n["c"])("li",R,[Object(n["f"])("div",{class:["todo__view flex flex-row items-center justify-between",{hidden:o.todo===c.editedTodo}]},[Object(n["f"])("div",C,[Object(n["f"])("div",D,[Object(n["f"])("input",{type:"checkbox",class:"opacity-0 absolute",checked:o.todo.completed,onChange:t[1]||(t[1]=function(t){return e.$parent.$emit("update-todo",o.todo._id,{completed:!o.todo.completed})})},null,40,["checked"]),M]),Object(n["f"])("span",{class:{"line-through":o.todo.completed}},Object(n["l"])(o.todo.title),3)]),Object(n["f"])("div",I,[Object(n["f"])("button",{class:"w-10 h-10 text-gray-300 border-0 transition ease-in duration-100 uppercase rounded hover:bg-gray-300 hover:text-white focus:outline-none",onClick:t[2]||(t[2]=function(e){return d.editTodo(o.todo)})},[Object(n["f"])(a,{icon:"edit"})]),Object(n["f"])("button",{class:"w-10 h-10 ml-2 text-gray-300 border-0 transition ease-in duration-100 uppercase rounded hover:bg-gray-300 hover:text-white focus:outline-none",onClick:t[3]||(t[3]=function(t){return e.$parent.$emit("del-todo",o.todo._id)})},[Object(n["f"])(a,{icon:"trash-alt"})])])],2),Object(n["f"])("div",{class:["todo__edit pl-7",{hidden:o.todo!==c.editedTodo}]},[Object(n["f"])("form",{class:"flex flex-row items-center justify-between w-full",onSubmit:t[9]||(t[9]=function(){return d.doneEdit&&d.doneEdit.apply(d,arguments)})},[Object(n["n"])(Object(n["f"])("input",{class:"flex-1 px-4 mr-4 rounded border border-gray-300 border-transparent bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent",type:"text",ref:"newTitle","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.newTitle=e}),onKeyup:[t[5]||(t[5]=Object(n["o"])((function(){return d.doneEdit&&d.doneEdit.apply(d,arguments)}),["enter"])),t[6]||(t[6]=Object(n["o"])((function(){return d.cancelEdit&&d.cancelEdit.apply(d,arguments)}),["esc"]))],placeholder:"Add Todo...",required:""},null,544),[[n["m"],c.newTitle]]),Object(n["f"])("div",L,[Object(n["f"])("button",{value:"Submit",onClick:t[7]||(t[7]=function(){return d.doneEdit&&d.doneEdit.apply(d,arguments)}),class:"w-10 h-10 text-gray-300 border-0 transition ease-in duration-100 uppercase rounded hover:bg-gray-300 hover:text-white focus:outline-none"},[Object(n["f"])(a,{icon:"check"})]),Object(n["f"])("button",{onClick:t[8]||(t[8]=function(){return d.cancelEdit&&d.cancelEdit.apply(d,arguments)}),class:"w-10 h-10 ml-2 text-gray-300 border-0 transition ease-in duration-100 uppercase rounded hover:bg-gray-300 hover:text-white focus:outline-none"},[Object(n["f"])(a,{icon:"times"})])])],32)],2)])}var H={name:"TodoItem",props:["todo"],data:function(){return{newTitle:this.todo.title,editedTodo:null,createdAt:new Date(this.todo.createdAt)}},methods:{editTodo:function(e){var t=this;this.newTitle=e.title,this.editedTodo=e,this.$nextTick((function(){return t.$refs.newTitle.focus()}))},doneEdit:function(e){e.preventDefault(),this.editedTodo&&(this.editedTodo=null,this.$parent.$emit("update-todo",this.todo._id,{title:this.newTitle}))},cancelEdit:function(){this.editedTodo=null}}};o("326c");H.render=U;var q=H,J={name:"Todos",components:{TodoItem:q},props:["todos"]};J.render=P;var V=J,z={name:"App",components:{Header:k,AddTodo:$,Todos:V},data:function(){return{todos:[],error:"",text:"",loading:!0}},methods:{addTodo:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function o(){var n,r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,O.addTodo(e);case 3:n=o.sent,r=n.data,t.todos.push(r),o.next=12;break;case 8:o.prev=8,o.t0=o["catch"](0),t.error=o.t0.message,console.error(o.t0);case 12:case"end":return o.stop()}}),o,null,[[0,8]])})))()},deleteTodo:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function o(){var n,r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,O.deleteTodo(e);case 3:n=o.sent,r=n.data,t.todos=t.todos.filter((function(e){return e._id!==r._id})),o.next=12;break;case 8:o.prev=8,o.t0=o["catch"](0),t.error=o.t0.message,console.error(o.t0);case 12:case"end":return o.stop()}}),o,null,[[0,8]])})))()},updateTodo:function(e,t){var o=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){var r,c,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,console.log("updateTodo",t),n.next=4,O.updateTodo(e,t);case 4:r=n.sent,c=r.data,d=o.todos.findIndex((function(e){return e._id===c._id})),o.todos[d]=c,n.next=14;break;case 10:n.prev=10,n.t0=n["catch"](0),o.error=n.t0.message,console.error(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))()}},created:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.getTodos();case 3:e.todos=t.sent,e.loading=!1,t.next=12;break;case 7:t.prev=7,t.t0=t["catch"](0),e.error=t.t0.message,e.loading=!1,console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,7]])})))()}};z.render=s;var B=z,K=(o("ba8c"),o("ecee")),F=o("c074"),G=o("ad3d");K["c"].add(F["c"],F["b"],F["e"],F["a"],F["d"]);var N=Object(n["b"])(B);N.mount("#app"),N.component("font-awesome-icon",G["a"])},a4d9:function(e,t,o){},ba8c:function(e,t,o){}});
//# sourceMappingURL=app.3e1e7d55.js.map