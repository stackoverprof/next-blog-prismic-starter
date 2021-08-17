import React from 'react';
import MainLayout from '@components/_layouts/MainLayout';
import Link from '@components/_shared/Link';
import useForm from '@core/hooks/useForm';

interface FormType {
	nickname: string;
	city: string;
	story: string;
}

const Form = (): JSX.Element => {
	const [form, mutateForm, resetForm] = useForm<FormType>({
		nickname: '',
		city: '',
		story: ''
	});

	const handleSubmit = e => {
		e.preventDefault();
		console.log(form);
		resetForm();
	};

	return (
		<MainLayout title="About" className="flex-cc col">
			<h1 className="mb-4 text-4xl font-bold">Form</h1>

			<form onSubmit={handleSubmit} className="flex-cs col gap-4 mb-12">
				<input type="text" name="nickname" value={form.nickname} onChange={mutateForm} placeholder="who are you?" />
				<input type="text" name="city" value={form.city} onChange={mutateForm} placeholder="where you from?" />
				<textarea name="story" value={form.story} onChange={mutateForm} placeholder="What is your story?" />
				<button type="submit">SUBMIT</button>
			</form>
			
			<Link href="/" className="px-4 py-2 text-white bg-blue-400" zoomed>TO HOME</Link>
		</MainLayout>
	);
};

// Example use of useForm

export default Form;
