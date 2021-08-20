import React from 'react';
import MainLayout from '@components/_layouts/MainLayout';
import client, { queryOneBlogpost } from '@core/prismic/client';
import useDebug from '@core/hooks/useDebug';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-reactjs';

interface Props {
	post: any;
}

const EachArticle = ({post}: Props): JSX.Element => {
	useDebug(post);
	
	return (
		<MainLayout title="About" className="flex-sc col">
			<h1>{RichText.asText(post[0].data.title)}</h1>
			<div className="css-force-537834">
				{RichText.render(post[0].data.article)}
			</div>
			<style dangerouslySetInnerHTML={{__html: `
				.css-force-537834 p { 
					text-align: center;
				}
			`}}/>
		</MainLayout>
	);
};


export const getStaticProps = async (context: any) => {
	const { id } = context.params;

	const post = await queryOneBlogpost(id);

	return {
		props: { post }
	};
};

export default EachArticle;

export const getStaticPaths = async () => {
	const docs = await client
		.query(Prismic.Predicates.at('document.type', 'articles'))
		.then((res) => res.results);

	const paths = docs.map((doc) => {
		return { params: { id: doc.uid } };
	});

	console.log(paths);
	

	return {
		paths: paths,
		fallback: false
	};
};