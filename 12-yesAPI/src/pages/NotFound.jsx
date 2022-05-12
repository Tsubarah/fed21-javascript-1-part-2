import { useState, useEffect} from 'react'


const NotFound = () => {

const [mount, setMount] = useState()

const onMount = () => {

	console.log("I am mounted")
	
	}

useEffect (() => {

setMount(onMount)

}, [] ) 
	return (
		<>
			<h1>Sorry, that page could not be found 😔</h1>
		</>
	)
}

export default NotFound
