import { AiFillFlag, AiOutlineFlag } from "react-icons/ai";
export default function TourAsset({ isSelected }) {
	return (
		<div className='w-full h-full'>
			{isSelected ? (
				<AiFillFlag size='24' />
			) : (
				<AiOutlineFlag size='24' />
			)}
		</div>
	);
}
