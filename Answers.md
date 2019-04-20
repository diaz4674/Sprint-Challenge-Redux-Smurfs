1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map, .filter and object.assign are array/object methods that produce no side effects, they return a new array and keep the original state untouched. The object.assign method is able to create a new object while extending properties of another.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions create changes to be delivered/dispatched to the reducer. The reducer processes/reads these action requests/dispatches and makes updates to the state/store as requested. The immutable state tree is referred to as the store, that state tree is where the reducer get it's information, it is the only state it looks at to process action requests, which is why it is referred to as the single source of truth. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global, whereas the component state is local. The component state can access the app state as long as it can hook up to it. The component state is good to use when adding value to input fields, and then passing that information through the redux cycle (actions, reducers, and finally into state.)

1.  What is middleware? Middleware provides us a way to interact with actions that have been dispatched to the store before it reaches the store's reducer. It allows us to add useful tools (such as redux-thunk) to make our code more powerful.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk allows us to make it so we can make actions as functions to get, and post changes with axios or other needs, to make asynch calls.

1.  Which `react-redux` method links up our `components` with our `redux store`? 
The connect method allows our components to link up with our redux store.