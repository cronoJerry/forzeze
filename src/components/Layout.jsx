export default function Layout({ children }) {
	return (
		<div className='w-full flex flex-col items-center bg-red-200'>
			<div className='max-w-sm w-full text-center bg-gray-50 '>
				{children}
			</div>
		</div>
	);
}
