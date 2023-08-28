import { AiOutlineMenu } from "react-icons/ai";
export default function MenuAsset({ isSelected }) {
	return (
		<div className='w-full h-full'>
			{isSelected ? (
				<AiOutlineMenu color='white' size='24' />
			) : (
				<AiOutlineMenu color='black' size='24' />
			)}
		</div>
	);
}
