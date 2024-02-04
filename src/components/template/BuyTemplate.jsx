import BookNavBar from '../organisms/BookNavBar/BookNavBar';
import Header from '../organisms/Header/Header';

const BuyTemplate = () => {
	return (
		<>
			<Header />
			<div className="w-full h-[778px] px-[120px] pt-5 pb-[50px] flex-col justify-start items-center inline-flex">
				<BookNavBar />
				<div className="w-[1134px] h-[488px] px-2.5 pb-2.5 bg-white justify-center items-center gap-[30px] inline-flex">
					<div className="w-[195px] h-[241px] rounded border border-neutral-300 justify-center items-center gap-2.5 flex">
						<div className="grow shrink basis-0 self-stretch px-0.5 rounded-[3px] border border-stone-300 flex-col justify-center items-center gap-[5px] inline-flex">
							<img
								className="self-stretch grow shrink basis-0"
								src="https://via.placeholder.com/191x241"
							/>
						</div>
					</div>
					<div className="w-[249px] h-[241px] relative">
						<div className="w-[249px] h-[188px] left-0 top-0 absolute">
							<div className="left-0 top-0 absolute text-black text-[11px] font-normal font-['Inter']">
								책 제목 : 토비의 스프링
							</div>
							<div className="left-0 top-[23px] absolute text-black text-[11px] font-normal font-['Inter']">
								저자 : 김토비
							</div>
							<div className="left-0 top-[46px] absolute text-black text-[11px] font-normal font-['Inter']">
								가격 : 36,000 원
							</div>
							<div className="left-0 top-[69px] absolute text-black text-[11px] font-normal font-['Inter']">
								재고 : 10 권
							</div>
							<div className="left-0 top-[92px] absolute text-black text-[11px] font-normal font-['Inter']">
								카테고리 : 판타지
							</div>
							<div className="left-0 top-[115px] absolute text-black text-[11px] font-normal font-['Inter']">
								설명
							</div>
							<div className="w-[249px] h-[50px] px-1.5 py-2 left-0 top-[138px] absolute rounded border border-neutral-300 justify-start items-start gap-2.5 inline-flex">
								<div className="text-black text-[11px] font-normal font-['Inter']">
									토비와의 두근두근 스프링 여행!
								</div>
							</div>
						</div>
						<button className="w-[249px] h-[23px] px-2.5 py-[5px] left-0 top-[218px] absolute rounded border border-orange-500 justify-center items-center gap-2.5 inline-flex">
							<div className="text-orange-500 text-[11px] font-normal font-['Inter']">
								책 구입하기
							</div>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default BuyTemplate;
