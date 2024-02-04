import BookNavBar from '../organisms/BookNavBar/BookNavBar';
import Header from '../organisms/Header/Header';

const AddTemplate = () => {
	let categoryStyle = 'me-6 text-[15px] px-[14px] border-[1px] rounded-md';
	return (
		<>
			<Header />
			<BookNavBar />
			<div className="flex justify-center">
				<div className="contentsContainer flex-col">
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
									<span>원</span>
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
						<p>카테고리</p>

						<ul className="flex flex-wrap items-center text-[#C7C7C7]">
							<li>
								<a href="#" className={categoryStyle}>
									판타지
								</a>
							</li>
							<li>
								<a href="#" className={categoryStyle}>
									로맨스
								</a>
							</li>
							<li>
								<a href="#" className={categoryStyle}>
									호러
								</a>
							</li>
						</ul>
					</div>
					<div className="description">
						<p>설명</p>
						<textarea
							name="description"
							id=""
							className="w-[439px] h-[80px] border-[1px] rounded-md"
						></textarea>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddTemplate;
