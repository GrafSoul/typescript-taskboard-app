// Core
import { FC } from 'react';

// Hook
import { useAppState } from 'state/AppStateContext';

// Component
import { AddNewItem } from 'AddNewItem';
import { Column } from 'Column';

// Styled components
import { AppContainer } from 'styles';

const App: FC = () => {
	const { lists } = useAppState();

	return (
		<AppContainer>
			{lists.map(list => (
				<Column text={list.text} key={list.id} id={list.id} />
			))}
			<AddNewItem toggleButtonText='+ Add another list' onAdd={console.log} />
		</AppContainer>
	);
};

export default App;
