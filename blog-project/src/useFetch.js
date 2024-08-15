// Custom hook to fetch data...
// Always start the custom hook name with "use"
import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok... Couldn't Find that resource`);
                }
                return response.json()
            })
            .then(data => {
                setData(data)
                setIsPending(false);
                setError(null);
            }
            )
            .catch(err => {
                console.log(err.message);
                setIsPending(false);
                setError(err.message);
            })
    }, [url]);

    return ({ data, isPending, error })
}

export default useFetch;
