import { Image } from '@chakra-ui/image';
import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { FiExternalLink } from 'react-icons/fi';
import Icon from '@chakra-ui/icon';

const ProjectsContainer = ({
	image,
	title,
	description,
	tool1,
	tool2,
	tool3,
	tool4,
	tool5,
	link1,
	link2,
}) => {
	const onClickHandler = () => {
		window.open(link1);
	};
	const onClickHandler2 = () => {
		window.open(link2);
	};

	return (
		<Flex
			width="100%"
			marginBottom="100px"
			position="relative"
			height="400px">
			<Image
				src={image}
				alt=""
				w="65%"
				height="400px"
				marginTop="30px"
				position="absolute"
				objectFit="contain"
				zIndex={2}
				top={0}
				left={0}
			/>

			<Flex
				w="53%"
				direction="column"
				align="flex-end"
				position="absolute"
				zIndex={3}
				top={0}
				right={0}>
				<Text color="#64ffda">Feature Project</Text>
				<Heading fontFamily="Roboto Condensed" fontSize="3xl" my="10px">
					{title}
				</Heading>
				<Box w="100%" bg="#112240" p="25px" my="20px">
					<Text bg="#112240" textAlign="right">
						{description}
					</Text>
				</Box>
				<Grid templateColumns="repeat(5, 1fr)" gap={4}>
					<Box w="100%" h="10">
						{tool1}
					</Box>
					<Box w="100%" h="10">
						{tool2}
					</Box>
					<Box w="100%" h="10">
						{tool3}
					</Box>
					<Box w="100%" h="10">
						{tool4}I
					</Box>
					<Box w="100%" h="10">
						{tool5}
					</Box>
				</Grid>
				<Flex>
					<Icon
						as={FiGithub}
						w={6}
						h={6}
						margin="15px"
						cursor="pointer"
						onClick={onClickHandler2}
					/>
					<Icon
						as={FiExternalLink}
						w={6}
						h={6}
						margin="15px"
						cursor="pointer"
						onClick={onClickHandler}
					/>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default ProjectsContainer;
