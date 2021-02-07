import{aV as e,aW as o,d as t,r as l,L as a,e as r,cp as s,cq as d,h as i,o as n,i as c,j as m,bw as u,m as p}from"./index.d77f02a9.js";import{a as f}from"./index.074ee3be.js";import{_ as g}from"./index.6781f66c.js";import"./vendor.3b1829c7.js";import"./index.36fa56ba.js";import"./domUtils.5a6e1164.js";import"./_stringToArray.7600767c.js";import"./RightOutlined.91dd89cb.js";/* empty css              */import"./useTimeout.2d9628a9.js";import"./useScrollTo.3b6a2f4d.js";import"./animation.c2cd2812.js";import"./index.afd079bf.js";import"./index.7e51aec0.js";import"./EllipsisOutlined.d6473483.js";import"./types.7d2364ed.js";import"./isEqual.66f620a0.js";import"./toInteger.007e1a46.js";import"./DownOutlined.4bb15dc2.js";import"./index.f3100edb.js";import"./usePageContext.b4dcd332.js";import"./transButton.29cc983c.js";import"./ArrowLeftOutlined.3f5c2cff.js";const b=e((()=>o((()=>import("./index.28d7ec77.js")),["/assets/index.28d7ec77.js","/assets/vendor.3b1829c7.js","/assets/vendor.4a5fa02d.css","/assets/index.d77f02a9.js","/assets/index.06ce6422.css","/assets/download.a32a8ead.js"])));var v=t({components:{CollapseContainer:f,QrCode:b,PageWrapper:g},setup(){const e=l(null);return{qrCodeUrl:"https://www.vvbin.cn",LogoImg:a,download:function(){const o=r(e);o&&o.download("文件名")},qrRef:e}}});const j=u("data-v-f8968a82");s("data-v-f8968a82");const x={class:"flex flex-wrap"},q=p(" 下载 "),C=m("div",{class:"msg"}," (在线logo会导致图片跨域，需要下载图片需要自行解决跨域问题) ",-1);d();const _=j(((e,o,t,l,a,r)=>{const s=i("QrCode"),d=i("CollapseContainer"),u=i("a-button"),p=i("PageWrapper");return n(),c(p,{title:"二维码组件使用示例"},{default:j((()=>[m("div",x,[m(d,{title:"基础示例",canExpan:!0,class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl},null,8,["value"])])),_:1}),m(d,{title:"渲染成img标签示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,tag:"img"},null,8,["value"])])),_:1}),m(d,{title:"配置样式示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),m(d,{title:"本地logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,logo:e.LogoImg},null,8,["value","logo"])])),_:1}),m(d,{title:"在线logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,logo:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),m(d,{title:"logo配置示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,logo:{src:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",logoSize:.2,borderSize:.05,borderRadius:50,bgColor:"blue"}},null,8,["value","logo"])])),_:1}),m(d,{title:"下载示例",class:"text-center qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,ref:"qrRef",logo:e.LogoImg},null,8,["value","logo"]),m(u,{class:"mb-2",type:"primary",onClick:e.download},{default:j((()=>[q])),_:1},8,["onClick"]),C])),_:1}),m(d,{title:"配置大小示例",class:"text-center qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,width:300},null,8,["value"])])),_:1})])])),_:1})}));v.render=_,v.__scopeId="data-v-f8968a82";export default v;