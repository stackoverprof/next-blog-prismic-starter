import Prismic from '@prismicio/client';

const apiEndpoint = process.env.PRISMIC_API;
const accessToken = process.env.NEXT_PUBLIC_PRISMIC_TOKEN || '';

const client = Prismic.client(apiEndpoint, { accessToken });

export const queryAllBlogpost = () => {
	return client.query(
		Prismic.Predicates.at('document.type', 'articles'),
		{ orderings: '[my.articles.release_date desc]' }
	)
		.then(res => res.results);
};

export const queryOneBlogpost = (id) => {
	return client.query(
		Prismic.Predicates.at('my.articles.uid', id)
	)
		.then(res => res.results);
};

export default client;

export interface SliceType {
	items: any[]
	primary: any
	slice_label?: any
	slice_type: string
}

export interface ContentType {
	html_title: string
	route: string
	body: SliceType[]
	layout: { uid: string }
}

export interface LayoutContentType {
	body: SliceType[]
}