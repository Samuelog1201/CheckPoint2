import { Product } from './../types/product';
import { Actions } from '../types/store';

export const addProduct = (payload: Product) => {
		return {
			action: Actions.ADD_PRODUCT,
			payload
		
	}
};
