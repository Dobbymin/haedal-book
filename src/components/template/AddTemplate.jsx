import { Link } from 'react-router-dom';
import BookNavBar from '../organisms/BookNavBar/BookNavBar';
import Header from '../organisms/Header/Header';

const AddTemplate = () => {
	let categoryStyle = 'me-6 text-[15px] px-[14px] border-[1px] rounded-md';
	return (
		<>
			<Header />
			<BookNavBar />
			<div className="flex justify-center mb-14">
				<div className="contentsContainer flex-col ">
					<div className="dataContainer flex">
						<div className="bookImg mr-[20px]">
							<img
								className="self-stretch grow shrink basis-0"
								src="https://via.placeholder.com/191x241"
							/>
						</div>
						<div className="metaData">
							<ul>
								<li>
									<p className="text-xs my-[5px]">책 제목</p>
									<input
										type="text"
										name="title"
										id="title"
										className="border-[1px] w-[228px] h-[20px] rounded-md"
									/>
								</li>
								<li>
									<p className="text-xs my-[5px]">저자</p>
									<input
										type="text"
										name="title"
										id="title"
										className="border-[1px] w-[228px] h-[20px] rounded-md"
									/>
								</li>
								<li>
									<p className="text-xs my-[5px]">가격</p>
									<input
										type="text"
										name="title"
										id="title"
										className="border-[1px] w-[207px] h-[20px] rounded-md me-2"
									/>
									<span className="text-xs">원</span>
								</li>
								<li>
									<p className="text-xs my-[5px]">출판일</p>
									<input
										type="text"
										name="title"
										id="title"
										className="border-[1px] w-[228px] h-[20px] rounded-md"
									/>
								</li>
							</ul>
						</div>
					</div>
					<div className="category">
						<p className="my-[10px]">카테고리</p>

						<ul className="flex flex-wrap items-center text-[#C7C7C7]">
							<li>
								<Link to="#" className={categoryStyle}>
									판타지
								</Link>
							</li>
							<li>
								<Link to="#" className={categoryStyle}>
									로맨스
								</Link>
							</li>
							<li>
								<Link to="#" className={categoryStyle}>
									호러
								</Link>
							</li>
						</ul>
					</div>
					<div className="description flex-col">
						<div className="descriptionLabel">
							<p className="my-[10px]">설명</p>
						</div>
						<textarea
							name="description"
							id=""
							className="w-[439px] h-[80px] border-[1px] rounded-md mb-[30px]"
						></textarea>
						<div className="apply text-center">
							<Link
								href="#"
								className="px-[10px] py-[5px] text-[#FF7E00] border-[1px] border-[#FF7E00] rounded-md"
							>
								책 등록하기
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddTemplate;
