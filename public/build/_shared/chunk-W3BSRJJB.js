import{d as s,k as u}from"/build/_shared/chunk-GAUYYNAY.js";import{d as t,g as o}from"/build/_shared/chunk-B7AP56NU.js";u();var a=t(o());function c({guitarra:e}){let{nombre:r,descripcion:n,imagen:d,precio:m,url:l}=e,p=d.data.attributes.formats.medium.url;return(0,a.jsxs)("div",{className:"guitarra",children:[(0,a.jsx)("img",{src:p,alt:`Imagen guitarra ${r}`}),(0,a.jsxs)("div",{className:"contenido",children:[(0,a.jsx)("h3",{children:r}),(0,a.jsx)("p",{className:"descripcion",children:n}),(0,a.jsxs)("p",{className:"precio",children:["$",m]}),(0,a.jsx)(s,{className:"enlace",to:`/guitarras/${l}`,children:"Ver producto"})]})]})}var i=t(o());function N({guitarras:e}){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{className:"heading",children:"Nuestra colecci\xF3n"}),(e==null?void 0:e.length)&&(0,i.jsx)("div",{className:"guitarras-grid",children:e.map(r=>(0,i.jsx)(c,{guitarra:r.attributes},r.id))})]})}export{N as a};