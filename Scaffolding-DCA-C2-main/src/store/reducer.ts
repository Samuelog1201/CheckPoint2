import { Actions } from '../types/store';

export const reducer = (currentAction: any, currentState: any) => {
	const { action, payload } = currentAction;

	switch (action) {		
		case Actions.ADD_PRODUCT:
			return {
					...currentState,
					products: [...currentState.products, payload]
					}    

		default:
			return currentState;
	}
};
