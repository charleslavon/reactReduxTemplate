import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import rootReducer from '../reducers';

const configureStore = initialState =>  {

    const middlewares = [promiseMiddleware];

    return createStore(rootReducer,
        initialState,
        applyMiddleware(...middlewares)
    );
}

export default configureStore;
