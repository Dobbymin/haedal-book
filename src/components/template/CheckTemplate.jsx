import BookNavBar from '../organisms/BookNavBar/BookNavBar';
import Header from '../organisms/Header/Header';
import ArrayButton from '../common/Buttons/CheckPage/ArrayButton';
import CategoryButton from '../common/Buttons/CheckPage/CategoryButton';

const CheckTemplate = () => {
	return (
		<>
			<Header />
			<div className="w-full h-[778px] px-[120px] pt-5 pb-[50px] flex-col justify-start items-center inline-flex">
				<BookNavBar />
				<div className="w-[971.56px] px-2.5 pb-2.5 bg-white flex-col justify-center items-center gap-2.5 flex">
					<div className="w-[951.56px] h-[446px] relative">
						<div className="w-[951.56px] h-[26px] left-0 top-0 absolute bg-white justify-between items-center inline-flex">
							<div className="w-[216px] relative">
								<CategoryButton>판타지</CategoryButton>
								<CategoryButton>로맨스</CategoryButton>
								<CategoryButton>호러</CategoryButton>
								{/* <div className="w-[70px] h-[26px] px-3.5 py-1.5 left-0 top-0 absolute bg-white rounded border border-orange-500 justify-center items-center gap-[5px] inline-flex">
									<button className="text-orange-500 text-[15px] font-normal font-['Kavoon']">
										판타지
									</button>
								</div> */}
								{/* <div className="w-[70px] h-[26px] px-3.5 py-1.5 left-[80px] top-0 absolute bg-white rounded border border-orange-500 justify-center items-center gap-[5px] inline-flex">
									<button className="text-orange-500 text-[15px] font-normal font-['Kavoon']">
										로맨스
									</button>
								</div>
								<div className="w-14 h-[26px] px-3.5 py-1.5 left-[160px] top-0 absolute bg-white rounded border border-orange-500 justify-center items-center gap-[5px] inline-flex">
									<button className="text-orange-500 text-[15px] font-normal font-['Kavoon']">
										호러
									</button>
								</div> */}
							</div>
							<div className="h-[26px] justify-start items-center gap-3 flex">
								<ArrayButton>이름</ArrayButton>
								<ArrayButton>날짜</ArrayButton>
								<ArrayButton>가격</ArrayButton>
								<ArrayButton>재고</ArrayButton>
							</div>
						</div>
						<div className="w-[951.56px] h-[410px] left-0 top-[36px] absolute">
							<div className="w-[951.56px] h-[200px] left-0 top-0 absolute">
								<div className="w-[150px] h-[200px] px-0.5 left-0 top-0 absolute rounded-[3px] border border-stone-300 flex-col justify-center items-center gap-[5px] inline-flex">
									<img
										className="w-[121px] h-[145px]"
										src="https://via.placeholder.com/121x145"
									/>
									<div className="w-[133px] h-[38px] flex-col justify-between items-start flex">
										<div className="w-[88px]">
											<span className="text-black text-xs font-normal font-['Kavoon']">
												토비의 스프링{' '}
											</span>
											<span className="text-black text-xs font-normal font-['Inter']">
												3.1
											</span>
										</div>
										<div className="h-[10.50px] relative">
											<div className="w-[41.86px] left-0 top-[0.50px] absolute text-center text-black text-[8px] font-normal font-['Inter']">
												재고 : 10 권
											</div>
											<div className="w-[39.65px] left-[93.35px] top-0 absolute text-center text-black text-[8px] font-normal font-['Inter']">
												36,000원
											</div>
										</div>
									</div>
								</div>
								<div className="w-[150px] h-[200px] pl-[8.94px] pr-[8.06px] py-1.5 left-[161.56px] top-0 absolute rounded-[3px] border border-stone-300 flex-col justify-center items-center gap-[5px] inline-flex">
									<img
										className="w-[121px] h-[145px]"
										src="https://via.placeholder.com/121x145"
									/>
									<div className="self-stretch h-[38px] flex-col justify-between items-start inline-flex">
										<div className="w-[88px]">
											<span className="text-black text-xs font-normal font-['Kavoon']">
												토비의 스프링{' '}
											</span>
											<span className="text-black text-xs font-normal font-['Inter']">
												3.1
											</span>
										</div>
										<div className="h-[10.50px] relative">
											<div className="w-[41.86px] left-0 top-[0.50px] absolute text-center text-black text-[8px] font-normal font-['Inter']">
												재고 : 10 권
											</div>
											<div className="w-[39.65px] left-[93.35px] top-0 absolute text-center text-black text-[8px] font-normal font-['Inter']">
												36,000원
											</div>
										</div>
									</div>
								</div>
								<div className="w-[150px] h-[200px] pl-[8.94px] pr-[8.06px] py-1.5 left-[321.56px] top-0 absolute rounded-[3px] border border-stone-300 flex-col justify-center items-center gap-[5px] inline-flex">
									<img
										className="w-[121px] h-[145px]"
										src="https://via.placeholder.com/121x145"
									/>
									<div className="self-stretch h-[38px] flex-col justify-between items-start inline-flex">
										<div className="w-[88px]">
											<span className="text-black text-xs font-normal font-['Kavoon']">
												토비의 스프링{' '}
											</span>
											<span className="text-black text-xs font-normal font-['Inter']">
												3.1
											</span>
										</div>
										<div className="h-[10.50px] relative">
											<div className="w-[41.86px] left-0 top-[0.50px] absolute text-center text-black text-[8px] font-normal font-['Inter']">
												재고 : 10 권
											</div>
											<div className="w-[39.65px] left-[93.35px] top-0 absolute text-center text-black text-[8px] font-normal font-['Inter']">
												36,000원
											</div>
										</div>
									</div>
								</div>
								<div className="w-[150px] h-[200px] pl-[8.94px] pr-[8.06px] py-1.5 left-[481.56px] top-0 absolute rounded-[3px] border border-stone-300 flex-col justify-center items-center gap-[5px] inline-flex">
									<img
										className="w-[121px] h-[145px]"
										src="https://via.placeholder.com/121x145"
									/>
									<div className="self-stretch h-[38px] flex-col justify-between items-start inline-flex">
										<div className="w-[88px]">
											<span className="text-black text-xs font-normal font-['Kavoon']">
												토비의 스프링{' '}
											</span>
											<span className="text-black text-xs font-normal font-['Inter']">
												3.1
											</span>
										</div>
										<div className="h-[10.50px] relative">
											<div className="w-[41.86px] left-0 top-[0.50px] absolute text-center text-black text-[8px] font-normal font-['Inter']">
												재고 : 10 권
											</div>
											<div className="w-[39.65px] left-[93.35px] top-0 absolute text-center text-black text-[8px] font-normal font-['Inter']">
												36,000원
											</div>
										</div>
									</div>
								</div>
								<div className="w-[150px] h-[200px] pl-[8.94px] pr-[8.06px] py-1.5 left-[641.56px] top-0 absolute rounded-[3px] border border-stone-300 flex-col justify-center items-center gap-[5px] inline-flex">
									<img
										className="w-[121px] h-[145px]"
										src="https://via.placeholder.com/121x145"
									/>
									<div className="self-stretch h-[38px] flex-col justify-between items-start inline-flex">
										<div className="w-[88px]">
											<span className="text-black text-xs font-normal font-['Kavoon']">
												토비의 스프링{' '}
											</span>
											<span className="text-black text-xs font-normal font-['Inter']">
												3.1
											</span>
										</div>
										<div className="h-[10.50px] relative">
											<div className="w-[41.86px] left-0 top-[0.50px] absolute text-center text-black text-[8px] font-normal font-['Inter']">
												재고 : 10 권
											</div>
											<div className="w-[39.65px] left-[93.35px] top-0 absolute text-center text-black text-[8px] font-normal font-['Inter']">
												36,000원
											</div>
										</div>
									</div>
								</div>
								<div className="w-[150px] h-[200px] pl-[8.94px] pr-[8.06px] py-1.5 left-[801.56px] top-0 absolute rounded-[3px] border border-stone-300 flex-col justify-center items-center gap-[5px] inline-flex">
									<img
										className="w-[121px] h-[145px]"
										src="https://via.placeholder.com/121x145"
									/>
									<div className="self-stretch h-[38px] flex-col justify-between items-start inline-flex">
										<div className="w-[88px]">
											<span className="text-black text-xs font-normal font-['Kavoon']">
												토비의 스프링{' '}
											</span>
											<span className="text-black text-xs font-normal font-['Inter']">
												3.1
											</span>
										</div>
										<div className="h-[10.50px] relative">
											<div className="w-[41.86px] left-0 top-[0.50px] absolute text-center text-black text-[8px] font-normal font-['Inter']">
												재고 : 10 권
											</div>
											<div className="w-[39.65px] left-[93.35px] top-0 absolute text-center text-black text-[8px] font-normal font-['Inter']">
												36,000원
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="w-[950px] h-[200px] left-[0.78px] top-[210px] absolute">
								<div className="w-[150px] h-[200px] pl-[8.72px] pr-[8.28px] py-1.5 left-0 top-0 absolute rounded-[3px] border border-stone-300 flex-col justify-center items-center gap-[5px] inline-flex">
									<img
										className="w-[121px] h-[145px]"
										src="https://via.placeholder.com/121x145"
									/>
									<div className="self-stretch h-[38px] flex-col justify-between items-start inline-flex">
										<div className="w-[88px]">
											<span className="text-black text-xs font-normal font-['Kavoon']">
												토비의 스프링{' '}
											</span>
											<span className="text-black text-xs font-normal font-['Inter']">
												3.1
											</span>
										</div>
										<div className="h-[10.50px] relative">
											<div className="w-[41.86px] left-0 top-[0.50px] absolute text-center text-black text-[8px] font-normal font-['Inter']">
												재고 : 10 권
											</div>
											<div className="w-[39.65px] left-[93.35px] top-0 absolute text-center text-black text-[8px] font-normal font-['Inter']">
												36,000원
											</div>
										</div>
									</div>
								</div>
								<div className="w-[150px] h-[200px] pl-[8.72px] pr-[8.28px] py-1.5 left-[160px] top-0 absolute rounded-[3px] border border-stone-300 flex-col justify-center items-center gap-[5px] inline-flex">
									<img
										className="w-[121px] h-[145px]"
										src="https://via.placeholder.com/121x145"
									/>
									<div className="self-stretch h-[38px] flex-col justify-between items-start inline-flex">
										<div className="w-[88px]">
											<span className="text-black text-xs font-normal font-['Kavoon']">
												토비의 스프링{' '}
											</span>
											<span className="text-black text-xs font-normal font-['Inter']">
												3.1
											</span>
										</div>
										<div className="h-[10.50px] relative">
											<div className="w-[41.86px] left-0 top-[0.50px] absolute text-center text-black text-[8px] font-normal font-['Inter']">
												재고 : 10 권
											</div>
											<div className="w-[39.65px] left-[93.35px] top-0 absolute text-center text-black text-[8px] font-normal font-['Inter']">
												36,000원
											</div>
										</div>
									</div>
								</div>
								<div className="w-[150px] h-[200px] pl-[8.72px] pr-[8.28px] py-1.5 left-[320px] top-0 absolute rounded-[3px] border border-stone-300 flex-col justify-center items-center gap-[5px] inline-flex">
									<img
										className="w-[121px] h-[145px]"
										src="https://via.placeholder.com/121x145"
									/>
									<div className="self-stretch h-[38px] flex-col justify-between items-start inline-flex">
										<div className="w-[88px]">
											<span className="text-black text-xs font-normal font-['Kavoon']">
												토비의 스프링{' '}
											</span>
											<span className="text-black text-xs font-normal font-['Inter']">
												3.1
											</span>
										</div>
										<div className="h-[10.50px] relative">
											<div className="w-[41.86px] left-0 top-[0.50px] absolute text-center text-black text-[8px] font-normal font-['Inter']">
												재고 : 10 권
											</div>
											<div className="w-[39.65px] left-[93.35px] top-0 absolute text-center text-black text-[8px] font-normal font-['Inter']">
												36,000원
											</div>
										</div>
									</div>
								</div>
								<div className="w-[150px] h-[200px] pl-[8.72px] pr-[8.28px] py-1.5 left-[480px] top-0 absolute rounded-[3px] border border-stone-300 flex-col justify-center items-center gap-[5px] inline-flex">
									<img
										className="w-[121px] h-[145px]"
										src="https://via.placeholder.com/121x145"
									/>
									<div className="self-stretch h-[38px] flex-col justify-between items-start inline-flex">
										<div className="w-[88px]">
											<span className="text-black text-xs font-normal font-['Kavoon']">
												토비의 스프링{' '}
											</span>
											<span className="text-black text-xs font-normal font-['Inter']">
												3.1
											</span>
										</div>
										<div className="h-[10.50px] relative">
											<div className="w-[41.86px] left-0 top-[0.50px] absolute text-center text-black text-[8px] font-normal font-['Inter']">
												재고 : 10 권
											</div>
											<div className="w-[39.65px] left-[93.35px] top-0 absolute text-center text-black text-[8px] font-normal font-['Inter']">
												36,000원
											</div>
										</div>
									</div>
								</div>
								<div className="w-[150px] h-[200px] pl-[8.72px] pr-[8.28px] py-1.5 left-[640px] top-0 absolute rounded-[3px] border border-stone-300 flex-col justify-center items-center gap-[5px] inline-flex">
									<img
										className="w-[121px] h-[145px]"
										src="https://via.placeholder.com/121x145"
									/>
									<div className="self-stretch h-[38px] flex-col justify-between items-start inline-flex">
										<div className="w-[88px]">
											<span className="text-black text-xs font-normal font-['Kavoon']">
												토비의 스프링{' '}
											</span>
											<span className="text-black text-xs font-normal font-['Inter']">
												3.1
											</span>
										</div>
										<div className="h-[10.50px] relative">
											<div className="w-[41.86px] left-0 top-[0.50px] absolute text-center text-black text-[8px] font-normal font-['Inter']">
												재고 : 10 권
											</div>
											<div className="w-[39.65px] left-[93.35px] top-0 absolute text-center text-black text-[8px] font-normal font-['Inter']">
												36,000원
											</div>
										</div>
									</div>
								</div>
								<div className="w-[150px] h-[200px] pl-[8.72px] pr-[8.28px] py-1.5 left-[800px] top-0 absolute rounded-[3px] border border-stone-300 flex-col justify-center items-center gap-[5px] inline-flex">
									<img
										className="w-[121px] h-[145px]"
										src="https://via.placeholder.com/121x145"
									/>
									<div className="self-stretch h-[38px] flex-col justify-between items-start inline-flex">
										<div className="w-[88px]">
											<span className="text-black text-xs font-normal font-['Kavoon']">
												토비의 스프링{' '}
											</span>
											<span className="text-black text-xs font-normal font-['Inter']">
												3.1
											</span>
										</div>
										<div className="h-[10.50px] relative">
											<div className="w-[41.86px] left-0 top-[0.50px] absolute text-center text-black text-[8px] font-normal font-['Inter']">
												재고 : 10 권
											</div>
											<div className="w-[39.65px] left-[93.35px] top-0 absolute text-center text-black text-[8px] font-normal font-['Inter']">
												36,000원
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-[92px] px-2.5 bg-white rounded justify-center items-center inline-flex">
						<div className="w-6 h-6 relative" />
						<div className="text-black text-[13px] font-normal font-['Inter']">
							1 / 4
						</div>
						<div className="w-6 h-6 relative" />
					</div>
				</div>
			</div>
		</>
	);
};

export default CheckTemplate;
