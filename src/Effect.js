import { useState, useEffect } from 'react'

const EffectComponent = () => {
    const [time, setTime] = useState(new Date());
    //  in useEffect if there is no dependecy array it means it will be triggered for every change in state
    // useEffect cannot be itself async
    //  useEffect can return a function which is called cleanUp function 
    // if we dont mention this, setTimout will be happening which sets the state even when component is removed which can lead to error
    // cleanup is similar to componentDidUnmount
    useEffect(() => {
        const timer = setTimeout(() => setTime(new Date()), 1000);
        return () => clearTimeout(timer);
    })
    return (
        <div>
            <h1>Use Effect Example:
                {
                    time.toLocaleTimeString()
                }
            </h1>
        </div>
    )
}

export default EffectComponent;