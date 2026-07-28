import { useMemo } from "react";

function UseMemo() {
  const number = 4;
  const squaredValue = useMemo(() => number * number, [number]);

  return <p>{number} squared is {squaredValue}</p>;
}

export default UseMemo;
