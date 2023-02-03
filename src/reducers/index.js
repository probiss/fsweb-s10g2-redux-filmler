import { combineReducers } from 'redux';
import favouritesReducer from './favouritesReducer';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
    movieReducer,
    favouritesReducer,
});

export default rootReducer;