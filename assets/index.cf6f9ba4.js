import{d as e,h as o,o as i,i as t,w as r,j as s,m as d}from"./index.7f9d11df.js";import{A as n}from"./index.87a8ba38.js";import{u as a}from"./useModal.221a6e76.js";import p from"./Modal1.55e02e3f.js";import m from"./Modal2.dde6f1ce.js";import l from"./Modal3.d549af18.js";import c from"./Modal4.b7c1462e.js";import{_ as j}from"./index.ef974eb9.js";import"./vendor.3b1829c7.js";import"./useTimeout.946338f4.js";import"./useWindowSizeFn.dde781a9.js";import"./ScrollContainer.2c2d7291.js";import"./index.576d13da.js";import"./domUtils.10b268bc.js";import"./_stringToArray.7199892a.js";import"./RightOutlined.738ce43d.js";/* empty css              */import"./useScrollTo.59748d94.js";import"./FullscreenOutlined.7e53edc0.js";import"./isEqual.cf616f95.js";import"./BasicForm.1796ed98.js";import"./index.ff61af1b.js";import"./index.43504c48.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.eed3e6c4.js";import"./get.c0473d28.js";import"./_baseProperty.74f89655.js";import"./toInteger.61c42cd2.js";import"./index.be1c27c7.js";import"./index.5d173e58.js";import"./SearchOutlined.eb5ee535.js";import"./EyeOutlined.00406e72.js";import"./index.25d875eb.js";import"./CheckOutlined.1f0166be.js";import"./DownOutlined.8186e43a.js";import"./index.1b83d9eb.js";import"./index.d6ccd8a9.js";import"./UpOutlined.703fea9d.js";import"./index.06e0d19d.js";import"./RedoOutlined.202801c7.js";import"./index.e74efc31.js";import"./EllipsisOutlined.a98bfac0.js";import"./types.6c8ee0af.js";import"./Tree.f65cc9de.js";import"./util.62a283cc.js";import"./uuid.4c08c426.js";import"./index.0ec94771.js";import"./DeleteOutlined.512a40ae.js";import"./index.18cb88c8.js";import"./Dropdown.ed1fed22.js";import"./index.84854765.js";import"./LeftOutlined.d674a5c8.js";import"./download.cd37389c.js";import"./useForm.069cadb3.js";import"./index.fd14664a.js";import"./index.5160dc0f.js";import"./usePageContext.310cba05.js";import"./transButton.b06e8cfe.js";import"./ArrowLeftOutlined.e9a5e86b.js";var f=e({components:{Alert:n,Modal1:p,Modal2:m,Modal3:l,Modal4:c,PageWrapper:j},setup(){const[e,{openModal:o,setModalProps:i}]=a(),[t,{openModal:r}]=a(),[s,{openModal:d}]=a(),[n,{openModal:p}]=a();return{register1:e,openModal1:o,register2:t,openModal2:r,register3:s,openModal3:d,register4:n,openModal4:p,send:function(){p(!0,{data:"content",info:"Info"})},openModalLoading:function(){o(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const u=d(" 打开弹窗 默认可以拖动/全屏 "),g=d(" 打开弹窗 "),M=d(" 打开弹窗 "),b=d(" 打开弹窗并传递数据 ");f.render=function(e,d,n,a,p,m){const l=o("Alert"),c=o("a-button"),j=o("Modal1"),f=o("Modal2"),x=o("Modal3"),y=o("Modal4"),O=o("PageWrapper");return i(),t(O,{title:"modal组件使用示例"},{default:r((()=>[s(l,{message:"使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable\n    参数进行控制是否可以拖动/全屏","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:e.openModalLoading},{default:r((()=>[u])),_:1},8,["onClick"]),s(l,{message:"内外同时同时显示隐藏","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:e.openModal2},{default:r((()=>[g])),_:1},8,["onClick"]),s(l,{message:"自适应高度","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:e.openModal3},{default:r((()=>[M])),_:1},8,["onClick"]),s(l,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:e.send},{default:r((()=>[b])),_:1},8,["onClick"]),s(j,{onRegister:e.register1},null,8,["onRegister"]),s(f,{onRegister:e.register2},null,8,["onRegister"]),s(x,{onRegister:e.register3},null,8,["onRegister"]),s(y,{onRegister:e.register4},null,8,["onRegister"])])),_:1})};export default f;