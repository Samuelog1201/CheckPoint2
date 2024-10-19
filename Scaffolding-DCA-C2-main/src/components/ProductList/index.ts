import { appState } from "../../store/store";
import { Product } from "../../types/product";
 
class ProductList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <style>
                .product-list {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }
            </style>
            <div class="product-list"></div>
            `;

            const productListContainer = this.shadowRoot.querySelector('.product-list');
        
            appState.products.forEach((product) => {
                const productItem = document.createElement('product-item') as any;
                productItem.data = product;
                productListContainer?.appendChild(productItem);
            });
        }
    }
}

customElements.define('product-list', ProductList);
export default ProductList;
