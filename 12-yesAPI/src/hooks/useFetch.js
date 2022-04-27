import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (initialUrl = null) => {
  const [url, setUrl] = useState(initialUrl)
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const fetchData = async () => {
    try {
      const res = await axios.get(url)
      setData(res.data)

    } catch (err) {
      console.log('Error data', err.response)
      setError(err.message)
    }
  }

  useEffect(() => {
    setLoading(true)
    fetchData()
    setLoading(false)


  }, [url])

  return {
    fetchData,
    data,
    error,
    setUrl,
  }
}



export default useFetch
