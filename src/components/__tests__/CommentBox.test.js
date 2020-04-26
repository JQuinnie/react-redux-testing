import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  // using full DOM from enzyme by mounting to virtual JSDOM
  // enzyme shallow would have worked to test this component
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  // clean up by removing component from JSDOM so it will not interfere with other components that are created in other tests
  // good practice for Full DOM enzyme renders
  wrapped.unmount();
});

it('has a textarea and a button', () => {
  // console.log(wrapped.find("textarea").length); // see if text area exists in JSDOM

  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

it('has a text area that users can type in', () => {
  // 1. find textarea element
  // 2. simulate a 'change' event (onChange is the name of a callback that we are passing to the textarea)
  // 2nd arg is a mock object that tricks the event handler, handleChange
  // 3. provide a fake event object, callback handler receives a piece of new state
  wrapped.find('textarea').simulate('change', { target: { value: 'test comment' } });
  // 4. force the component to update (rerender) because setState is asynchronous
  wrapped.update();
  // 5. assert that the textarea value has changed
  expect(wrapped.find('textarea').prop('value')).toEqual('test comment');
});

// simulate a submit event on form not on button
it('should empty  text area when form is submitted', () => {
  // change event to set value
  wrapped.find('textarea').simulate('change', { target: { value: 'test comment' } });
  // make sure textarea gets new value
  wrapped.update();

  // expect(wrapped.find('textarea').prop('value')).toEqual('test comment'); // good form if it wasnt tested above

  // simulate submit form
  wrapped.find('form').simulate('submit');
  // force setState to update since its async
  wrapped.update();
  expect(wrapped.find('textarea').prop('value')).toEqual('');
});
