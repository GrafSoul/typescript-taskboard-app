// Core
import { FC, useRef } from 'react';

// Hook
import { useAppState } from 'state/AppStateContext';
import { useItemDrag } from 'utils/useItemDrag';

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
	const ref = useRef<HTMLDivElement>(null);

	const { drag } = useItemDrag({ type: 'COLUMN', id, text });
	drag(ref);

	return (
		<ColumnContainer ref={ref}>
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
