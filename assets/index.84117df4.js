import{d as e,r as a,cp as s,cq as t,h as i,o,i as r,j as n,bs as l,H as d,b8 as p,bw as c,m}from"./index.2273c044.js";import{a as u}from"./index.37940bee.js";import{_ as f}from"./index.8677a64d.js";import{F as v,S as j,a as S,b,c as x,d as T,e as R,f as X,g as h,h as Y,i as g,E,j as _}from"./index.e5f1178f.js";import"./vendor.0d1494f4.js";import"./SearchOutlined.c19a908c.js";import"./CheckOutlined.30901c1f.js";import"./DownOutlined.00438a9e.js";import"./index.4b8f2690.js";import"./index.d4b76a25.js";import"./RightOutlined.a39414d6.js";import"./EllipsisOutlined.78bfab42.js";import"./types.aae377de.js";import"./isEqual.2182e848.js";import"./toInteger.629e3cf7.js";import"./index.95c10fda.js";import"./index.9b781c36.js";import"./usePageContext.0daaedcb.js";import"./transButton.a80db483.js";import"./ArrowLeftOutlined.96686bf6.js";import"./domUtils.dd018fc7.js";import"./_stringToArray.399b4c6f.js";const w=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"].map((e=>({label:e,value:e,key:e})));var y=e({components:{Select:u,PageWrapper:f,FadeTransition:v,ScaleTransition:j,SlideYTransition:S,ScrollYTransition:b,SlideYReverseTransition:x,ScrollYReverseTransition:T,SlideXTransition:R,ScrollXTransition:X,SlideXReverseTransition:h,ScrollXReverseTransition:Y,ScaleRotateTransition:g,ExpandXTransition:E,ExpandTransition:_},setup(){const e=a("Fade"),s=a(!0);return{options:w,value:e,start:function(){s.value=!1,setTimeout((()=>{s.value=!0}),300)},show:s}}});const O=c("data-v-51fb1392");s("data-v-51fb1392");const k={class:"flex"},C=m(" start "),F={class:"box"};t();const P=O(((e,a,s,t,c,m)=>{const u=i("Select"),f=i("a-button"),v=i("PageWrapper");return o(),r(v,{title:"动画组件示例"},{default:O((()=>[n("div",k,[n(u,{options:e.options,value:e.value,"onUpdate:value":a[1]||(a[1]=a=>e.value=a),placeholder:"选择动画",style:{width:"150px"}},null,8,["options","value"]),n(f,{type:"primary",class:"ml-4",onClick:e.start},{default:O((()=>[C])),_:1},8,["onClick"])]),(o(),r(l(`${e.value}Transition`),null,{default:O((()=>[d(n("div",F,null,512),[[p,e.show]])])),_:1}))])),_:1})}));y.render=P,y.__scopeId="data-v-51fb1392";export default y;
