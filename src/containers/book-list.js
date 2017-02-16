import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    )
  }
}

//whatever object is returned will be available to our component as this.props
//glue between react and redux
function mapStateToProps(state) {
  //Whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  }
}
// whenever our state changes, 
// this container will instantly re-render with a
// new list of books.

// At top we import connect from react-redux
// This is where the merge between react and redux comes
// connect takes a function and a component as an argument
// this will produce a container
export default connect(mapStateToProps)(BookList);
