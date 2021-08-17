import React from 'react';
import Head from 'next/head';
import AlertHandler from '@components/_shared/AlertHandler';
import { useLayout } from '@core/contexts/index';
import useClearance from '@core/hooks/useClearance';

interface Props {
	children: React.ReactNode
	title?: string
	className?: string
}

const DynamicLayout = ({children, title, className}: Props): JSX.Element => {
	const { alert_value, resetAlert } = useLayout();
	const [clearance, upperRef, lowerRef] = useClearance();

	return (
		<>
			<Head>
				{title && <title>{title} — Hybrid</title>}
			</Head>

			<header ref={upperRef}>
				{/* Navbar things */}
			</header>

			<main style={{minHeight: clearance}} className={`${className} overflow-x-hidden`}>
				{children}
			</main>

			<footer ref={lowerRef}>
				{/* Footer things */}
			</footer>

			{alert_value && <AlertHandler type={alert_value.type} message={alert_value.message} handleClose={resetAlert} key={Math.random()}/>}
		</>
	);
};

export default DynamicLayout;
