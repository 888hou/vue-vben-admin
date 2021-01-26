import{_ as e,a as t}from"./index.d931d48f.js";import{o as i}from"./select.06cf869d.js";import{d as o}from"./table.86c21651.js";import{d,r as n,h as s,o as a,i as r,j as l,w as m}from"./index.2273c044.js";import{g as p}from"./index.3edcac8b.js";import{u as c}from"./useTable.3193606a.js";import"./index.37940bee.js";import"./SearchOutlined.c19a908c.js";import"./CheckOutlined.30901c1f.js";import"./DownOutlined.00438a9e.js";import"./index.2dd228f4.js";import"./index.4d695c42.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.0d1494f4.js";import"./findIndex.ad9be61c.js";import"./isEqual.2182e848.js";import"./_baseProperty.74f89655.js";import"./toInteger.629e3cf7.js";import"./index.d4b76a25.js";import"./RightOutlined.a39414d6.js";import"./EllipsisOutlined.78bfab42.js";import"./types.aae377de.js";import"./index.32dc7156.js";import"./LeftOutlined.c66416bb.js";import"./DoubleLeftOutlined.8cbe39a0.js";import"./DoubleRightOutlined.0144b09d.js";import"./zh_CN.8094f4d6.js";import"./uuid.1d1124bd.js";import"./index.412e34df.js";import"./util.7cc4eabb.js";import"./DeleteOutlined.787327c7.js";import"./EyeOutlined.9a48ae54.js";import"./index.7d84c260.js";import"./index.95c10fda.js";import"./scrollTo.c1e0f75f.js";import"./transButton.a80db483.js";import"./CaretDownFilled.0a669d8c.js";import"./clickOutside.4175cf28.js";import"./domUtils.dd018fc7.js";import"./_stringToArray.399b4c6f.js";import"./index.626165bf.js";import"./index.7b7a0d96.js";import"./UpOutlined.c0898c09.js";import"./index.e5814f16.js";import"./useSortable.d96f8a4d.js";import"./useTimeout.5a70dd81.js";import"./useWindowSizeFn.77da7fe2.js";import"./index.eb2442f5.js";import"./useAttrs.efeb3643.js";import"./index.38dd0295.js";import"./index.e5f1178f.js";import"./useScrollTo.41d1346a.js";import"./animation.71d664b2.js";import"./FullscreenOutlined.5d329bd0.js";import"./index.255cd0cd.js";import"./SettingOutlined.5ca80b37.js";import"./useExpose.2a060706.js";import"./useForm.6ae3c449.js";import"./index.2313d85b.js";import"./index.a6bcf606.js";import"./colors.18535df8.js";import"./RedoOutlined.2b06bcd9.js";import"./Tree.bb88e424.js";import"./index.320d6be3.js";import"./index.63815acd.js";import"./download.e261715c.js";const u=[{title:"输入框",dataIndex:"name",editRow:!0,editComponentProps:{prefix:"$"},width:200},{title:"默认输入状态",dataIndex:"name7",editRow:!0,width:200},{title:"输入框校验",dataIndex:"name1",editRow:!0,editRule:!0,width:200},{title:"输入框函数校验",dataIndex:"name2",editRow:!0,editRule:async e=>"2"===e?"不能输入该值":"",width:200},{title:"数字输入框",dataIndex:"id",editRow:!0,editRule:!0,editComponent:"InputNumber",width:200},{title:"下拉框",dataIndex:"name3",editRow:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"远程下拉",dataIndex:"name4",editRow:!0,editComponent:"ApiSelect",editComponentProps:{api:i},width:200},{title:"勾选框",dataIndex:"name5",editRow:!0,editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:200},{title:"开关",dataIndex:"name6",editRow:!0,editComponent:"Switch",editValueMap:e=>e?"开":"关",width:200}];var j=d({components:{BasicTable:e,EditTableHeaderIcon:t,TableAction:p},setup(){const e=n(""),[t]=c({title:"可编辑行示例",api:o,columns:u,showIndexColumn:!1,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function i(t){var i;e.value=t.key,null==(i=t.onEdit)||i.call(t,!0)}function d(t){var i;e.value="",null==(i=t.onEdit)||i.call(t,!1,!0)}async function s(t){var i;await(null==(i=t.onEdit)?void 0:i.call(t,!1,!0))&&(e.value="")}return{registerTable:t,handleEdit:i,createActions:function(t,o){return t.editable?[{label:"保存",onClick:s.bind(null,t,o)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:d.bind(null,t,o)}}]:[{label:"编辑",disabled:!!e.value&&e.value!==t.key,onClick:i.bind(null,t)}]}}}});const b={class:"p-4"};j.render=function(e,t,i,o,d,n){const p=s("TableAction"),c=s("BasicTable");return a(),r("div",b,[l(c,{onRegister:e.registerTable},{action:m((({record:t,column:i})=>[l(p,{actions:e.createActions(t,i)},null,8,["actions"])])),_:1},8,["onRegister"])])};export default j;
