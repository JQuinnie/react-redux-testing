# Testing in React and Redux

- React, Redux and Jest

### 3 Step Testing Guideline

1. Look at each individual part of your application (every component, reducer, action creator, etc.)
2. Imagine telling someone 'here is what this piece of code does, its purpose and what its suppose to do'
3. Write a test to verify each part does what you expect

### JSDOM

The React library only functions correctly if its being executed inside the browser. Running Jest from the command line installs a dependency called JSDOM. JSDOM simulates how a browser behaves, it is a library or a JavaScript code implementation of how the browser works.

### Enzyme

Open source package made for testing React components more easily, closely configured with how React works.
