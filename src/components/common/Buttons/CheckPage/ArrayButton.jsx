const ArrayButton = ({ children }) => {
	return (
		<>
			<div className="grow shrink basis-0 h-[25px] px-3.5 py-1.5 bg-white rounded border border-orange-500 justify-center items-center gap-[5px] flex">
				<div className="relative">
					<button className="text-orange-500 text-[15px] font-normal font-['Kavoon']">
						{children}
					</button>
					<div className="w-[15px] h-[15px] left-[33px] top-[2px] absolute flex-col justify-start items-start inline-flex" />
				</div>
			</div>
		</>
	);
};

export default ArrayButton;
