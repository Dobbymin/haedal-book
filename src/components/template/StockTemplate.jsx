import BookNavBar from '../organisms/BookNavBar/BookNavBar';
import Header from '../organisms/Header/Header';
import BookImg from '../../assets/BookImage.png';
const StockTemplate = () => {
	return (
		<>
			<Header />
			<BookNavBar />
			<div className="rootContainer flex justify-center text-[11px]">
				<div className="bookImg mr-[30px]">
					<img src={BookImg} alt="book Example Image" />
				</div>
				<div className="bookInfo mt-4">
					<ul className="">
						<li className="mb-1">
							<span className="mr-1">책 제목:</span>
							{'토비의 스프링'}
						</li>
						<li className="my-1">
							<span className="mr-1">저자: </span>
							{'김토비'}
						</li>
						<li className="my-1">
							<span className="mr-1">가격: </span>
							{'36,000'}원
						</li>
						<li className="my-1">
							<span className="mr-1">재고:</span>
							<input
								type="number"
								name="stockNum"
								className="me-2 border w-[42px] h-[14px] rounded-[4px]"
								value={10}
							/>
							<span className="me-2">권</span>
							<button className="editBtn text-[8px] text-[#FF7E00] px-2 border-[1px] border-[#FF7E00] rounded-md">
								수정
							</button>
						</li>
						<li className="my-1">
							<span className="mr-1">카테고리: </span>
							<span>{'판타지'}</span>
						</li>
						<li className="my-1">
							<p className="my-1">설명</p>
							<textarea
								name="description"
								className="w-[249px] h-[39px] border text-[11px] rounded-sm"
								value={'토비와의 두근두근 스프링 여행!'}
							></textarea>
						</li>
						<li className="my-4">
							<button className="w-[249px] y-[13px] border-[#FF7E00] border-[1px] text-[#FF7E00] rounded-[4px]">
								재고 수정하기
							</button>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default StockTemplate;
