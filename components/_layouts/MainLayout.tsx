import React from 'react';
import useClearance from '@core/hooks/useClearance';
import { useLayout } from '@core/contexts';
import AlertHandler from '@components/_shared/AlertHandler';
import SEOTags from '@components/_shared/SEOTags';

interface Props {
	children: React.ReactNode
	title?: string
	className?: string
	style?: React.CSSProperties
}

const MainLayout = ({children, title, className, style}: Props): JSX.Element => {
	const { alert_value, resetAlert } = useLayout();
	const [clearance, upperRef, lowerRef] = useClearance();

	return (
		<>
			<SEOTags title={title} />

			<header ref={upperRef}>
				{/* Navbar things */}
			</header>

			<main style={{minHeight: clearance, ...style}} className={className}>
				{children}
			</main>

			<footer ref={lowerRef}>
				{/* Footer things */}
			</footer>

			{alert_value && <AlertHandler type={alert_value.type} message={alert_value.message} handleClose={resetAlert} key={Math.random()}/>}
		</>
	);
};

export default MainLayout;
