let e=document.createElement("style");e.innerHTML=".vben-header-lock-modal__entry{position:relative;height:240px;padding:130px 30px 60px;background:#fff;border-radius:10px}.vben-header-lock-modal__header{position:absolute;top:0;left:calc(50% - 45px);width:auto;text-align:center}.vben-header-lock-modal__header-img{width:70px;border-radius:50%}.vben-header-lock-modal__header-name{margin-top:5px}.vben-header-lock-modal__footer{text-align:center}",document.head.appendChild(e);import{a as s,u as t,aU as i,I as o,dD as r,g as a,i as d,o as n,j as l,w as m,k as p,n as c,p as f,J as j}from"./index.c5d8d2c2.js";import"./xlsx.9d951958.js";import"./index.ba073669.js";import"./Trigger.8423b189.js";import"./omit.613852c9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.9b7bc90a.js";import"./CheckOutlined.be057137.js";import{s as u}from"./index.3620d909.js";import"./index.28c69232.js";import"./colors.d37333f4.js";import"./index.5e68bb45.js";import"./RightOutlined.ac5b2c4e.js";import"./types.02846160.js";import"./index.534b0698.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.f8f6dc33.js";import"./index.ebbe171f.js";import"./index.bf3d04e3.js";import"./UpOutlined.23a2d63a.js";import"./index.2b179f06.js";import"./index.99f9d65f.js";import"./index.8a1a96c3.js";import"./index.4b1b8a7c.js";import"./index.8126daf4.js";import"./index.078a78e9.js";import"./index.ba9445ca.js";import"./index.86acc164.js";import"./index.a56b187c.js";import"./CloseOutlined.93cdb7f8.js";import"./FullscreenOutlined.f6e22198.js";import"./index.947bf745.js";import"./RightOutlined.afe6ff98.js";import"./useTimeout.fcc1bd72.js";import"./tsxHelper.87c58488.js";import"./index.89ce6b1b.js";import"./animation.99afdb7b.js";import"./useScrollTo.0260d00e.js";import{_ as x}from"./header.0299ae16.js";import"./useAttrs.4a972d2b.js";import{s as b,u as h}from"./index.6195931d.js";import"./useWindowSizeFn.9f107263.js";import"./index.00d20f2e.js";import"./uuid.40269c00.js";import"./download.3f84a53c.js";import{u as g}from"./useForm.7906866b.js";var _=s({name:"LockModal",components:{BasicModal:b,BasicForm:u},setup(){const{t:e}=t(),{prefixCls:s}=i("header-lock-modal"),d=o((()=>{var e;return null==(e=a.getUserInfoState)?void 0:e.realName})),[n,{closeModal:l}]=h(),[m,{validateFields:p,resetFields:c}]=g({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});return{t:e,prefixCls:s,getRealName:d,register:n,registerForm:m,handleLock:async function(){const e=(await p()).password;l(),r.commitLockInfoState({isLock:!0,pwd:e}),await c()}}}});_.render=function(e,s,t,i,o,r){const a=d("BasicForm"),u=d("a-button"),b=d("BasicModal");return n(),l(b,j({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:m((()=>[p("div",{class:`${e.prefixCls}__entry`},[p("div",{class:`${e.prefixCls}__header`},[p("img",{src:x,class:`${e.prefixCls}__header-img`},null,2),p("p",{class:`${e.prefixCls}__header-name`},c(e.getRealName),3)],2),p(a,{onRegister:e.registerForm},null,8,["onRegister"]),p("div",{class:`${e.prefixCls}__footer`},[p(u,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:m((()=>[f(c(e.t("layout.header.lockScreenBtn")),1)])),_:1},8,["onClick"])],2)],2)])),_:1},16,["title","class","onRegister"])};export default _;