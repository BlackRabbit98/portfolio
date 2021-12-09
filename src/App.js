import { Flex } from '@chakra-ui/layout';
import './App.css';
import About from './features/About';
import Header from './components/Header';
import Hero from './features/Hero';
import Projects from './features/Projects';
import Contact from './features/Contact';

const App = () => {
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
