import { Product } from './../../types/product';
import { appState, dispatch } from "../../store/store";
import { addProduct } from "../../store/actions";

class ProductForm extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <h2> Add Product </h2>
            <form class="product-form">
                <input type="text" id="product-name" placeholder="Nombre del Producto" required>
                <input type="text" id="product-description" placeholder="Descripción" required>
                <input type="number" id="product-price" placeholder="Precio" required>
                <input type="text" id="product-category" placeholder="Categoría" required>
                <input type="number" id="product-rating" placeholder="Rating" required>
                <input type="text" id="product-image" placeholder="URL de la imagen" required> 
                <button type="submit" id="add-btn">Agregar</button>
            </form>
            `;
        }

        const productForm = this.shadowRoot?.querySelector('.product-form') as HTMLFormElement;
        productForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const productNameInput = this.shadowRoot?.querySelector('#product-name') as HTMLInputElement;
            const productDescriptionInput = this.shadowRoot?.querySelector('#product-description') as HTMLInputElement;
            const productPriceInput = this.shadowRoot?.querySelector('#product-price') as HTMLInputElement;
            const productCategoryInput = this.shadowRoot?.querySelector('#product-category') as HTMLInputElement;
            const productRatingInput = this.shadowRoot?.querySelector('#product-rating') as HTMLInputElement;
            const productImageInput = this.shadowRoot?.querySelector('#product-image') as HTMLInputElement;

            const newProduct: Product = {
                id: Date.now(),
                title: productNameInput.value,
                description: productDescriptionInput.value,
                price: parseFloat(productPriceInput.value),
                category: productCategoryInput.value,
                rating: parseFloat(productRatingInput.value),
                state: false,
                imageUrl: productImageInput.value
            };

            dispatch(addProduct(newProduct));
            console.log(appState);
        });
    }
}

customElements.define('product-form', ProductForm);
export default ProductForm;
