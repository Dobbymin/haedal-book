import { Link } from 'react-router-dom';
import { ControlBtn } from '../../common/Buttons/ControlBtn';
function BookImg() {
	return (
		<div className="bookImg mr-[20px]">
			<img
				className="self-stretch grow shrink basis-0"
				src="https://via.placeholder.com/191x241"
			/>
		</div>
	);
}
function MetaData({ title, author, price, release }) {
	return (
		<div className="metaData">
			<ul>
				<li>
					<p className="text-xs my-[5px]">책 제목</p>
					<input
						type="text"
						name="title"
						id="title"
						className="border-[1px] w-[228px] h-[20px] rounded-md"
						value={title}
					/>
				</li>
				<li>
					<p className="text-xs my-[5px]">저자</p>
					<input
						type="text"
						name="title"
						id="title"
						className="border-[1px] w-[228px] h-[20px] rounded-md"
						value={author}
					/>
				</li>
				<li>
					<p className="text-xs my-[5px]">가격</p>
					<input
						type="text"
						name="title"
						id="title"
						className="border-[1px] w-[207px] h-[20px] rounded-md me-2"
						value={price}
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
						value={release}
					/>
				</li>
			</ul>
		</div>
	);
}
function Description({ description }) {
	return (
		<>
			<div className="descriptionLabel">
				<p className="my-[10px]">설명</p>
			</div>
			<textarea
				name="description"
				className="w-[439px] h-[80px] border-[1px] rounded-md mb-[30px]"
				value={description}
			></textarea>
		</>
	);
}
function Category({ categories }) {
	let categoryStyle = 'me-6 text-[15px] px-[14px] border-[1px] rounded-md';

	return (
		<div className="category">
			<p className="my-[10px]">카테고리</p>

			<ul className="flex flex-wrap items-center text-[#C7C7C7]">
				{categories.map((category, index) => (
					<li key={index} className={categoryStyle}>
						<Link to="#">{category}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

function BookInfo({ type }) {
	const categories = ['판타지', '로맨스', '호러'];
	return (
		<div className="flex justify-center mb-14">
			<div className="contentsContainer flex-col ">
				<div className="dataContainer flex">
					<BookImg />
					<MetaData
						title="토비의 스프링"
						author="김토비"
						price={10000}
						release="2024년 2월 6일"
					/>
				</div>
				<Category categories={categories} />
				<div className="description flex-col">
					<Description description="스프링을 공부합니다." />
					<ControlBtn route="#">
						{type === 'edit' ? '책 수정하기' : '책 등록하기'}
					</ControlBtn>
				</div>
			</div>
		</div>
	);
}

export default BookInfo;
