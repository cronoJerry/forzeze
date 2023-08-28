import { BsQrCode } from "react-icons/bs";
export default function QrAsset({ isSelected }) {
	return (
		<div className='w-full h-full'>
			{isSelected ? (
				<BsQrCode color='white' size='24' />
			) : (
				<BsQrCode color='black' size='24' />
			)}
		</div>
	);
}
