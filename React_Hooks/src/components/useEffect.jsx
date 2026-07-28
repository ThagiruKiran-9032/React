import { useEffect } from "react";

function UseEffect() {
  useEffect(() => {
    document.title = "Use Effect Demo";
  }, []);

  return <p>Use Effect ran when this component loaded.</p>;
}

export default UseEffect;