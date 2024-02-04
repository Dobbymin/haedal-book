import NavButton from '../../common/Buttons/Header/NavButton';
import ButtonContainer from './ButtonContainer';
import Section from './Section';

const Header = () => {
	return (
		<>
			<Section>
				<NavButton link="/">Book</NavButton>
				<ButtonContainer />
			</Section>
		</>
	);
};

export default Header;
