export function MetaData({ title, author, price, release }) {
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
