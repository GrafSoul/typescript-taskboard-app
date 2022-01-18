// Core
import { KeyboardEvent, useState } from 'react';

// Styled components
import { NewItemFormContainer, NewItemButton, NewItemInput } from 'styles';

// Utils
import { useFocus } from 'utils/useFocus';

type NewItemFormProps = {
	onAdd(text: string): void;
};

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
	const [text, setText] = useState('');
	const inputRef = useFocus();

	const handleAddText = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			onAdd(text);
		}
	};

	return (
		<NewItemFormContainer>
			<NewItemInput
				ref={inputRef}
				value={text}
				onKeyPress={handleAddText}
				onChange={e => setText(e.target.value)}
			/>
			<NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
		</NewItemFormContainer>
	);
};
