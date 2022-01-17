// Core
import { FC } from 'react';

// Styled components
import { AppContainer } from 'styles';
import { Column } from 'Column';
import { Card } from 'Card';
import { Counter } from 'Counter';

const App: FC = () => {
	return (
		<AppContainer>
			<Counter />
			<Column />
			<Card />
			Columns will go here
		</AppContainer>
	);
};

export default App;
