import { useState, useEffect } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Container, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<>
			<header className='fixed-top'>
				<Navbar variant='light' expand='lg' className='bg-light shadow'>
					<Container>
						<Navbar.Brand href='/'>
							<img src="https://ledef.net/wp-content/uploads/2021/02/ledef-e1614222746849.jpg" alt="Ledef logo" style={{ height: 40 }} />
						</Navbar.Brand>
						<Navbar.Toggle aria-controls='navbar-nav' />
						<Navbar.Collapse id='navbar-nav'>
							<Nav className='mx-auto fs-5'>
								<LinkContainer to='/'>
									<Nav.Link>Accueil</Nav.Link>
								</LinkContainer>
								<LinkContainer to='/les-membres-du-bureau'>
									<Nav.Link>Membres du Bureau</Nav.Link>
								</LinkContainer>
								<LinkContainer to='/contact'>
									<Nav.Link>Nous Contacter</Nav.Link>
								</LinkContainer>
								<LinkContainer to='/missions'>
									<Nav.Link>Actions depuis 2014</Nav.Link>
								</LinkContainer>
							</Nav>
							{/* <LinkContainer to='/membership'>
								<Button variant='outline-primary' className='me-2'>Adhérer</Button>
							</LinkContainer> */}
							<Link className='btn btn-outline-primary me-2' to='/membership'>Adhérer</Link>
							<Link className='btn btn-primary' to='/donation'>Faire un Don</Link>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</header>
		</>
	)
}

export default Header
