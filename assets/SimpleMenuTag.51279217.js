import{d as t,aK as e,$ as a,o as n,i as r,l as o,k as s}from"./index.89eaa474.js";import"./vendor.3b1829c7.js";var l=t({name:"SimpleMenuTag",props:{item:{type:Object,default:{}},collapseParent:{type:Boolean,default:!1}},setup(t){const{prefixCls:n}=e("simple-menu"),r=a((()=>{const{item:e}=t;if(!e)return!1;const{tag:a}=e;if(!a)return!1;const{dot:n,content:r}=a;return!(!n&&!r)})),o=a((()=>{if(!r.value)return"";const{item:e,collapseParent:a}=t,{tag:n}=e,{dot:o,content:s}=n;return o||a?"":s}));return{getTagClass:a((()=>{const{item:e,collapseParent:a}=t,{tag:r={}}=e||{},{dot:o,type:s="error"}=r,l=`${n}-tag`;return[l,[`${l}--${s}`],{[`${l}--collapse`]:a,[`${l}--dot`]:o}]})),getShowTag:r,getContent:o}}});l.render=function(t,e,a,l,p,c){return t.getShowTag?(n(),r("span",{key:0,class:t.getTagClass},o(t.getContent),3)):s("",!0)};export default l;