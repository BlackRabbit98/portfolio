import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Flex, Spacer } from '@chakra-ui/layout';
import { Tab, TabList, Tabs } from '@chakra-ui/tabs';
import React from 'react';
import logo from '../assets/images/logo.jpeg';

const Header = () => {
	return (
		<Flex
			align="center"
			p="0px 50px"
			height="100px"
			position="absolute"
			top={0}
			left={0}
			w="100vw">
			<Box align="center">
				<Image src={logo} w={10} borderRadius="lg" />
			</Box>
			<Spacer />
			<Box display="flex" align="center">
				<Tabs variant="" px="12px">
					<TabList>
						<Tab margin="0px 5px" px="20px">
							About
						</Tab>
						<Tab margin="0px 5px" px="20px">
							Work
						</Tab>
						<Tab margin="0px 5px" px="20px">
							Contact
						</Tab>
					</TabList>
				</Tabs>
				<Button
					margin="0px 5px"
					color="#64ffda"
					borderColor="#64ffda"
					variant="outline"
					p="0.75rem">
					Resume
				</Button>
			</Box>
		</Flex>
	);
};

export default Header;
