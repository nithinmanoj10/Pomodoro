(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{100:function(e,t,a){},213:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(45),n=a.n(c),i=a(5),r=a(10),o=(a(100),a(3)),l=a(4),j=a(7),d=a(6),b=a(0),m=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={handleClick:e.handleClick,text:e.text,to:e.to},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("a",{href:"javascript:void(0)",className:"button button--basic",onClick:this.state.handleClick,to:this.state.to,children:this.props.text})}}]),a}(s.Component),u=a.p+"static/media/illustration-working-brown.24887bc9.svg",h=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={greeting:"",userName:"Stranger"},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=(new Date).getHours();e>=0&&e<12?this.setState({greeting:"Good Morning"}):e>=12&&e<16?this.setState({greeting:"Good Afternoon"}):this.setState({greeting:"Good Evening"})}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"hero-box",children:[Object(b.jsx)("h3",{className:"greeting",children:this.state.greeting}),Object(b.jsx)("h2",{className:"user-name",children:this.state.userName}),Object(b.jsx)("img",{src:u,alt:"Girl looking at computer, being productive",className:"hero-box__image"}),Object(b.jsxs)("p",{className:"hero-box__description",children:["Pomodoro will make your work easier and more",Object(b.jsx)("span",{class:"bold-text",children:" productive"})]})]})}}]),a}(s.Component),O=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"homepage",children:[Object(b.jsx)(h,{}),Object(b.jsxs)("div",{class:"homepage__buttons",children:[Object(b.jsx)(i.b,{to:"/pomodoro/session-manager",children:Object(b.jsx)(m,{text:"Start"})}),Object(b.jsx)(i.b,{to:"/task-manager/tasks",children:Object(b.jsx)(m,{text:"View Tasks"})})]})]})}}]),a}(s.Component),_=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("header",{className:"header",children:Object(b.jsxs)("div",{className:"mobile-navbar",children:[Object(b.jsx)("div",{className:"app-name",children:Object(b.jsx)(i.b,{to:"/",children:Object(b.jsx)("h1",{children:"Pomodoro"})})}),Object(b.jsx)(i.b,{to:"/stats",className:"hamburger-menu",children:Object(b.jsx)("img",{src:"https://img.icons8.com/material-outlined/24/000000/menu--v1.png",alt:"Hamburger Menu Icon",className:"hamburger-menu__icon"})})]})})}}]),a}(s.Component),g=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("nav",{className:"task-nav-bar",children:Object(b.jsxs)("ul",{className:"task-nav-bar__list",children:[Object(b.jsx)("li",{className:"task-nav-bar__list__item",children:Object(b.jsx)(i.b,{href:"javascript:void(0)",className:"task-nav-bar__list__item__link",to:"/task-manager/tasks",children:"Tasks"})}),Object(b.jsx)("li",{className:"task-nav-bar__list__item",children:Object(b.jsx)(i.b,{href:"javascript:void(0)",className:"task-nav-bar__list__item__link",to:"/task-manager/completed-tasks",children:"Completed"})}),Object(b.jsx)("li",{className:"task-nav-bar__list__item",children:Object(b.jsx)(i.b,{href:"javascript:void(0)",className:"task-nav-bar__list__item__link",to:"/task-manager/tags",children:"Tags"})})]})})}}]),a}(s.Component),x=a(9),p=a(8),k=a(26),v=a.n(k);var N=function(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),a=e.toLocaleString("default",{month:"long"});return function(e){var t=Number(e);return t+(t>0?["th","st","nd","rd"][t>3&&t<21||t%10>3?0:t%10]:"")}(t)+", "+a};var f=function(e){var t=e.tasks,a=e.submitTaskHandle,c=JSON.parse(localStorage.getItem("tagsData")||"[]"),n=Object(s.useState)(""),r=Object(p.a)(n,2),o=r[0],l=r[1],j=Object(s.useState)(""),d=Object(p.a)(j,2),m=d[0],u=d[1],h=Object(s.useState)(""),O=Object(p.a)(h,2),_=O[0],g=O[1],k=Object(s.useState)(""),f=Object(p.a)(k,2),S=f[0],C=f[1],y=Object(s.useState)(Object(x.a)(c)),T=Object(p.a)(y,2),D=T[0];return T[1],Object(b.jsxs)("div",{className:"task-create",children:[Object(b.jsxs)("header",{className:"task-create__header",children:[Object(b.jsx)("h4",{className:"task-create__heading",children:"Create Task"}),Object(b.jsx)(i.b,{to:"/task-manager/tasks",children:Object(b.jsx)(v.a,{className:"close-icon"})})]}),Object(b.jsxs)("form",{className:"task-create__form",children:[Object(b.jsx)("label",{htmlFor:"ttitle",className:"task-create__form__label",children:"Task Title"}),Object(b.jsx)("input",{type:"text",name:"tasktitle",id:"ttitle",placeholder:"Your Task Title",className:"input__text",onChange:function(e){l(e.target.value)}}),Object(b.jsx)("label",{htmlFor:"ttag",className:"task-create__form__label",children:"Tag"}),Object(b.jsxs)("select",{name:"tasktag",id:"ttag",className:"task-create__form__select",onChange:function(e){u(e.target.value)},children:[Object(b.jsx)("option",{value:"",selected:!0,disabled:!0,hidden:!0}),0===D.length?Object(b.jsx)("option",{disabled:!0,children:"Make some Tags"}):D.map((function(e){return Object(b.jsx)("option",{value:"".concat(e.name),id:e.id,children:e.name})}))]}),Object(b.jsx)("label",{htmlFor:"testimate",className:"task-create__form__label",children:"Estimated Intervals to Complete"}),Object(b.jsx)("input",{type:"number",name:"taskestimate",id:"testimate",placeholder:"Intervals",className:"input__number",onChange:function(e){g(e.target.value)}}),Object(b.jsx)("label",{htmlFor:"tdescription",className:"task-create__form__label",children:"Description"}),Object(b.jsx)("textarea",{name:"taskdescription",id:"tdescription",cols:"30",rows:"4",placeholder:"Description for your Task...",className:"task-create__form__description",onChange:function(e){C(e.target.value)}}),Object(b.jsx)("button",{className:"input__button",type:"submit",onClick:function(e){e.preventDefault();var s={};s.task_title=o,s.task_tag=m,s.task_estimate=_,s.task_desc=S,s.task_isCompleted=!1,s.task_startDate=N(),s.task_endDate="-",s.task_id=100*Math.random(),t.push(s),localStorage.setItem("tasksData",JSON.stringify(t)),a(t)},children:Object(b.jsx)(i.b,{to:"/task-manager/tasks",class:"input__button__link",children:Object(b.jsx)("h4",{children:"Create Task"})})})]})]})},S=a(33),C=a.n(S),y=a(87),T=a.n(y),D=a(47),w=a.n(D),I=a(88),B=a.n(I),J=a(89),F=a.n(J);var M=function(e){var t=JSON.parse(localStorage.getItem("tagsData")||"[]"),a=e.task,s=a.task_tag,c=a.task_title,n=a.task_desc,i=a.task_estimate,r=a.task_id,o=a.task_startDate,l=a.task_endDate,j=a.task_isCompleted,d={};0!==t.length&&t.forEach((function(e){e.name!==s||(d.color=e.colour)}));var m=e.tasks,u=e.setTasks;return Object(b.jsxs)("div",{className:"task-card ".concat(!0===j?"task-card--completed":""),children:[Object(b.jsxs)("div",{className:"task-info",children:[Object(b.jsx)("p",{className:"task-info__tag",style:d,children:s}),Object(b.jsx)("h4",{className:"task-info__name",children:c}),Object(b.jsx)("p",{className:"task-info__desc",children:n})]}),Object(b.jsxs)("div",{className:"task-card__actions",children:[Object(b.jsx)("button",{className:"task-card__actions__button",onClick:function(){var e=m.map((function(e){return r===e.task_id&&(e.task_isCompleted=!0,e.task_endDate=N()),e}));localStorage.setItem("tasksData",JSON.stringify(e)),u(Object(x.a)(e))},children:Object(b.jsx)(T.a,{className:"task-icon task-icon--done"})}),Object(b.jsx)("button",{className:"task-card__actions__button",onClick:function(){var e=m.filter((function(e){return r!==e.task_id}));localStorage.setItem("tasksData",JSON.stringify(e)),u(Object(x.a)(e))},children:Object(b.jsx)(w.a,{className:"task-icon task-icon--delete"})})]}),Object(b.jsxs)("div",{className:"task-card__time",children:[Object(b.jsx)(B.a,{className:"task-icon--time"}),Object(b.jsxs)("div",{className:"time-stat",children:[Object(b.jsx)("p",{className:"time-stat__name",children:"Estimated Time"}),Object(b.jsxs)("p",{className:"time-stat__value",children:[i," mins"]})]}),Object(b.jsx)(F.a,{className:"task-icon--time"}),Object(b.jsxs)("div",{className:"time-stat",children:[Object(b.jsx)("p",{className:"time-stat__name",children:"Start"}),Object(b.jsx)("p",{className:"time-stat__value",children:o})]}),Object(b.jsxs)("div",{className:"time-stat",children:[Object(b.jsx)("p",{className:"time-stat__name",children:"End"}),Object(b.jsx)("p",{className:"time-stat__value",children:l})]})]})]})},E=a.p+"static/media/Mordecai-Rigby-enjoying.89e2f180.png";var R=function(e){var t={height:e.height,width:e.width};return Object(b.jsxs)("div",{className:"regular-show",style:t,children:[Object(b.jsx)("img",{src:e.image,alt:e.alt,className:"regular-show__pic",style:{height:"100%",width:"auto",objectFit:"cover"}}),Object(b.jsx)("p",{className:"regular-show__text",children:e.text})]})};var P=function(e){var t=e.tagColour,a=e.setTagColour,s=e.tagName,c=e.setTagName,n=e.setTagData,r=e.tagData;return Object(b.jsx)("div",{className:"tag-create",children:Object(b.jsxs)("form",{className:"tag-create__form",children:[Object(b.jsxs)("div",{className:"tag-create__data",children:[Object(b.jsx)("label",{htmlFor:"tgname",className:"tag-create__form__label",children:"Tag Name"}),Object(b.jsx)("input",{type:"text",name:"TagName",id:"tgname",className:"input__text",onChange:function(e){c(e.target.value)}}),Object(b.jsx)("label",{htmlFor:"tgcolour",className:"tag-create__form__label",children:"Tag Colour"}),Object(b.jsx)("div",{className:"input__colour",children:Object(b.jsx)("input",{type:"color",name:"TagColour",id:"tgcolour",className:"input__colour__picker",onChange:function(e){a(e.target.value)}})})]}),Object(b.jsx)("div",{className:"tag-create__close",children:Object(b.jsx)(i.b,{to:"/task-manager/tags",children:Object(b.jsx)(v.a,{})})}),Object(b.jsx)("div",{className:"tag-create__submit",children:Object(b.jsx)("button",{className:"input__button",type:"submit",onClick:function(){var e={name:s,colour:t,id:100*Math.random(),tagTotalTime:0};r.push(e),localStorage.setItem("tagsData",JSON.stringify(r)),n(Object(x.a)(r))},children:Object(b.jsx)(i.b,{to:"/task-manager/tags",class:"input__button__link",children:Object(b.jsx)("h4",{children:"Create Tag"})})})})]})})};var G=function(){var e=JSON.parse(localStorage.getItem("tasksData")||"[]"),t=Object(s.useState)(Object(x.a)(e)),a=Object(p.a)(t,2),c=a[0],n=a[1],o=e.filter((function(e){if(0==e.task_isCompleted)return e}));return Object(b.jsx)(i.a,{children:Object(b.jsxs)("div",{className:"task-section",children:[Object(b.jsxs)("header",{className:"task-section__header",children:[Object(b.jsx)("h2",{className:"heading",children:"Tasks"}),Object(b.jsxs)(i.b,{to:"/task-manager/tasks/create-task",className:"add-task",children:[Object(b.jsx)("h4",{children:"New Task"}),Object(b.jsx)(C.a,{className:"add-task__icon"})]})]}),Object(b.jsx)(r.c,{children:Object(b.jsx)(r.a,{path:"/task-manager/tasks/create-task",children:Object(b.jsx)(f,{submitTaskHandle:function(e){n(Object(x.a)(e))},tasks:c})})}),0==o.length?Object(b.jsx)(R,{image:E,text:"You have no tasks for now. Go and have some fun :)",alt:"Moredecai and Rigby enjoying",height:280}):Object(b.jsx)("ul",{className:"task-list",children:c.map((function(e){return 0==e.task_isCompleted?Object(b.jsx)(M,{task:e,tasks:c,setTasks:n},e.task_id):""}))})]})})},H=a.p+"static/media/Mordecai-Rigby-working.8610382c.png";var A=function(){var e=JSON.parse(localStorage.getItem("tasksData")||"[]"),t=Object(s.useState)(Object(x.a)(e)),a=Object(p.a)(t,2),c=a[0],n=a[1],i=e.filter((function(e){if(1==e.task_isCompleted)return e}));return Object(b.jsxs)("div",{className:"task-section",children:[Object(b.jsx)("header",{className:"task-section__header",children:Object(b.jsx)("h2",{className:"heading",children:"Completed Tasks"})}),0==i.length?Object(b.jsx)(R,{image:H,text:"You haven't completed any tasks. Now get back to work ;)",alt:"Moredecai and Rigby Working",height:230}):Object(b.jsx)("ul",{className:"task-list",children:i.map((function(e){return Object(b.jsx)(M,{task:e,tasks:c,setTasks:n},e.task_id)}))})]})};var V=function(e){var t=e.name,a=e.colour,s=e.id,c=e.tagData,n=e.setTagData,i={backgroundColor:a};return Object(b.jsxs)("div",{className:"tag-card",children:[Object(b.jsx)("div",{className:"tag-card__colour",style:i}),Object(b.jsx)("h3",{className:"tag-card__name",children:t}),Object(b.jsx)("div",{className:"tag-card__close",children:Object(b.jsx)(v.a,{className:"tag-card__close__icon",onClick:function(){var e=c.filter((function(e){if(e.id!==s)return e}));n(Object(x.a)(e)),localStorage.setItem("tagsData",JSON.stringify(e))}})})]})},Y=a.p+"static/media/Mordecai-Rigby-pointing.e3f7fdfd.png";var L=function(){var e=Object(s.useState)("#000"),t=Object(p.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),o=Object(p.a)(n,2),l=o[0],j=o[1],d=JSON.parse(localStorage.getItem("tagsData")||"[]"),m=Object(s.useState)(Object(x.a)(d)),u=Object(p.a)(m,2),h=u[0],O=u[1];return Object(b.jsx)(i.a,{children:Object(b.jsxs)("div",{className:"task-section",children:[Object(b.jsxs)("header",{className:"task-section__header",children:[Object(b.jsx)("h2",{className:"heading",children:"Tags"}),Object(b.jsxs)(i.b,{to:"/task-manager/tags/create-tag",className:"add-task",children:[Object(b.jsx)("h4",{children:"New Tag"}),Object(b.jsx)(C.a,{className:"add-task__icon"})]})]}),Object(b.jsx)("p",{className:"warning",children:"Recommended that you don't delete any tags and you choose a dark colour"}),Object(b.jsx)(r.c,{children:Object(b.jsx)(r.a,{path:"/task-manager/tags/create-tag",children:Object(b.jsx)(P,{tagColour:a,setTagColour:c,tagName:l,setTagName:j,setTagData:O,tagData:h})})}),0===d.length?Object(b.jsx)(R,{image:Y,text:"C'mon, create tags so you can track your tasks and be more productive :O",alt:"Moredecai and Rigby Pointing",height:300}):Object(b.jsx)("div",{className:"tag-gallery",children:h.map((function(e){return Object(b.jsx)(V,{name:e.name,colour:e.colour,id:e.id,setTagData:O,tagData:h})}))})]})})};var W=function(){return Object(b.jsx)(i.a,{children:Object(b.jsxs)("div",{className:"task-manager",children:[Object(b.jsx)(g,{}),Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{path:"/task-manager/tasks",component:G}),Object(b.jsx)(r.a,{path:"/task-manager/completed-tasks",component:A}),Object(b.jsx)(r.a,{path:"/task-manager/tags",component:L})]})]})})};var q=function(e){var t=e.sessionData,a=e.setSessionData,s=JSON.parse(localStorage.getItem("tasksData")||"[]").filter((function(e){if(!1===e.task_isCompleted)return e})),c={id:100*Math.random(),activeTime:25,shortBreak:5,longBreak:30,intervals:4,isStarted:!1,isFinished:!1,currentInterval:0};return Object(b.jsxs)("div",{className:"task-create",children:[Object(b.jsxs)("header",{className:"session-create__header",children:[Object(b.jsx)("h4",{className:"session-create__heading",children:"Create Session"}),Object(b.jsx)(i.b,{to:"/pomodoro/session-manager",children:Object(b.jsx)(v.a,{className:"close-icon"})})]}),Object(b.jsxs)("form",{className:"session-create__form",children:[Object(b.jsx)("label",{htmlFor:"stitle",className:"session-create__form__label",children:"Session Title"}),Object(b.jsx)("input",{type:"text",name:"sessiontitle",id:"stitle",placeholder:"Your Session Title",className:"input__text",onChange:function(e){c.title=e.target.value}}),Object(b.jsxs)("label",{htmlFor:"sstudytime",className:"session-create__form__label",children:["Active Time ",Object(b.jsx)("span",{className:"light-italic",children:"(in minutes)"})]}),Object(b.jsx)("input",{type:"number",name:"SessionStudyTime",id:"sstudytime",className:"input__number",onChange:function(e){c.activeTime=e.target.value},defaultValue:"25",min:"10",max:"120"}),Object(b.jsxs)("label",{htmlFor:"sshortbreaktime",className:"session-create__form__label",children:["Short Break Time ",Object(b.jsx)("span",{className:"light-italic",children:"(in minutes)"})]}),Object(b.jsx)("input",{type:"number",name:"SessionShortBreakTime",id:"sshortbreaktime",className:"input__number",onChange:function(e){c.shortBreak=e.target.value},defaultValue:"5",min:"5",max:"20"}),Object(b.jsxs)("label",{htmlFor:"slongbreaktime",className:"session-create__form__label",children:["Long Break Time ",Object(b.jsx)("span",{className:"light-italic",children:"(in minutes)"})]}),Object(b.jsx)("input",{type:"number",name:"SessionLongBreakTime",id:"slongbreaktime",className:"input__number",onChange:function(e){c.longBreak=e.target.value},defaultValue:"30",min:"20",max:"60"}),Object(b.jsx)("label",{htmlFor:"stask",className:"session-create__form__label",children:"Task"}),Object(b.jsxs)("select",{name:"sessiontask",id:"stask",className:"session-create__form__select",onChange:function(e){c.task=e.target.value;var t=e.target.selectedIndex,a=e.target.childNodes[t].getAttribute("id");s.forEach((function(e){e.task_id==a&&(c.tag=e.task_tag)}))},children:[Object(b.jsx)("option",{value:"",selected:!0,disabled:!0,hidden:!0}),0===s.length?Object(b.jsx)("option",{disabled:!0,children:"Create some Tasks"}):s.map((function(e){return Object(b.jsx)("option",{value:"".concat(e.task_title),id:e.task_id,children:e.task_title})}))]}),Object(b.jsx)("label",{htmlFor:"sintervals",className:"session-create__form__label",children:"Number of Intervals"}),Object(b.jsx)("input",{type:"number",name:"sessionintervals",id:"sintervals",className:"input__number",onChange:function(e){c.intervals=e.target.value},defaultValue:"4",min:"1",max:"12"}),Object(b.jsx)("label",{htmlFor:"tdescription",className:"session-create__form__label",children:"Description"}),Object(b.jsx)("textarea",{name:"sessiondescription",id:"tdescription",cols:"30",rows:"4",placeholder:"Description for your Session...",className:"session-create__form__description",onChange:function(e){c.description=e.target.value}}),Object(b.jsx)("button",{className:"input__button",type:"submit",onClick:function(){t.push(c),a(Object(x.a)(t)),localStorage.setItem("sessionsData",JSON.stringify(t))},children:Object(b.jsx)(i.b,{to:"/pomodoro/session-manager",class:"input__button__link",children:Object(b.jsx)("h4",{children:"Create Session"})})})]})]})},z=a(90),K=a.n(z);var Q=function(e){var t=e.session,a=t.id,c=(t.activeTime,t.shortBreak,t.longBreak,t.isStarted,t.isFinished),n=t.title,r=t.task,o=t.currentInterval,l=t.intervals,j=t.description,d=Object(s.useState)(e.session.isStarted),m=Object(p.a)(d,2),u=m[0],h=m[1],O=e.sessionData,_=e.setSessionData,g=(e.currentSession,e.setCurrentSession);return Object(b.jsxs)("div",{className:"session-card",children:[Object(b.jsxs)("div",{className:"session-card__info",children:[Object(b.jsx)("h4",{className:"session-card__info__name",children:n}),Object(b.jsx)("p",{className:"session-card__info__task",children:r}),Object(b.jsx)("p",{className:"session-card__info__description",children:j})]}),Object(b.jsxs)("div",{className:"session-card__actions",children:[Object(b.jsx)("button",{className:"session-card__actions__button",onClick:function(){var e=O.filter((function(e){if(a!==e.id)return e}));_(Object(x.a)(e)),localStorage.setItem("sessionsData",JSON.stringify(e))},children:Object(b.jsx)(w.a,{})}),!1===c?Object(b.jsx)(i.b,{to:"/pomodoro/timer",children:Object(b.jsx)("button",{className:"session-card__actions__button",onClick:function(){h(!0);var t=O.filter((function(e){return a===e.id&&(e.isStarted=!0),e}));_(Object(x.a)(t)),localStorage.setItem("sessionsData",JSON.stringify(t)),g(e.session)},children:Object(b.jsx)(K.a,{})})}):Object(b.jsx)("div",{})]}),Object(b.jsxs)("div",{className:"session-card__status",children:[Object(b.jsxs)("div",{className:"session-card__status__stat",children:[Object(b.jsx)("p",{className:"session-card__status__stat__name",children:"Status: "}),!0===c?Object(b.jsx)("p",{className:"session-card__status__stat__value session-card__status__stat__value--finished ",children:"Finished"}):!0===u?Object(b.jsx)("p",{className:"session-card__status__stat__value session-card__status__stat__value--started ",children:"Started"}):Object(b.jsx)("p",{className:"session-card__status__stat__value",children:"Not Started"})]}),Object(b.jsxs)("div",{className:"session-card__status__stat",children:[Object(b.jsx)("p",{className:"session-card__status__stat__name",children:"Progress:"}),Object(b.jsxs)("p",{className:"session-card__status__stat__value",children:[o,"/",l]})]})]})]})},U=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this)).state={task:e.task},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"current-task",children:[Object(b.jsx)("h3",{className:"current-task__heading",children:"Current Task"}),Object(b.jsx)("h4",{className:"current-task__name",children:this.state.task})]})}}]),a}(s.Component),X=(s.Component,s.Component,a.p,a.p+"static/media/end-sound.1154923f.wav");var Z=function(e){var t=Object(s.useState)(e.activeTime),a=Object(p.a)(t,2),c=a[0],n=a[1],i=Object(s.useState)(0),r=Object(p.a)(i,2),o=r[0],l=r[1],j=Object(s.useState)(0),d=Object(p.a)(j,2),m=d[0],u=d[1],h=Object(s.useState)(e.currentBlock),O=Object(p.a)(h,2),_=O[0],g=O[1],x=Object(s.useState)(e.blocks),k=Object(p.a)(x,2),v=k[0],N=(k[1],Object(s.useState)(!1)),f=Object(p.a)(N,2),S=f[0],C=f[1],y=Object(s.useState)(!0),T=Object(p.a)(y,2),D=T[0],w=T[1],I=Object(s.useState)(0),B=Object(p.a)(I,2),J=B[0],F=B[1],M=e.activeTime,E=e.shortBreak,R=e.longBreak,P=e.currentSession,G=e.setCurrentSession,H=e.isSession,A=e.setIsSession,V=e.setTimerIsStarted;return Object(s.useEffect)((function(){var e;return!0===S&&(V(!0),e=setInterval((function(){if(0===o){if(0===c){if(new Audio(X).play(),!0===H){P.currentInterval=_+1,G(P),g((function(e){return e+1})),w(!1),A(!1),_+1==v&&(P.isFinished=!0);var e=JSON.parse(localStorage.getItem("tagsData")).map((function(e){return console.log(e,P),e.name===P.tag&&(e.tagTotalTime=e.tagTotalTime+J,F(0)),e}));localStorage.setItem("tagsData",JSON.stringify(e))}return void C(!1)}n(c-1),l(59),!0===H&&F(J+1)}else l(o-1),!0===H&&F(J+1);u((function(e){return e+1}))}),1e3)),function(){clearInterval(e)}}),[S,m]),Object(b.jsxs)("div",{className:"timer",children:[Object(b.jsxs)("h1",{className:"timer__value",children:[c<10?"0":"",c,":",o<10?"0":"",o]}),Object(b.jsxs)("p",{className:"timer__session",children:[_,"/",v]}),Object(b.jsxs)("div",{className:"timerpage__controls",children:[Object(b.jsx)("a",{href:"javascript:void(0)",className:"button button--basic",onClick:function(){!0!==P.isFinished&&1==D&&C(!0)},children:"Start"}),Object(b.jsx)("a",{href:"javascript:void(0)",className:"button button--basic",onClick:function(){!0!==P.isFinished&&C(!1)},children:"Pause"})]}),Object(b.jsxs)("div",{class:"timerpage__buttons",children:[Object(b.jsx)("a",{href:"javascript:void(0)",className:"pomodoro-controls",onClick:function(){!1===S&&(A(!0),n(M),l(0),w(!0))},children:Object(b.jsx)("h4",{children:"Pomodoro"})}),Object(b.jsx)("a",{href:"javascript:void(0)",className:"pomodoro-controls",onClick:function(){!1===S&&(A(!1),n(E),l(0),w(!0))},children:Object(b.jsx)("h4",{children:"Short Break"})}),Object(b.jsx)("a",{href:"javascript:void(0)",className:"pomodoro-controls",onClick:function(){!1===S&&(A(!1),n(R),l(0),w(!0))},children:Object(b.jsx)("h4",{children:"Long Break"})})]})]})},$=a(91),ee=a.n($);var te=function(){return Object(b.jsx)("div",{className:"overlay",children:Object(b.jsxs)("div",{className:"close-warning",children:[Object(b.jsx)("p",{className:"close-warning__message",children:"Are you sure you want to go back?"}),Object(b.jsxs)("div",{className:"close-warning__action",children:[Object(b.jsx)(i.b,{to:"/pomodoro/timer/",className:"close-warning__action__buttons close-warning__action__buttons--green",children:"Stay Here"}),Object(b.jsx)(i.b,{to:"/pomodoro/session-manager",className:"close-warning__action__buttons close-warning__action__buttons--red",children:"Go Back"})]})]})})};var ae=function(e){var t=e.currentSession,a=e.setCurrentSession;Object(s.useEffect)((function(){return function(){var e=JSON.parse(localStorage.getItem("sessionsData")||"[]").map((function(e){return t.id===e.id?t:e}));localStorage.setItem("sessionsData",JSON.stringify(e))}}),[]);var c=t.activeTime,n=t.shortBreak,o=t.longBreak,l=t.currentInterval,j=t.intervals,d=Object(s.useState)(!0),m=Object(p.a)(d,2),u=m[0],h=m[1],O=Object(s.useState)(!1),_=Object(p.a)(O,2),g=_[0],x=_[1];return Object(b.jsx)(i.a,{children:Object(b.jsxs)("div",{className:"timerpage",children:[Object(b.jsx)("div",{className:"timerpage__back",children:Object(b.jsx)(i.b,{to:"".concat(!1===g?"/pomodoro/session-manager":"/pomodoro/timer/close-message"),children:Object(b.jsx)(ee.a,{})})}),Object(b.jsx)(r.c,{children:Object(b.jsx)(r.a,{path:"/pomodoro/timer/close-message",children:Object(b.jsx)(te,{})})}),!0===u?Object(b.jsx)(U,{task:t.task}):Object(b.jsxs)("div",{className:"break-time",children:[Object(b.jsx)("h3",{children:"Break Time"}),Object(b.jsx)("h4",{children:"Time for rest"})]}),Object(b.jsx)(Z,{activeTime:c,shortBreak:n,longBreak:o,currentBlock:l,blocks:j,currentSession:t,setCurrentSession:a,isSession:u,setIsSession:h,setTimerIsStarted:x})]})})},se=a.p+"static/media/Rigby-reading.343b8b6a.png";var ce=function(e){var t=e.currentSession,a=e.setCurrentSession,c=Object(s.useState)([]),n=Object(p.a)(c,2),o=n[0],l=n[1];return Object(s.useEffect)((function(){l(Object(x.a)(JSON.parse(localStorage.getItem("sessionsData")||"[]")))}),[]),Object(b.jsx)(i.a,{children:Object(b.jsx)("div",{className:"task-manager",children:Object(b.jsxs)("div",{className:"task-section",children:[Object(b.jsxs)("header",{className:"task-section__header",children:[Object(b.jsx)("h2",{className:"heading",children:"Sessions"}),Object(b.jsxs)(i.b,{to:"/pomodoro/session-manager/create-session",className:"add-task",children:[Object(b.jsx)("h4",{children:"New Session"}),Object(b.jsx)(C.a,{className:"add-task__icon"})]})]}),Object(b.jsx)(r.c,{children:Object(b.jsx)(r.a,{path:"/pomodoro/session-manager/create-session",children:Object(b.jsx)(q,{sessionData:o,setSessionData:l})})}),0===o.length?Object(b.jsx)(R,{image:se,text:"Create a session and let's get productive :D",alt:"Rigby Reading",height:300}):o.map((function(e){return Object(b.jsx)(Q,{session:e,sessionData:o,setSessionData:l,currentSession:t,setCurrentSession:a})}))]})})})};var ne=function(){var e=Object(s.useState)({}),t=Object(p.a)(e,2),a=t[0],c=t[1];return Object(b.jsx)(i.a,{children:Object(b.jsx)("div",{className:"pomodoro",children:Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{path:"/pomodoro/session-manager",children:Object(b.jsx)(ce,{currentSession:a,setCurrentSession:c})}),Object(b.jsx)(r.a,{path:"/pomodoro/timer",children:Object(b.jsx)(ae,{currentSession:a,setCurrentSession:c})})]})})})},ie=(a(22),a(94));var re=function(e){var t=Object(s.useState)([]),a=Object(p.a)(t,2),c=a[0],n=a[1],i=Object(s.useState)([]),r=Object(p.a)(i,2),o=r[0],l=r[1],j=Object(s.useState)([]),d=Object(p.a)(j,2),m=d[0],u=d[1],h=Object(s.useState)([]),O=Object(p.a)(h,2),_=O[0],g=O[1];return Object(s.useEffect)((function(){var e=JSON.parse(localStorage.getItem("tagsData")||"[]");n(e.map((function(e){return e.name}))),l(e.map((function(e){return e.tagTotalTime/60}))),u(e.map((function(e){return e.colour+"cc"}))),g(e.map((function(e){return e.colour})))}),[]),Object(b.jsx)("div",{className:"tag-distribution",children:Object(b.jsx)(ie.a,{height:250,width:250,data:{labels:c,datasets:[{data:o,backgroundColor:m,borderColor:_,borderWidth:1}]},options:{responsive:!1,layout:{padding:0},plugins:{legend:{position:"top",maxWidth:120,labels:{boxWidth:10,boxHeight:10}},title:{display:!0,text:"Tag Distribution"}}}})})},oe=a.p+"static/media/Mordecai-Rigby-benson.e45f5f0f.png";var le=function(){var e=Object(s.useState)(!0),t=Object(p.a)(e,2),a=t[0],c=t[1];return Object(s.useEffect)((function(){0===JSON.parse(localStorage.getItem("tagsData")||"[]").length&&c(!1)}),[]),Object(b.jsxs)("div",{className:"task-section",children:[Object(b.jsx)("header",{className:"task-section__header",children:Object(b.jsx)("h2",{className:"heading",children:"Stats"})}),!0===a?Object(b.jsx)(re,{}):Object(b.jsx)(R,{image:oe,text:"Your stats will appear once you start completing your tasks :P",alt:"Benson wants you to do your job",height:300})]})};var je=function(){return Object(b.jsxs)("div",{className:"main",children:[Object(b.jsx)(_,{}),Object(b.jsx)(r.a,{path:"/",exact:!0,component:O}),Object(b.jsx)(r.a,{path:"/task-manager",component:W}),Object(b.jsx)(r.a,{path:"/session-manager",component:ce}),Object(b.jsx)(r.a,{path:"/pomodoro",component:ne}),Object(b.jsx)(r.a,{path:"/stats",component:le})]})};n.a.render(Object(b.jsx)(i.a,{children:Object(b.jsx)(je,{})}),document.getElementById("root"))}},[[213,1,2]]]);
//# sourceMappingURL=main.0b04e411.chunk.js.map