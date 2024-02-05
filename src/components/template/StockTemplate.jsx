import BookNavBar from '../organisms/BookNavBar/BookNavBar';
import Header from '../organisms/Header/Header';
import BookImg from '../../assets/BookImage.png';
import StockMetaData from '../organisms/Stock/StockMetaData';
function StockTemplate() {
	const bookData = {
		title: '토비의 스프링',
		author: '김토비',
		price: 36000,
		stock: 10,
		category: '판타지',
		description: '토비와의 두근두근 스프링 여행!',
	};
	return (
		<>
			<Header />
			<BookNavBar />
			<div className="rootContainer flex justify-center text-[11px]">
				<div className="bookImg mr-[30px]">
					<img src={BookImg} alt="book Example Image" />
				</div>
				<StockMetaData {...bookData} />
			</div>
		</>
	);
}

export default StockTemplate;
