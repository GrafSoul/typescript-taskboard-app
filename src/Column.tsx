// Core
import { FC } from 'react';

// Styled Components
import { ColumnContainer, ColumnTitle } from './styles';

export const Column: FC = () => {
	return (
		<ColumnContainer>
			<ColumnTitle>Column Title</ColumnTitle>
		</ColumnContainer>
	);
};

export default Column;
