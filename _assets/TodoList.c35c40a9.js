let t=document.createElement("style");t.innerHTML=".todo-list[data-v-352db18b]{position:relative}.todo-list__total[data-v-352db18b]{display:inline-block;width:20px;height:20px;font-size:12px;line-height:20px;color:#fff;text-align:center;background:rgba(255,0,0,.7);border-radius:50%}.todo-list__all[data-v-352db18b]{position:absolute;top:0;right:10px;height:56px;font-size:24px;line-height:56px;text-align:center;cursor:pointer}.todo-list__item[data-v-352db18b]{padding:8px}.todo-list__item-title[data-v-352db18b]{font-size:14px;font-weight:400;line-height:22px;color:#1c1d21}.todo-list__item-memo[data-v-352db18b]{font-size:12px;font-weight:400;line-height:22px;color:#7c8087}.todo-list__item-desc[data-v-352db18b]{font-size:12px;line-height:22px;color:#7c8087}",document.head.appendChild(t);import{k as e,J as i,cQ as o,a as s,d8 as a,d9 as l,i as n,o as r,j as d,aL as p,aV as c,n as m,p as b,bo as u}from"./index.e76c06f1.js";import"./xlsx.9d951958.js";import"./index.2e7cfb95.js";import"./Trigger.e0ae6bef.js";import"./omit.387e4bc9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.9023c34c.js";import"./CheckOutlined.187a3060.js";import"./colors.b20c9223.js";import"./RightOutlined.238a5698.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.b9c7bfd3.js";import{T as f}from"./index.0492ce3b.js";import"./LeftOutlined.bf71bcd8.js";import{T as _}from"./index.ffdab4cb.js";import"./index.aa27229a.js";import"./zh_CN.0242bd16.js";import{L as j}from"./index.7c2a9d12.js";import{a as g}from"./index.1ef513c1.js";import"./RightOutlined.4e6f221b.js";import"./useTimeout.0b9d202d.js";import"./tsxHelper.3ee1ad98.js";import"./index.1671d981.js";import"./animation.7d541661.js";import"./useScrollTo.ae385fa0.js";import{t as h}from"./data.edc06832.js";var x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};function v(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var O=function(t,s){var a=function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?Object(arguments[e]):{},o=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(i).filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable})))),o.forEach((function(e){v(t,e,i[e])}))}return t}({},t,s.attrs);return e(o,i(a,{icon:x}),null)};O.displayName="EllipsisOutlined",O.inheritAttrs=!1;var y=s({name:"TodoList",components:{CollapseContainer:g,List:j,ListItem:j.Item,ListItemMeta:j.Item.Meta,Tag:_,Tooltip:f,EllipsisOutlined:O},setup:()=>({todoList:h})});const L=u("data-v-352db18b");a("data-v-352db18b");const T=e("span",null,[b(" 待办事项 "),e("span",{class:"todo-list__total"},"30")],-1),w={class:"todo-list__item-title"},z={class:"todo-list__item-memo"},k={class:"todo-list__item-desc"},C=e("br",null,null,-1),I=b("待审批"),E={class:"todo-list__all"},M=b("查看更多");l();const P=L(((t,i,o,s,a,l)=>{const u=n("ListItemMeta"),f=n("Tag"),_=n("a-button"),j=n("ListItem"),g=n("List"),h=n("EllipsisOutlined"),x=n("Tooltip"),v=n("CollapseContainer");return r(),d(v,{class:"todo-list",title:"待办事项",canExpan:!1},{title:L((()=>[T])),default:L((()=>[e(g,null,{default:L((()=>[(r(!0),d(p,null,c(t.todoList,(t=>(r(),d(j,{key:t.id,class:"todo-list__item"},{default:L((()=>[e(u,null,{title:L((()=>[e("div",null,[e("span",w,m(t.title),1),e("span",z,m(t.memo),1)])])),description:L((()=>[e("div",k,[b(" 提交人："+m(t.sbmter)+" ",1),C,b(" 提交时间："+m(t.sbmtTime),1)])])),_:2},1024),e(_,{type:"link"},{default:L((()=>[e(f,{color:"blue"},{default:L((()=>[I])),_:1})])),_:1})])),_:2},1024)))),128))])),_:1}),e("div",E,[e(x,{placement:"topRight"},{title:L((()=>[M])),default:L((()=>[e(h)])),_:1})])])),_:1})}));y.render=P,y.__scopeId="data-v-352db18b";export default y;