import useFetch from '../hooks/useFetch'
import Button from 'react-bootstrap/Button'

export default function FetchPage() {
  const { fetchData, error, data, setUrl } = useFetch('https://api.chucknorris.io/jokes/random')

  return (
    <>

      {error && 
      <p>{error}</p> }

      {data && (<p className="display-3">{data.value}</p>)}

      <Button 
      onClick={fetchData}
      variant="success">More Jokes</Button>

    </>
  )
}
