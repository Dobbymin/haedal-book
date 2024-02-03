import { Link } from 'react-router-dom';

const RegisterButton = ({ link, children }) => {
	return (
		<button
			id="registerButton"
			className="text-white text-lg font-semibold font-['Inter']"
		>
			<Link to={link}>{children}</Link>
		</button>
	);
};

export default RegisterButton;
