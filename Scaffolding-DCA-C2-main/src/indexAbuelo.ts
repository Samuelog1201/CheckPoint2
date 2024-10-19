import "./components/export"
import "./components/ProductForm/index"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <product-form></product-form>
            <product-item></product-item>
            <product-list></product-list>
            `
        }
    }
}

customElements.define('app-container', AppContainer)