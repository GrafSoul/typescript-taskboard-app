// Core
import { FC } from 'react';

// Styled Components
import { CardContainer } from 'styles';

type CardProps = {
	text?: string;
};

export const Card: FC<CardProps> = ({ text }: CardProps) => {
	return <CardContainer>{text}</CardContainer>;
};
