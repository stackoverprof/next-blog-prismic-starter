import { useRouter } from 'next/dist/client/router';
import React from 'react';

const meta = {
	title: 'My Site',
	domain: 'http://my-site.com/',
	description: 'Site description that contains some information about what is your site about and blablabla',
	image: 'https://images.unsplash.com/photo-1629058622223-93665bf5d046?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
};

const SEOTags = () => {
	const router = useRouter();

	return (
		<>
			<meta name="robots" content="follow, index" />
			<meta name="description" content={meta.description} />
			<meta property="og:url" content={meta.domain + router.asPath} />
			<link rel="canonical" href={meta.domain + router.asPath} />
			
			<meta property="og:type" content="website" />
			<meta property="og:title" content={meta.title} />
			<meta property="og:site_name" content={meta.title} />
			<meta property="og:description" content={meta.description} />
			<meta property="og:image" name="image" content={meta.image} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content={meta.title} />
			<meta name="twitter:title" content={meta.title} />
			<meta name="twitter:description" content={meta.description} />
			<meta name="twitter:image" content={meta.image} />
		</>
	);
};

export default SEOTags;