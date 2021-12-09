import { Button } from '@chakra-ui/button';
import { Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import FlexContainer from '../components/FlexContainer';

const Contact = () => {
	return (
		<FlexContainer id="contact" align="center" py="100px">
			<Heading fontFamily="Roboto Condensed" fontSize="5xl">
				Get In Touch
			</Heading>
			<Text mt="30px" mb="40px" width="65%" align="center">
				My inbox is always open. Whether you have a question or just
				want to say hi, I’ll try my best to get back to you!
			</Text>
			<Button
				maxWidth={['100%', '60%', '50%', '40%']}
				color="#64ffda"
				borderColor="#64ffda"
				variant="outline"
				p="1.85rem"
				transition="all 0.25s cubic-bezier(0.645,0.045,0.355,1)"
				_hover={{ bg: 'rgba(100,255,218,0.1)' }}
				cursor="pointer">
				<a href={`mailto:sdibbya@gmail.com`}>Say Hello</a>
			</Button>
		</FlexContainer>
	);
};

export default Contact;
