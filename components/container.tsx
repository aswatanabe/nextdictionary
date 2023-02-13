import React from 'react';
import styles from 'styles/container.module.css';

type Props={
	children: React.ReactNode;
	large?: boolean;
};

export function Container({ children, large = false }: Props) {
	return (
		<div className={large ? styles.large : styles.default}>
			{children}
		</div>
	);
}