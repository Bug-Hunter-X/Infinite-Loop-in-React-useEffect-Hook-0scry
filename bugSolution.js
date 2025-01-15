```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: Update state only once on mount
    // Or based on other state/prop changes
    console.log("Component mounted!");
  }, []);

  return <div>Count: {count}</div>;
}
```