import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('shows a comment box', () => {
  // creates a div inside JSDOM
  const div = document.createElement('div');
  // render our App component into said div
  ReactDOM.render(<App />, div);

  console.log(div.innerHTML); // to see JSDOM div

  expect(div.innerHTML).toContain('Comment Box');

  // test cleanup
  ReactDOM.unmountComponentAtNode(div);
});
