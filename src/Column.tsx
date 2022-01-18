// Core
import { FC, ReactNode } from 'react';

// Component
import { AddNewItem } from 'AddNewItem';

// Styled Components
import { ColumnContainer, ColumnTitle } from 'styles';

type ColumnProps = {
	text?: string;
	children?: ReactNode;
};

export const Column: FC<ColumnProps> = ({ text, children }) => {
	return (
		<ColumnContainer>
			<ColumnTitle>{text}</ColumnTitle>
			{children}
			<AddNewItem toggleButtonText='+ Add another task' onAdd={console.log} dark />
		</ColumnContainer>
	);
};
