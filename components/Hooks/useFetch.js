// useAxios.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData =  async() => {
            setIsError(false);
            setIsLoading(true);
            try {
                console.log(url, 'url')
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [url]);

    return { data, isLoading, isError };
};
