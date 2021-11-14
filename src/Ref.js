import React, { useState, useRef } from 'react'

// useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
//  The returned object will persist for the full lifetime of the component.
// Essentially, useRef is like a “box” that can hold a mutable value in its .current property.

// This works because useRef() creates a plain JavaScript object. 
// The only difference between useRef() and creating a {current: ...} object yourself is that 
// useRef will give you the same ref object on every render.
// Keep in mind that useRef doesn’t notify you when its content changes. 
// Mutating the .current property doesn’t cause a re-render. 
// If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a callback ref instead.


const RefComponent = () => {
    const [stateNumber, setStateNumber] = useState(0);
    const numRef = useRef(0);

    function incrementAndDelayLogging() {
        setStateNumber(stateNumber + 1);
        numRef.current++;
        setTimeout(
            () => alert(`state: ${stateNumber} | ref: ${numRef.current}`),
            1000
        );
    }

    return (
        <div>
            <h1>useRef Example</h1>
            <button onClick={incrementAndDelayLogging}>delay logging</button>
            <h4>state: {stateNumber}</h4>
            <h4>ref: {numRef.current}</h4>
        </div>
    );
};

export default RefComponent;