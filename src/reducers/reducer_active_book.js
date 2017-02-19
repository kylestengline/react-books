//all reducers get two arguments, the currentState and action
//state argument is not the application state,
//only the state this reducer is responsible for.
//with state = null: ES6 syntax saying if this argument comes in and is
//undefined, set it to null
export default function(state = null, action) {
  //if the actions type is Book_Selected, then return the payload. 
  //payload in this case is the selected book
  switch(action.type) {
    case "BOOK_SELECTED":
      return action.payload;
  }
  return state;
}
