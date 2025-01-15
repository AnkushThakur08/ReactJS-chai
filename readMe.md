# Why do we need hooks?

- React Control the UI
- React Says, do whatever you want to do, but i will control the UI for the App. So that if any value changes i can update that in all the places wherever it is used

# Virtual DOM, Fiber, Reconciliation

## React Fiber

- React Fiber is an implementation of React's core algorithm.
- React Fiber allowed **optimised re-rendering**
- eg: you are updating a Button text through a API CALL, and then at the same time, another Api Call and Another
- here React will render the **change 3 times**, REACT FIBRE solves this problem it waits till final value is updated
- The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering

## What is reconciliation ?

- The algorithm which is used to differentiate one tree with another to determine which parts need to be changed.
- A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.

- Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM."

- [For More Details](https://github.com/acdlite/react-fiber-architecture)

1. The **createRoot** function create's its own DOM, just like Real DOM and then compare it with the web browser's DOM and only update those components which are actually updated.

2. But the browser removes the whole DOM and then recrates the whole DOM with the updated values this is called reload.

3. However virtual DOM tracks whole DOM like a tree like structure and updates only those values which were only changed.

4. In UI it is not necessary for every update to be applied immediately, after the API Call.

5. The Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM."
6. A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory.
7. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.ings can be updated after a second
