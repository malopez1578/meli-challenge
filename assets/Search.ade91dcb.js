import{R as e,L as t,q as a,r as s,m as r,o as c,p as i}from"./vendor.142e00de.js";import{b as l,c as n,d as m,e as d}from"./index.e8d21ca4.js";import{f as o,g as u}from"./index.37f51570.js";import p from"./NotFound.c9b16adf.js";const h=({item:a})=>{var s,r;return e.createElement("div",{className:l["c-card"]},e.createElement("figure",{className:l["c-card_figure"]},e.createElement(t,{to:`/items/${a.id}`},e.createElement("img",{className:l["c-card_figure-img"],src:a.picture,alt:a.title}))),e.createElement("div",{className:l["c-card_desc"]},e.createElement("p",{className:l["c-card_price"]},o(null==(s=null==a?void 0:a.price)?void 0:s.currency,null==(r=null==a?void 0:a.price)?void 0:r.amount)),e.createElement(t,{className:l["c-card_title"],to:`/items/${a.id}`},a.title)),e.createElement("div",{className:l["c-card_state"]},e.createElement("p",null,a.state_name)))},f=r("search/products",(async(e,{dispatch:t})=>{t(n("loading"));try{const{data:a}=await u(`/sites/MLA/search?q=${e}`),s=a.available_filters.filter((e=>"category"===e.id))[0];let r=(({items:e,categories:t})=>({author:{name:"Miguel",lastname:"López"},categories:t,items:e.map((({shipping:e,id:t,thumbnail:a,title:s,currency_id:r,price:c,condition:i,address:l})=>({id:t,title:s,price:{currency:r,amount:c,decimals:0},picture:a,condition:i,state_name:l.state_name,free_shipping:e.free_shipping})))}))({items:a.results.slice(0,4),categories:null==s?void 0:s.values});t(n("idle")),t(m(r))}catch(a){t(n("idle")),t(d(!0))}})),g=()=>{var t;const{searchValue:r,setresearch:l,research:n}=(e=>{const t=new URLSearchParams(a().search),[r,c]=s.exports.useState(!1),[i,l]=s.exports.useState(e),[n,m]=s.exports.useState("");return s.exports.useEffect((()=>{m(t.get(i))}),[i,t,r]),{searchValue:n,setkey:l,research:r,setresearch:c}})("search"),{searchResult:m,loading:d}=c((e=>e.search)),o=i();return s.exports.useEffect((()=>{r&&o(f(r)),l(!n)}),[o,r]),e.createElement("div",{className:"o-section"},(null==(t=null==m?void 0:m.items)?void 0:t.length)>0?m.items.map((t=>e.createElement(h,{key:t.id,item:t}))):"loading"!==d&&e.createElement(p,null))};export{g as default};
