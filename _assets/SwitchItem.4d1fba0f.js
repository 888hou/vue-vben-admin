let e=document.createElement("style");e.innerHTML=".vben-setting-switch-item[data-v-2b7b2ae4]{display:flex;justify-content:space-between;margin:16px 0}",document.head.appendChild(e);import{a as t,aU as i,u as s,I as n,i as a,o as d,j as o,k as r,n as c,J as l,bo as p}from"./index.c5d8d2c2.js";import"./xlsx.9d951958.js";import"./Trigger.8423b189.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.f8f6dc33.js";import"./index.ebbe171f.js";import"./index.8a1a96c3.js";import{S as m}from"./index.86acc164.js";import"./index.dc2ddd8c.js";import"./index.a56b187c.js";import"./index.3de0ddaa.js";import"./RightOutlined.afe6ff98.js";import"./SettingOutlined.f0e8c907.js";import"./useTimeout.fcc1bd72.js";import"./tsxHelper.87c58488.js";import"./index.89ce6b1b.js";import"./animation.99afdb7b.js";import"./useScrollTo.0260d00e.js";import"./useAttrs.4a972d2b.js";import"./useHeaderSetting.8b245e15.js";import{b}from"./index.8765c742.js";var f=t({name:"SwitchItem",components:{Switch:m},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=i("setting-switch-item"),{t:a}=s();return{prefixCls:t,t:a,handleChange:function(t){e.event&&b(e.event,t)},getBindValue:n((()=>e.def?{checked:e.def}:{}))}}});const u=p("data-v-2b7b2ae4")(((e,t,i,s,n,p)=>{const m=a("Switch");return d(),o("div",{class:e.prefixCls},[r("span",null,c(e.title),1),r(m,l(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}));f.render=u,f.__scopeId="data-v-2b7b2ae4";export default f;