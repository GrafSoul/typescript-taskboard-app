// Core
import { FC, ReactNode } from 'react';

// Styled Components
import { ColumnContainer, ColumnTitle } from './styles';

type ColumnProps = {
	text?: string;
	children?: ReactNode;
};

export const Column: FC<ColumnProps> = ({ text, children }) => {
	return (
		<ColumnContainer>
			<ColumnTitle>{text}</ColumnTitle>
			{children}
		</ColumnContainer>
	);
};

export default Column;
