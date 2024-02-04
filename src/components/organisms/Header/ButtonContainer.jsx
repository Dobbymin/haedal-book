import NavButton from '../../common/Buttons/Header/NavButton';

const ButtonContainer = () => {
	return (
		<div className="px-3.5 py-px justify-start items-center gap-5 flex">
			<NavButton link="/auth/login">로그인</NavButton>
			<NavButton link="/auth/register">회원가입</NavButton>
		</div>
	);
};

export default ButtonContainer;
