let e=document.createElement("style");e.innerHTML=".high-form[data-v-bfd3b41a]{padding-bottom:48px}",document.head.appendChild(e);import{ao as o,y as t,a as i,r as s,cR as r,cS as n,i as a,o as l,j as p,k as d,aR as c,p as m}from"./index.741c7e80.js";import"./xlsx.a48e520c.js";import"./index.f91e8ba7.js";import"./index.0140268b.js";import"./Trigger.9624f24b.js";import"./omit.2ac92ce2.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.2d33f44f.js";import"./CheckOutlined.fa54ab74.js";import{s as f}from"./index.e028f2ec.js";import"./colors.11c2fe2a.js";import"./index.68e61bda.js";import"./RightOutlined.346767f2.js";import"./index.7af5c622.js";import"./types.3a4c305e.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.2638ac3e.js";import"./_baseFor.f4e5f03f.js";import"./index.b89b2489.js";import"./index.a172b251.js";import"./index.dd15aaf5.js";import"./index.71d835da.js";import"./UpOutlined.8fbbe575.js";import"./LeftOutlined.3bbf91ca.js";import"./index.fe81ccfa.js";import"./index.b3c5c07d.js";import"./index.46cea309.js";import"./index.ced671f3.js";import"./index.fce9afc1.js";import"./zh_CN.0242bd16.js";import"./TableAction.2c832e8f.js";import"./index.03e0e622.js";import"./CaretDownFilled.b510098b.js";import"./CheckOutlined.dd0fccea.js";import"./CloseOutlined.c0e66dca.js";import"./EditTableHeaderIcon.afcdb7ad.js";import"./DownOutlined.db3ed0f0.js";import"./FullscreenOutlined.db22ca11.js";import"./LeftOutlined.76bd1425.js";import"./functional.91884a91.js";import"./RedoOutlined.8bd117f8.js";import"./RightOutlined.ae2f2814.js";import"./SettingOutlined.085bf9bb.js";import"./useTimeout.0364e255.js";import"./useDebounce.87ee1be2.js";import"./useEventListener.3f9fc979.js";import"./useBreakpoint.7d12f99a.js";import"./index.504b6a3c.js";import"./tsxHelper.1229783e.js";import"./index.266c5a87.js";import"./index.58cbc055.js";import{u}from"./useForm.8e6b95f4.js";import"./index.854d6bdb.js";import"./useModalContext.26fce787.js";import"./domUtils.5e294dfc.js";import"./useFullScreen.37e98974.js";import"./uuid.40269c00.js";import"./useWindowSizeFn.2350f5a1.js";import"./useExpose.61e8cb01.js";import"./index.f2623b6d.js";import"./useTable.2d4d572e.js";import b from"./PersonTable.65519112.js";const j=o((()=>import("./PageFooter.4d6c8e59.js")));t(j);const x=[{label:"付晓晓",value:"1"},{label:"周毛毛",value:"2"}],P=[{label:"私密",value:"1"},{label:"公开",value:"2"}],g=[{field:"f1",component:"Input",label:"仓库名",required:!0},{field:"f2",component:"Input",label:"仓库域名",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"仓库管理员",componentProps:{options:x},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"审批人",componentProps:{options:x},required:!0},{field:"f5",component:"RangePicker",label:"生效日期",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"仓库类型",componentProps:{options:P},required:!0,colProps:{offset:2}}],h=[{field:"t1",component:"Input",label:"任务名",required:!0},{field:"t2",component:"Input",label:"任务描述",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"执行人",componentProps:{options:x},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"责任人",componentProps:{options:x},required:!0},{field:"t5",component:"TimePicker",label:"生效日期",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"任务类型",componentProps:{options:P},required:!0,colProps:{offset:2}}];var v=i({components:{BasicForm:f,PersonTable:b,PageFooter:j},setup(){const e=s(null),[o,{validate:t}]=u({baseColProps:{span:6},schemas:g,showActionButtonGroup:!1}),[i,{validate:r}]=u({baseColProps:{span:6},schemas:h,showActionButtonGroup:!1});return{register:o,registerTask:i,submitAll:async function(){try{e.value;const[o,i]=await Promise.all([t(),r()])}catch(e){}},tableRef:e}}});const O=c("data-v-bfd3b41a");r("data-v-bfd3b41a");const T={class:"high-form"},q=m(" 高级表单常见于一次性输入和提交大批量数据的场景。 "),F={class:"m-5"},R=m("提交");n();const _=O(((e,o,t,i,s,r)=>{const n=a("a-page-header"),c=a("BasicForm"),m=a("a-card"),f=a("PersonTable"),u=a("a-button"),b=a("PageFooter");return l(),p("div",T,[d(n,{title:"高级表单",ghost:!1},{default:O((()=>[q])),_:1}),d("div",F,[d(m,{title:"仓库管理",bordered:!1},{default:O((()=>[d(c,{onRegister:e.register,layout:"vertical"},null,8,["onRegister"])])),_:1}),d(m,{title:"任务管理",bordered:!1,class:"mt-5"},{default:O((()=>[d(c,{onRegister:e.registerTask,layout:"vertical"},null,8,["onRegister"])])),_:1}),d(m,{title:"成员管理",bordered:!1,class:"mt-5"},{default:O((()=>[d(f,{ref:"tableRef"},null,512)])),_:1})]),d(b,null,{right:O((()=>[d(u,{type:"primary",onClick:e.submitAll},{default:O((()=>[R])),_:1},8,["onClick"])])),_:1})])}));v.render=_,v.__scopeId="data-v-bfd3b41a";export default v;