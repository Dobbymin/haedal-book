import LoginButton from '../../common/Buttons/Header/LoginBUtton';
import RegisterButton from '../../common/Buttons/Header/RegisterButton';

const ButtonContainer = () => {
	return (
		<div className="px-3.5 py-px justify-start items-center gap-5 flex">
			<LoginButton link="/auth/login">로그인</LoginButton>
			<RegisterButton link="/auth/register">회원가입</RegisterButton>
		</div>
	);
};

export default ButtonContainer;
