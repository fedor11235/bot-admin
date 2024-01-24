(function(){"use strict";var e={9706:function(e,l,a){var n=a(5102),t=a(9269);function o(e,l){const a=(0,t.up)("router-view");return(0,t.wg)(),(0,t.j4)(a)}var u=a(7617);const s={},i=(0,u.Z)(s,[["render",o]]);var r=i,d=a(751),m={config:{},plugins:{}},c=a(2201);a(4719);const p={id:"q-app"};var v=(0,t.aZ)({__name:"StartView",setup(e){const l=(0,c.tv)(),a=window.localStorage.getItem("enter");return"enabled"==a?l.push({name:"home"}):l.push({name:"login"}),(e,l)=>((0,t.wg)(),(0,t.iD)("div",p))}});const f=v;var b=f,_=a(6237);const g="https://slonrobot.ru/api/";function h(e){const l=new FormData;for(const t in e)l.append(t,e[t]);const a=g+"recommendations/create",n=new XMLHttpRequest;n.open("POST",a,!1),n.send(l)}function w(){return new Promise(((e,l)=>{const a=g+"recommendations/get",n=new XMLHttpRequest;n.onload=()=>{e(JSON.parse(n.response))},n.open("GET",a,!1),n.send()}))}function y(e){const l=new FormData;for(const t in e)l.append(t,e[t]);const a=g+"recommendations/edit",n=new XMLHttpRequest;n.open("POST",a,!1),n.send(l)}function V(){return new Promise(((e,l)=>{const a=g+"user/all",n=new XMLHttpRequest;n.onload=()=>{e(JSON.parse(n.response))},n.open("GET",a,!1),n.send()}))}function k(e){return new Promise(((l,a)=>{const n=g+`recommendations/delete-bot?id=${e}`,t=new XMLHttpRequest;t.onload=()=>{l(JSON.parse(t.response))},t.open("GET",n,!1),t.send()}))}function W(e){const l=new FormData;for(const t in e)l.append(t,e[t]);const a=g+"chanel/add-channel",n=new XMLHttpRequest;n.open("POST",a,!1),n.send(l)}function q(e){return new Promise(((l,a)=>{const n=g+`recommendations/into-channel?channel=${e}`,t=new XMLHttpRequest;t.onload=()=>{l(JSON.parse(t.response))},t.open("GET",n,!1),t.send()}))}function H(e){const l=new FormData;for(const t in e)l.append(t,e[t]);const a=g+"recommendations/delete",n=new XMLHttpRequest;n.open("Delete",a,!1),n.send(l)}function Z(e,l){return new Promise(((a,n)=>{const t=g+`user/suggestion?idUser=${e}&isSuggestion=${l}`,o=new XMLHttpRequest;o.onload=()=>{a(JSON.parse(o.response))},o.open("GET",t,!1),o.send()}))}function T(e,l){const a=g+`recommendations/mark?idRecommendation=${e}&mark=${l}`,n=new XMLHttpRequest;n.open("GET",a,!1),n.send()}function C(e){const l=new FormData;for(const t in e)l.append(t,e[t]);const a=g+"recommendations/edit-date",n=new XMLHttpRequest;n.open("POST",a,!1),n.send(l)}const U={class:"btns"};var z=(0,t.aZ)({__name:"DatePick",props:{modelValue:{}},emits:["update:modelValue"],setup(e,{emit:l}){const a=e,n=["утро","день","вечер"],o={"утро":"morning","день":"day","вечер":"evening"},u=(0,_.iH)(0),s=(0,_.Vh)(a.modelValue),i=(0,t.Fl)((()=>{const e=[];for(let l=0;l<10;l+=1){const a=new Date;a.setDate(a.getDate()+1+l+u.value),e.push(a.getDate()+"."+(a.getMonth()+1))}return e}));function r(e){if(s.value){let l=s.value.split("_");l||(l=[s.value]);const a=l.includes(e);return a?"green":"primary"}return"primary"}function d(e){if(s.value){let l=s.value.split("_");l||(l=[s.value]);const a=l.includes(e);a?(l=l.filter((l=>l!==e)),s.value=l.join("_")):s.value+="_"+e}else s.value+=e;l("update:modelValue",s.value)}return(e,l)=>{const a=(0,t.up)("q-btn");return(0,t.wg)(),(0,t.iD)(t.HY,null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(i.value,(e=>((0,t.wg)(),(0,t.iD)("div",{class:"btns",key:e},[((0,t.wg)(),(0,t.iD)(t.HY,null,(0,t.Ko)(n,(l=>(0,t.Wm)(a,{onClick:a=>d(`${o[l]}/${e}`),class:"btn",key:`${e}-${l}`,label:`${e} (${l})`,color:r(`${o[l]}/${e}`)},null,8,["onClick","label","color"]))),64))])))),128)),(0,t._)("div",U,[(0,t.Wm)(a,{onClick:l[0]||(l[0]=e=>u.value-=10),class:"btn",color:"primary",label:"Предыдущие даты"}),(0,t.Wm)(a,{onClick:l[1]||(l[1]=e=>u.value+=10),class:"btn",color:"primary",label:"Следуйщие даты"})])],64)}}}),O=a(570),$=a(1410),D=a.n($);const I=(0,u.Z)(z,[["__scopeId","data-v-751ea433"]]);var S=I;D()(z,"components",{QBtn:O.Z});const Q={class:"btns"};var M=(0,t.aZ)({__name:"TimePick",props:{modelValue:{}},emits:["update:modelValue"],setup(e,{emit:l}){const a=e,n=["8.10","9.10","10.10","11.10","12.10"],o=["13.10","14.10","15.10","16.10","17.10"],u=["18.10","19.10","20.10","21.10","22.10"],s=((0,_.iH)(0),(0,_.Vh)(a.modelValue));function i(e){if(s.value){let l=s.value.split("_");l||(l=[s.value]);const a=l.includes(e);return a?"green":"primary"}return"primary"}function r(e){if(s.value){let l=s.value.split("_");l||(l=[s.value]);const a=l.includes(e);a?(l=l.filter((l=>l!==e)),s.value=l.join("_")):s.value+="_"+e}else s.value+=e;l("update:modelValue",s.value)}return(e,l)=>{const a=(0,t.up)("q-btn");return(0,t.wg)(),(0,t.iD)("div",Q,[((0,t.wg)(),(0,t.iD)(t.HY,null,(0,t.Ko)(n,(e=>(0,t.Wm)(a,{onClick:l=>r(e),class:"btn",key:`${e}`,label:`${e}`,color:i(e)},null,8,["onClick","label","color"]))),64)),((0,t.wg)(),(0,t.iD)(t.HY,null,(0,t.Ko)(o,(e=>(0,t.Wm)(a,{onClick:l=>r(e),class:"btn",key:`${e}`,label:`${e}`,color:i(e)},null,8,["onClick","label","color"]))),64)),((0,t.wg)(),(0,t.iD)(t.HY,null,(0,t.Ko)(u,(e=>(0,t.Wm)(a,{onClick:l=>r(e),class:"btn",key:`${e}`,label:`${e}`,color:i(e)},null,8,["onClick","label","color"]))),64))])}}});const j=(0,u.Z)(M,[["__scopeId","data-v-baf48f80"]]);var N=j;D()(M,"components",{QBtn:O.Z});const P=(0,t._)("br",null,null,-1),R=(0,t._)("br",null,null,-1),B=(0,t._)("br",null,null,-1);var L=(0,t.aZ)({__name:"RecommendationCreated",setup(e){const l=(0,_.iH)(""),a=(0,_.iH)(""),n=(0,_.iH)(""),o=(0,_.iH)(""),u=(0,_.iH)(""),s=(0,_.iH)(""),i=(0,_.iH)(""),r=(0,_.iH)(""),d=(0,_.iH)(""),m=(0,_.iH)(""),c=(0,_.iH)(""),p=(0,_.iH)(""),v=(0,_.iH)(""),f=(0,_.iH)("");async function b(){r.value||alert("Вы не ввели даты брони"),h({username:l.value,title:a.value,link:n.value,price_standart:o.value,price_now:u.value,format:s.value,number_posts:Number(i.value),placement_time:d.value,data_list:r.value,allowed_dates:r.value,requisites:m.value,deadline:c.value,info:p.value,subscribers:v.value,coverage:f.value}),g(),alert("вы создали предложение!!!")}function g(){l.value="",o.value="",u.value="",s.value="",i.value="",r.value="",m.value="",c.value="",p.value=""}return(e,_)=>{const h=(0,t.up)("q-input"),w=(0,t.up)("q-btn"),y=(0,t.up)("q-form");return(0,t.wg)(),(0,t.j4)(y,{"q-pa-md":"",onSubmit:b,onReset:g,class:"q-gutter-md form"},{default:(0,t.w5)((()=>[(0,t.Wm)(h,{filled:"",modelValue:a.value,"onUpdate:modelValue":_[0]||(_[0]=e=>a.value=e),label:"Заголовок канала",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(h,{filled:"",modelValue:l.value,"onUpdate:modelValue":_[1]||(_[1]=e=>l.value=e),label:"Юзернейм канала",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(h,{filled:"",modelValue:n.value,"onUpdate:modelValue":_[2]||(_[2]=e=>n.value=e),label:"Ссылка на канал",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(h,{filled:"",modelValue:o.value,"onUpdate:modelValue":_[3]||(_[3]=e=>o.value=e),hint:"Пожалуйста хоть что-то введите",label:"Стандартная цена","lazy-rules":"",rules:[e=>/^\d+[₽|$]$/.test(e)||"Введите данные которые подходят под шаблон: {число}:{значек валютыб поддерживаемые значки: $, ₽}"]},null,8,["modelValue","rules"]),(0,t.Wm)(h,{filled:"",modelValue:u.value,"onUpdate:modelValue":_[4]||(_[4]=e=>u.value=e),hint:"Пожалуйста хоть что-то введите",label:"Текущая цена","lazy-rules":"",rules:[e=>/^\d+[₽|$]$/.test(e)||"Введите данные которые подходят под шаблон: {число}:{значек валютыб поддерживаемые значки: $, ₽}"]},null,8,["modelValue","rules"]),(0,t.Wm)(h,{filled:"",modelValue:s.value,"onUpdate:modelValue":_[5]||(_[5]=e=>s.value=e),hint:"Пожалуйста хоть что-то введите",label:"Формат размещения","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(h,{filled:"",modelValue:i.value,"onUpdate:modelValue":_[6]||(_[6]=e=>i.value=e),hint:"Пожалуйста введите целое число",label:"Необходимо постов","lazy-rules":"",rules:[e=>e&&e.length>0&&Number.isInteger(Number(e))||"Пожалуйста введите целой блй число"]},null,8,["modelValue","rules"]),(0,t.Wm)(h,{filled:"",modelValue:f.value,"onUpdate:modelValue":_[7]||(_[7]=e=>f.value=e),hint:"Пожалуйста введите целое число",label:"Охват","lazy-rules":"",rules:[e=>e&&e.length>0&&Number.isInteger(Number(e))||"Пожалуйста введите целой блй число"]},null,8,["modelValue","rules"]),(0,t.Wm)(h,{filled:"",modelValue:v.value,"onUpdate:modelValue":_[8]||(_[8]=e=>v.value=e),hint:"Пожалуйста введите целое число",label:"Число подписот","lazy-rules":"",rules:[e=>e&&e.length>0&&Number.isInteger(Number(e))||"Пожалуйста введите целой блй число"]},null,8,["modelValue","rules"]),(0,t.Wm)(S,{modelValue:r.value,"onUpdate:modelValue":_[9]||(_[9]=e=>r.value=e)},null,8,["modelValue"]),P,R,B,(0,t.Wm)(N,{modelValue:d.value,"onUpdate:modelValue":_[10]||(_[10]=e=>d.value=e)},null,8,["modelValue"]),(0,t.Wm)(h,{filled:"",modelValue:m.value,"onUpdate:modelValue":_[11]||(_[11]=e=>m.value=e),hint:"Пожалуйста хоть что-то введите",label:"Реквизиты","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(h,{filled:"",modelValue:c.value,"onUpdate:modelValue":_[12]||(_[12]=e=>c.value=e),hint:"Пожалуйста хоть что-то введите",label:"Дедлайн оплат","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(h,{filled:"",modelValue:p.value,"onUpdate:modelValue":_[13]||(_[13]=e=>p.value=e),hint:"Пожалуйста хоть что-то введите",label:"Дополнительная информация","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t._)("div",null,[(0,t.Wm)(w,{label:"Создать!!",type:"submit",color:"primary"}),(0,t.Wm)(w,{label:"Сбросить",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])])),_:1})}}}),x=a(3276),E=a(6931);const F=L;var J=F;D()(L,"components",{QForm:x.Z,QInput:E.Z,QBtn:O.Z});var X=a(3201),K=(0,t.aZ)({__name:"EditDateModal",props:{recomendationInto:{}},emits:["close","edit"],setup(e,{emit:l}){const a=e,o=(0,_.Vh)(a.recomendationInto);function u(){l("close")}function s(){C({id:a.recomendationInto.id,booking_date:o.value.booking_date}),l("close")}return console.log(o.value),(e,a)=>{const i=(0,t.up)("q-btn"),r=(0,t.up)("q-form");return(0,t.wg)(),(0,t.iD)("div",{onClick:a[1]||(a[1]=(0,n.iM)((e=>l("close")),["self"])),class:"popup-edit"},[(0,t.Wm)(r,{"q-pa-md":"",onSubmit:s,onReset:u,class:"q-gutter-md form"},{default:(0,t.w5)((()=>[(0,t.Wm)(S,{modelValue:o.value.booking_date,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value.booking_date=e)},null,8,["modelValue"]),(0,t._)("div",null,[(0,t.Wm)(i,{label:"Сохранить изменения",type:"submit",color:"primary"}),(0,t.Wm)(i,{label:"Отмена",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])])),_:1})])}}});const G=(0,u.Z)(K,[["__scopeId","data-v-5319f99b"]]);var Y=G;D()(K,"components",{QForm:x.Z,QBtn:O.Z});const A="6569483795:AAGXGV2Awd_fVhgy_20sjDpdfGJMaf6Ex6w",ee="-1001959790816";var le={BOT_TOKEN:A,ADMIN_ID:ee};const ae=["src"],ne={class:"q-pa-md"};var te=(0,t.aZ)({__name:"RecommendationInto",props:{username:{}},emits:["return"],setup(e,{emit:l}){const a=e,o=le.ADMIN_ID,u=le.BOT_TOKEN,s=(0,_.iH)(),i=(0,_.iH)(),r=(0,_.iH)(!1),d=(0,_.iH)(!1),m=(0,_.iH)(null),c=[{name:"name",required:!0,label:"Id предложения",align:"left",field:e=>e.id,sortable:!0},{name:"chanel",align:"left",label:"Юзернейм канала войденного в опт",field:"chanel",sortable:!0},{name:"username",align:"left",label:"username пользователя",field:"username",sortable:!0},{name:"booking_date",align:"left",label:"Забронированные даты",field:"booking_date"},{name:"booking_time",align:"left",label:"Забронированное время",field:"booking_time"},{name:"path_check",align:"left",label:"Чек",field:"path_check"},{name:"creatives",align:"left",label:"Посты пользователя",field:"creatives"},{name:"edit",align:"left",label:"Редактировать дату брони пользователя",field:"edit"},{name:"check_mark",align:"left",label:"Отметить оплату пользователя",field:"check-mark"}];function p(e){d.value=!0,m.value=e.row}async function v(e){const l=e.row.idUser,a=e.value.split("///");a.shift();const n=s.value.find((e=>e.idUser===l));await f(`__________${n.user.username}__________`);for(const t of a)if(t.includes("*")){const[e,l]=t.split("*"),[a,n]=l.split("%");"photo"===n?await b(e,a):"video"===n?await g(e,a):"animation"===n&&await h(e,a)}else await f(t);await f(`__________${n.user.username}__________`)}async function f(e){const l={chat_id:o,text:e,parse_mode:"HTML"};await fetch(`https://api.telegram.org/bot${u}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)})}async function b(e,l){const a={chat_id:o,caption:e,parse_mode:"HTML",photo:l};await fetch(`https://api.telegram.org/bot${u}/sendPhoto`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})}async function g(e,l){const a={chat_id:o,caption:e,parse_mode:"HTML",video:l};await fetch(`https://api.telegram.org/bot${u}/sendVideo`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})}async function h(e,l){const a={chat_id:o,caption:e,parse_mode:"HTML",animation:l};await fetch(`https://api.telegram.org/bot${u}/sendAnimation`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})}function w(e){i.value=e.value,r.value=!0}function y(e){e.row.check_mark=!e.row.check_mark;const l=e.row.check_mark?"enabled":"disabled";T(e.row.id,l)}function V(){l("return")}return(0,t.bv)((async()=>{const e=await q(a.username);e.forEach((e=>{e.username="@"+e.user.username})),s.value=e})),(e,l)=>{const a=(0,t.up)("q-btn"),o=(0,t.up)("q-checkbox"),u=(0,t.up)("q-td"),f=(0,t.up)("q-table");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(n.uT,{name:"move-top"},{default:(0,t.w5)((()=>[r.value?((0,t.wg)(),(0,t.iD)("div",{key:0,onClick:l[0]||(l[0]=e=>r.value=!1),class:"popup-check"},[(0,t._)("img",{class:"img-check",src:i.value,alt:"check"},null,8,ae)])):(0,t.kq)("",!0)])),_:1}),(0,t.Wm)(n.uT,null,{default:(0,t.w5)((()=>[d.value?((0,t.wg)(),(0,t.j4)(Y,{key:0,recomendationInto:m.value,onClose:l[1]||(l[1]=e=>d.value=!1)},null,8,["recomendationInto"])):(0,t.kq)("",!0)])),_:1}),(0,t.Wm)(a,{onClick:V,unelevated:"",color:"blue",label:"<- Вернуться в список предложений"}),(0,t._)("div",ne,[(0,t.Wm)(f,{flat:"",bordered:"",title:"Пользователи записавшиемся в опт",dense:"",rows:s.value,columns:c,"row-key":"name"},{"body-cell-check_mark":(0,t.w5)((e=>[(0,t.Wm)(u,{class:"actions",props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(o,{modelValue:e.row.check_mark,"onUpdate:modelValue":l=>y(e)},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["props"])])),"body-cell-path_check":(0,t.w5)((e=>[(0,t.Wm)(u,{class:"actions",props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(a,{size:"sm",rounded:"",unelevated:"",color:"purple",onClick:l=>w(e),label:"Открыть чек"},null,8,["onClick"])])),_:2},1032,["props"])])),"body-cell-creatives":(0,t.w5)((e=>[(0,t.Wm)(u,{class:"actions",props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(a,{size:"sm",rounded:"",unelevated:"",color:"purple",onClick:l=>v(e),label:"Отправить посты в админку"},null,8,["onClick"])])),_:2},1032,["props"])])),"body-cell-edit":(0,t.w5)((e=>[(0,t.Wm)(u,{class:"actions",props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(a,{size:"sm",rounded:"",unelevated:"",color:"purple",onClick:l=>p(e),label:"Редактировать дату брони"},null,8,["onClick"])])),_:2},1032,["props"])])),_:1},8,["rows","columns"])])],64)}}}),oe=a(5311),ue=a(7282),se=a(9109);const ie=(0,u.Z)(te,[["__scopeId","data-v-3a8861dd"]]);var re=ie;D()(te,"components",{QBtn:O.Z,QTable:oe.Z,QTd:ue.Z,QCheckbox:se.Z});var de=(0,t.aZ)({__name:"CheckModal",props:{recomendation:{}},emits:["close","edit"],setup(e,{emit:l}){const a=e,o=(0,_.Vh)(a.recomendation);function u(){l("close")}function s(){y(o.value),l("close")}return(e,a)=>{const i=(0,t.up)("q-input"),r=(0,t.up)("q-btn"),d=(0,t.up)("q-form");return(0,t.wg)(),(0,t.iD)("div",{onClick:a[12]||(a[12]=(0,n.iM)((e=>l("close")),["self"])),class:"popup-edit"},[(0,t.Wm)(d,{"q-pa-md":"",onSubmit:s,onReset:u,class:"q-gutter-md form"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{filled:"",modelValue:o.value.title,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value.title=e),label:"Заголовок канала",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(i,{filled:"",modelValue:o.value.username,"onUpdate:modelValue":a[1]||(a[1]=e=>o.value.username=e),label:"Юзернейм канала",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(i,{filled:"",modelValue:o.value.link,"onUpdate:modelValue":a[2]||(a[2]=e=>o.value.link=e),label:"Ссылка на канал",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(i,{filled:"",modelValue:o.value.price_standart,"onUpdate:modelValue":a[3]||(a[3]=e=>o.value.price_standart=e),hint:"Пожалуйста хоть что-то введите",label:"Стандартная цена","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(i,{filled:"",modelValue:o.value.price_now,"onUpdate:modelValue":a[4]||(a[4]=e=>o.value.price_now=e),hint:"Пожалуйста хоть что-то введите",label:"Текущая цена","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(i,{filled:"",modelValue:o.value.format,"onUpdate:modelValue":a[5]||(a[5]=e=>o.value.format=e),hint:"Пожалуйста хоть что-то введите",label:"Формат размещения","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(i,{filled:"",modelValue:o.value.number_posts,"onUpdate:modelValue":a[6]||(a[6]=e=>o.value.number_posts=e),hint:"Пожалуйста введите целое число",label:"Необходимо постов","lazy-rules":""},null,8,["modelValue"]),(0,t.Wm)(i,{filled:"",modelValue:o.value.coverage,"onUpdate:modelValue":a[7]||(a[7]=e=>o.value.coverage=e),hint:"Пожалуйста введите целое число",label:"Охват","lazy-rules":""},null,8,["modelValue"]),(0,t.Wm)(i,{filled:"",modelValue:o.value.subscribers,"onUpdate:modelValue":a[8]||(a[8]=e=>o.value.subscribers=e),hint:"Пожалуйста введите целое число",label:"Число подписот","lazy-rules":""},null,8,["modelValue"]),(0,t.Wm)(i,{filled:"",modelValue:o.value.requisites,"onUpdate:modelValue":a[9]||(a[9]=e=>o.value.requisites=e),hint:"Пожалуйста хоть что-то введите",label:"Реквизиты","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(i,{filled:"",modelValue:o.value.deadline,"onUpdate:modelValue":a[10]||(a[10]=e=>o.value.deadline=e),hint:"Пожалуйста хоть что-то введите",label:"Дедлайн оплат","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(i,{filled:"",modelValue:o.value.info,"onUpdate:modelValue":a[11]||(a[11]=e=>o.value.info=e),hint:"Пожалуйста хоть что-то введите",label:"Дополнительная информация","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t._)("div",null,[(0,t.Wm)(r,{label:"Сохранить изменения",type:"submit",color:"primary"}),(0,t.Wm)(r,{label:"Отмена",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])])),_:1})])}}});const me=(0,u.Z)(de,[["__scopeId","data-v-02ebc179"]]);var ce=me;D()(de,"components",{QForm:x.Z,QInput:E.Z,QBtn:O.Z});const pe=le.BOT_TOKEN;async function ve(e,l){const a={chat_id:e,text:l,parse_mode:"HTML"};await fetch(`https://api.telegram.org/bot${pe}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})}const fe={class:"q-pa-md"},be={class:"cntner"},_e={class:"q-mt-md"};var ge=(0,t.aZ)({__name:"RecommendationNow",setup(e){const l=le.ADMIN_ID,a=le.BOT_TOKEN,o=(0,_.iH)([]),u=(0,_.iH)(),s=(0,_.iH)("recommendation-all"),i=(0,_.iH)(""),r=(0,_.iH)([]),d=(0,_.iH)(!1),m={morning:"утро",day:"день",evening:"вечер"," morning":"утро"," day":"день"," evening":"вечер"},c=(0,t.Fl)((()=>r.value.map((e=>e.id)))),p=[{name:"pay_all",align:"center",label:"Оплатили ли все",field:"id"},{name:"id",required:!0,label:"Id предложения",align:"left",field:e=>e.id,sortable:!0},{name:"username",align:"left",label:"Юзернейм",field:"username",sortable:!0},{name:"link",align:"left",label:"Ссылка на канал",field:"link",sortable:!0},{name:"title",align:"left",label:"Название канала",field:"title",sortable:!0},{name:"price_standart",align:"left",label:"Стандартная цена",field:"price_standart",sortable:!0},{name:"price_now",align:"left",label:"Текущая цена",field:"price_now"},{name:"format",align:"left",label:"Формат",field:"format"},{name:"number_posts",align:"left",label:"Число постов",field:"number_posts"},{name:"coverage",align:"left",label:"Охват",field:"coverage",sortable:!0},{name:"subscribers",align:"left",label:"Число подписчиков",field:"subscribers",sortable:!0},{name:"data_list",align:"left",label:"Даты брони",field:"data_list",sortable:!0},{name:"placement_time",align:"left",label:"Время брони",field:"placement_time"},{name:"requisites",align:"left",label:"Ревизиты",field:"requisites",sortable:!0},{name:"deadline",align:"left",label:"Дедлайн формирования поста",field:"deadline",sortable:!0},{name:"info",align:"left",label:"Информация",field:"info",sortable:!0},{name:"actions",align:"left",label:"Действия",field:"id"}];async function v(){d.value=!1,o.value=await w()}function f(){return 0===r.value.length?"":`${r.value.length} выбранных преддожений`}function b(){H(c.value),o.value=o.value.filter((e=>!c.value.includes(e.id)))}function g(e){k(e.value)}function h(e){u.value=o.value.find((l=>l.id===e.value)),d.value=!0}async function y(e){const l=[],a=await q(e.username);for(const t of a){const e=t.booking_date.split("_").map((e=>e.split("/"))),a=t.booking_time.split("_").join(" ");for(const n of e)l.push([`${n[1]} (${m[n[0]]})`,`@${t.user.username}`,a])}const n=V(l);T(n)}function V(e){let l="";const a=e.sort(((e,l)=>{const a=e[0].split(".")[0],n=l[0].split(".")[0];return a-n})).sort(((e,l)=>{const a=e[0].split(".")[1],n=l[0].split(".")[1];return a-n}));for(const n of a)l+=n.join(" ")+"\n";return l}async function W(e){const l=await q(e.username);for(const a of l)if(a.creatives||!a.check){const l=`кажется вы забыли загрузить посты или чеки в подборку ${e.username}`;ve(a.user.id,l)}}async function Z(e){i.value=e,s.value="recommendation-into"}async function T(e){const n={chat_id:l,text:e,parse_mode:"HTML"};await fetch(`https://api.telegram.org/bot${a}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})}return(0,t.bv)((async()=>{o.value=await w();for(const e of o.value){const l=await q(e.username);for(const a of l)e.allBy=!0,a.check_mark||(e.allBy=!1)}})),(e,l)=>{const a=(0,t.up)("q-btn"),m=(0,t.up)("q-checkbox"),_=(0,t.up)("q-tr"),w=(0,t.up)("q-td"),V=(0,t.up)("q-table");return(0,t.wg)(),(0,t.iD)(t.HY,null,["recommendation-all"===s.value?((0,t.wg)(),(0,t.j4)(a,{key:0,onClick:b,label:"Удалить выбранные предложения",disable:0===r.value.length,color:"green"},null,8,["disable"])):(0,t.kq)("",!0),(0,t.Wm)(n.uT,{name:"move-top"},{default:(0,t.w5)((()=>[d.value?((0,t.wg)(),(0,t.j4)(ce,{key:0,onClose:l[0]||(l[0]=e=>d.value=!1),onEdit:v,recomendation:u.value},null,8,["recomendation"])):(0,t.kq)("",!0)])),_:1}),(0,t._)("div",fe,["recommendation-all"===s.value?((0,t.wg)(),(0,t.j4)(V,{key:0,flat:"",bordered:"",title:"Предложения","selected-rows-label":f,selection:"multiple",selected:r.value,"onUpdate:selected":l[1]||(l[1]=e=>r.value=e),rows:o.value,columns:p,"row-key":"id"},{"body-selection":(0,t.w5)((e=>[(0,t.Wm)(_,{props:e,onClick:l=>Z(e.row.username),class:"test"},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{modelValue:e.selected,"onUpdate:modelValue":l=>e.selected=l},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["props","onClick"])])),"body-cell-pay_all":(0,t.w5)((e=>[(0,t.Wm)(w,{props:e},{default:(0,t.w5)((()=>[(0,t._)("div",be,[(0,t._)("div",{class:(0,X.C_)(["circle",{"circle-active":e.row.allBy}])},null,2)])])),_:2},1032,["props"])])),"body-cell-actions":(0,t.w5)((e=>[(0,t.Wm)(w,{class:"actions",props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(a,{size:"sm",rounded:"",unelevated:"",color:"purple",onClick:l=>g(e),label:"Удалить подборку в боте"},null,8,["onClick"]),(0,t.Wm)(a,{size:"sm",rounded:"",unelevated:"",color:"purple",onClick:l=>h(e),label:"Редактировать подборку"},null,8,["onClick"]),(0,t.Wm)(a,{size:"sm",rounded:"",unelevated:"",color:"purple",onClick:l=>Z(e.row.username),label:"Открыть вхождения"},null,8,["onClick"]),(0,t.Wm)(a,{size:"sm",rounded:"",unelevated:"",color:"purple",onClick:l=>y(e.row),label:"отправить список дат"},null,8,["onClick"]),(0,t.Wm)(a,{size:"sm",rounded:"",unelevated:"",color:"purple",onClick:l=>W(e.row),label:"отправить напомнинание пользователем о загрузках чеков и постов"},null,8,["onClick"])])),_:2},1032,["props"])])),_:1},8,["selected","rows","columns"])):"recommendation-into"===s.value?((0,t.wg)(),(0,t.j4)(re,{key:1,onReturn:l[2]||(l[2]=e=>s.value="recommendation-all"),username:i.value},null,8,["username"])):(0,t.kq)("",!0),(0,t._)("div",_e," Выбранные Id предложений: "+(0,X.zw)(c.value),1)])],64)}}}),he=a(8231);const we=(0,u.Z)(ge,[["__scopeId","data-v-da1e51aa"]]);var ye=we;D()(ge,"components",{QBtn:O.Z,QTable:oe.Z,QTr:he.Z,QCheckbox:se.Z,QTd:ue.Z});var Ve=(0,t.aZ)({__name:"ChannelCreated",setup(e){const l=(0,_.iH)(""),a=(0,_.iH)(""),n=(0,_.iH)(""),o=(0,_.iH)(""),u=(0,_.iH)(""),s=(0,_.iH)(""),i=(0,_.iH)(""),r=(0,_.iH)(""),d=(0,_.iH)("");async function m(){W({category:l.value,username:a.value,title:n.value,link:o.value,participants_count:u.value,coverage:s.value,advertising_price:i.value,recommendations:r.value,communication:d.value}),c(),alert("ВЫ добавли новый канал в каталог!!!")}function c(){l.value="",a.value="",n.value="",o.value="",u.value="",s.value="",i.value="",r.value="",d.value=""}return(e,p)=>{const v=(0,t.up)("q-input"),f=(0,t.up)("q-btn"),b=(0,t.up)("q-form");return(0,t.wg)(),(0,t.j4)(b,{"q-pa-md":"",onSubmit:m,onReset:c,class:"q-gutter-md form"},{default:(0,t.w5)((()=>[(0,t.Wm)(v,{filled:"",modelValue:l.value,"onUpdate:modelValue":p[0]||(p[0]=e=>l.value=e),label:"Категория канала",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(v,{filled:"",modelValue:a.value,"onUpdate:modelValue":p[1]||(p[1]=e=>a.value=e),label:"Юзернейм канала",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(v,{filled:"",modelValue:n.value,"onUpdate:modelValue":p[2]||(p[2]=e=>n.value=e),label:"Название канала",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(v,{filled:"",modelValue:o.value,"onUpdate:modelValue":p[3]||(p[3]=e=>o.value=e),label:"Ссылочка на канал",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(v,{filled:"",modelValue:u.value,"onUpdate:modelValue":p[4]||(p[4]=e=>u.value=e),label:"Количество подписчиков",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(v,{filled:"",modelValue:s.value,"onUpdate:modelValue":p[5]||(p[5]=e=>s.value=e),label:"Охват",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(v,{filled:"",modelValue:i.value,"onUpdate:modelValue":p[6]||(p[6]=e=>i.value=e),label:"Цена рекламы",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(v,{filled:"",modelValue:r.value,"onUpdate:modelValue":p[7]||(p[7]=e=>r.value=e),label:"Число рекомендаций",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(v,{filled:"",modelValue:d.value,"onUpdate:modelValue":p[8]||(p[8]=e=>d.value=e),label:"Контакты для связи",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t._)("div",null,[(0,t.Wm)(f,{label:"Создать!!",type:"submit",color:"primary"}),(0,t.Wm)(f,{label:"Сбросить",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])])),_:1})}}});const ke=Ve;var We=ke;D()(Ve,"components",{QForm:x.Z,QInput:E.Z,QBtn:O.Z});const qe={class:"send-message"};var He=(0,t.aZ)({__name:"SendMessage",setup(e){const l=le.BOT_TOKEN,a=(0,_.iH)(""),o=(0,_.iH)([]);async function u(){for(const e of o.value)s(e.id)}async function s(e){const n={chat_id:e,text:a.value,parse_mode:"HTML"};await fetch(`https://api.telegram.org/bot${l}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})}return(0,t.bv)((async()=>{o.value=await V()})),(e,l)=>{const o=(0,t.up)("q-btn");return(0,t.wg)(),(0,t.iD)("div",qe,[(0,t.wy)((0,t._)("textarea",{"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e)},null,512),[[n.nr,a.value]]),(0,t.Wm)(o,{onClick:u,label:"Отправить сообщение",disable:!a.value,color:"green"},null,8,["disable"])])}}});const Ze=(0,u.Z)(He,[["__scopeId","data-v-69af9a5a"]]);var Te=Ze;D()(He,"components",{QBtn:O.Z});const Ce={class:"q-pa-md user-control"};var Ue=(0,t.aZ)({__name:"UserControl",setup(e){const l=[{name:"id",required:!0,label:"Id опта",align:"left",field:e=>e.id,sortable:!0},{name:"username",align:"left",label:"Юзернейм",field:"username",sortable:!0},{name:"tariffPlan",align:"left",label:"Подписка",field:"tariffPlan",sortable:!0},{name:"allow_suggestions",align:"left",label:"Разрешение на подборку",field:"allow_suggestions",sortable:!0},{name:"actions",align:"left",label:"Действия",field:"id"}],a=(0,_.iH)([]);async function n(e,l){const n=l?"disabled":"enabled";await Z(e,n),a.value=await V()}return(0,t.bv)((async()=>{a.value=await V()})),(e,o)=>{const u=(0,t.up)("q-btn"),s=(0,t.up)("q-td"),i=(0,t.up)("q-table");return(0,t.wg)(),(0,t.iD)("div",Ce,[(0,t.Wm)(i,{flat:"",bordered:"",title:"Предложения",dense:"",rows:a.value,columns:l,"row-key":"name"},{"body-cell-actions":(0,t.w5)((e=>[(0,t.Wm)(s,{class:"actions",props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{size:"sm",rounded:"",unelevated:"",color:"purple",onClick:l=>n(e.row.id,e.row.allow_suggestions),label:e.row.allow_suggestions?"Запретить подборки":"Разрешить подборки"},null,8,["onClick","label"])])),_:2},1032,["props"])])),_:1},8,["rows","columns"])])}}});const ze=(0,u.Z)(Ue,[["__scopeId","data-v-2274b7dd"]]);var Oe=ze;D()(Ue,"components",{QTable:oe.Z,QTd:ue.Z,QBtn:O.Z});const $e={id:"q-app-home",style:{"min-height":"100vh"}},De={class:"q-pa-md"};var Ie=(0,t.aZ)({__name:"HomeView",setup(e){const l=(0,c.tv)(),a=(0,_.iH)("recommendation-create");async function n(){window.localStorage.setItem("enter",""),await l.push({name:"login"})}return(e,l)=>{const o=(0,t.up)("q-space"),u=(0,t.up)("q-tab"),s=(0,t.up)("q-tabs"),i=(0,t.up)("q-toolbar"),r=(0,t.up)("q-btn");return(0,t.wg)(),(0,t.iD)("div",$e,[(0,t._)("div",De,[(0,t.Wm)(i,{class:"bg-primary text-white shadow-2 rounded-borders"},{default:(0,t.w5)((()=>[(0,t.Wm)(o),(0,t.Wm)(s,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e),shrink:""},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{name:"recommendation-create",label:"Создать Предложение"}),(0,t.Wm)(u,{name:"recommendation-now",label:"Текущие Предложения"}),(0,t.Wm)(u,{name:"channel-create",label:"Добавить канал в каталог"}),(0,t.Wm)(u,{name:"send-message",label:"Отправить сообщение в бота"}),(0,t.Wm)(u,{name:"user-control",label:"Управление пользователями"})])),_:1},8,["modelValue"])])),_:1})]),"recommendation-create"===a.value?((0,t.wg)(),(0,t.j4)(J,{key:0})):"recommendation-now"===a.value?((0,t.wg)(),(0,t.j4)(ye,{key:1})):"channel-create"===a.value?((0,t.wg)(),(0,t.j4)(We,{key:2})):"user-control"===a.value?((0,t.wg)(),(0,t.j4)(Oe,{key:3})):"send-message"===a.value?((0,t.wg)(),(0,t.j4)(Te,{key:4})):(0,t.kq)("",!0),(0,t.Wm)(r,{onClick:n,unelevated:"",class:"exit",color:"red",label:"Выйти"})])}}}),Se=a(366),Qe=a(3139),Me=a(3204),je=a(5748);const Ne=(0,u.Z)(Ie,[["__scopeId","data-v-59f8fd2a"]]);var Pe=Ne;D()(Ie,"components",{QToolbar:Se.Z,QBtn:O.Z,QSpace:Qe.Z,QTabs:Me.Z,QTab:je.Z});const Re={id:"q-app-login"},Be={class:"q-pa-md"};var Le=(0,t.aZ)({__name:"LoginView",setup(e){const l=(0,c.tv)(),a=(0,_.iH)(""),n=(0,_.iH)("");async function o(){"admin"===a.value&&"admin"===n.value&&(window.localStorage.setItem("enter","enabled"),await l.push({name:"home"}))}function u(){a.value="",n.value=""}return(e,l)=>{const s=(0,t.up)("q-input"),i=(0,t.up)("q-btn"),r=(0,t.up)("q-form");return(0,t.wg)(),(0,t.iD)("div",Re,[(0,t._)("div",Be,[(0,t.Wm)(r,{onSubmit:o,onReset:u,class:"q-gutter-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(s,{filled:"",modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e),label:"Логин",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(s,{filled:"",type:"password",modelValue:n.value,"onUpdate:modelValue":l[1]||(l[1]=e=>n.value=e),hint:"Пожалуйста хоть что-то введите",label:"Пароль","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t._)("div",null,[(0,t.Wm)(i,{label:"Войти????",type:"submit",color:"primary"}),(0,t.Wm)(i,{label:"Сбросить",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])])),_:1})])])}}});const xe=(0,u.Z)(Le,[["__scopeId","data-v-46ba5197"]]);var Ee=xe;D()(Le,"components",{QForm:x.Z,QInput:E.Z,QBtn:O.Z});const Fe=[{path:"/",component:b,name:"start",meta:{start:!0}},{path:"/home",name:"home",component:Pe,meta:{auth:!0}},{path:"/login",name:"login",component:Ee,meta:{login:!0}}],Je=(0,c.p7)({history:(0,c.PO)("/"),routes:Fe});Je.beforeEach((async(e,l,a)=>{const n=window.localStorage.getItem("enter");e.meta?.auth?"enabled"===n?a():a({name:"login"}):e.meta?.login?"enabled"!==n?a():a({name:"home"}):a()}));var Xe=Je;(0,n.ri)(r).use(Xe).use(d.Z,m).mount("#app")}},l={};function a(n){var t=l[n];if(void 0!==t)return t.exports;var o=l[n]={exports:{}};return e[n].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(l,n,t,o){if(!n){var u=1/0;for(d=0;d<e.length;d++){n=e[d][0],t=e[d][1],o=e[d][2];for(var s=!0,i=0;i<n.length;i++)(!1&o||u>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[i])}))?n.splice(i--,1):(s=!1,o<u&&(u=o));if(s){e.splice(d--,1);var r=t();void 0!==r&&(l=r)}}return l}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,t,o]}}(),function(){a.n=function(e){var l=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(l,{a:l}),l}}(),function(){a.d=function(e,l){for(var n in l)a.o(l,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:l[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)}}(),function(){var e={143:0};a.O.j=function(l){return 0===e[l]};var l=function(l,n){var t,o,u=n[0],s=n[1],i=n[2],r=0;if(u.some((function(l){return 0!==e[l]}))){for(t in s)a.o(s,t)&&(a.m[t]=s[t]);if(i)var d=i(a)}for(l&&l(n);r<u.length;r++)o=u[r],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},n=self["webpackChunkbot_admin"]=self["webpackChunkbot_admin"]||[];n.forEach(l.bind(null,0)),n.push=l.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(9706)}));n=a.O(n)})();
//# sourceMappingURL=app.74ec03fa.js.map