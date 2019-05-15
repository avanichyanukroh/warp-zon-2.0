import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { loadState, saveState } from './sessionStorage';
import { reducers } from './reducers';

const persistedState = loadState();
const store = createStore(
		reducers,
		persistedState,
		compose(
			applyMiddleware(thunk)
		)
	);

store.subscribe(() => {
	saveState(store.getState());
});

export default store;