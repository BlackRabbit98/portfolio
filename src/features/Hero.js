import { Button } from '@chakra-ui/button';
import { Box, Flex, Link, Text } from '@chakra-ui/layout';
import React from 'react';
import { useNavigate } from 'react-router';
import FlexContainer from '../components/FlexContainer';

const Hero = () => {
	const navigate = useNavigate();

	const navigateHandler = (link) => {
		navigate(link);
	};

	return (
		<FlexContainer id="hero">
			<Flex
				minHeight="100vh"
				flexDirection="column"
				justify="center"
				textAlign="left">
				<Text margin="0px 0px 30px 4px" color="#64ffda">
					Hi, my name is
				</Text>
				<Text
					fontFamily="Roboto Condensed"
					fontSize={['4xl', '4xl', '6xl', '6xl']}>
					Dibbya Shrestha.
				</Text>
				<Text
					fontFamily="Roboto Condensed"
					fontSize={['4xl', '4xl', '6xl', '6xl']}
					margin="0px 0px 30px 4px">
					I build things for the web.
				</Text>
				<Box maxWidth={['90%', '90%', '60%', '60%']}>
					I’m a software engineer specializing in building (and
					occasionally designing) exceptional digital experiences.
					Currently, I’m focused on building accessible,
					human-centered products at{' '}
					<Link color="#64ffda">MulyaMitra</Link>
				</Box>
				<Button
					maxWidth={['100%', '60%', '50%', '40%']}
					color="#64ffda"
					borderColor="#64ffda"
					variant="outline"
					p="1.85rem"
					marginTop="50px"
					cursor="pointer"
					transition="all 0.25s cubic-bezier(0.645,0.045,0.355,1)"
					_hover={{ bg: 'rgba(100,255,218,0.1)' }}
					onClick={() => navigateHandler('/#projects')}>
					Check out my Projects!
				</Button>
			</Flex>
		</FlexContainer>
	);
};

export default Hero;
