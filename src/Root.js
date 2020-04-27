import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';

// Helper function sole purpose is going to be to set up the Redux store and the Provider tag
// props.initialState added for Redux testing
export default ({ children, initialState = {} }) => {
  const store = createStore(reducers, initialState, applyMiddleware(reduxPromise));

  return (
    <Provider store={store}>
      {
        // React contructor, allow this component to wrap other components
        children
      }
    </Provider>
  );
};
