(function(){"use strict";var e={2664:function(e,l,a){var n=a(5102),t=a(9269);function u(e,l){const a=(0,t.up)("router-view");return(0,t.wg)(),(0,t.j4)(a)}var o=a(7617);const r={},i=(0,o.Z)(r,[["render",u]]);var s=i,m=a(751),d={config:{},plugins:{}},c=a(2201);a(4719);const v={id:"q-app"};var p=(0,t.aZ)({__name:"StartView",setup(e){const l=(0,c.tv)(),a=window.localStorage.getItem("enter");return"enabled"==a?l.push({name:"home"}):l.push({name:"login"}),(e,l)=>((0,t.wg)(),(0,t.iD)("div",v))}});const f=p;var b=f,g=a(6237);const h="https://slonrobot.ru/api/";function w(e){const l=new FormData;for(const t in e)l.append(t,e[t]);const a=h+"recommendations/create",n=new XMLHttpRequest;n.open("POST",a,!1),n.send(l)}function V(){return new Promise(((e,l)=>{const a=h+"recommendations/get",n=new XMLHttpRequest;n.onload=()=>{e(JSON.parse(n.response))},n.open("GET",a,!1),n.send()}))}function y(e){const l=new FormData;for(const t in e)l.append(t,e[t]);const a=h+"chanel/add-channel",n=new XMLHttpRequest;n.open("POST",a,!1),n.send(l)}function _(e){return new Promise(((l,a)=>{const n=h+`recommendations/into-channel?channel=${e}`,t=new XMLHttpRequest;t.onload=()=>{l(JSON.parse(t.response))},t.open("GET",n,!1),t.send()}))}const q={class:"btns"};var W=(0,t.aZ)({__name:"DatePick",props:{modelValue:{}},emits:["update:modelValue"],setup(e,{emit:l}){const a=["утро","день","вечер"],n={"утро":"morning","день":"day","вечер":"evening"},u=(0,g.iH)(0),o=(0,g.iH)(""),r=(0,t.Fl)((()=>{const e=[];for(let l=0;l<10;l+=1){const a=new Date;a.setDate(a.getDate()+1+l+u.value),e.push(a.getDate()+"."+(a.getMonth()+1))}return e}));function i(e){if(o.value){let l=o.value.split("_");l||(l=[o.value]);const a=l.includes(e);return a?"green":"primary"}return"primary"}function s(e){if(o.value){let l=o.value.split("_");l||(l=[o.value]);const a=l.includes(e);a?(l=l.filter((l=>l!==e)),o.value=l.join("_")):o.value+="_"+e}else o.value+=e;l("update:modelValue",o.value)}return(e,l)=>{const o=(0,t.up)("q-btn");return(0,t.wg)(),(0,t.iD)(t.HY,null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(r.value,(e=>((0,t.wg)(),(0,t.iD)("div",{class:"btns",key:e},[((0,t.wg)(),(0,t.iD)(t.HY,null,(0,t.Ko)(a,(l=>(0,t.Wm)(o,{onClick:a=>s(`${e}/${n[l]}`),class:"btn",key:`${e}-${l}`,label:`${e} (${l})`,color:i(`${e}/${n[l]}`)},null,8,["onClick","label","color"]))),64))])))),128)),(0,t._)("div",q,[(0,t.Wm)(o,{onClick:l[0]||(l[0]=e=>u.value-=10),class:"btn",color:"primary",label:"Предыдущие даты"}),(0,t.Wm)(o,{onClick:l[1]||(l[1]=e=>u.value+=10),class:"btn",color:"primary",label:"Следуйщие даты"})])],64)}}}),H=a(570),Z=a(1410),k=a.n(Z);const U=(0,o.Z)(W,[["__scopeId","data-v-8bc92d24"]]);var z=U;k()(W,"components",{QBtn:H.Z});var I=(0,t.aZ)({__name:"RecommendationCreated",setup(e){const l=(0,g.iH)(""),a=(0,g.iH)(""),n=(0,g.iH)(""),u=(0,g.iH)(""),o=(0,g.iH)(""),r=(0,g.iH)(""),i=(0,g.iH)(""),s=(0,g.iH)(""),m=(0,g.iH)(""),d=(0,g.iH)(""),c=(0,g.iH)("");async function v(){r.value||alert("Вы не ввели даты брони"),w({username:l.value,price_standart:a.value,price_now:n.value,format:u.value,number_posts:Number(o.value),data_list:r.value,requisites:i.value,deadline:s.value,info:m.value,subscribers:d.value,coverage:c.value}),p(),alert("вы создали предложение!!!")}function p(){l.value="",a.value="",n.value="",u.value="",o.value="",r.value="",i.value="",s.value="",m.value=""}return(e,f)=>{const b=(0,t.up)("q-input"),g=(0,t.up)("q-btn"),h=(0,t.up)("q-form");return(0,t.wg)(),(0,t.j4)(h,{"q-pa-md":"",onSubmit:v,onReset:p,class:"q-gutter-md form"},{default:(0,t.w5)((()=>[(0,t.Wm)(b,{filled:"",modelValue:l.value,"onUpdate:modelValue":f[0]||(f[0]=e=>l.value=e),label:"Юзернейм канала",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(b,{filled:"",modelValue:a.value,"onUpdate:modelValue":f[1]||(f[1]=e=>a.value=e),hint:"Пожалуйста хоть что-то введите",label:"Стандартная цена","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(b,{filled:"",modelValue:n.value,"onUpdate:modelValue":f[2]||(f[2]=e=>n.value=e),hint:"Пожалуйста хоть что-то введите",label:"Текущая цена","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(b,{filled:"",modelValue:u.value,"onUpdate:modelValue":f[3]||(f[3]=e=>u.value=e),hint:"Пожалуйста хоть что-то введите",label:"Формат размещения","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(b,{filled:"",modelValue:o.value,"onUpdate:modelValue":f[4]||(f[4]=e=>o.value=e),hint:"Пожалуйста введите целое число",label:"Необходимо постов","lazy-rules":"",rules:[e=>e&&e.length>0&&Number.isInteger(Number(e))||"Пожалуйста введите целой блй число"]},null,8,["modelValue","rules"]),(0,t.Wm)(b,{filled:"",modelValue:c.value,"onUpdate:modelValue":f[5]||(f[5]=e=>c.value=e),hint:"Пожалуйста введите целое число",label:"Охват","lazy-rules":"",rules:[e=>e&&e.length>0&&Number.isInteger(Number(e))||"Пожалуйста введите целой блй число"]},null,8,["modelValue","rules"]),(0,t.Wm)(b,{filled:"",modelValue:d.value,"onUpdate:modelValue":f[6]||(f[6]=e=>d.value=e),hint:"Пожалуйста введите целое число",label:"Число подписот","lazy-rules":"",rules:[e=>e&&e.length>0&&Number.isInteger(Number(e))||"Пожалуйста введите целой блй число"]},null,8,["modelValue","rules"]),(0,t.Wm)(z,{modelValue:r.value,"onUpdate:modelValue":f[7]||(f[7]=e=>r.value=e)},null,8,["modelValue"]),(0,t.Wm)(b,{filled:"",modelValue:i.value,"onUpdate:modelValue":f[8]||(f[8]=e=>i.value=e),hint:"Пожалуйста хоть что-то введите",label:"Реквизиты","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(b,{filled:"",modelValue:s.value,"onUpdate:modelValue":f[9]||(f[9]=e=>s.value=e),hint:"Пожалуйста хоть что-то введите",label:"Дедлайн оплат","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(b,{filled:"",modelValue:m.value,"onUpdate:modelValue":f[10]||(f[10]=e=>m.value=e),hint:"Пожалуйста хоть что-то введите",label:"Дополнительная информация","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t._)("div",null,[(0,t.Wm)(g,{label:"Создать!!",type:"submit",color:"primary"}),(0,t.Wm)(g,{label:"Сбросить",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])])),_:1})}}}),Q=a(3276),D=a(6931);const j=(0,o.Z)(I,[["__scopeId","data-v-36cc9adf"]]);var O=j;k()(I,"components",{QForm:Q.Z,QInput:D.Z,QBtn:H.Z});var C=a(3201);const S={class:"q-pa-md"};var T=(0,t.aZ)({__name:"RecommendationInto",props:{username:{}},emits:["return"],setup(e,{emit:l}){const a=e,n=(0,g.iH)(),u=[{name:"name",required:!0,label:"Id предложения",align:"left",field:e=>e.id,sortable:!0},{name:"chanel",align:"left",label:"Юзернейм канала войденного в опт",field:"chanel",sortable:!0},{name:"creatives",align:"left",label:"Креативы",field:"creatives",sortable:!0},{name:"booking_date",align:"left",label:"Забронированные даты",field:"booking_date"}];function o(){l("return")}return(0,t.bv)((async()=>{n.value=await _(a.username),console.log(n.value)})),(e,l)=>{const a=(0,t.up)("q-btn"),r=(0,t.up)("q-table");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(a,{onClick:o,unelevated:"",class:"exit",color:"blue",label:"<- Вернуться в список предложений"}),(0,t._)("div",S,[(0,t.Wm)(r,{flat:"",bordered:"",title:"Пользователи записавшиемся в опт",dense:"",rows:n.value,columns:u,"row-key":"name"},null,8,["rows","columns"])])],64)}}}),R=a(8918);const N=(0,o.Z)(T,[["__scopeId","data-v-d784c63c"]]);var $=N;k()(T,"components",{QBtn:H.Z,QTable:R.Z});const x={class:"q-pa-md"};var P=(0,t.aZ)({__name:"RecommendationNow",setup(e){const l=(0,g.iH)(),a=(0,g.iH)("recommendation-all"),n=(0,g.iH)(""),u=[{name:"id",required:!0,label:"Id предложения",align:"left",field:e=>e.id,sortable:!0},{name:"username",align:"left",label:"Юзернейм",field:"username",sortable:!0},{name:"price_standart",align:"left",label:"Стандартная цена",field:"price_standart",sortable:!0},{name:"price_now",align:"left",label:"Текущая цена",field:"price_now"},{name:"format",align:"left",label:"Формат",field:"format"},{name:"number_posts",align:"left",label:"Число постов",field:"number_posts"},{name:"coverage",align:"left",label:"Охват",field:"coverage",sortable:!0},{name:"subscribers",align:"left",label:"Число подписчиков",field:"subscribers",sortable:!0},{name:"data_list",align:"left",label:"Даты брони",field:"data_list",sortable:!0},{name:"requisites",align:"left",label:"Ревизиты",field:"requisites",sortable:!0},{name:"deadline",align:"left",label:"Дедлайн формирования поста",field:"deadline",sortable:!0},{name:"info",align:"left",label:"Информация",field:"info",sortable:!0}];async function o(e){n.value=e,a.value="recommendation-into"}return(0,t.bv)((async()=>{l.value=await V()})),(e,r)=>{const i=(0,t.up)("q-td"),s=(0,t.up)("q-tr"),m=(0,t.up)("q-table");return(0,t.wg)(),(0,t.iD)("div",x,["recommendation-all"===a.value?((0,t.wg)(),(0,t.j4)(m,{key:0,flat:"",bordered:"",title:"Предложения",rows:l.value,columns:u,"row-key":"id"},{body:(0,t.w5)((e=>[(0,t.Wm)(s,{props:e,onClick:l=>o(e.row.username)},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.row,((l,a)=>((0,t.wg)(),(0,t.j4)(i,{key:a,props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,C.zw)(l),1)])),_:2},1032,["props"])))),128))])),_:2},1032,["props","onClick"])])),_:1},8,["rows","columns"])):"recommendation-into"===a.value?((0,t.wg)(),(0,t.j4)($,{key:1,onReturn:r[0]||(r[0]=e=>a.value="recommendation-all"),username:n.value},null,8,["username"])):(0,t.kq)("",!0)])}}}),F=a(8231),B=a(7282);const M=(0,o.Z)(P,[["__scopeId","data-v-394709ea"]]);var L=M;k()(P,"components",{QTable:R.Z,QTr:F.Z,QTd:B.Z});var Y=(0,t.aZ)({__name:"ChannelCreated",setup(e){const l=(0,g.iH)(""),a=(0,g.iH)(""),n=(0,g.iH)(""),u=(0,g.iH)(""),o=(0,g.iH)(""),r=(0,g.iH)(""),i=(0,g.iH)(""),s=(0,g.iH)(""),m=(0,g.iH)("");async function d(){y({category:l.value,username:a.value,title:n.value,link:u.value,participants_count:o.value,coverage:r.value,advertising_price:i.value,recommendations:s.value,communication:m.value}),c(),alert("ВЫ добавли новый канал в каталог!!!")}function c(){l.value="",a.value="",n.value="",u.value="",o.value="",r.value="",i.value="",s.value="",m.value=""}return(e,v)=>{const p=(0,t.up)("q-input"),f=(0,t.up)("q-btn"),b=(0,t.up)("q-form");return(0,t.wg)(),(0,t.j4)(b,{"q-pa-md":"",onSubmit:d,onReset:c,class:"q-gutter-md form"},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{filled:"",modelValue:l.value,"onUpdate:modelValue":v[0]||(v[0]=e=>l.value=e),label:"Категория канала",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(p,{filled:"",modelValue:a.value,"onUpdate:modelValue":v[1]||(v[1]=e=>a.value=e),label:"Юзернейм канала",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(p,{filled:"",modelValue:n.value,"onUpdate:modelValue":v[2]||(v[2]=e=>n.value=e),label:"Название канала",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(p,{filled:"",modelValue:u.value,"onUpdate:modelValue":v[3]||(v[3]=e=>u.value=e),label:"Ссылочка на канал",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(p,{filled:"",modelValue:o.value,"onUpdate:modelValue":v[4]||(v[4]=e=>o.value=e),label:"Количество подписчиков",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(p,{filled:"",modelValue:r.value,"onUpdate:modelValue":v[5]||(v[5]=e=>r.value=e),label:"Охват",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(p,{filled:"",modelValue:i.value,"onUpdate:modelValue":v[6]||(v[6]=e=>i.value=e),label:"Цена рекламы",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(p,{filled:"",modelValue:s.value,"onUpdate:modelValue":v[7]||(v[7]=e=>s.value=e),label:"Число рекомендаций",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(p,{filled:"",modelValue:m.value,"onUpdate:modelValue":v[8]||(v[8]=e=>m.value=e),label:"Контакты для связи",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t._)("div",null,[(0,t.Wm)(f,{label:"Создать!!",type:"submit",color:"primary"}),(0,t.Wm)(f,{label:"Сбросить",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])])),_:1})}}});const E=(0,o.Z)(Y,[["__scopeId","data-v-65fa4695"]]);var X=E;k()(Y,"components",{QForm:Q.Z,QInput:D.Z,QBtn:H.Z});const K={id:"q-app-home",style:{"min-height":"100vh"}},G={class:"q-pa-md"};var J=(0,t.aZ)({__name:"HomeView",setup(e){const l=(0,c.tv)(),a=(0,g.iH)("recommendation-create");async function n(){window.localStorage.setItem("enter",""),await l.push({name:"login"})}return(e,l)=>{const u=(0,t.up)("q-btn"),o=(0,t.up)("q-space"),r=(0,t.up)("q-tab"),i=(0,t.up)("q-tabs"),s=(0,t.up)("q-toolbar");return(0,t.wg)(),(0,t.iD)("div",K,[(0,t._)("div",G,[(0,t.Wm)(s,{class:"bg-primary text-white shadow-2 rounded-borders"},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{flat:"",label:"Админка"}),(0,t.Wm)(o),(0,t.Wm)(i,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e),shrink:""},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{name:"recommendation-create",label:"Создать Предложение"}),(0,t.Wm)(r,{name:"recommendation-now",label:"Текущие Предложения"}),(0,t.Wm)(r,{name:"channel-create",label:"Добавить канал в каталог"})])),_:1},8,["modelValue"])])),_:1})]),"recommendation-create"===a.value?((0,t.wg)(),(0,t.j4)(O,{key:0})):"recommendation-now"===a.value?((0,t.wg)(),(0,t.j4)(L,{key:1})):"channel-create"===a.value?((0,t.wg)(),(0,t.j4)(X,{key:2})):(0,t.kq)("",!0),(0,t.Wm)(u,{onClick:n,unelevated:"",class:"exit",color:"red",label:"Выйти"})])}}}),A=a(366),ee=a(3139),le=a(3204),ae=a(5748);const ne=(0,o.Z)(J,[["__scopeId","data-v-36cae30b"]]);var te=ne;k()(J,"components",{QToolbar:A.Z,QBtn:H.Z,QSpace:ee.Z,QTabs:le.Z,QTab:ae.Z});const ue={id:"q-app-login"},oe={class:"q-pa-md"};var re=(0,t.aZ)({__name:"LoginView",setup(e){const l=(0,c.tv)(),a=(0,g.iH)(""),n=(0,g.iH)("");async function u(){"admin"===a.value&&"admin"===n.value&&(window.localStorage.setItem("enter","enabled"),await l.push({name:"home"}))}function o(){a.value="",n.value=""}return(e,l)=>{const r=(0,t.up)("q-input"),i=(0,t.up)("q-btn"),s=(0,t.up)("q-form");return(0,t.wg)(),(0,t.iD)("div",ue,[(0,t._)("div",oe,[(0,t.Wm)(s,{onSubmit:u,onReset:o,class:"q-gutter-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{filled:"",modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e),label:"Логин",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(r,{filled:"",type:"password",modelValue:n.value,"onUpdate:modelValue":l[1]||(l[1]=e=>n.value=e),hint:"Пожалуйста хоть что-то введите",label:"Пароль","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t._)("div",null,[(0,t.Wm)(i,{label:"Войти????",type:"submit",color:"primary"}),(0,t.Wm)(i,{label:"Сбросить",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])])),_:1})])])}}});const ie=(0,o.Z)(re,[["__scopeId","data-v-6318f0ee"]]);var se=ie;k()(re,"components",{QForm:Q.Z,QInput:D.Z,QBtn:H.Z});const me=[{path:"/",component:b,name:"start",meta:{start:!0}},{path:"/home",name:"home",component:te,meta:{auth:!0}},{path:"/login",name:"login",component:se,meta:{login:!0}}],de=(0,c.p7)({history:(0,c.PO)("/"),routes:me});de.beforeEach((async(e,l,a)=>{const n=window.localStorage.getItem("enter");e.meta?.auth?"enabled"===n?a():a({name:"login"}):e.meta?.login?"enabled"!==n?a():a({name:"home"}):a()}));var ce=de;(0,n.ri)(s).use(ce).use(m.Z,d).mount("#app")}},l={};function a(n){var t=l[n];if(void 0!==t)return t.exports;var u=l[n]={exports:{}};return e[n].call(u.exports,u,u.exports,a),u.exports}a.m=e,function(){var e=[];a.O=function(l,n,t,u){if(!n){var o=1/0;for(m=0;m<e.length;m++){n=e[m][0],t=e[m][1],u=e[m][2];for(var r=!0,i=0;i<n.length;i++)(!1&u||o>=u)&&Object.keys(a.O).every((function(e){return a.O[e](n[i])}))?n.splice(i--,1):(r=!1,u<o&&(o=u));if(r){e.splice(m--,1);var s=t();void 0!==s&&(l=s)}}return l}u=u||0;for(var m=e.length;m>0&&e[m-1][2]>u;m--)e[m]=e[m-1];e[m]=[n,t,u]}}(),function(){a.n=function(e){var l=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(l,{a:l}),l}}(),function(){a.d=function(e,l){for(var n in l)a.o(l,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:l[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)}}(),function(){var e={143:0};a.O.j=function(l){return 0===e[l]};var l=function(l,n){var t,u,o=n[0],r=n[1],i=n[2],s=0;if(o.some((function(l){return 0!==e[l]}))){for(t in r)a.o(r,t)&&(a.m[t]=r[t]);if(i)var m=i(a)}for(l&&l(n);s<o.length;s++)u=o[s],a.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return a.O(m)},n=self["webpackChunkbot_admin"]=self["webpackChunkbot_admin"]||[];n.forEach(l.bind(null,0)),n.push=l.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(2664)}));n=a.O(n)})();
//# sourceMappingURL=app.27b678a5.js.map