import { useState, useMemo, useEffect } from "react";

const fibonacci = (n) => {
    if (n <= 1) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
};

const MemoComponent = () => {
    const [num, setNum] = useState(1);
    const [fib, setFib] = useState(num);
    const [isGreen, setIsGreen] = useState(true);
    // const fib = fibonacci(num);


    //  the below statement says , if the num does not change don't compute it again
    //  instead return the previous computed value
    //  we use this only when the function is expensive unless no need
    // const fib = useMemo(() => fibonacci(num), [num]);
    useEffect(() => {
        const res = fibonacci(num)
        setFib(res)
    }, [num])
    return (
        <div>
            <h1
                onClick={() => setIsGreen(!isGreen)}
                style={{ color: isGreen ? "limegreen" : "crimson" }}
            >
                useMemo Example
            </h1>
            <h2>
                Fibonacci of {num} is {fib}
            </h2>
            <button onClick={() => setNum(num + 1)}>➕</button>
        </div>
    );
};

export default MemoComponent;