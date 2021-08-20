import React from 'react';
import MainLayout from '@components/_layouts/MainLayout';
import { queryAllBlogpost } from '@core/prismic/client';
import useDebug from '@core/hooks/useDebug';
import Link from '@components/_shared/Link';
import { RichText } from 'prismic-reactjs';

interface Props {
	posts: any
}

const Blog = ({posts}: Props): JSX.Element => {
	useDebug(posts);

	return (
		<MainLayout title="Blog" className="flex-sc col">
			<div className="grid">
				{posts.map((item, i) => (
					<Link href={`/blog/${item.uid}`} key={i}>
						<h2>{RichText.asText(item.data.title)}</h2>
					</Link>
				))}
			</div>
		</MainLayout>
	);
};

//static site generation

export const getStaticProps = async () => {

	const posts = await queryAllBlogpost();

	return {
		props: {
			posts
		}
	};
};

export default Blog;
