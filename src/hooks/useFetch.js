// src/hooks/useFetch.js

import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Do nothing until a valid URL is provided
    if (!url) {
      setData(null);
      setLoading(false);
      setError(null);
      return;
    }

    // AbortController prevents React from updating
    // state after the component has unmounted.
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        // Clear old results while a new request is running
        setData(null);
        setLoading(true);
        setError(null);

        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(
            `Request failed with status ${response.status}`
          );
        }

        const result = await response.json();

        setData(result);
      } catch (err) {
        // Ignore intentional AbortController errors
        if (err.name !== "AbortError") {
          console.error(err);

          setError(
            "Something went wrong. Please check your internet connection and try again."
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    // Cancel unfinished request when URL changes
    return () => controller.abort();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;