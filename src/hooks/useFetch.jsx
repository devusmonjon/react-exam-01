import axios from "@/api";
import { useEffect } from "react";
import { useState } from "react";

export const useFetch = (path, params = {}, deps = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(path, { params })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [path, ...deps]);

  return { data, loading, error };
};
