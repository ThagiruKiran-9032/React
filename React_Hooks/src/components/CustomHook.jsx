import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((value) => value + 1);
  const decrement = () => setCount((value) => value - 1);

  return { count, increment, decrement };
}

function CustomHook() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>++</button>
      <button onClick={decrement}>--</button>
    </div>
  );
}

export default CustomHook;
