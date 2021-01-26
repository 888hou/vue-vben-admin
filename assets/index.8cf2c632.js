import e from"./DetailModal.4d4cc590.js";import{_ as r}from"./index.d931d48f.js";import{b as i}from"./index.eb2442f5.js";import{cT as o,d as t,r as s,u as a,aT as n,E as d,a1 as m,du as l,h as c,o as p,i as j,aL as u,aM as f,H as b,b8 as x,j as g,w as E,m as y,l as O}from"./index.2273c044.js";import{getColumns as T}from"./data.396eac34.js";import{g as R}from"./index.3edcac8b.js";import{u as D}from"./useTable.3193606a.js";import"./index.4ec63317.js";import"./index.b00c1e4a.js";import"./responsiveObserve.c545f1cc.js";import"./index.38dd0295.js";import"./index.e5f1178f.js";import"./domUtils.dd018fc7.js";import"./_stringToArray.399b4c6f.js";import"./RightOutlined.a39414d6.js";import"./index.95c10fda.js";import"./useTimeout.5a70dd81.js";import"./useScrollTo.41d1346a.js";import"./animation.71d664b2.js";import"./useDescription.5a9c9bd2.js";import"./index.37940bee.js";import"./SearchOutlined.c19a908c.js";import"./CheckOutlined.30901c1f.js";import"./DownOutlined.00438a9e.js";import"./index.2dd228f4.js";import"./index.4d695c42.js";import"./vendor.0d1494f4.js";import"./findIndex.ad9be61c.js";import"./isEqual.2182e848.js";import"./_baseProperty.74f89655.js";import"./toInteger.629e3cf7.js";import"./index.d4b76a25.js";import"./EllipsisOutlined.78bfab42.js";import"./types.aae377de.js";import"./index.32dc7156.js";import"./LeftOutlined.c66416bb.js";import"./DoubleLeftOutlined.8cbe39a0.js";import"./DoubleRightOutlined.0144b09d.js";import"./zh_CN.8094f4d6.js";import"./uuid.1d1124bd.js";import"./index.412e34df.js";import"./util.7cc4eabb.js";import"./DeleteOutlined.787327c7.js";import"./EyeOutlined.9a48ae54.js";import"./index.7d84c260.js";import"./scrollTo.c1e0f75f.js";import"./transButton.a80db483.js";import"./CaretDownFilled.0a669d8c.js";import"./clickOutside.4175cf28.js";import"./index.626165bf.js";import"./index.7b7a0d96.js";import"./UpOutlined.c0898c09.js";import"./index.e5814f16.js";import"./useSortable.d96f8a4d.js";import"./useWindowSizeFn.77da7fe2.js";import"./index.255cd0cd.js";import"./SettingOutlined.5ca80b37.js";import"./useExpose.2a060706.js";import"./useForm.6ae3c449.js";import"./useAttrs.efeb3643.js";import"./FullscreenOutlined.5d329bd0.js";import"./index.a6bcf606.js";import"./colors.18535df8.js";import"./index.2313d85b.js";import"./RedoOutlined.2b06bcd9.js";import"./Tree.bb88e424.js";import"./index.320d6be3.js";import"./index.63815acd.js";import"./download.e261715c.js";var h;(h||(h={})).Error="/error";var w=t({name:"ErrorHandler",components:{DetailModal:e,BasicTable:r,TableAction:R},setup(){const e=s(),r=s([]),{t:t}=a(),[c,{setTableData:p}]=D({title:t("sys.errorLog.tableTitle"),columns:T(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[j,{openModal:u}]=i();return n((()=>l.getErrorInfoState),(e=>{d((()=>{p(m(e))}))}),{immediate:!0}),{register:c,registerModal:j,handleDetail:function(r){e.value=r,u(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){r.value.push(`${(new Date).getTime()}.png`)},fireAjaxError:async function(){await o.request({url:h.Error,method:"GET"})},imgListRef:r,rowInfoRef:e,t:t}}});const C={class:"p-4"};w.render=function(e,r,i,o,t,s){const a=c("DetailModal"),n=c("a-button"),d=c("TableAction"),m=c("BasicTable");return p(),j("div",C,[(p(!0),j(u,null,f(e.imgListRef,(e=>b((p(),j("img",{key:e,src:e},null,8,["src"])),[[x,!1]]))),128)),g(a,{info:e.rowInfoRef,onRegister:e.registerModal},null,8,["info","onRegister"]),g(m,{onRegister:e.register,class:"error-handle-table"},{toolbar:E((()=>[g(n,{onClick:e.fireVueError,type:"primary"},{default:E((()=>[y(O(e.t("sys.errorLog.fireVueError")),1)])),_:1},8,["onClick"]),g(n,{onClick:e.fireResourceError,type:"primary"},{default:E((()=>[y(O(e.t("sys.errorLog.fireResourceError")),1)])),_:1},8,["onClick"]),g(n,{onClick:e.fireAjaxError,type:"primary"},{default:E((()=>[y(O(e.t("sys.errorLog.fireAjaxError")),1)])),_:1},8,["onClick"])])),action:E((({record:r})=>[g(d,{actions:[{label:e.t("sys.errorLog.tableActionDesc"),onClick:e.handleDetail.bind(null,r)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default w;
