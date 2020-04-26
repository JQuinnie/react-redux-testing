import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  // using full DOM from enzyme by mounting to virtual JSDOM
  // enzyme shallow would have worked to test this component
  // any component that is wrapped by the Root tag is going to automatically think that it is part of Redux app
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  // clean up by removing component from JSDOM so it will not interfere with other components in other tests
  // good practice for Full DOM enzyme renders
  wrapped.unmount();
});

it('has a textarea and a button', () => {
  // console.log(wrapped.find("textarea").length); // see if text area exists in JSDOM

  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

describe('the text area', () => {
  beforeEach(() => {
    // 1. find textarea element
    // 2. simulate a 'change' event (onChange is the name of a callback that we are passing to the textarea)
    // 2nd arg is a mock object that tricks the event handler, handleChange
    // 3. provide a fake event object, callback handler receives a piece of new state
    wrapped.find('textarea').simulate('change', { target: { value: 'test comment' } }); // change event to set value
    // 4. force the component to update (rerender) because setState is asynchronous
    wrapped.update(); // make sure textarea gets new value
  });

  it('has a text area that users can type in', () => {
    // 5. assert that the textarea value has changed
    expect(wrapped.find('textarea').prop('value')).toEqual('test comment');
  });

  // simulate a submit event on form not on button
  it('should empty text area when form is submitted', () => {
    // simulate submit form
    wrapped.find('form').simulate('submit');
    // force setState to update since its async
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
