import { Product } from './../types/product';
import { reducer } from './reducer';
import { AppState, Observer } from '../types/store';
import Storage from '../utils/storage';


const emptyState: AppState = {
	products: [],
  };

export let appState = Storage.get('STORE', emptyState);

let observers: Observer[] = [];

const persistStore = (state: any) => {
	Storage.set('STORE', state);
};


export const dispatch = (action: any) => {
	const clone = JSON.parse(JSON.stringify(appState));
	const newState = reducer(action, clone);
	appState = newState;

	persistStore(newState);
	observers.forEach((o) => o.render());
};

export const addObserver = (ref: any) => {
	observers = [...observers, ref];
};
