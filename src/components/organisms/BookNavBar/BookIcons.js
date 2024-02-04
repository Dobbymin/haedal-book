import checkIcon from '../../../assets/CheckIcon.svg';
import rentIcon from '../../../assets/RentIcon.svg';
import returnIcon from '../../../assets/ReturnIcon.svg';
import buyIcon from '../../../assets/BuyIcon.svg';
import addIcon from '../../../assets/AddIcon.svg';
import fixIcon from '../../../assets/FixIcon.svg';
import removeIcon from '../../../assets/RemoveIcon.svg';
import stockIcon from '../../../assets/StockIcon.svg';

export const BookIcons = [
	{
		icon: checkIcon,
		id: 'check',
		link: '/book/check',
		title: '책 조회',
	},
	{
		icon: rentIcon,
		id: 'rent',
		link: '/book/rent',
		title: '책 대여',
	},
	{
		icon: returnIcon,
		id: 'return',
		link: '/book/return',
		title: '책 반납',
	},
	{
		icon: buyIcon,
		id: 'buy',
		link: '/book/buy',
		title: '책 구매',
	},
	{
		icon: addIcon,
		id: 'add',
		link: '/book/add',
		title: '책 추가',
	},
	{
		icon: fixIcon,
		id: 'fix',
		link: '/book/fix',
		title: '책 수정',
	},
	{
		icon: removeIcon,
		id: 'remove',
		link: '/book/remove',
		title: '책 삭제',
	},
	{
		icon: stockIcon,
		id: 'stock',
		link: '/book/stock',
		title: '재고 수정',
	},
];
