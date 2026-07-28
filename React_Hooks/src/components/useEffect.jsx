import { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect ran");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <p>This is a simple useEffect example.</p>
    </div>
  );
}

export default UseEffect;