(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{42:function(e,t,s){},51:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(24),n=s.n(c),i=s(3),r=s(6),o=(s(42),s(7)),l=s(8),j=s(10),d=s(9),m=s(0),b=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={handleClick:e.handleClick,text:e.text,to:e.to},a}return Object(l.a)(s,[{key:"render",value:function(){return Object(m.jsx)("a",{href:"javascript:void(0)",className:"button button--basic",onClick:this.state.handleClick,to:this.state.to,children:this.props.text})}}]),s}(a.Component),u=s.p+"static/media/illustration-working-brown.24887bc9.svg",h=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).state={greeting:"",userName:"Stranger"},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=(new Date).getHours();e>=0&&e<12?this.setState({greeting:"Good Morning"}):e>=12&&e<16?this.setState({greeting:"Good Afternoon"}):this.setState({greeting:"Good Evening"})}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"hero-box",children:[Object(m.jsx)("h3",{className:"greeting",children:this.state.greeting}),Object(m.jsx)("h2",{className:"user-name",children:this.state.userName}),Object(m.jsx)("img",{src:u,alt:"Girl looking at computer, being productive",className:"hero-box__image"}),Object(m.jsxs)("p",{className:"hero-box__description",children:["Pomodoro will make your work easier and more",Object(m.jsx)("span",{class:"bold-text",children:" productive"})]})]})}}]),s}(a.Component),_=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"homepage",children:[Object(m.jsx)(h,{}),Object(m.jsxs)("div",{class:"homepage__buttons",children:[Object(m.jsx)(i.b,{to:"/pomodoro/session-manager",children:Object(m.jsx)(b,{text:"Start"})}),Object(m.jsx)(i.b,{to:"/task-manager/tasks",children:Object(m.jsx)(b,{text:"View Tasks"})})]})]})}}]),s}(a.Component),O=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(m.jsx)("header",{className:"header",children:Object(m.jsxs)("div",{className:"mobile-navbar",children:[Object(m.jsx)("div",{className:"app-name",children:Object(m.jsx)(i.b,{to:"/",children:Object(m.jsx)("h1",{children:"Pomodoro"})})}),Object(m.jsx)("a",{href:"javascript:void(0)",className:"hamburger-menu",children:Object(m.jsx)("img",{src:"https://img.icons8.com/material-outlined/24/000000/menu--v1.png",alt:"Hamburger Menu Icon",className:"hamburger-menu__icon"})})]})})}}]),s}(a.Component),x=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(m.jsx)("nav",{className:"task-nav-bar",children:Object(m.jsxs)("ul",{className:"task-nav-bar__list",children:[Object(m.jsx)("li",{className:"task-nav-bar__list__item",children:Object(m.jsx)(i.b,{href:"javascript:void(0)",className:"task-nav-bar__list__item__link",to:"/task-manager/tasks",children:"Tasks"})}),Object(m.jsx)("li",{className:"task-nav-bar__list__item",children:Object(m.jsx)(i.b,{href:"javascript:void(0)",className:"task-nav-bar__list__item__link",to:"/task-manager/completed-tasks",children:"Completed"})}),Object(m.jsx)("li",{className:"task-nav-bar__list__item",children:Object(m.jsx)(i.b,{href:"javascript:void(0)",className:"task-nav-bar__list__item__link",to:"/task-manager/tags",children:"Tags"})})]})})}}]),s}(a.Component),g=s(5),k=s(4),p=s(21),v=s.n(p);var N=function(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),s=e.toLocaleString("default",{month:"long"});return function(e){var t=Number(e);return t+(t>0?["th","st","nd","rd"][t>3&&t<21||t%10>3?0:t%10]:"")}(t)+", "+s};var f=function(e){var t=e.tasks,s=e.submitTaskHandle,c=JSON.parse(localStorage.getItem("tagsData")||"[]"),n=Object(a.useState)(""),r=Object(k.a)(n,2),o=r[0],l=r[1],j=Object(a.useState)(""),d=Object(k.a)(j,2),b=d[0],u=d[1],h=Object(a.useState)(""),_=Object(k.a)(h,2),O=_[0],x=_[1],p=Object(a.useState)(""),f=Object(k.a)(p,2),S=f[0],C=f[1],y=Object(a.useState)(Object(g.a)(c)),T=Object(k.a)(y,2),D=T[0];return T[1],Object(m.jsxs)("div",{className:"task-create",children:[Object(m.jsxs)("header",{className:"task-create__header",children:[Object(m.jsx)("h4",{className:"task-create__heading",children:"Create Task"}),Object(m.jsx)(i.b,{to:"/task-manager/tasks",children:Object(m.jsx)(v.a,{className:"close-icon"})})]}),Object(m.jsxs)("form",{className:"task-create__form",children:[Object(m.jsx)("label",{htmlFor:"ttitle",className:"task-create__form__label",children:"Task Title"}),Object(m.jsx)("input",{type:"text",name:"tasktitle",id:"ttitle",placeholder:"Your Task Title",className:"input__text",onChange:function(e){l(e.target.value)}}),Object(m.jsx)("label",{htmlFor:"ttag",className:"task-create__form__label",children:"Tag"}),Object(m.jsxs)("select",{name:"tasktag",id:"ttag",className:"task-create__form__select",onChange:function(e){console.log(e.target),u(e.target.value)},children:[Object(m.jsx)("option",{value:"",selected:!0,disabled:!0,hidden:!0}),0===D.length?Object(m.jsx)("option",{disabled:!0,children:"Make some Tags"}):D.map((function(e){return Object(m.jsx)("option",{value:"".concat(e.name),id:e.id,children:e.name})}))]}),Object(m.jsx)("label",{htmlFor:"testimate",className:"task-create__form__label",children:"Estimated Time to Complete"}),Object(m.jsx)("input",{type:"text",name:"taskestimate",id:"testimate",placeholder:"Time in Minutes",className:"input__text",onChange:function(e){x(e.target.value)}}),Object(m.jsx)("label",{htmlFor:"tdescription",className:"task-create__form__label",children:"Description"}),Object(m.jsx)("textarea",{name:"taskdescription",id:"tdescription",cols:"30",rows:"4",placeholder:"Description for your Task...",className:"task-create__form__description",onChange:function(e){C(e.target.value)}}),Object(m.jsx)("button",{className:"input__button",type:"submit",onClick:function(e){e.preventDefault();var a={};a.task_title=o,a.task_tag=b,a.task_estimate=O,a.task_desc=S,a.task_isCompleted=!1,a.task_startDate=N(),a.task_endDate="-",a.task_id=100*Math.random(),t.push(a),console.log(t),localStorage.setItem("tasksData",JSON.stringify(t)),s(t)},children:Object(m.jsx)(i.b,{to:"/task-manager/tasks",class:"input__button__link",children:Object(m.jsx)("h4",{children:"Create Task"})})})]})]})},S=s(22),C=s.n(S),y=s(32),T=s.n(y),D=s(27),w=s.n(D),I=s(33),B=s.n(I),F=s(34),J=s.n(F);var M=function(e){var t=JSON.parse(localStorage.getItem("tagsData")||"[]"),s=e.task,a=s.task_tag,c=s.task_title,n=s.task_desc,i=s.task_estimate,r=s.task_id,o=s.task_startDate,l=s.task_endDate,j=s.task_isCompleted,d={};0!==t.length&&t.forEach((function(e){e.name!==a||(d.color=e.colour)}));var b=e.tasks,u=e.setTasks;return Object(m.jsxs)("div",{className:"task-card ".concat(!0===j?"task-card--completed":""),children:[Object(m.jsxs)("div",{className:"task-info",children:[Object(m.jsx)("p",{className:"task-info__tag",style:d,children:a}),Object(m.jsx)("h4",{className:"task-info__name",children:c}),Object(m.jsx)("p",{className:"task-info__desc",children:n})]}),Object(m.jsxs)("div",{className:"task-card__actions",children:[Object(m.jsx)("button",{className:"task-card__actions__button",onClick:function(){var e=b.map((function(e){return r===e.task_id&&(e.task_isCompleted=!0,e.task_endDate=N()),e}));localStorage.setItem("tasksData",JSON.stringify(e)),u(Object(g.a)(e))},children:Object(m.jsx)(T.a,{className:"task-icon task-icon--done"})}),Object(m.jsx)("button",{className:"task-card__actions__button",onClick:function(){var e=b.filter((function(e){return r!==e.task_id}));localStorage.setItem("tasksData",JSON.stringify(e)),u(Object(g.a)(e))},children:Object(m.jsx)(w.a,{className:"task-icon task-icon--delete"})})]}),Object(m.jsxs)("div",{className:"task-card__time",children:[Object(m.jsx)(B.a,{className:"task-icon--time"}),Object(m.jsxs)("div",{className:"time-stat",children:[Object(m.jsx)("p",{className:"time-stat__name",children:"Estimated Time"}),Object(m.jsxs)("p",{className:"time-stat__value",children:[i," mins"]})]}),Object(m.jsx)(J.a,{className:"task-icon--time"}),Object(m.jsxs)("div",{className:"time-stat",children:[Object(m.jsx)("p",{className:"time-stat__name",children:"Start"}),Object(m.jsx)("p",{className:"time-stat__value",children:o})]}),Object(m.jsxs)("div",{className:"time-stat",children:[Object(m.jsx)("p",{className:"time-stat__name",children:"End"}),Object(m.jsx)("p",{className:"time-stat__value",children:l})]})]})]})},R=s.p+"static/media/Mordecai-Rigby-enjoying.89e2f180.png";var E=function(e){return Object(m.jsxs)("div",{className:"regular-show",children:[Object(m.jsx)("img",{src:e.image,alt:e.alt,className:"regular-show__pic"}),Object(m.jsx)("p",{className:"regular-show__text",children:e.text})]})};var G=function(e){var t=e.tagColour,s=e.setTagColour,a=e.tagName,c=e.setTagName,n=e.setTagData,r=e.tagData;return Object(m.jsx)("div",{className:"tag-create",children:Object(m.jsxs)("form",{className:"tag-create__form",children:[Object(m.jsxs)("div",{className:"tag-create__data",children:[Object(m.jsx)("label",{htmlFor:"tgname",className:"tag-create__form__label",children:"Tag Name"}),Object(m.jsx)("input",{type:"text",name:"TagName",id:"tgname",className:"input__text",onChange:function(e){c(e.target.value)}}),Object(m.jsx)("label",{htmlFor:"tgcolour",className:"tag-create__form__label",children:"Tag Colour"}),Object(m.jsx)("div",{className:"input__colour",children:Object(m.jsx)("input",{type:"color",name:"TagColour",id:"tgcolour",className:"input__colour__picker",onChange:function(e){s(e.target.value)}})})]}),Object(m.jsx)("div",{className:"tag-create__close",children:Object(m.jsx)(i.b,{to:"/task-manager/tags",children:Object(m.jsx)(v.a,{})})}),Object(m.jsx)("div",{className:"tag-create__submit",children:Object(m.jsx)("button",{className:"input__button",type:"submit",onClick:function(){var e={name:a,colour:t,id:100*Math.random()};r.push(e),localStorage.setItem("tagsData",JSON.stringify(r)),n(Object(g.a)(r))},children:Object(m.jsx)(i.b,{to:"/task-manager/tags",class:"input__button__link",children:Object(m.jsx)("h4",{children:"Create Tag"})})})})]})})};var P=function(){var e=JSON.parse(localStorage.getItem("tasksData")||"[]"),t=Object(a.useState)(Object(g.a)(e)),s=Object(k.a)(t,2),c=s[0],n=s[1],o=e.filter((function(e){if(0==e.task_isCompleted)return e}));return Object(m.jsx)(i.a,{children:Object(m.jsxs)("div",{className:"task-section",children:[Object(m.jsxs)("header",{className:"task-section__header",children:[Object(m.jsx)("h2",{className:"heading",children:"Tasks"}),Object(m.jsxs)(i.b,{to:"/task-manager/tasks/create-task",className:"add-task",children:[Object(m.jsx)("h4",{children:"New Task"}),Object(m.jsx)(C.a,{className:"add-task__icon"})]})]}),Object(m.jsx)(r.c,{children:Object(m.jsx)(r.a,{path:"/task-manager/tasks/create-task",children:Object(m.jsx)(f,{submitTaskHandle:function(e){n(Object(g.a)(e))},tasks:c})})}),0==o.length?Object(m.jsx)(E,{image:R,text:"You have no tasks for now. Go and have some fun :)",alt:"Moredecai and Rigby enjoying"}):Object(m.jsx)("ul",{className:"task-list",children:c.map((function(e){return 0==e.task_isCompleted?Object(m.jsx)(M,{task:e,tasks:c,setTasks:n},e.task_id):""}))})]})})},A=s.p+"static/media/Mordecai-Rigby-working.8610382c.png";var H=function(){var e=JSON.parse(localStorage.getItem("tasksData")||"[]"),t=Object(a.useState)(Object(g.a)(e)),s=Object(k.a)(t,2),c=s[0],n=s[1],i=e.filter((function(e){if(1==e.task_isCompleted)return e}));return Object(m.jsxs)("div",{className:"task-section",children:[Object(m.jsx)("header",{className:"task-section__header",children:Object(m.jsx)("h2",{className:"heading",children:"Completed Tasks"})}),0==i.length?Object(m.jsx)(E,{image:A,text:"You haven't completed any tasks. Now get back to work ;)",alt:"Moredecai and Rigby Working"}):Object(m.jsx)("ul",{className:"task-list",children:i.map((function(e){return Object(m.jsx)(M,{task:e,tasks:c,setTasks:n},e.task_id)}))})]})};var V=function(e){var t=e.name,s=e.colour,a=e.id,c=e.tagData,n=e.setTagData;console.log(t,s,a,c,n);var i={backgroundColor:s};return Object(m.jsxs)("div",{className:"tag-card",children:[Object(m.jsx)("div",{className:"tag-card__colour",style:i}),Object(m.jsx)("h3",{className:"tag-card__name",children:t}),Object(m.jsx)("div",{className:"tag-card__close",children:Object(m.jsx)(v.a,{className:"tag-card__close__icon",onClick:function(){var e=c.filter((function(e){if(e.id!==a)return e}));n(Object(g.a)(e)),localStorage.setItem("tagsData",JSON.stringify(e))}})})]})},L=s.p+"static/media/Mordecai-Rigby-pointing.e3f7fdfd.png";var Y=function(){var e=Object(a.useState)("#000"),t=Object(k.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),o=Object(k.a)(n,2),l=o[0],j=o[1],d=JSON.parse(localStorage.getItem("tagsData")||"[]"),b=Object(a.useState)(Object(g.a)(d)),u=Object(k.a)(b,2),h=u[0],_=u[1];return Object(m.jsx)(i.a,{children:Object(m.jsxs)("div",{className:"task-section",children:[Object(m.jsxs)("header",{className:"task-section__header",children:[Object(m.jsx)("h2",{className:"heading",children:"Tags"}),Object(m.jsxs)(i.b,{to:"/task-manager/tags/create-tag",className:"add-task",children:[Object(m.jsx)("h4",{children:"New Tag"}),Object(m.jsx)(C.a,{className:"add-task__icon"})]})]}),Object(m.jsx)("p",{className:"warning",children:"Recommended that you don't delete any tags and you choose a dark colour"}),Object(m.jsx)(r.c,{children:Object(m.jsx)(r.a,{path:"/task-manager/tags/create-tag",children:Object(m.jsx)(G,{tagColour:s,setTagColour:c,tagName:l,setTagName:j,setTagData:_,tagData:h})})}),0===d.length?Object(m.jsx)(E,{image:L,text:"C'mon, create tags so you can track your tasks and be more productive :O",alt:"Moredecai and Rigby Pointing"}):Object(m.jsx)("div",{className:"tag-gallery",children:h.map((function(e){return Object(m.jsx)(V,{name:e.name,colour:e.colour,id:e.id,setTagData:_,tagData:h})}))})]})})};var W=function(){return Object(m.jsx)(i.a,{children:Object(m.jsxs)("div",{className:"task-manager",children:[Object(m.jsx)(x,{}),Object(m.jsxs)(r.c,{children:[Object(m.jsx)(r.a,{path:"/task-manager/tasks",component:P}),Object(m.jsx)(r.a,{path:"/task-manager/completed-tasks",component:H}),Object(m.jsx)(r.a,{path:"/task-manager/tags",component:Y})]})]})})};var q=function(e){var t=e.sessionData,s=e.setSessionData;console.log(t,s);var a=JSON.parse(localStorage.getItem("tasksData")||"[]").filter((function(e){if(!1===e.task_isCompleted)return e})),c={id:100*Math.random(),activeTime:25,shortBreak:5,longBreak:30,intervals:4,isStarted:!1,isFinished:!1,currentInterval:0};return Object(m.jsxs)("div",{className:"task-create",children:[Object(m.jsxs)("header",{className:"session-create__header",children:[Object(m.jsx)("h4",{className:"session-create__heading",children:"Create Session"}),Object(m.jsx)(i.b,{to:"/pomodoro/session-manager",children:Object(m.jsx)(v.a,{className:"close-icon"})})]}),Object(m.jsxs)("form",{className:"session-create__form",children:[Object(m.jsx)("label",{htmlFor:"stitle",className:"session-create__form__label",children:"Session Title"}),Object(m.jsx)("input",{type:"text",name:"sessiontitle",id:"stitle",placeholder:"Your Session Title",className:"input__text",onChange:function(e){c.title=e.target.value}}),Object(m.jsxs)("label",{htmlFor:"sstudytime",className:"session-create__form__label",children:["Active Time ",Object(m.jsx)("span",{className:"light-italic",children:"(in minutes)"})]}),Object(m.jsx)("input",{type:"number",name:"SessionStudyTime",id:"sstudytime",className:"input__number",onChange:function(e){c.activeTime=e.target.value},defaultValue:"25",min:"10",max:"120"}),Object(m.jsxs)("label",{htmlFor:"sshortbreaktime",className:"session-create__form__label",children:["Short Break Time ",Object(m.jsx)("span",{className:"light-italic",children:"(in minutes)"})]}),Object(m.jsx)("input",{type:"number",name:"SessionShortBreakTime",id:"sshortbreaktime",className:"input__number",onChange:function(e){c.shortBreak=e.target.value},defaultValue:"5",min:"5",max:"20"}),Object(m.jsxs)("label",{htmlFor:"slongbreaktime",className:"session-create__form__label",children:["Long Break Time ",Object(m.jsx)("span",{className:"light-italic",children:"(in minutes)"})]}),Object(m.jsx)("input",{type:"number",name:"SessionLongBreakTime",id:"slongbreaktime",className:"input__number",onChange:function(e){c.longBreak=e.target.value},defaultValue:"30",min:"20",max:"60"}),Object(m.jsx)("label",{htmlFor:"stask",className:"session-create__form__label",children:"Task"}),Object(m.jsxs)("select",{name:"sessiontask",id:"stask",className:"session-create__form__select",onChange:function(e){c.task=e.target.value},children:[Object(m.jsx)("option",{value:"",selected:!0,disabled:!0,hidden:!0}),0===a.length?Object(m.jsx)("option",{disabled:!0,children:"Create some Tasks"}):a.map((function(e){return Object(m.jsx)("option",{value:"".concat(e.task_title),id:e.task_id,children:e.task_title})}))]}),Object(m.jsx)("label",{htmlFor:"sintervals",className:"session-create__form__label",children:"Number of Intervals"}),Object(m.jsx)("input",{type:"number",name:"sessionintervals",id:"sintervals",className:"input__number",onChange:function(e){c.intervals=e.target.value},defaultValue:"4",min:"1",max:"12"}),Object(m.jsx)("label",{htmlFor:"tdescription",className:"session-create__form__label",children:"Description"}),Object(m.jsx)("textarea",{name:"sessiondescription",id:"tdescription",cols:"30",rows:"4",placeholder:"Description for your Session...",className:"session-create__form__description",onChange:function(e){c.description=e.target.value}}),Object(m.jsx)("button",{className:"input__button",type:"submit",onClick:function(){t.push(c),s(Object(g.a)(t)),localStorage.setItem("sessionsData",JSON.stringify(t))},children:Object(m.jsx)(i.b,{to:"/pomodoro/session-manager",class:"input__button__link",children:Object(m.jsx)("h4",{children:"Create Session"})})})]})]})},z=s(35),K=s.n(z);var Q=function(e){var t=e.session,s=t.id,c=(t.activeTime,t.shortBreak,t.longBreak,t.isStarted,t.isFinished),n=t.title,r=t.task,o=t.currentInterval,l=t.intervals,j=t.description,d=Object(a.useState)(e.session.isStarted),b=Object(k.a)(d,2),u=b[0],h=b[1],_=e.sessionData,O=e.setSessionData,x=(e.currentSession,e.setCurrentSession);return Object(m.jsxs)("div",{className:"session-card",children:[Object(m.jsxs)("div",{className:"session-card__info",children:[Object(m.jsx)("h4",{className:"session-card__info__name",children:n}),Object(m.jsx)("p",{className:"session-card__info__task",children:r}),Object(m.jsx)("p",{className:"session-card__info__description",children:j})]}),Object(m.jsxs)("div",{className:"session-card__actions",children:[Object(m.jsx)("button",{className:"session-card__actions__button",onClick:function(){var e=_.filter((function(e){if(s!==e.id)return e}));O(Object(g.a)(e)),localStorage.setItem("sessionsData",JSON.stringify(e))},children:Object(m.jsx)(w.a,{})}),!1===c?Object(m.jsx)(i.b,{to:"/pomodoro/timer",children:Object(m.jsx)("button",{className:"session-card__actions__button",onClick:function(){h(!0);var t=_.filter((function(e){return s===e.id&&(e.isStarted=!0),e}));O(Object(g.a)(t)),localStorage.setItem("sessionsData",JSON.stringify(t)),x(e.session)},children:Object(m.jsx)(K.a,{})})}):Object(m.jsx)("div",{})]}),Object(m.jsxs)("div",{className:"session-card__status",children:[Object(m.jsxs)("div",{className:"session-card__status__stat",children:[Object(m.jsx)("p",{className:"session-card__status__stat__name",children:"Status: "}),!0===c?Object(m.jsx)("p",{className:"session-card__status__stat__value session-card__status__stat__value--finished ",children:"Finished"}):!0===u?Object(m.jsx)("p",{className:"session-card__status__stat__value session-card__status__stat__value--started ",children:"Started"}):Object(m.jsx)("p",{className:"session-card__status__stat__value",children:"Not Started"})]}),Object(m.jsxs)("div",{className:"session-card__status__stat",children:[Object(m.jsx)("p",{className:"session-card__status__stat__name",children:"Progress:"}),Object(m.jsxs)("p",{className:"session-card__status__stat__value",children:[o,"/",l]})]})]})]})},U=s.p+"static/media/Rigby-reading.343b8b6a.png",X=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this)).state={task:e.task},a}return Object(l.a)(s,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"current-task",children:[Object(m.jsx)("h3",{className:"current-task__heading",children:"Current Task"}),Object(m.jsx)("h4",{className:"current-task__name",children:this.state.task})]})}}]),s}(a.Component),Z=(a.Component,a.Component,s.p+"static/media/start-sound.70f7d22e.wav"),$=s.p+"static/media/end-sound.1154923f.wav";var ee=function(e){var t=Object(a.useState)(e.activeTime),s=Object(k.a)(t,2),c=s[0],n=s[1],i=Object(a.useState)(0),r=Object(k.a)(i,2),o=r[0],l=r[1],j=Object(a.useState)(0),d=Object(k.a)(j,2),b=d[0],u=d[1],h=Object(a.useState)(e.currentBlock),_=Object(k.a)(h,2),O=_[0],x=_[1],g=Object(a.useState)(e.blocks),p=Object(k.a)(g,2),v=p[0],N=(p[1],Object(a.useState)(!1)),f=Object(k.a)(N,2),S=f[0],C=f[1],y=Object(a.useState)(!0),T=Object(k.a)(y,2),D=T[0],w=T[1],I=e.activeTime,B=e.shortBreak,F=e.longBreak,J=e.currentSession,M=e.setCurrentSession,R=e.isSession,E=e.setIsSession,G=e.setTimerIsStarted;return Object(a.useEffect)((function(){var e;return!0===S&&(G(!0),e=setInterval((function(){if(0===o){if(0===c)return new Audio($).play(),!0===R&&(J.currentInterval=O+1,M(J),x((function(e){return e+1})),w(!1),console.log(O,v,J.isFinished),O+1==v&&(J.isFinished=!0),console.log(O,v,J.isFinished)),void C(!1);n(c-1),l(59)}else l(o-1);u((function(e){return e+1}))}),1e3)),function(){clearInterval(e)}}),[S,b]),Object(m.jsxs)("div",{className:"timer",children:[Object(m.jsxs)("h1",{className:"timer__value",children:[c<10?"0":"",c,":",o<10?"0":"",o]}),Object(m.jsxs)("p",{className:"timer__session",children:[O,"/",v]}),Object(m.jsxs)("div",{className:"timerpage__controls",children:[Object(m.jsx)("a",{href:"javascript:void(0)",className:"button button--basic",onClick:function(){!0!==J.isFinished&&1==D&&(new Audio(Z).play(),setTimeout((function(){C(!0)}),2e3))},children:"Start"}),Object(m.jsx)("a",{href:"javascript:void(0)",className:"button button--basic",onClick:function(){!0!==J.isFinished&&C(!1)},children:"Pause"})]}),Object(m.jsxs)("div",{class:"timerpage__buttons",children:[Object(m.jsx)("a",{href:"javascript:void(0)",className:"pomodoro-controls",onClick:function(){!1===S&&(E(!0),n(I),l(0),w(!0))},children:Object(m.jsx)("h4",{children:"Pomodoro"})}),Object(m.jsx)("a",{href:"javascript:void(0)",className:"pomodoro-controls",onClick:function(){!1===S&&(E(!1),n(B),l(0),w(!0))},children:Object(m.jsx)("h4",{children:"Short Break"})}),Object(m.jsx)("a",{href:"javascript:void(0)",className:"pomodoro-controls",onClick:function(){!1===S&&(E(!1),n(F),l(0),w(!0))},children:Object(m.jsx)("h4",{children:"Long Break"})})]})]})},te=s(36),se=s.n(te);var ae=function(){return Object(m.jsx)("div",{className:"overlay",children:Object(m.jsxs)("div",{className:"close-warning",children:[Object(m.jsx)("p",{className:"close-warning__message",children:"Are you sure you want to go back?"}),Object(m.jsxs)("div",{className:"close-warning__action",children:[Object(m.jsx)(i.b,{to:"/pomodoro/timer/",className:"close-warning__action__buttons close-warning__action__buttons--green",children:"Stay Here"}),Object(m.jsx)(i.b,{to:"/pomodoro/session-manager",className:"close-warning__action__buttons close-warning__action__buttons--red",children:"Go Back"})]})]})})};var ce=function(e){var t=e.currentSession,s=e.setCurrentSession;Object(a.useEffect)((function(){return function(){console.log(t);var e=JSON.parse(localStorage.getItem("sessionsData")||"[]").map((function(e){return t.id===e.id?t:e}));console.log(e),localStorage.setItem("sessionsData",JSON.stringify(e))}}),[]);var c=t.activeTime,n=t.shortBreak,o=t.longBreak,l=t.currentInterval,j=t.intervals,d=Object(a.useState)(!0),b=Object(k.a)(d,2),u=b[0],h=b[1],_=Object(a.useState)(!1),O=Object(k.a)(_,2),x=O[0],g=O[1];return Object(m.jsx)(i.a,{children:Object(m.jsxs)("div",{className:"timerpage",children:[Object(m.jsx)("div",{className:"timerpage__back",children:Object(m.jsx)(i.b,{to:"".concat(!1===x?"/pomodoro/session-manager":"/pomodoro/timer/close-message"),children:Object(m.jsx)(se.a,{})})}),Object(m.jsx)(r.c,{children:Object(m.jsx)(r.a,{path:"/pomodoro/timer/close-message",children:Object(m.jsx)(ae,{})})}),!0===u?Object(m.jsx)(X,{task:t.task}):Object(m.jsxs)("div",{className:"break-time",children:[Object(m.jsx)("h3",{children:"Break Time"}),Object(m.jsx)("h4",{children:"Time for rest"})]}),Object(m.jsx)(ee,{activeTime:c,shortBreak:n,longBreak:o,currentBlock:l,blocks:j,currentSession:t,setCurrentSession:s,isSession:u,setIsSession:h,setTimerIsStarted:g})]})})};var ne=function(e){var t=e.currentSession,s=e.setCurrentSession,c=Object(a.useState)([]),n=Object(k.a)(c,2),o=n[0],l=n[1];return Object(a.useEffect)((function(){l(Object(g.a)(JSON.parse(localStorage.getItem("sessionsData")||"[]")))}),[]),Object(m.jsx)(i.a,{children:Object(m.jsx)("div",{className:"task-manager",children:Object(m.jsxs)("div",{className:"task-section",children:[Object(m.jsxs)("header",{className:"task-section__header",children:[Object(m.jsx)("h2",{className:"heading",children:"Sessions"}),Object(m.jsxs)(i.b,{to:"/pomodoro/session-manager/create-session",className:"add-task",children:[Object(m.jsx)("h4",{children:"New Session"}),Object(m.jsx)(C.a,{className:"add-task__icon"})]})]}),Object(m.jsx)(r.c,{children:Object(m.jsx)(r.a,{path:"/pomodoro/session-manager/create-session",children:Object(m.jsx)(q,{sessionData:o,setSessionData:l})})}),0===o.length?Object(m.jsx)(E,{image:U,text:"Create a session and let's get productive :D",alt:"Rigby Reading"}):o.map((function(e){return Object(m.jsx)(Q,{session:e,sessionData:o,setSessionData:l,currentSession:t,setCurrentSession:s})}))]})})})};var ie=function(){var e=Object(a.useState)({}),t=Object(k.a)(e,2),s=t[0],c=t[1];return Object(m.jsx)(i.a,{children:Object(m.jsx)("div",{className:"pomodoro",children:Object(m.jsxs)(r.c,{children:[Object(m.jsx)(r.a,{path:"/pomodoro/session-manager",children:Object(m.jsx)(ne,{currentSession:s,setCurrentSession:c})}),Object(m.jsx)(r.a,{path:"/pomodoro/timer",children:Object(m.jsx)(ce,{currentSession:s,setCurrentSession:c})})]})})})};var re=function(){return Object(m.jsxs)("div",{className:"main",children:[Object(m.jsx)(O,{}),Object(m.jsx)(r.a,{path:"/",exact:!0,component:_}),Object(m.jsx)(r.a,{path:"/task-manager",component:W}),Object(m.jsx)(r.a,{path:"/session-manager",component:ne}),Object(m.jsx)(r.a,{path:"/pomodoro",component:ie})]})};n.a.render(Object(m.jsx)(i.a,{children:Object(m.jsx)(re,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.b7cabbc2.chunk.js.map