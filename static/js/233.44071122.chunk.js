"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[233],{233:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var s=a(43),c=a(579);function r(e){let t=(e.price-.1*e.price).toFixed(2);return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:`card-container card-${e.id}`,children:[(0,c.jsx)("img",{src:e.image,className:"card-img",alt:"product-image"}),(0,c.jsx)("p",{className:"card-title",children:e.title}),(0,c.jsxs)("h2",{className:"card-price",children:["Price : $",t]}),(0,c.jsx)("p",{className:"card-original-price",children:(0,c.jsxs)("strike",{children:["Price : $",e.price]})}),(0,c.jsx)("button",{className:"card-button",children:"Shop now"})]})})}function i(){var[e,t]=(0,s.useState)([]);let[a,i]=(0,s.useState)([]),[n,l]=(0,s.useState)("");return(0,s.useEffect)((()=>{(async()=>{let e=await(await fetch("https://fakestoreapi.com/products")).json();t(e),i(e)})()}),[]),(0,s.useEffect)((()=>{!async function(){let t=e.filter(((e,t)=>e.title.trim().toLowerCase().includes(n.trim().toLowerCase())));i(t)}()}),[n]),0===e.length?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("h1",{style:{textAlign:"center"},children:"Fetching Data....."})}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"products-search-bar",children:(0,c.jsx)("input",{type:"text",placeholder:"Search...",onChange:e=>{l(e.target.value)}})}),(0,c.jsx)("div",{className:"main-container",children:a.map(((e,t)=>(0,c.jsx)(r,{...e},e.id)))})]})}}}]);
//# sourceMappingURL=233.44071122.chunk.js.map