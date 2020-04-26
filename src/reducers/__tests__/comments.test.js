import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

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
