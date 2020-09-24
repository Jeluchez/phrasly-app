import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducers } from '../reducers/authReducers';
import { imagesReducers } from '../reducers/imagesReducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducers = combineReducers({
    auth: authReducers,
    images: imagesReducers
    // ui: uiReducer,
    // notes: notesReducer
})
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
   
);

