import{d as e,aK as t,h as i,o as s,i as r,aL as o,aM as n,j as d}from"./index.2273c044.js";import{b as a}from"./index.9f58311d.js";import{C as p}from"./CheckOutlined.30901c1f.js";import"./vendor.0d1494f4.js";import"./index.255cd0cd.js";import"./index.e51aaae6.js";import"./index.74245b2d.js";import"./index.38dd0295.js";import"./index.e5f1178f.js";import"./domUtils.dd018fc7.js";import"./_stringToArray.399b4c6f.js";import"./RightOutlined.a39414d6.js";import"./index.95c10fda.js";import"./useTimeout.5a70dd81.js";import"./useScrollTo.41d1346a.js";import"./animation.71d664b2.js";import"./ArrowLeftOutlined.96686bf6.js";import"./useAttrs.efeb3643.js";import"./isEqual.2182e848.js";import"./useHeaderSetting.07e9888e.js";import"./SettingOutlined.5ca80b37.js";var m=e({name:"ThemePicker",components:{CheckOutlined:p},props:{colorList:{type:Array,defualt:[]},event:{type:Number,default:()=>{}},def:{type:String}},setup(e){const{prefixCls:i}=t("setting-theme-picker");return{prefixCls:i,handleClick:function(t){e.event&&a(e.event,t)}}}});m.render=function(e,t,a,p,m,l){const c=i("CheckOutlined");return s(),r("div",{class:e.prefixCls},[(s(!0),r(o,null,n(e.colorList||[],(t=>(s(),r("span",{key:t,onClick:i=>e.handleClick(t),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}],style:{background:t}},[d(c)],14,["onClick"])))),128))],2)};export default m;
