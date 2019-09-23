import { combineReducers } from 'redux';

import { ArticlesReducer } from './articles'

export default combineReducers({    
    articles: ArticlesReducer
});
