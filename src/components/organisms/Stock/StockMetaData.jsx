function StockMetaData({ title, author, price, stock, category, description }) {
	return (
		<div className="bookInfo mt-4">
			<ul className="">
				<li className="mb-1">
					<span className="mr-1">책 제목:</span>
					{title}
				</li>
				<li className="my-1">
					<span className="mr-1">저자: </span>
					{author}
				</li>
				<li className="my-1">
					<span className="mr-1">가격: </span>
					{price}원
				</li>
				<li className="my-1">
					<span className="mr-1">재고:</span>
					<input
						type="number"
						name="stockNum"
						className="me-2 border w-[42px] h-[14px] rounded-[4px]"
						value={stock}
					/>
					<span className="me-2">권</span>
					<button className="editBtn text-[8px] text-[#FF7E00] px-2 border-[1px] border-[#FF7E00] rounded-md">
						수정
					</button>
				</li>
				<li className="my-1">
					<span className="mr-1">카테고리: </span>
					<span>{category}</span>
				</li>
				<li className="my-1">
					<p className="my-1">설명</p>
					<textarea
						name="description"
						className="w-[249px] h-[39px] border text-[11px] rounded-sm"
						value={description}
					></textarea>
				</li>
				<li className="my-4">
					<button className="w-[249px] y-[13px] border-[#FF7E00] border-[1px] text-[#FF7E00] rounded-[4px]">
						재고 수정하기
					</button>
				</li>
			</ul>
		</div>
	);
}

export default StockMetaData;
