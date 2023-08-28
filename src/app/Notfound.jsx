import { Link } from "react-router-dom";

export default function Notfound() {
	return (
		<div className='w-full h-screen flex flex-col justify-center items-center space-y-8'>g
			<div className="text-3xl font-bold ">Not Found</div>
			<Link to='/'>
				<div className='border px-4 py-1 rounded-lg hover:bg-neutral-700 hover:text-white'>
					home
				</div>
			</Link>
		</div>
	);
}
