import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';

import App from 'components/App';

beforeEach(() => {
  // set up moxios and attempt to intercept any requestthat actually tries to issue
  moxios.install();
  // respond to it with some data, mocking out the returned response
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fertched #2' }],
  });
});

// waiting for moxios to intercep the request and responde with fake list of comments

afterEach(() => {
  // clean up stubbed mock response
  moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
  // Attempt to render the *entire* app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // Find the 'fetchComments' button and click it
  // this will kickoff the entire data fetching process
  // 1. get the request or action over to the reducer
  // 2. reducers going to pick up the list of comments
  // 3. comment list component will render itself
  wrapped.find('.fetch-comments').simulate('click');

  // introduce a TINY pause for moxios to return data
  moxios.wait(() => {
    // explicitly tell wrapped that it needs to update the components after simulated click
    wrapped.update();
    // Expect to find a list of comments!
    expect(wrapped.find('li').length).toEqual(2);
    // Jest will wait until this done is invoked to end the tests
    done();
    // clean up
    wrapped.unmount();
  });
});
