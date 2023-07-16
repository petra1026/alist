import{u as y,o as d,S as v,ba as h,p as b,a3 as C,bb as k,w as x,bc as f,s as g,d as D,n as L,bd as R,X as S}from"./index.e1b8e9fa.js";import{b as T}from"./api.4fed45c2.js";const E=(t,e,r="direct",a)=>{r!=="preview"&&(t=b(C().base_path,t)),t=k(t,!0);let n=`${t}/${e.name}`;n=x(n,a);let c=f,s=r==="direct"?"/d":"/p";r==="preview"&&(s="",f.startsWith(location.origin)||(c=location.origin));let o=`${c}${s}${n}`;return r!=="preview"&&e.sign&&(o+=`?sign=${e.sign}`),o},p=()=>{const{pathname:t}=y(),e=(a,n,c)=>{const s=d.state!==v.File?t():h(t());return E(s,a,n,c)},r=(a,n)=>e(a,"direct",n);return{getLinkByObj:e,rawLink:r,proxyLink:(a,n)=>e(a,"proxy",n),previewPage:(a,n)=>e(a,"preview",n),currentObjLink:a=>r(d.obj,a)}},P=()=>{const{previewPage:t,rawLink:e}=p(),r=a=>g().filter(n=>!n.is_dir).map(n=>e(n,a));return{rawLinks:r,previewPagesText:()=>g().map(a=>t(a,!0)).join(`
`),rawLinksText:a=>r(a).join(`
`)}},z=()=>{const{copy:t}=I(),{previewPagesText:e,rawLinksText:r}=P(),{currentObjLink:a}=p();return{copySelectedPreviewPage:()=>{t(e())},copySelectedRawLink:n=>{t(r(n))},copyCurrentRawLink:n=>{t(a(n))}}};var j=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,r=[],a=0;a<t.rangeCount;a++)r.push(t.getRangeAt(a));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||r.forEach(function(n){t.addRange(n)}),e&&e.focus()}},A=j,m={"text/plain":"Text","text/html":"Url",default:"Text"},U="Copy to clipboard: #{key}, Enter";function $(t){var e=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function F(t,e){var r,a,n,c,s,o,l=!1;e||(e={}),r=e.debug||!1;try{n=A(),c=document.createRange(),s=document.getSelection(),o=document.createElement("span"),o.textContent=t,o.ariaHidden="true",o.style.all="unset",o.style.position="fixed",o.style.top=0,o.style.clip="rect(0, 0, 0, 0)",o.style.whiteSpace="pre",o.style.webkitUserSelect="text",o.style.MozUserSelect="text",o.style.msUserSelect="text",o.style.userSelect="text",o.addEventListener("copy",function(i){if(i.stopPropagation(),e.format)if(i.preventDefault(),typeof i.clipboardData>"u"){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var u=m[e.format]||m.default;window.clipboardData.setData(u,t)}else i.clipboardData.clearData(),i.clipboardData.setData(e.format,t);e.onCopy&&(i.preventDefault(),e.onCopy(i.clipboardData))}),document.body.appendChild(o),c.selectNodeContents(o),s.addRange(c);var w=document.execCommand("copy");if(!w)throw new Error("copy command was unsuccessful");l=!0}catch(i){r&&console.error("unable to copy using execCommand: ",i),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),l=!0}catch(u){r&&console.error("unable to copy using clipboardData: ",u),r&&console.error("falling back to prompt"),a=$("message"in e?e.message:U),window.prompt(a,t)}}finally{s&&(typeof s.removeRange=="function"?s.removeRange(c):s.removeAllRanges()),o&&document.body.removeChild(o),n()}return l}var O=F;const I=()=>{const t=D(),{pathname:e}=y();return{copy:r=>{O(r),L.success(t("global.copied"))},isHide:r=>{const a=R();for(const n of a)if(n.test(b(e(),r.name)))return!0;return!1}}},B=()=>{const{proxyLink:t}=p();return S("",async()=>T(t(d.obj,!0)))};export{p as a,z as b,I as c,B as d,E as g,P as u};
