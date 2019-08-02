import { combineReducers } from 'redux';
import studentsReducer from '../componetns/students/studentReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    form: formReducer,
    studentsReducer,

});
export default rootReducer;