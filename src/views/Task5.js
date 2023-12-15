/**
 * Task 5: react useEffect hook
 */
import { useEffect, useState } from "react"
export const Task5 = () => {
    const [title, setTitle] = useState('');
    const handleChange = (event) => {
        setTitle(event.target.value);
    }
    useEffect(() => {
        document.title = title
    })
    return (
        <>
            <hr />
            <small>on change title</small>
            <input onChange={handleChange} />
        </>
    )
}