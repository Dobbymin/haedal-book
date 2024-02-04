import { BookIcons } from './BookIcons';
import Icon from './icon';

const Icons = () => {
	return (
		<>
			{BookIcons.map((item) => (
				<Icon
					key={item.id}
					image={item.icon}
					title={item.title}
					link={item.link}
					id={item.id}
				/>
			))}
		</>
	);
};

export default Icons;
