import { Link } from 'react-router-dom';

const Icon = ({ image, id, link, title }) => {
	return (
		<>
			<div className="px-3 py-0.5 flex-col justify-center items-center gap-2.5 inline-flex">
				<div className="w-20 h-20 relative">
					<Link to={link}>
						<img src={image} alt={id} className="w-20 h-20 mt-3 inline-block" />
					</Link>
				</div>
				<div className="mt-3 mr-3.5 text-stone-300 text-base font-normal font-['Kavoon']">
					{title}
				</div>
			</div>
		</>
	);
};

export default Icon;
