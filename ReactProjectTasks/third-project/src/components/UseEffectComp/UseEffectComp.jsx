import React, { useEffect, useState } from "react";

function UseEffectComp() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mounted / Updated");

    return () => {
      console.log("Unmount..");
    };
  }, [count]);

  return (
    <>
      <div className="m-5">
        <h2>Count: {count}</h2>

        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </>
  );
}

export default UseEffectComp;
