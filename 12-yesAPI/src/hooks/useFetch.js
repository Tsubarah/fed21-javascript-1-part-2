import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (initialUrl = null) => {
  const [url, setUrl] = useState(initialUrl)
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  
  useEffect(() => {

    if (!url) {
      return
    }

    const fetchData = async () => {
      const res = await axios.get(url)
      setData(res.data)
    }

    fetchData()

  }, [url])

  return {
    data,
    setUrl,
  }
}



export default useFetch
