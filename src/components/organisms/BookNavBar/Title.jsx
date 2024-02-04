import titleIcon from '../../../assets/TitleIcon.svg';

const Title = () => {
	return (
		<div>
			<div className="h-[69px] px-[76px] py-[7px] justify-center items-center gap-2.5 inline-flex">
				<div className="text-black text-[32px] font-normal font-['Kavoon']">
					<img
						src={titleIcon}
						alt="titleIcon"
						className="w-52 h-10 inline-block"
					/>
				</div>
			</div>
		</div>
	);
};

export default Title;
