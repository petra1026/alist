import{d as v,u as $,a as l,b9 as o,by as C,bQ as R,e as w,f as t,bR as I,ap as L,bf as r,n as p,a0 as T,B as u,W as _}from"./index.e1b8e9fa.js";import{o as x}from"./index.282d5bab.js";import{I as B}from"./SettingItem.58f9c6c7.js";import{R as D}from"./ResponsiveGrid.831ec3ae.js";import"./index.3564f19c.js";import"./index.6382581f.js";import"./item_type.be442da4.js";const j=d=>{const s=v(),{pathname:m}=$();x(`manage.sidemenu.${m().split("/").pop()}`);const[h,f]=l(()=>o.get(`/admin/setting/list?group=${d.group}`)),[i,c]=C([]),a=async()=>{const e=await f();r(e,c)};a();const[b,y]=l(()=>o.post("/admin/setting/save",R(i))),[S,g]=w(!1);return t(_,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(D,{get children(){return t(I,{each:i,children:(e,F)=>t(B,L(e,{onChange:n=>{c(k=>e().key===k.key,"value",n)},onDelete:async()=>{g(!0);const n=await o.post(`/admin/setting/delete?key=${e().key}`);g(!1),r(n,()=>{p.success(s("global.delete_success")),a()})}}))})}}),t(T,{spacing:"$2",get children(){return[t(u,{colorScheme:"accent",onClick:a,get loading(){return h()||S()},get children(){return s("global.refresh")}}),t(u,{get loading(){return b()},onClick:async()=>{const e=await y();r(e,()=>p.success(s("global.save_success")))},get children(){return s("global.save")}})]}})]}})};export{j as default};
