import{r as o,ce as a,e as t,aU as r}from"./index.d77f02a9.js";import{r as s}from"./animation.c2cd2812.js";function n({el:n,to:c,duration:e=500,callback:l}){const i=o(!1),u=(o=>o.scrollTop)(n),f=c-u;let p=0;e=a(e)?500:e;const m=function(){if(!t(i))return;p+=20;const o=(a=p,c=u,d=f,(a/=e/2)<1?d/2*a*a+c:-d/2*(--a*(a-2)-1)+c);var a,c,d;((o,a)=>{o.scrollTop=a})(n,o),p<e&&t(i)?s(m):l&&r(l)&&l()};return{start:()=>{i.value=!0,m()},stop:()=>{i.value=!1}}}export{n as u};