import React, { useEffect, useState } from "react";

export default function Lifecycle() {
  const [count, setcount] = useState(0);
  
  useEffect(() => {
    console.log("Mounting");

    return () => {
      console.log("unmounting");
    };
  }, [count]);
  const incree = () => {
    setcount(count + 1);
  };
  return (
    <div>
      Lifecycle
      <button onClick={incree}>incree</button>
    </div>
  );
}
