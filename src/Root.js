import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

// Helper function sole purpose is to going to be to set up the Redux store and the Provider tag
export default (props) => {
  return (
    <Provider store={createStore(reducers, {})}>
      {
        // React contructor, allow this component to wrap other components
        props.children
      }
    </Provider>
  );
};
