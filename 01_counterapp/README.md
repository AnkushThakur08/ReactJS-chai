# React Interview Question

## If I update the state like this what will happen

```javascript
const [count, setCount] = useState(0);
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
```

- My State will be 1 only
- This is because of **UseState**
- Bcz React Update in Batches, as we have studied in the fiber
- React Fiber waits till the final value is updated
- So here final Value will be 1

### what if we don't want like this

```javascript
const [count, setCount] = useState(0);
setCount((prevCount) => prevCount + 1);
setCount((prevCount) => prevCount + 1);
setCount((prevCount) => prevCount + 1);
setCount((prevCount) => prevCount + 1);
setCount((prevCount) => prevCount + 1);
```

- Here setCount takes a callback
- `setCount(() => {})`
- So if we want to update like this, we use a variable in this case **prevCount**, which represent the previous Value
