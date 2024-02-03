import BookButton from '../../common/Buttons/Header/BookButton';
import ButtonContainer from './ButtonContainer';
import Section from './Section';

const Header = () => {
	return (
		<>
			<Section>
				<BookButton link="/">Book</BookButton>
				<ButtonContainer />
			</Section>
		</>
	);
};

export default Header;
