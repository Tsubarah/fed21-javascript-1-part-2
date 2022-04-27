import useFetch from '../hooks/useFetch'
import Button from 'react-bootstrap/Button'

export default function FetchPage() {
  const { data, setUrl } = useFetch('https://api.chucknorris.io/jokes/random')

  return (
    <>

      {data && (<p className="display-3">{data.value}</p>)}

      <Button variant="success">More Jokes</Button>

    </>
  )
}
