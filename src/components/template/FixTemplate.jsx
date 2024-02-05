import BookNavBar from '../organisms/BookNavBar/BookNavBar';
import Header from '../organisms/Header/Header';

import BookInfo from '../organisms/BookInfo/BookInfo';
const FixTemplate = () => {
	const bookData = {
		title: '토비의 스프링',
		author: '김토비',
		price: 10000,
		release: '2024년 2월 6일',
		description: '스프링을 공부하는 책',
	};
	const categories = ['판타지', '로맨스', '호러'];

	return (
		<>
			<Header />
			<BookNavBar />
			<BookInfo type="edit" bookData={bookData} categories={categories} />
		</>
	);
};

export default FixTemplate;
