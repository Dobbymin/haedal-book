const CategoryButton = ({ children }) => {
	return (
		<>
			<div className="w-[70px] h-[26px] px-3.5 py-1.5 absolute bg-white rounded border border-orange-500 justify-center items-center gap-[5px] flex">
				<button className="text-orange-500 text-[15px] font-normal font-['Kavoon']">
					{children}
				</button>
			</div>
		</>
	);
};

export default CategoryButton;
