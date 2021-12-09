import { Flex } from '@chakra-ui/layout';
import './App.css';
import About from './features/About';
import Header from './components/Header';
import Hero from './features/Hero';
import Projects from './features/Projects';
import Contact from './features/Contact';
import { useLocation } from 'react-router';
import { useEffect } from 'react';

const App = () => {
	const location = useLocation();

	useEffect(() => {
		if (location.hash) {
			let elem = document.getElementById(location.hash.slice(1));
			if (elem) {
				elem.scrollIntoView({ behavior: 'smooth' });
			}
		} else {
			window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
		}
	}, [location]);

	return (
		<>
			<Header />
			<Flex minWidth="100vw" direction="column" align="center">
				<Hero />
				<About />
				<Projects />
				<Contact />
			</Flex>
		</>
	);
};

export default App;
