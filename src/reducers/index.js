import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

// This is how we 'wire' the reducer into our application
// combineReducers is a built-in function
// we pass in the booksreducer as to combine the reducers.
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});
//Remember any key to the object that we provide to combineReducers, 
//ends up as a key on our global state

export default rootReducer;
