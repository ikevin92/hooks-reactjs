import { useState, useEffect } from 'react';


export const useFetch = (url = '') => {
  const [state, setState] = useState({
    isLoading: true,
    hasError: null,
    data: null,
  })

  const fetchData = async () => {

    setState({
      ...state,
      isLoading: true,
    })

    try {
      const response = await fetch(url);
      const data = await response.json();
      setState({
        isLoading: false,
        hasError: false,
        data,
      })
    } catch (error) {
      setState({
        ...state,
        isLoading: false,
        hasError: error,
      })
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return {
    ...state,
  }
}