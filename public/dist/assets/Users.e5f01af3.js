import{d as _,u as C,a as v,b9 as u,e as B,c9 as f,f as e,a0 as h,B as o,Y as T,ca as x,cb as F,cc as p,v as m,cd as b,ce as P,cf as s,bf as g,n as $,W as R,bz as W,ao as z,aq as D,a2 as H}from"./index.e1b8e9fa.js";import{o as I}from"./index.282d5bab.js";import{D as L}from"./DeletePopover.6b504fc8.js";import{W as M}from"./Wether.6fbb63bb.js";const q=n=>{const t=[{name:"general",color:"info"},{name:"guest",color:"neutral"},{name:"admin",color:"accent"}];return e(W,{get colorScheme(){return t[n.role].color},get children(){return t[n.role].name}})},O=n=>{const t=_(),i=a=>`$${a?"success":"danger"}9`;return e(h,{spacing:"$0_5",get children(){return e(m,{each:z,children:(a,d)=>e(D,{get label(){return t(`users.permissions.${a}`)},get children(){return e(T,{boxSize:"$2",rounded:"$full",get bg(){return i(H.can(n.user,d()))}})}})})}})},A=()=>{const n=_();I("manage.sidemenu.users");const{to:t}=C(),[i,a]=v(()=>u.get("/admin/user/list")),[d,k]=B([]),l=async()=>{const r=await a();g(r,c=>k(c.content))};l();const[S,U]=f(r=>u.post(`/admin/user/delete?id=${r}`)),[w,y]=f(r=>u.post(`/admin/user/cancel_2fa?id=${r}`));return e(R,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[e(h,{spacing:"$2",get children(){return[e(o,{colorScheme:"accent",get loading(){return i()},onClick:l,get children(){return n("global.refresh")}}),e(o,{onClick:()=>{t("/@manage/users/add")},get children(){return n("global.add")}})]}}),e(T,{w:"$full",overflowX:"auto",get children(){return e(x,{highlightOnHover:!0,dense:!0,get children(){return[e(F,{get children(){return e(p,{get children(){return[e(m,{each:["username","base_path","role","permission","available"],children:r=>e(b,{get children(){return n(`users.${r}`)}})}),e(b,{get children(){return n("global.operations")}})]}})}}),e(P,{get children(){return e(m,{get each(){return d()},children:r=>e(p,{get children(){return[e(s,{get children(){return r.username}}),e(s,{get children(){return r.base_path}}),e(s,{get children(){return e(q,{get role(){return r.role}})}}),e(s,{get children(){return e(O,{user:r})}}),e(s,{get children(){return e(M,{get yes(){return!r.disabled}})}}),e(s,{get children(){return e(h,{spacing:"$2",get children(){return[e(o,{onClick:()=>{t(`/@manage/users/edit/${r.id}`)},get children(){return n("global.edit")}}),e(L,{get name(){return r.username},get loading(){return S()===r.id},onClick:async()=>{const c=await U(r.id);g(c,()=>{$.success(n("global.delete_success")),l()})}}),e(o,{colorScheme:"accent",get loading(){return w()===r.id},onClick:async()=>{const c=await y(r.id);g(c,()=>{$.success(n("users.cancel_2fa_success")),l()})},get children(){return n("users.cancel_2fa")}})]}})}})]}})})}})]}})}})]}})};export{A as default};
