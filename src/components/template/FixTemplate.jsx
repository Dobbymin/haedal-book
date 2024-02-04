import BookNavBar from '../organisms/BookNavBar/BookNavBar';
import Header from '../organisms/Header/Header';

import BookInfo from '../organisms/BookInfo/BookInfo';
const FixTemplate = () => {
	return (
		<>
			<Header />
			<BookNavBar />
			<BookInfo type="edit" />
		</>
	);
};

export default FixTemplate;
