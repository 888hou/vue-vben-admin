let i=document.createElement("style");i.innerHTML=".list-search__header-form[data-v-1b8f9986]{margin-bottom:-16px}.list-search__container[data-v-1b8f9986]{padding:12px;background:#fff}.list-search__title[data-v-1b8f9986]{margin-bottom:12px;font-size:18px}.list-search__content[data-v-1b8f9986]{color:rgba(0,0,0,.65)}.list-search__action[data-v-1b8f9986]{margin-top:10px}.list-search__action-item[data-v-1b8f9986]{display:inline-block;padding:0 16px;color:rgba(0,0,0,.45)}.list-search__action-item[data-v-1b8f9986]:nth-child(1){padding-left:0}.list-search__action-item[data-v-1b8f9986]:nth-child(1),.list-search__action-item[data-v-1b8f9986]:nth-child(2){border-right:1px solid rgba(206,206,206,.4)}.list-search__action-icon[data-v-1b8f9986]{margin-right:3px}.list-search__time[data-v-1b8f9986]{position:absolute;right:20px;color:rgba(0,0,0,.45)}",document.head.appendChild(i);import{a as t,i as s,o as e,j as a,bo as o,k as r,aL as n,aV as d,n as c,m as l,p}from"./index.e76c06f1.js";import"./xlsx.9d951958.js";import"./index.2e7cfb95.js";import"./Trigger.e0ae6bef.js";import"./omit.387e4bc9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.9023c34c.js";import"./CheckOutlined.187a3060.js";import{s as m}from"./index.15751672.js";import"./index.1bb021e3.js";import"./index.6b9d0259.js";import"./colors.b20c9223.js";import"./index.eba57d7e.js";import"./RightOutlined.238a5698.js";import"./usePageContext.db13adb7.js";import"./types.2b5911d0.js";import"./index.13fbb8a0.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.b9c7bfd3.js";import"./index.0492ce3b.js";import"./index.f4cf7fd8.js";import"./UpOutlined.c57d18c6.js";import"./index.22e82fe7.js";import{T as f}from"./index.ffdab4cb.js";import"./index.470a4b2d.js";import"./index.545f4296.js";import"./index.652cf000.js";import"./index.351bc02d.js";import"./index.ec0f3664.js";import"./index.ac515f18.js";import"./transButton.914fefeb.js";import"./index.1ef513c1.js";import"./CloseOutlined.364204b4.js";import"./FullscreenOutlined.647cd1c9.js";import"./index.6d17570e.js";import"./RightOutlined.4e6f221b.js";import"./useTimeout.0b9d202d.js";import"./tsxHelper.3ee1ad98.js";import"./index.1671d981.js";import"./animation.7d541661.js";import"./useScrollTo.ae385fa0.js";import{s as b}from"./index.90bfe2f3.js";import"./useAttrs.cd179906.js";import"./index.3c40b99f.js";import"./useWindowSizeFn.18768138.js";import{s as j}from"./index.cee60ffd.js";import"./uuid.40269c00.js";import"./download.75bd0097.js";import{searchList as x,actions as _,schemas as u}from"./data.a113573e.js";var h=t({components:{Icon:j,Tag:f,BasicForm:m,PageWrapper:b},setup:()=>({prefixCls:"list-search",list:x,actions:_,schemas:u})});const g=o("data-v-1b8f9986"),v=g(((i,t,o,m,f,b)=>{const j=s("BasicForm"),x=s("Icon"),_=s("Tag"),u=s("a-list-item-meta"),h=s("a-list-item"),v=s("a-list"),C=s("PageWrapper");return e(),a(C,{class:i.prefixCls,title:"搜索列表"},{headerContent:g((()=>[r(j,{class:`${i.prefixCls}__header-form`,labelWidth:100,schemas:i.schemas,showActionButtonGroup:!1},null,8,["class","schemas"])])),default:g((()=>[r("div",{class:`${i.prefixCls}__container`},[r(v,null,{default:g((()=>[(e(!0),a(n,null,d(i.list,(t=>(e(),a(h,{key:t.id},{default:g((()=>[r(u,null,{description:g((()=>[r("div",{class:`${i.prefixCls}__content`},c(t.content),3),r("div",{class:`${i.prefixCls}__action`},[(e(!0),a(n,null,d(i.actions,((t,s)=>(e(),a("div",{key:s,class:`${i.prefixCls}__action-item`},[t.icon?(e(),a(x,{key:0,class:`${i.prefixCls}__action-icon`,icon:t.icon,color:t.color},null,8,["class","icon","color"])):l("v-if",!0),p(" "+c(t.text),1)],2)))),128)),r("span",{class:`${i.prefixCls}__time`},c(t.time),3)],2)])),title:g((()=>[r("p",{class:`${i.prefixCls}__title`},c(t.title),3),r("div",null,[(e(!0),a(n,null,d(t.description,((i,t)=>(e(),a(_,{key:t,class:"mb-2"},{default:g((()=>[p(c(i),1)])),_:2},1024)))),128))])])),_:2},1024)])),_:2},1024)))),128))])),_:1})],2)])),_:1},8,["class"])}));h.render=v,h.__scopeId="data-v-1b8f9986";export default h;