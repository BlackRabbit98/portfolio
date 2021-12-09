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
		<FlexContainer textAlign="left" py={['10px', '10px', '100px', '100px']}>
			<Heading fontFamily="Roboto Condensed" fontSize="3xl">
				About Me
			</Heading>
			<Flex marginTop="40px" justifyContent="space-between">
				<Box w="48%">
					<Text>
						Hello! My name is Dibbya and I enjoy creating things
						that live on the internet. My interest in web
						development started back in 2012 when I decided to try
						editing custom Tumblr themes — turns out hacking
						together a custom reblog button taught me a lot about
						HTML & CSS!
					</Text>
					<Text marginTop="15px">
						Fast-forward to today, and I’ve had the privilege of
						working at an advertising agency, a start-up, a huge
						corporation, and a student-led design studio. My main
						focus these days is building accessible, inclusive
						products and digital experiences at Upstatement for a
						variety of clients.
					</Text>
					<Text marginTop="15px">
						Fast-forward to today, and I’ve had the privilege of
						working at an advertising agency, a start-up, a huge
						corporation, and a student-led design studio.
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
