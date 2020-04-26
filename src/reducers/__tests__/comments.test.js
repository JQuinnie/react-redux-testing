import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

// Properly handles actions with a type of 'SAVE_COMMENT"
it('handles actions of type SAVE_COMMENT', () => {
  // fake action, dont need an action creator
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment',
  };

  // like the reducer function, returns an array with a single comment
  const newState = commentsReducer([], action);

  expect(newState).toEqual(['New Comment']);
});

// Doesn't throw an error if it gets an action with any other type
it('handles action with unknown type', () => {
  const newState = commentsReducer([], {});

  expect(newState).toEqual([]);
});
