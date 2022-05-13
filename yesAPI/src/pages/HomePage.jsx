import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { useThemeContext } from '../contexts/ThemeContextProvider'

const HomePage = () => {
	const { theme } = useThemeContext()

	return (
		<>
			<h1>Welcome to Hacker News!</h1>

			<Button variant="primary" as={Link} to="/search">Use the Search, you must</Button>

			<p>Your theme is: {theme}</p>

		</>
	)
}

export default HomePage
