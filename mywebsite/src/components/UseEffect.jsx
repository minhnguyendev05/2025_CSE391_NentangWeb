import React, { useState,useEffect } from "react";

function Test() {
    const [state, setState] = useState(false);
    // const [count, setCount] = useState(0);
   
    useEffect(() => {
        console.log("run effect");
    }, [state]);
    return (
        <button onClick={()=> { setState( state ? false : true)}}>Click Me!</button>
    );
}

export default Test;