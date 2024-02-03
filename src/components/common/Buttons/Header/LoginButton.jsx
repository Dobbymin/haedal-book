import { Link } from 'react-router-dom';

const LoginButton = ({ link, children }) => {
	return (
		<button
			id="loginButton"
			className="text-white text-lg font-semibold font-['Inter']"
		>
			<Link to={link}>{children}</Link>
		</button>
	);
};

export default LoginButton;
