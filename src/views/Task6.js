import { Link } from "react-router-dom";
import { useFetch } from "../services/useFetch";

export const Task6 = () => {
    const { data, isErrors, isLoading } = useFetch('https://jsonplaceholder.typicode.com/posts');
    return (
        <>
            {isErrors && <div>Server internal errors</div>}
            {isLoading && <div>Please wait for minutes</div>}
            {data && data.length > 0 && (
                <ul>
                    {data.map(post => (
                        <li key={post.id}>
                            <Link to={`/task-7/${post.id}`}>
                                <div>{post.title}</div>
                            </Link>
                        </li>
                    ))} 
                </ul>
            )}
        </>
    );
};