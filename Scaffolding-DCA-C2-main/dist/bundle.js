(()=>{"use strict";var t;!function(t){t.ADD_PRODUCT="ADD_PRODUCT",t.REMOVE_PRODUCT="REMOVE_PRODUCT",t.TOGGLE_PRODUCT="TOGGLE_PRODUCT"}(t||(t={}));let e=(t=>{const e=localStorage.getItem(t)||sessionStorage.getItem(t);return e?JSON.parse(e):{products:[]}})("STORE"),o=[];const r=r=>{const d=((e,o)=>{const{action:r,payload:d}=e;return r===t.ADD_PRODUCT?Object.assign(Object.assign({},o),{products:[...o.products,d]}):o})(r,JSON.parse(JSON.stringify(e)));e=d,((t,e,o=!1)=>{const r=o?sessionStorage:localStorage,d=JSON.stringify(e);r.setItem(t,d)})("STORE",d),o.forEach((t=>t.render()))};class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var o;this.shadowRoot&&(this.shadowRoot.innerHTML='\n            <h2> Add Product </h2>\n            <form class="product-form">\n                <input type="text" id="product-name" placeholder="Nombre del Producto" required>\n                <input type="text" id="product-description" placeholder="Descripción" required>\n                <input type="number" id="product-price" placeholder="Precio" required>\n                <input type="text" id="product-category" placeholder="Categoría" required>\n                <input type="number" id="product-rating" placeholder="Rating" required>\n                <input type="text" id="product-image" placeholder="URL de la imagen" required> \n                <button type="submit" id="add-btn">Agregar</button>\n            </form>\n            '),(null===(o=this.shadowRoot)||void 0===o?void 0:o.querySelector(".product-form")).addEventListener("submit",(o=>{var d,i,n,a,c,s;o.preventDefault();const u=null===(d=this.shadowRoot)||void 0===d?void 0:d.querySelector("#product-name"),l=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector("#product-description"),p=null===(n=this.shadowRoot)||void 0===n?void 0:n.querySelector("#product-price"),h=null===(a=this.shadowRoot)||void 0===a?void 0:a.querySelector("#product-category"),m=null===(c=this.shadowRoot)||void 0===c?void 0:c.querySelector("#product-rating"),v=null===(s=this.shadowRoot)||void 0===s?void 0:s.querySelector("#product-image"),g={id:Date.now(),title:u.value,description:l.value,price:parseFloat(p.value),category:h.value,rating:parseFloat(m.value),state:!1,imageUrl:v.value};var R;r((R=g,{action:t.ADD_PRODUCT,payload:R})),console.log(e)}))}}customElements.define("product-form",d);class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML="\n            <product-form></product-form>\n            <product-item></product-item>\n            <product-list></product-list>\n            ")}}customElements.define("app-container",i)})();