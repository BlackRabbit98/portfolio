import { Flex, Heading } from '@chakra-ui/layout';
import React from 'react';
import FlexContainer from '../components/FlexContainer';
import ProjectsContainer from '../components/ProjectsContainer';
import proj1 from '../assets/images/Proj1.png';
import proj2 from '../assets/images/Proj2.png';
import proj3 from '../assets/images/Proj3.png';

const Projects = () => {
	return (
		<FlexContainer id="projects" w="100%" py={['10px', '10px', '100px', '100px']}>
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
							'Trailerzz is a web app that I created where people can watch movie and tvShows  trailers. Developed with React, Redux, TMDB api, and Firebase.'
						}
						tool1={'VS Code'}
						tool2={'React'}
						tool3={'Chakra ui'}
						tool4={'TMDb API'}
						tool5={'Firebase'}
						link1={'https://trailerzz.web.app/'}
						link2={
							'https://github.com/BlackRabbit98/trailer-website'
						}
					/>
					{/* Project 2 */}
					<ProjectsContainer
						image={proj2}
						title={'TechShop Commercial website'}
						description={
							'This is an ecommerce application with paypal integration. It has both admin and customer functionality. Developed with React, Redux, and Node.'
						}
						tool1={'VS Code'}
						tool2={'React'}
						tool3={'Chakra ui'}
						tool4={'TMDb API'}
						tool5={'Firebase'}
						link1={'https://techshop-project.web.app/'}
						link2={'https://github.com/BlackRabbit98/'}
					/>
					{/* Project 3 */}
					<ProjectsContainer
						image={proj3}
						title={'My Portfolio'}
						description={
							'The portfolio app is my personal project that displays my capabilities as a web dev. Developed with love using React.'
						}
						tool1={'VS Code'}
						tool2={'React'}
						tool3={'Chakra UI'}
						tool4={'TMDb API'}
						tool5={'Firebase'}
						link1={'https://dibbyashrestha.web.app/'}
						link2={'https://github.com/BlackRabbit98/portfolio'}
					/>
				</Flex>
			</Flex>
		</FlexContainer>
	);
};

export default Projects;
