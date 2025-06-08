import React, { useEffect } from "react";
import Child1 from "./Child1";

function Parent() {
//   const message = "I am Parent";
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    console.log("Component mounted");

    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("component unmounted");
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log("Count Updated");
  }, [count]);

  return (
    <>
      <div>Parent</div>
      <button onClick={() => {setCount(count +  1)}}>Increment</button>
      <Child1 message={count} />
    </>
  );
}

export default Parent;
