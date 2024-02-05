import { ControlBtn } from '../../common/Buttons/ControlBtn';
import { BookImg } from './BookImg';
import { MetaData } from './MetaData';
import { Description } from './Description';
import { Category } from './Category';
function BookInfo({ type, bookData, categories }) {
	return (
		<div className="flex justify-center mb-14">
			<div className="contentsContainer flex-col ">
				<div className="dataContainer flex">
					<BookImg />
					<MetaData {...bookData} />
				</div>
				<Category categories={categories} />
				<div className="description flex-col">
					<Description description={bookData.description} />
					<ControlBtn route="#">
						{type === 'edit' ? '책 수정하기' : '책 등록하기'}
					</ControlBtn>
				</div>
			</div>
		</div>
	);
}

export default BookInfo;
