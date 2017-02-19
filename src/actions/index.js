//Action creator: just a function
export function selectBook(book) {
  // SelectBook is an action creator and needs to return and action.
  // An object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
  //Actions always contains a type and sometimes contains a payload.
  //Type is always uppercase, usually a string, always separated by keywords
}
