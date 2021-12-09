import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Flex, Spacer } from '@chakra-ui/layout';
import { Tab, TabList, Tabs } from '@chakra-ui/tabs';
import React from 'react';
import logo from '../assets/images/logo.jpeg';
import { useNavigate } from 'react-router';

const Header = () => {
	const navigate = useNavigate();

	const navigateHandler = (link) => {
		navigate(link);
	};

	const clickHandler = () => {
		window.open(
			'https://drive.google.com/file/d/1RI4KCd571Z3cgHnBDGTD91RUbh1qLDSx/view?usp=sharing'
		);
	};

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
						<Tab
							margin="0px 5px"
							px="20px"
							onClick={() => navigateHandler('/#about')}>
							About
						</Tab>
						<Tab
							margin="0px 5px"
							px="20px"
							onClick={() => navigateHandler('/#projects')}>
							Projects
						</Tab>
						<Tab
							margin="0px 5px"
							px="20px"
							onClick={() => navigateHandler('/#contact')}>
							Contact
						</Tab>
					</TabList>
				</Tabs>
				<Button
					margin="0px 5px"
					color="#64ffda"
					borderColor="#64ffda"
					variant="outline"
					p="0.75rem"
					transition="all 0.25s cubic-bezier(0.645,0.045,0.355,1)"
					_hover={{ bg: 'rgba(100,255,218,0.1)' }}
					onClick={clickHandler}>
					Resume
				</Button>
			</Box>
		</Flex>
	);
};

export default Header;
