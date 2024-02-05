export function Description({ description }) {
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
