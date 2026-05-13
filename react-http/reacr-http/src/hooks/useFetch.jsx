import { useState, useEffect } from "react";

// custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // Refatorando o POST
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // Loading
  const [loading, setLoading] = useState(false);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setMethod(method);
    }

  };

  // GET
  useEffect(() => {
    const fetchData = async () => {

        //loading
        setLoading(true);

      const res = await fetch(url);
      const json = await res.json();
        //loading
        setLoading(false);

        setData(json);
    };

    fetchData();
  }, [url, callFetch]);

  // useEffect para refatorar o post
  useEffect(() => {
    const httpRequest = async () => {
        let json;

      if (method === "POST") {

        //loading
        setLoading(true);
        
        const fetchOptions = [url, config];
        const res = await fetch(...fetchOptions);

        const json = await res.json();

        //loading
        setCallFetch(false);


        setCallFetch(json);
      }
    };

    httpRequest();
  }, [config, method, url]);

  return { data, httpConfig, loading };
};