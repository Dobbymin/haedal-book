const MyInfoTemplate = () => {
	let titleInactiveStyle =
		'inline-block px-[80px] sm:px-[100px] py-[7px] bg-[#C7C7C7] font-light text-[17px] sm:text-[20px] border-b-2 border-transparent hover:text-[#FF7E00] hover:border-gray-300';
	let titleActiveStyle =
		'inline-block px-[80px] sm:px-[100px] py-[7px] text-[17px] sm:text-[20px] font-bold active text-[#FF7E00] border-[#FF7E00]';

	let listStyle = 'border-b-[1px] py-[10px]';
	return (
		<>
			<div className="md:flex justify-center mt-[50px]">
				<div className="leftSide flex-col mb-[50px]">
					<div className="bookListNavBar text-sm font-medium text-center text-gray-500">
						<ul className="flex border-b-[1px] border-[#FF7E00]">
							<li>
								<a href="#" className={`${titleActiveStyle} rounded-tl-lg`}>
									빌린 책 조회
								</a>
							</li>
							<li>
								<a
									href="#"
									className={`${titleInactiveStyle} rounded-tr-lg`}
									aria-current="page"
								>
									구매한 책 조회
								</a>
							</li>
						</ul>
					</div>
					<div className="bookListContents pl-5">
						<ol className="list-decimal">
							<li className={listStyle}>토비의 스프링</li>
							<li className={listStyle}>IT 5분 백과사전</li>
							<li className={listStyle}>클린코드</li>
							<li className={listStyle}>모던 자바스크립트 Deep Dive</li>
							<li className={listStyle}>HTTP 완벽 가이드</li>
						</ol>
					</div>
				</div>
				<div className="rightSide flex-col sm:ml-[90px] w-[489px]">
					<div className="infoSector">
						<div className="infoTitle flex justify-between pb-[7px] border-b-[1px] border-[#FF7E00] font-medium">
							<a className="inline-block font-bold text-[20px] text-[#FF7E00] border-transparent rounded-t-lg">
								내 정보
							</a>
							<button className="bg-[#FF7E00] px-[15px] rounded-md text-white text-[12px]">
								조회
							</button>
						</div>
						<div className="infoList">
							<ul>
								<li className={listStyle}>이름: 홍길동</li>
								<li className={listStyle}>나이: 0세</li>
								<li className={listStyle}>이메일: example123@knu.ac.kr</li>
								<li className={listStyle}>
									<span className="mr-[20px]">보유한 돈: 123,000 원</span>
									<button className="text-[#FF7E00] font-semibold">
										새로고침
									</button>
								</li>
								<li className="flex justify-end">
									<button className="text-[#FF7E00] font-semibold my-[10px] ">
										회원 탈퇴
									</button>
								</li>
							</ul>
						</div>
					</div>
					<div className="moneySector mt-[30px]">
						<div className="moneyTitle border-b-[1px] border-[#FF7E00] py-[7px]">
							<a
								href="#"
								className="inline-block font-bold text-[20px] text-[#FF7E00] border-transparent rounded-t-lg"
							>
								돈 충전하기
							</a>
						</div>
						<div className="moneyList">
							<ul>
								<li className={listStyle}>
									<span className="mr-1">충전할 금액: </span>
									<input
										type="number"
										name="money input"
										id="moneyInput"
										className="mr-1 border border-gray-300 rounded-md"
									/>
									<span className="mx-2">원</span>
									<button className="text-[#FF7E00] font-semibold">
										충전하기
									</button>
								</li>
								<li className={listStyle}>
									<span className="mr-1">충전 후 보유한 돈: </span>
									133,000원
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MyInfoTemplate;
