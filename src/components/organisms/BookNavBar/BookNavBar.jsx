import Title from './Title';
import Icons from './icons';

const BookNavBar = () => {
	return (
		<>
			<div className="w-full h-auto px-[120px] pt-5 pb-[50px] flex-col justify-center items-center inline-flex">
				<Title />
				<div className="px-2.5 pb-5 bg-white justify-start items-center gap-2.5 inline-flex">
					<Icons />
				</div>
			</div>
		</>
	);
};

export default BookNavBar;
