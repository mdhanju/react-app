import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import app from './appReducers';

export default combineReducers({
	app,
	form: formReducer,
})
