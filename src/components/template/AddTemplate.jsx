import BookInfo from '../organisms/BookInfo/BookInfo';
import BookNavBar from '../organisms/BookNavBar/BookNavBar';
import Header from '../organisms/Header/Header';

const AddTemplate = () => {
	return (
		<>
			<Header />
			<BookNavBar />
			<BookInfo type="add" />
		</>
	);
};

export default AddTemplate;
