import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from 'react-router-dom'
import { useThemeContext } from '../contexts/ThemeContextProvider'

const Navigation = () => {
	const { isDarkTheme, toggleTheme } = useThemeContext()

	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">Hacker News</Navbar.Brand>
				<Button 
					onClick={toggleTheme}
					variant="success"
					>{isDarkTheme() ?
					'☀️' : '🌙'}
				 </Button>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} end to="/search">Search</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
