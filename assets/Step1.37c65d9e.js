import{d as e,cp as t,cq as i,h as s,o,i as a,j as r,bw as n,m as p}from"./index.89eaa474.js";import{D as d}from"./index.577f6c6d.js";import{I as m}from"./index.c01cefa1.js";import{a as c}from"./index.7738c60b.js";import{_ as l}from"./index.a11b9577.js";import{step1Schemas as u}from"./data.2505cb7f.js";import{u as j}from"./useForm.96500e09.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.a793b9df.js";import"./EyeOutlined.b4c40e2a.js";import"./CheckOutlined.8a1d6e93.js";import"./DownOutlined.1abeee16.js";import"./index.a7743e73.js";import"./responsiveObserve.c545f1cc.js";import"./index.e6cdd1b0.js";import"./findIndex.b95abab4.js";import"./isEqual.0bcea136.js";import"./_baseProperty.74f89655.js";import"./toInteger.e5f6d519.js";import"./index.77be0dac.js";import"./index.591d974e.js";import"./index.f7d29dbe.js";import"./UpOutlined.c83d32c3.js";import"./index.1e19492c.js";import"./colors.e9cc1e07.js";import"./RightOutlined.f6122b3f.js";import"./RedoOutlined.1b8dc239.js";import"./index.81eb82f3.js";import"./EllipsisOutlined.d7ec650a.js";import"./types.8ffdb72a.js";import"./Tree.62740264.js";import"./util.99ac0f73.js";import"./useAttrs.2235e19b.js";/* empty css              */import"./index.6c42ac2e.js";import"./uuid.f9ee62f2.js";import"./index.089467a0.js";import"./DeleteOutlined.74882a9c.js";import"./index.7b6fd761.js";import"./useTimeout.2438cbf6.js";import"./useWindowSizeFn.02c59bc0.js";import"./index.72bfb6c6.js";import"./index.3b842216.js";import"./domUtils.3eaab504.js";import"./_stringToArray.9a50877f.js";import"./useScrollTo.95f5e655.js";import"./animation.80266c92.js";import"./FullscreenOutlined.038a48b5.js";import"./index.ef8c8b6c.js";import"./index.0b034549.js";import"./LeftOutlined.3f688a61.js";import"./download.3a13bc2e.js";var f=e({components:{BasicForm:l,[c.name]:c,ASelectOption:c.Option,[m.name]:m,[m.Group.name]:m.Group,[d.name]:d},emits:["next"],setup(e,{emit:t}){const[i,{validate:s}]=j({labelWidth:100,schemas:u,actionColOptions:{span:14},showResetButton:!1,submitButtonOptions:{text:"下一步"},submitFunc:async function(){try{const e=await s();t("next",e)}catch(e){}}});return{register:i}}});const b=n("data-v-c22ef27a");t("data-v-c22ef27a");const x={class:"step1"},v={class:"step1-form"},O=p(" 支付宝 "),h=p(" 银联 "),y=r("h3",null,"说明",-1),_=r("h4",null,"转账到支付宝账户",-1),g=r("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1),w=r("h4",null,"转账到银行卡",-1),F=r("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1);i();const U=b(((e,t,i,n,p,d)=>{const m=s("a-select-option"),c=s("a-select"),l=s("a-input"),u=s("a-input-group"),j=s("BasicForm"),f=s("a-divider");return o(),a("div",x,[r("div",v,[r(j,{onRegister:e.register},{fac:b((({model:e,field:t})=>[r(u,{compact:""},{default:b((()=>[r(c,{value:e.pay,"onUpdate:value":t=>e.pay=t,class:"pay-select"},{default:b((()=>[r(m,{value:"zfb"},{default:b((()=>[O])),_:1}),r(m,{value:"yl"},{default:b((()=>[h])),_:1})])),_:2},1032,["value","onUpdate:value"]),r(l,{class:"pay-input",value:e[t],"onUpdate:value":i=>e[t]=i},null,8,["value","onUpdate:value"])])),_:2},1024)])),_:1},8,["onRegister"])]),r(f),y,_,g,w,F])}));f.render=U,f.__scopeId="data-v-c22ef27a";export default f;