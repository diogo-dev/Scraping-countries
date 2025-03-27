import { useState, useEffect } from "react"

export const useCountry = (url) => {

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAPIResponse = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const answer = await res.json();
      /* console.log(answer); */
      setCountries(answer);
    } catch (err) {
      console.log(err.message)
      setError("An error has occured while loading the countries data");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAPIResponse();
  }, []);

  return { countries, loading, error }
}

export default useCountry