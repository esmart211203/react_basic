import { useState, useEffect } from "react";
export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isErrors, setIsError] = useState(false);
    useEffect(() => {
        (
            async () => {
                try {
                    setIsLoading(true);
                    const res = await fetch(url)
                    const status = res.status
                    if (!res.ok) { throw new Error(); }
                    const data = await res.json();
                    if (status === 200) {
                        setData(data);
                        setIsLoading(false);
                    }
                } catch (error) {
                    setIsError(true);
                    setIsLoading(false);
                }
            }
        )()
    }, []);
    return { data, isLoading, isErrors }
}