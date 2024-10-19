import { Product } from './../../types/product';

export enum Attribute {
    "producttitle" = "producttitle",
    "description" = "description",
    "price" = "price",
    "category" = "category",
    "type" = "type",
    "rating" = "rating",
}
class ProductItem extends HTMLElement {

        producttitle?: string;
        description?: string;
        price?: string;
        category?: string;
        type?: string;  
        rating?: string;
    
        static get observedAttributes() {
            return Object.keys(Attribute);
        }
    
        constructor() {
            super();
            this.attachShadow({ mode: "open" });
        }
    
        attributeChangedCallback(propName: string, _: string, newValue: string) {
            // Asignar el nuevo valor a la propiedad correspondiente
            switch (propName) {
                case Attribute.v:
                    this.title = newValue;
                    break;
                case Attribute.description:
                    this.description = newValue;
                    break;
                case Attribute.price:
                    this.price = newValue;
                    break;
                case Attribute.category:
                    this.category = newValue;
                    break;
                case Attribute.type:
                    this.type = newValue;
                    break;
                case Attribute.rating:
                    this.rating = newValue;
                    break;
                default:
                    break;
            }
            this.render();  // Re-renderizar cada vez que se cambie un atributo
        }
    
        connectedCallback() {
            this.render();
        }


    set data(product: Product) {
        this.product = product;
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <style>
                .product-item {
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    padding: 16px;
                    margin: 10px;
                    text-align: center;
                    background-color: #f9f9f9;
                }
                .product-image {
                    max-width: 100%;
                    height: auto;
                    border-radius: 8px;
                }
                .product-title {
                    font-size: 1.2em;
                    margin: 10px 0;
                }
                .product-description {
                    font-size: 0.9em;
                    color: #555;
                }
                .product-price {
                    font-size: 1.1em;
                    color: #000;
                }
                .product-category {
                    font-size: 0.8em;
                    color: #777;
                }
                .product-rating {
                    color: #f39c12;
                }
            </style>
            <div class="product-item">
                <img src="${this.product.imageUrl}" alt="${this.product.title}" class="product-image">
                <h3 class="product-title">${this.product.title}</h3>
                <p class="product-description">${this.product.description}</p>
                <p class="product-price">$${this.product.price.toFixed(2)}</p>
                <p class="product-category">Categoría: ${this.product.category}</p>
                <p class="product-rating">Rating: ${this.product.rating}/5</p>
            </div>
            `;
        }
    }
}

customElements.define('product-item', ProductItem);
export default ProductItem;
