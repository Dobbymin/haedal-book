const Section = ({ children }) => {
	return (
		<section className="w-full h-14 pl-5 pr-2.5 py-2.5 bg-orange-500 justify-between items-center inline-flex">
			{children}
		</section>
	);
};

export default Section;
