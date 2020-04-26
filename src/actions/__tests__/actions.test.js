import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

// saveComment Action Creator
describe('saveComment', () => {
  // has a type of 'SAVE_COMMENT'
  it('has the correct type', () => {
    const action = saveComment();

    expect(action.type).toEqual(SAVE_COMMENT);
  });

  // produces an action that has a payload of the new comments text
  it('has the correct payload', () => {
    const action = saveComment('New Comment');

    expect(action.payload).toEqual('New Comment');
  });
});
