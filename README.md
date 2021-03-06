# Testing in React and Redux

- React, Redux and Jest

## 3 Step Testing Guideline

1. Look at each individual part of your application (every component, reducer, action creator, etc.)
2. Imagine telling someone 'here is what this piece of code does, its purpose and what its suppose to do'
3. Write a test to verify each part does what you expect

### JSDOM

The React library only functions correctly if its being executed inside the browser. Running Jest from the command line installs a dependency called JSDOM. JSDOM simulates how a browser behaves, it is a library or a JavaScript code implementation of how the browser works.

### Enzyme

Open source package made for testing React components more easily, closely configured with how React works. Enzyme allows tests to skip the entire process of rendering the components into a div.

#### Enzyme API Capabilities

1. Static - Render the given component and return plain HTML, returns an object that contains just that HTML
2. Shallow - Render _just_ the given component and none of its children, test one component in isolation, returns a component
3. Full DOM - Render the component and all of its children + let us modify it afterwards, returns an object

### Redux Promise

Middleware that is used to handle asynchronous action creators or action creators that try to make network requests.

## Integration Tests

Simultaneiously test many different parts of our application. A single integration test can touch the entire scope of the application with one chunk of code or one test or the entire flow.

### Moxios Library

Mock out Axios api. Moxios can be told to watch for attempted requests and anytime it does, Axios will get tricked into thinking it instantly gets a response (fake out requests), no network request is going to be actually created, but mock data will be returned. Solely to help out around the test environment.
