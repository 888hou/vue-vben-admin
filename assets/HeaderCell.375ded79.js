import{d as e,aV as l,aW as t,aB as a,K as s,h as r,o as n,i,w as o,l as c,k as d,aL as p,m as u}from"./index.7f9d11df.js";import"./vendor.3b1829c7.js";var m=e({name:"TableHeaderCell",components:{EditTableHeaderCell:l((()=>t((()=>import("./index.485cc0b1.js").then((function(e){return e.E}))),["/assets/index.485cc0b1.js","/assets/index.2bc02d99.css","/assets/index.f8cd4764.css","/assets/index.7f9d11df.js","/assets/index.9ee69cf2.css","/assets/vendor.3b1829c7.js","/assets/vendor.4a5fa02d.css","/assets/index.25d875eb.js","/assets/index.af98ed23.css","/assets/SearchOutlined.eb5ee535.js","/assets/CheckOutlined.1f0166be.js","/assets/DownOutlined.8186e43a.js","/assets/BasicForm.1796ed98.js","/assets/BasicForm.943a02b0.css","/assets/index.ff61af1b.js","/assets/index.4f6b9997.css","/assets/index.43504c48.js","/assets/index.0edc9df2.css","/assets/responsiveObserve.c545f1cc.js","/assets/findIndex.eed3e6c4.js","/assets/isEqual.cf616f95.js","/assets/get.c0473d28.js","/assets/_baseProperty.74f89655.js","/assets/toInteger.61c42cd2.js","/assets/index.be1c27c7.js","/assets/index.5d173e58.js","/assets/index.8260b05e.css","/assets/EyeOutlined.00406e72.js","/assets/index.1b83d9eb.js","/assets/index.06c7b3c0.css","/assets/index.d6ccd8a9.js","/assets/index.0b3eba88.css","/assets/UpOutlined.703fea9d.js","/assets/index.06e0d19d.js","/assets/index.4a4a1593.css","/assets/RightOutlined.738ce43d.js","/assets/RedoOutlined.202801c7.js","/assets/index.e74efc31.js","/assets/index.66628971.css","/assets/EllipsisOutlined.a98bfac0.js","/assets/types.6c8ee0af.js","/assets/Tree.f65cc9de.js","/assets/util.62a283cc.js","/assets/uuid.4c08c426.js","/assets/uuid.0e60e827.css","/assets/index.0ec94771.js","/assets/index.91ad067c.css","/assets/DeleteOutlined.512a40ae.js","/assets/index.87a8ba38.js","/assets/index.f8b789db.css","/assets/useModal.221a6e76.js","/assets/useModal.b1a1b797.css","/assets/useTimeout.946338f4.js","/assets/useWindowSizeFn.dde781a9.js","/assets/ScrollContainer.2c2d7291.js","/assets/ScrollContainer.3d4678de.css","/assets/index.576d13da.js","/assets/index.121e7eba.css","/assets/domUtils.10b268bc.js","/assets/_stringToArray.7199892a.js","/assets/useScrollTo.59748d94.js","/assets/FullscreenOutlined.7e53edc0.js","/assets/index.18cb88c8.js","/assets/index.2b38113f.css","/assets/Dropdown.ed1fed22.js","/assets/index.84854765.js","/assets/index.5e8b94d8.css","/assets/LeftOutlined.d674a5c8.js","/assets/download.cd37389c.js","/assets/index.c36a065d.js","/assets/index.558c7352.css","/assets/DoubleLeftOutlined.1f9fac32.js","/assets/DoubleRightOutlined.0e9a17f4.js","/assets/zh_CN.8094f4d6.js","/assets/scrollTo.c1e0f75f.js","/assets/transButton.b06e8cfe.js","/assets/CaretDownFilled.142b7f4e.js","/assets/useForm.069cadb3.js","/assets/clickOutside.e14cef1b.js","/assets/useSortable.345935aa.js","/assets/useExpose.f1d5eaba.js"]))),BasicHelp:l((()=>t((()=>import("./BasicHelp.16eaa56c.js")),["/assets/BasicHelp.16eaa56c.js","/assets/index.f8cd4764.css","/assets/ScrollContainer.2c2d7291.js","/assets/ScrollContainer.3d4678de.css","/assets/index.7f9d11df.js","/assets/index.9ee69cf2.css","/assets/vendor.3b1829c7.js","/assets/vendor.4a5fa02d.css","/assets/index.576d13da.js","/assets/index.121e7eba.css","/assets/domUtils.10b268bc.js","/assets/_stringToArray.7199892a.js","/assets/RightOutlined.738ce43d.js","/assets/useTimeout.946338f4.js","/assets/useScrollTo.59748d94.js"])))},props:{column:{type:Object,default:{}}},setup(e){const{prefixCls:l}=a("basic-table-header-cell");return{prefixCls:l,getIsEdit:s((()=>{var l;return!!(null==(l=e.column)?void 0:l.edit)})),getTitle:s((()=>{var l;return null==(l=e.column)?void 0:l.customTitle})),getHelpMessage:s((()=>{var l;return null==(l=e.column)?void 0:l.helpMessage}))}}});const _={key:1};m.render=function(e,l,t,a,s,m){const g=r("EditTableHeaderCell"),f=r("BasicHelp");return n(),i(p,null,[e.getIsEdit?(n(),i(g,{key:0},{default:o((()=>[u(c(e.getTitle),1)])),_:1})):(n(),i("span",_,c(e.getTitle),1)),e.getHelpMessage?(n(),i(f,{key:2,text:e.getHelpMessage,class:`${e.prefixCls}__help`},null,8,["text","class"])):d("",!0)],64)};export default m;