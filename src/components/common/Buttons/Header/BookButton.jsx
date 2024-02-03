import { Link } from 'react-router-dom';

const BookButton = ({ link, children }) => {
	return (
		<button
			id="homeButton"
			className="text-white text-lg font-semibold font-['Inter']"
		>
			<Link to={link}>{children}</Link>
		</button>
	);
};

export default BookButton;
