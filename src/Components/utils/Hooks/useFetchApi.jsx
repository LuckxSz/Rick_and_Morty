import { useEffect, useState } from "react";
import axios from 'axios'

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character",
})

export const useFetchApi = (url) => {
  const [data, setData] = useState({ data: [{}], loading: true, error: null })


  useEffect(() => {
    api.get(url).then((response) => {
      setData((prevState) => ({ ...prevState, data: response.data.results }))
    }).catch((err) => {
      setData((prevState) => ({ ...prevState, error: err }))
    }).finally(() => {
      setData((prevState) => ({ ...prevState, loading: false }))
    })
  }, [url])
  return data
}
