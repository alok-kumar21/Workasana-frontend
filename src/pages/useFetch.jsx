import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to get Data.");
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          setData(data);
          setLoading(false);
        }
      })
      .catch((error) => setError(error.message));
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
