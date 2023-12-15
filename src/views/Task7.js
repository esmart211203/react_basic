import { useParams } from "react-router-dom";
import { useFetch } from "../services/useFetch";

export const Task7 = () => {
    const { id } = useParams();
    const { data: posts, isLoading, isErrors } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return (
        <>
            {isErrors && <div>Server internal erx   rors</div>}
            {isLoading && <div>Please wait for minutes</div>}
            {
                posts && (
                    <>
                        <h1 className="text-center">detail posts - {id}</h1>
                        <div>
                            {posts?.title}
                        </div>
                    </>
                )
            }
        </>
    )
}