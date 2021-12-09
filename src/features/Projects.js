import { Flex, Heading } from '@chakra-ui/layout';
import React from 'react';
import FlexContainer from '../components/FlexContainer';
import ProjectsContainer from '../components/ProjectsContainer';
import proj1 from '../assets/images/Proj1.png';
import proj2 from '../assets/images/Proj2.png';
import proj3 from '../assets/images/Proj3.png';

const Projects = () => {
	return (
		<FlexContainer w="100%" py={['10px', '10px', '100px', '100px']}>
			<Flex flexDirection="column" textAlign="left">
				<Heading
					fontFamily="Roboto Condensed"
					fontSize="3xl"
					marginBottom="30px">
					Some Things I've Built
				</Heading>
				<Flex direction="column">
					{/* Project 1 */}
					<ProjectsContainer
						image={proj1}
						title={'Trailerzz website'}
						description={
							'A minimal, dark blue theme for VS Code, Sublime Text, atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.'
						}
						tool1={'VS Code'}
						tool2={'React'}
						tool3={'Chakra ui'}
						tool4={'TMDb API'}
						tool5={'Firebase'}
					/>
					{/* Project 2 */}
					<ProjectsContainer
						image={proj2}
						title={'Trailerzz website'}
						description={
							'A minimal, dark blue theme for VS Code, Sublime Text, atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.'
						}
						tool1={'VS Code'}
						tool2={'React'}
						tool3={'Chakra ui'}
						tool4={'TMDb API'}
						tool5={'Firebase'}
					/>
					{/* Project 3 */}
					<ProjectsContainer
						image={proj3}
						title={'Trailerzz website'}
						description={
							'A minimal, dark blue theme for VS Code, Sublime Text, atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.'
						}
						tool1={'VS Code'}
						tool2={'React'}
						tool3={'Chakra UI'}
						tool4={'TMDb API'}
						tool5={'Firebase'}
						link1={'https://dibbyashrestha.web.app/'}
						link2={''}
					/>
				</Flex>
			</Flex>
		</FlexContainer>
	);
};

export default Projects;
