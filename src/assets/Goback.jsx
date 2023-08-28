import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
export default function Goback() {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(-1);
	};
	return (
		<div
			onClick={handleClick}
			className='w-12 h-12 bg-gray-900 rounded-full flex justify-center items-center cursor-pointer'
		>
			<MdArrowBackIosNew color='white' size='24' />
		</div>
	);
}
