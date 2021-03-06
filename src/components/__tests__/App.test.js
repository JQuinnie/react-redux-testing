import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

// run this before each test
beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows a comment box', () => {
  // find returns back an array of that contains every instance of component found
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
