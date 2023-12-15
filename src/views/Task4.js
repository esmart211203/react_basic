import React from 'react';

const Task4 = (props) => {
    console.log(props);
    const onDelete = (id) => {
        props.handDeleteData(id);
    }
    return (
        <div>
            <hr />
            task 4
            {props.myProps.length && props.myProps.map(item => (
                <div key={item.id}>
                    <p>{item.title} <small>{item.body}</small></p>
                    <button onClick={() => onDelete(item.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default Task4;