import { useEffect, useState } from "react";
import axios from 'axios'

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
})

export const useFetchApi = (endpoint) => {
  const [data, setData] = useState({ results: [], info: {}, loading: true, error: null })

  console.log(data)
  useEffect(() => {
    setData((prevState) => ({ ...prevState, loading: true }));
    api.get(endpoint).then((response) => {
      setData((prevState) => ({
        ...prevState,
        results: response.data.results,
        info: response.data.info,
        loading: false,
      }))
    }).catch((err) => {
      setData((prevState) => ({
        ...prevState,
        error: err,
        loading: false,
      }))
    })
  }, [endpoint])

  return data
}
