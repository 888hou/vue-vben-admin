import{b_ as e,r as t,cE as i,e as n,d as s,q as a,o as r,i as o,b0 as d,bX as c,h as l,j as u,l as p,bw as m}from"./index.2273c044.js";import{_ as f}from"./index.8677a64d.js";import"./vendor.0d1494f4.js";import"./index.4b8f2690.js";import"./index.d4b76a25.js";import"./RightOutlined.a39414d6.js";import"./EllipsisOutlined.78bfab42.js";import"./types.aae377de.js";import"./isEqual.2182e848.js";import"./toInteger.629e3cf7.js";import"./DownOutlined.00438a9e.js";import"./index.95c10fda.js";import"./index.9b781c36.js";import"./usePageContext.0daaedcb.js";import"./transButton.a80db483.js";import"./ArrowLeftOutlined.96686bf6.js";var j=s({name:"ClickOutSide",emits:["mounted","clickOutside"],setup(s,{emit:r}){const o=t(null);return function(s,a,r="click"){if(e)return;const o=t(!1);function d(e){if("touchend"===e.type&&(o.value=!0),"click"===e.type&&n(o))return;const t=s.value;t&&e.target&&!t.contains(e.target)&&a(e)}i({el:document,name:"touchend",listener:d,options:!0}),i({el:document,name:r,listener:d,options:!0})}(o,(()=>{r("clickOutside")})),a((()=>{r("mounted")})),{wrap:o}}});const k={ref:"wrap"};j.render=function(e,t,i,n,s,a){return r(),o("div",k,[d(e.$slots,"default")],512)},c(j);var C=s({components:{ClickOutSide:j,PageWrapper:f},setup(){const e=t("Click");return{innerClick:function(){e.value="Click Inner"},handleClickOutside:function(){e.value="Click Out Side"},text:e}}});const O=m("data-v-7a637453"),b=O(((e,t,i,n,s,a)=>{const d=l("ClickOutSide"),c=l("PageWrapper");return r(),o(c,{title:"点内外部触发事件"},{default:O((()=>[u(d,{onClickOutside:e.handleClickOutside,class:"flex justify-center"},{default:O((()=>[u("div",{onClick:t[1]||(t[1]=(...t)=>e.innerClick&&e.innerClick(...t)),class:"demo-box"},p(e.text),1)])),_:1},8,["onClickOutside"])])),_:1})}));C.render=b,C.__scopeId="data-v-7a637453";export default C;
