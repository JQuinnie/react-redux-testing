import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

// function to be called with a comment that is trying to be saved
export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}

export function fetchComments() {
  const response = axios.get('https://jsonplaceholder.typicode.com/comments');

  return {
    type: FETCH_COMMENTS,
    payload: response
  }
}
