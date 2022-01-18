// Core
import { FC } from 'react';

// Component
import { AddNewItem } from 'AddNewItem';
import { Column } from 'Column';
import { Card } from 'Card';

// Styled components
import { AppContainer } from 'styles';

const App: FC = () => {
	return (
		<AppContainer>
			<Column text='To Do'>
				<Card text='Generate app scaffold' />
			</Column>
			<Column text='In Progress'>
				<Card text='Learn Typescript' />
			</Column>
			<Column text='Done'>
				<Card text='Begin to use static typing' />
			</Column>
			<AddNewItem toggleButtonText='+ Add another list' onAdd={console.log} />
		</AppContainer>
	);
};

export default App;
