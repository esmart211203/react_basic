/**
 * task 1: làm quen với react và sử dụng useState
 */
import { useState } from "react";
export const Task1 = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            alert("Khong the giam nua");
        }
    }
    return (
        <>
            total count : {count}
            <div>
                <button onClick={decrement}>reduced</button>
                <button onClick={increment}>increment</button>
            </div>
        </>
    )
}

