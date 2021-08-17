import React, { useEffect } from 'react';
import MainLayout from '@components/_layouts/MainLayout';
import { useLayout } from '@core/contexts';
import Link from '@components/_shared/Link';
 
const About = (): JSX.Element => {
	const { Alert } = useLayout(); 

	useEffect(() => {
		Alert({type: 'danger', message: 'this danger-type alert is for error message'});
	}, []);
	
	return (
		<MainLayout title="About" className="flex-cc col">
			<h1 className="mb-4 text-4xl font-bold">About Page</h1>
			<Link href="/" className="px-4 py-2 text-white bg-blue-400" zoomed>TO HOME</Link>
		</MainLayout>
	);
};

export default About;
