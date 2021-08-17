import React, { useEffect } from 'react';
import MainLayout from '@components/_layouts/MainLayout';
import { useLayout } from '@core/contexts';
import Link from '@components/_shared/Link';
 
const Index = (): JSX.Element => {
	const { Alert } = useLayout(); 

	useEffect(() => {
		Alert({type: 'success', message: 'Hello World'});
	}, []);
	
	return (
		<MainLayout title="Home" className="flex-cc col">
			<h1 className="text-4xl font-bold text-center">Next Blog with Prismic Starter</h1>
			<p className="mb-16 text-center">The approach of building blogging site with Prismic CMS and Next&apos;s cool SSG</p>
			<div className="flex-cc gap-4">
				<Link href="/about" className="px-4 py-2 text-white bg-blue-400" zoomed>TO ABOUT</Link>
				<Link href="/form" className="px-4 py-2 text-white bg-blue-400" zoomed>TO FORM</Link>
			</div>
		</MainLayout>
	);
};

// Above are sample use of
// useLayout: which is a custom hooks in context management
// Alert: custom popping out alert box that automatically vanish
// Link: custom link that can be styled into anything and is so comfortable
// MainLayout: open 'components/_layout/', that is the place where you put navbar and footer, not here

export default Index;
