import { Link } from 'react-router-dom';

export function Category({ categories }) {
	let categoryStyle = 'me-6 text-[15px] px-[14px] border-[1px] rounded-md';

	return (
		<div className="category">
			<p className="my-[10px]">카테고리</p>

			<ul className="flex flex-wrap items-center text-[#C7C7C7]">
				{categories.map((category, index) => (
					<li key={index} className={categoryStyle}>
						<Link to="#">{category}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
