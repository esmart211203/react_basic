/**
 * Task 2: Làm quen handChange
 */
import { useState } from "react"
export const Task2 = () => {
    const [name, setName] = useState('...');
    const handleChange = (event) => {
        setName(event.target.value);
    }
    return (
        <div>
            <hr />
            username: {name}
            <div>
                <input type="text" value={name} onChange={handleChange} />
            </div>
        </div>
    )
}