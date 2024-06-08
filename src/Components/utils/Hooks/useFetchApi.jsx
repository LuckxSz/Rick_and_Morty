import { useEffect, useState } from "react";
import axios from 'axios'

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
})

export const useFetchApi = (endpoint) => {
  const [data, setData] = useState({ results: [], info: {}, loading: true, error: null })

  useEffect(() => {
    setData((prevState) => ({ ...prevState, loading: true })); // Set loading to true when fetching new data
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
