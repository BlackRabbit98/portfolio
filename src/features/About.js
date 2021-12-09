import Icon from '@chakra-ui/icon';
import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import FlexContainer from '../components/FlexContainer';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';

const About = () => {
	return (
		<FlexContainer
			id="about"
			textAlign="left"
			py={['10px', '10px', '100px', '100px']}>
			<Heading fontFamily="Roboto Condensed" fontSize="3xl">
				About Me
			</Heading>
			<Flex marginTop="40px" justifyContent="space-between">
				<Box w="48%">
					<Text>
						Hello! My name is Dibbya and I enjoy creating things
						that live on the internet.
					</Text>
					<Text marginTop="15px">
						I love combining the art of design with the art of
						programming. I currently specialise in ReactJS and
						NodeJS due to its nature of being fast, scalable, and
						simple.
					</Text>
					<Text marginTop="15px">
						I will love to hear from you. Whether it's a project,
						job opportunity, or just a chat. Feel free to contact
						me.
					</Text>
				</Box>
				<Box w="48%" h="100px">
					<Text>
						Here are a few technologies I’ve been working with:
					</Text>

					<Grid
						marginTop="15px"
						h="200px"
						templateRows="repeat(3, 1fr)"
						templateColumns="repeat(3, 1fr)"
						gap={3}>
						<Box
							w="100px"
							h="100px"
							rowSpan={1}
							border="1px solid #64ffda"
							align="center">
							<Icon
								color=" #64ffda"
								w="60px"
								h="70px"
								margin="15px"
								as={AiFillHtml5}
							/>
						</Box>
						<Box
							w="100px"
							h="100px"
							rowSpan={1}
							border="1px solid #64ffda"
							align="center">
							<Icon
								color=" #64ffda"
								w="60px"
								h="70px"
								margin="15px"
								as={IoLogoCss3}
							/>
						</Box>
						<Box
							w="100px"
							h="100px"
							rowSpan={1}
							border="1px solid #64ffda"
							align="center">
							<Icon
								color=" #64ffda"
								w="60px"
								h="70px"
								margin="15px"
								as={IoLogoJavascript}
							/>
						</Box>
						<Box
							w="100px"
							h="100px"
							colSpan={1}
							border="1px solid #64ffda"
							align="center">
							<Icon
								color=" #64ffda"
								w="60px"
								h="70px"
								margin="15px"
								as={FaReact}
							/>
						</Box>
						<Box
							w="100px"
							h="100px"
							colSpan={1}
							border="1px solid #64ffda"
							align="center">
							<Icon
								color=" #64ffda"
								w="60px"
								h="70px"
								margin="15px"
								as={SiTypescript}
							/>
						</Box>
						<Box
							w="100px"
							h="100px"
							colSpan={1}
							border="1px solid #64ffda"
							align="center">
							<Icon
								color=" #64ffda"
								w="60px"
								h="70px"
								margin="15px"
								as={FaNodeJs}
							/>
						</Box>
					</Grid>
				</Box>
			</Flex>
		</FlexContainer>
	);
};

export default About;
