import{_ as e}from"./useModal.221a6e76.js";import{D as t}from"./index.5fd28ea7.js";import{u as s}from"./useDescription.44b1a5a1.js";import{d as o,u as r,h as i,o as a,i as d,w as n,j as m,a7 as p}from"./index.7f9d11df.js";import{getDescSchema as c}from"./data.4e877ee9.js";import"./useTimeout.946338f4.js";import"./useWindowSizeFn.dde781a9.js";import"./ScrollContainer.2c2d7291.js";import"./index.576d13da.js";import"./domUtils.10b268bc.js";import"./_stringToArray.7199892a.js";import"./RightOutlined.738ce43d.js";/* empty css              */import"./useScrollTo.59748d94.js";import"./FullscreenOutlined.7e53edc0.js";import"./isEqual.cf616f95.js";import"./index.12f36f42.js";import"./responsiveObserve.c545f1cc.js";import"./get.c0473d28.js";import"./vendor.3b1829c7.js";import"./index.1b83d9eb.js";var l=o({name:"ErrorLogDetailModal",components:{BasicModal:e,Description:t},props:{info:{type:Object,default:null}},setup(){const{t:e}=r(),[t]=s({column:2,schema:c()});return{register:t,useI18n:r,t:e}}});l.render=function(e,t,s,o,r,c){const l=i("Description"),j=i("BasicModal");return a(),d(j,p({width:800,title:e.t("sys.errorLog.tableActionDesc")},e.$attrs),{default:n((()=>[m(l,{data:e.info,onRegister:e.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default l;