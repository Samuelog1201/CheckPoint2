
export type AppState = {
	products: []
};

export type Observer = { render: () => void } & HTMLElement;

export enum Actions {

	"ADD_PRODUCT" = "ADD_PRODUCT",
	"REMOVE_PRODUCT" = "REMOVE_PRODUCT",
	"TOGGLE_PRODUCT" = "TOGGLE_PRODUCT",
}
