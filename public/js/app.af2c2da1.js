(function(e){function t(t){for(var n,a,c=t[0],i=t[1],d=t[2],u=0,k=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&k.push(s[a][0]),s[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(k.length)k.shift()();return o.push.apply(o,d||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==s[i]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},s={app:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var l=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),s={class:"container"};function o(e,t,r,o,a,c){var i=Object(n["l"])("Header"),d=Object(n["l"])("AddTask"),l=Object(n["l"])("Tasks");return Object(n["j"])(),Object(n["d"])("div",s,[Object(n["g"])(i,{title:"Task Tracker",onToggleAddTask:c.toggleAddTask,showAddTask:a.showAddTask},null,8,["onToggleAddTask","showAddTask"]),Object(n["q"])(Object(n["g"])(d,{task:a.task,errors:a.errors,ref:"form",onAddTask:c.addTask,onUpdateTask:c.updateTask,onSetFocus:c.setFocus},null,8,["task","errors","onAddTask","onUpdateTask","onSetFocus"]),[[n["p"],a.showAddTask]]),Object(n["g"])(l,{tasks:a.tasks,onDeleteTask:c.deleteTask,onEditTask:c.editTask,onToggleReminder:c.toggleReminder},null,8,["tasks","onDeleteTask","onEditTask","onToggleReminder"])])}var a=r("5530"),c=r("53ca");r("b64b"),r("99af"),r("d3b7");function i(e,t,r,s,o,a){var c=Object(n["l"])("Button");return Object(n["j"])(),Object(n["d"])("header",null,[Object(n["e"])("h1",null,Object(n["m"])(r.title),1),Object(n["g"])(c,{onBtnClick:t[0]||(t[0]=function(t){return e.$emit("toggle-add-task")}),text:r.showAddTask?"Close":"Add Task",color:r.showAddTask?"red":"green"},null,8,["text","color"])])}function d(e,t,r,s,o,a){return Object(n["j"])(),Object(n["d"])("button",{class:"btn",style:Object(n["i"])({background:r.color}),onClick:t[0]||(t[0]=function(e){return a.onClick()})},Object(n["m"])(r.text),5)}var l={name:"Button",props:{text:String,color:String},methods:{onClick:function(){this.$emit("btn-click")}}};l.render=d;var u=l,k={name:"Header",props:{title:String,showAddTask:Boolean},components:{Button:u}};k.render=i;var b=k;function f(e,t,r,s,o,a){var c=Object(n["l"])("Task");return Object(n["j"])(!0),Object(n["d"])(n["a"],null,Object(n["k"])(r.tasks,(function(t){return Object(n["j"])(),Object(n["d"])("div",{key:t.id},[Object(n["g"])(c,{task:t,onDeleteTask:function(r){return e.$emit("delete-task",t)},onEditTask:function(r){return e.$emit("edit-task",t)},onToggleReminder:function(r){return e.$emit("toggle-reminder",t)}},null,8,["task","onDeleteTask","onEditTask","onToggleReminder"])])})),128)}function j(e,t,r,s,o,a){return Object(n["j"])(),Object(n["d"])("div",{class:Object(n["h"])([r.task.reminder?"reminder":"","task"]),onDblclick:t[2]||(t[2]=function(t){return e.$emit("toggle-reminder",r.task)})},[Object(n["e"])("h3",null,[Object(n["f"])(Object(n["m"])(r.task.text)+" ",1),Object(n["e"])("div",null,[Object(n["e"])("i",{class:"fas fa-pencil-alt",title:"edit task",onClick:t[0]||(t[0]=function(t){return e.$emit("edit-task",r.task)})}),Object(n["e"])("i",{class:"fas fa-times",title:"delete task",onClick:t[1]||(t[1]=function(t){return e.$emit("delete-task",r.task)})})])]),Object(n["e"])("p",null,Object(n["m"])(r.task.day),1)],34)}var h={name:"Task",props:{task:Object}};h.render=j;var O=h,m={name:"Tasks",props:{tasks:Array},components:{Task:O},emits:["edit-task","delete-task","toggle-reminder"]};m.render=f;var p=m,T={class:"form-control"},g=Object(n["e"])("label",null,"Task",-1),v={key:0,class:"error-icon"},y=Object(n["e"])("i",{class:"fas fa-exclamation"},null,-1),A=[y],w={key:1,class:"error-message"},x={class:"form-control"},S=Object(n["e"])("label",null,"Day & Time",-1),F={key:0,class:"error-icon"},C=Object(n["e"])("i",{class:"fas fa-exclamation"},null,-1),$=[C],D={key:1,class:"error-message"},P={class:"form-control form-control-check"},E=Object(n["e"])("label",{for:"reminder"},"Set Reminder",-1),R=["value"];function U(e,t,r,s,o,a){return Object(n["j"])(),Object(n["d"])("form",{onSubmit:t[3]||(t[3]=function(){return a.onSubmit&&a.onSubmit.apply(a,arguments)}),class:"add-form"},[Object(n["e"])("div",T,[g,Object(n["q"])(Object(n["e"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.task.text=e}),name:"text",ref:"text",placeholder:"Add Task",class:Object(n["h"])(r.errors.text?"invalid":"")},null,2),[[n["o"],r.task.text]]),r.errors.text?(Object(n["j"])(),Object(n["d"])("div",v,A)):Object(n["c"])("",!0),r.errors.text?(Object(n["j"])(),Object(n["d"])("div",w,Object(n["m"])(r.errors.text),1)):Object(n["c"])("",!0)]),Object(n["e"])("div",x,[S,Object(n["q"])(Object(n["e"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.task.day=e}),name:"day",ref:"day",placeholder:"Add Day & Time",class:Object(n["h"])(r.errors.day?"invalid":"")},null,2),[[n["o"],r.task.day]]),r.errors.day?(Object(n["j"])(),Object(n["d"])("div",F,$)):Object(n["c"])("",!0),r.errors.day?(Object(n["j"])(),Object(n["d"])("div",D,Object(n["m"])(r.errors.day),1)):Object(n["c"])("",!0)]),Object(n["e"])("div",P,[Object(n["q"])(Object(n["e"])("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.task.reminder=e}),name:"reminder",id:"reminder"},null,512),[[n["n"],r.task.reminder]]),E]),Object(n["e"])("input",{type:"submit",value:r.task.id?"Update Task":"Save Task",class:"btn btn-block"},null,8,R)],32)}var _={name:"AddTask",props:{task:Object,errors:Object},methods:{onSubmit:function(e){e.preventDefault(),this.$emit(this.task.id?"update-task":"add-task",this.task)}}};_.render=U;var B=_,q={name:"App",components:{Header:b,Tasks:p,AddTask:B},data:function(){return{task:{id:"",text:"",day:"",reminder:!1},tasks:[],showAddTask:!1,errors:{}}},methods:{setFocus:function(e){var t=Object.keys(e)[0];this.$refs.form.$refs[t].focus()},resetForm:function(){this.task.id="",this.task.text="",this.task.day="",this.task.reminder=!1,this.errors={}},confirmDelete:function(e){return confirm("You have chosen to delete ".concat(e.text," on ").concat(e.day,". Click 'OK' to confirm or 'CANCEL' to abort."))},toggleAddTask:function(){this.showAddTask=!this.showAddTask,this.showAddTask&&this.resetForm()},processFetch:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=r?{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(r)}:null;fetch(e,s).then((function(e){if(e.ok)return e;throw new Error("http error: ".concat(e.status))})).then((function(e){return e.json()})).then((function(e){if(e.succeeded)e.data?t.tasks=e.data:(t.fetchTasks(),n&&n());else{if("object"!==Object(c["a"])(e.error))throw new Error("database error: ".concat(e.error));t.errors=e.error,t.setFocus(t.errors)}})).catch((function(e){console.log(e.message)}))},addTask:function(e){this.processFetch("tasks/add",e,this.resetForm)},editTask:function(e){this.showAddTask||(this.showAddTask=!0),this.task=Object(a["a"])({},e)},deleteTask:function(e){this.confirmDelete(e)&&this.processFetch("tasks/delete",e)},updateTask:function(e){this.processFetch("tasks/update",e,this.resetForm)},toggleReminder:function(e){this.processFetch("tasks/toggle",e)},fetchTasks:function(){this.processFetch("tasks")}},created:function(){this.fetchTasks()}};q.render=o;var M=q;Object(n["b"])(M).mount("#app")}});
//# sourceMappingURL=app.af2c2da1.js.map