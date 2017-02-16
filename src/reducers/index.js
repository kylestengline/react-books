import { combineReducers } from 'redux';
import BooksReducer from './reducer_boos';

// This is how we 'wire' the reducer into our application
// combineReducers is a built-in function
// we pass in the booksreducer as to combine the reducers.
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
