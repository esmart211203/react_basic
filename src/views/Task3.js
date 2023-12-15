/**
 * Task 3: output list 
 */
import { useState } from "react";
import Task4 from "./Task4";
export const Task3 = () => {
    const [data, setData] = useState([
        { id: 1, title: 'DoXuanTrong', body: 'develop' },
        { id: 2, title: 'Olala', body: 'dev' },
        { id: 3, title: 'Hope', body: 'dev' },
        { id: 4, title: 'trongkotd', body: 'develop' },
    ])
    const handDeleteData = (id) => {
        setData(data.filter(item => item.id !== id));
    }
    const [check, setCheck] = useState('isCheck');
    return (
        <div>
            <hr />
            task 3
            {data.length && data.map(item => (
                <div key={item.id}>
                    <p>{item.title} <small>{item.body}</small></p>
                </div>
            ))}
            <hr />
            <Task4 handDeleteData={handDeleteData} myProps={data.filter(item => item.body === 'develop')} />
        </div>
    )
}