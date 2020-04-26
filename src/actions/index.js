import { SAVE_COMMENT } from 'actions/types';

// function to be called with a comment that is trying to be saved
export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}
