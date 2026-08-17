import { useEffect, useState } from "react";

const useFetch = (getData) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getData()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [getData]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;