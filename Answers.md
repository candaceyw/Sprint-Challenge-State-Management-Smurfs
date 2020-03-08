1. What problem does the context API help solve?

    Context API helps with sharing state between components that you can't easily share with props. It helps keep things more organized. 

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    • Actions - An action is a message sent to the reducer. It is then sent to the reducer. 
    • Reducers - A reducer determines the changes that happen in the state. Reducers are pure functions that take in a state and action and return a new state.
    • Store - The store contains the state of the application. It is what receives the information from the reducer and actions. It is JavaScript object that represents all the data that changes in the application

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is global, and your component state is local.
    Application state is Immutable. It creates a clone of the objects state and then modifies teh clone and then replace the original state with the clone. This is useful when you need to use things in multiple componenets.

    Component state however, lives within that specific component. As such, it can only be updated within that component and passed down to its children via props. This is useful when you want things like forms to input values but not store them globally. 


4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed


5. What is your favorite state management system you've learned and this sprint? Please explain why!

    I think I prefer redux because it allows applications to be organized better for state management. I'm able to read the code easier. 
