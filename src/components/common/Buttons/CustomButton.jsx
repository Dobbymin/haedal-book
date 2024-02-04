import { Link } from 'react-router-dom';

export const CustonButton = ({ route, children }) => {
	return (
		<div className="apply text-center">
			<Link
				to={route}
				className="px-[10px] py-[5px] text-[#FF7E00] border-[1px] border-[#FF7E00] rounded-md"
			>
				{children}
			</Link>
		</div>
	);
};
