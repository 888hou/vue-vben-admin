import{I as e}from"./index.b4fe10fc.js";import{_ as t}from"./index.d931d48f.js";import{_ as i}from"./index.8677a64d.js";import{d as s,r as o,h as r,o as d,i as a,w as m,j as p,aL as n,aM as c,m as j}from"./index.2273c044.js";import"./vendor.0d1494f4.js";import"./index.37940bee.js";import"./SearchOutlined.c19a908c.js";import"./CheckOutlined.30901c1f.js";import"./DownOutlined.00438a9e.js";import"./index.3edcac8b.js";import"./index.4d695c42.js";import"./responsiveObserve.c545f1cc.js";import"./index.2dd228f4.js";import"./findIndex.ad9be61c.js";import"./isEqual.2182e848.js";import"./_baseProperty.74f89655.js";import"./toInteger.629e3cf7.js";import"./index.2313d85b.js";import"./index.626165bf.js";import"./index.7b7a0d96.js";import"./UpOutlined.c0898c09.js";import"./index.e5814f16.js";import"./EyeOutlined.9a48ae54.js";import"./index.a6bcf606.js";import"./colors.18535df8.js";import"./RightOutlined.a39414d6.js";import"./RedoOutlined.2b06bcd9.js";import"./index.d4b76a25.js";import"./EllipsisOutlined.78bfab42.js";import"./types.aae377de.js";import"./Tree.bb88e424.js";import"./util.7cc4eabb.js";import"./useAttrs.efeb3643.js";import"./index.95c10fda.js";import"./index.320d6be3.js";import"./uuid.1d1124bd.js";import"./index.412e34df.js";import"./DeleteOutlined.787327c7.js";import"./index.eb2442f5.js";import"./useTimeout.5a70dd81.js";import"./useWindowSizeFn.77da7fe2.js";import"./index.38dd0295.js";import"./index.e5f1178f.js";import"./domUtils.dd018fc7.js";import"./_stringToArray.399b4c6f.js";import"./useScrollTo.41d1346a.js";import"./animation.71d664b2.js";import"./FullscreenOutlined.5d329bd0.js";import"./index.255cd0cd.js";import"./index.7d84c260.js";import"./index.63815acd.js";import"./LeftOutlined.c66416bb.js";import"./download.e261715c.js";import"./index.32dc7156.js";import"./DoubleLeftOutlined.8cbe39a0.js";import"./DoubleRightOutlined.0144b09d.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.a80db483.js";import"./CaretDownFilled.0a669d8c.js";import"./clickOutside.4175cf28.js";import"./useSortable.d96f8a4d.js";import"./SettingOutlined.5ca80b37.js";import"./useExpose.2a060706.js";import"./useForm.6ae3c449.js";import"./index.4b8f2690.js";import"./index.9b781c36.js";import"./usePageContext.0daaedcb.js";import"./ArrowLeftOutlined.96686bf6.js";var l=s({components:{BasicTable:t,ImpExcel:e,PageWrapper:i},setup(){const e=o([]);return{loadDataSuccess:function(t){e.value=[];for(const i of t){const{header:t,results:s,meta:{sheetName:o}}=i,r=[];for(const e of t)r.push({title:e,dataIndex:e});e.value.push({title:o,dataSource:s,columns:r})}},tableListRef:e}}});const u=j("导入Excel");l.render=function(e,t,i,s,o,j){const l=r("a-button"),f=r("ImpExcel"),b=r("BasicTable"),x=r("PageWrapper");return d(),a(x,{title:"excel数据导入示例"},{default:m((()=>[p(f,{onSuccess:e.loadDataSuccess},{default:m((()=>[p(l,{class:"m-3"},{default:m((()=>[u])),_:1})])),_:1},8,["onSuccess"]),(d(!0),a(n,null,c(e.tableListRef,((e,t)=>(d(),a(b,{key:t,title:e.title,columns:e.columns,dataSource:e.dataSource},null,8,["title","columns","dataSource"])))),128))])),_:1})};export default l;
