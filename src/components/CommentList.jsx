import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  // helper method that takes comment provided as a prop and generates an li element
  renderComments() {
    return this.props.comments.map((comment, idx) => {
      return <li key={idx}>{comment}</li>;
    });
  }

  render() {
    return (
      <div>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
