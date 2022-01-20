// Core
import { FC } from 'react';

// Hook
import { useAppState } from 'state/AppStateContext';

// Component
import { AddNewItem } from 'AddNewItem';
import { Card } from 'Card';

// State
import { addTask } from 'state/actions';

// Styled Components
import { ColumnContainer, ColumnTitle } from 'styles';

type ColumnProps = {
	text: string;
	id: string;
};

export const Column: FC<ColumnProps> = ({ text, id }) => {
	const { getTasksByListId, dispatch } = useAppState();
	const tasks = getTasksByListId(id);
	return (
		<ColumnContainer>
			<ColumnTitle>{text}</ColumnTitle>
			{tasks.map(task => (
				<Card text={task.text} key={task.id} id={task.id} />
			))}
			<AddNewItem
				toggleButtonText='+ Add another card'
				onAdd={newText => dispatch(addTask(newText, id))}
				dark
			/>
		</ColumnContainer>
	);
};
