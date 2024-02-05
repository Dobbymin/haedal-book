import BookInfo from '../organisms/BookInfo/BookInfo';
import BookNavBar from '../organisms/BookNavBar/BookNavBar';
import Header from '../organisms/Header/Header';

const AddTemplate = () => {
	const bookData = {
		title: '',
		author: '',
		price: 10000,
		release: '2024년 2월 6일',
		description: '',
	};
	const categories = ['판타지', '로맨스', '호러'];
	return (
		<>
			<Header />
			<BookNavBar />
			<BookInfo type="add" bookData={bookData} categories={categories} />
		</>
	);
};
export default AddTemplate;
