import { Flex } from '@chakra-ui/layout';
import React from 'react';

/**
 * This is a flex box based container.
 * It accepts flex properties only.
 */
const FlexContainer = ({
	children,
	maxWidth,
	flexDirection,
	justify,
	...flexProps
}) => {
	return (
		<Flex
			maxWidth={maxWidth ? maxWidth : ['100vw', '60vw', '60vw', '55vw']}
			flexDirection={flexDirection ? flexDirection : 'column'}
			justify={justify ? justify : 'center'}
			{...flexProps}>
			{children}
		</Flex>
	);
};

export default FlexContainer;
