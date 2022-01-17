// Core
import { FC } from 'react';

// Components
import { CardContainer } from 'styles';

type CardProps = {
	text?: string;
};

export const Card: FC<CardProps> = ({ text }: CardProps) => {
	return <CardContainer>{text}</CardContainer>;
};

export default Card;
