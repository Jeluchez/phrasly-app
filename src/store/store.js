import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducers } from '../reducers/authReducers';
import { imagesReducers } from '../reducers/imagesReducers';
import { phrasesReducers } from '../reducers/phraseReducers';
import { uiReducer } from '../reducers/uiReducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose;
const reducers = combineReducers({
    auth: authReducers,
    images: imagesReducers,
    phrases: phrasesReducers,
    ui: uiReducer
    // notes: notesReducer
})
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
   
);

