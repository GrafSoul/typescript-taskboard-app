// Core
import { FC } from 'react';

// Hook
import { useAppState } from 'state/AppStateContext';

// Component
import { AddNewItem } from 'AddNewItem';
import { Column } from 'Column';

// State
import { addList } from 'state/actions';

// Styled components
import { AppContainer } from 'styles';

const App: FC = () => {
	const { lists, dispatch } = useAppState();

	return (
		<AppContainer>
			{lists.map(list => (
				<Column text={list.text} key={list.id} id={list.id} />
			))}
			<AddNewItem
				toggleButtonText='+ Add another list'
				onAdd={text => dispatch(addList(text))}
			/>
		</AppContainer>
	);
};

export default App;
