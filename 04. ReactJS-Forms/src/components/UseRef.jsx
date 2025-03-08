import { useState, useEffect, useRef } from "react";

export default function UseRef() {
    const [count, setCount] = useState(0);
    const refMounted = useRef(false);

    useEffect(() => {
        if (refMounted.current) {
            console.log(count, ' Updated');
        }

        refMounted.current = true;
    }, [count]);


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div>
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
                    Use Ref
                </h2>
                <span>{count}</span>
                <button onClick={() => setCount(s => s + 1)}>+</button>
            </div>
        </div>
    );

}
