// Core
import { FC } from 'react';

// Styled Components
import { CardContainer } from 'styles';

type CardProps = {
	text: string;
	id: string;
};

export const Card: FC<CardProps> = ({ text }) => {
	return <CardContainer>{text}</CardContainer>;
};
