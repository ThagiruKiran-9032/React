import { useCallback } from "react";

function Button({ onClick, label }) {
  return <button onClick={onClick}>{label}</button>;
}

function UseCallback() {
  const handleClick = useCallback(() => {
    alert("Button clicked");
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
export default UseCallback;
