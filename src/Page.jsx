import GoogleLogo from "./assets/GoogleLogo";
import Layout from "./components/Layout";
import { tourItems } from "./lib/tourItems";

export default function Page() {
	return (
		<Layout isFooter>
			<div className='w-full h-full flex flex-col py-16 px-4 space-y-8'>
				{/* slogan */}
				<div className=''>
					<div className='flex items-center'>
						<GoogleLogo />
						<span>와</span>
						<p className='text-2xl font-semibold'>
							함께하는 사막여행
						</p>
					</div>
				</div>
				{/* product list */}
				<div className='flex flex-col space-y-4'>
					{/* first */}
					{tourItems.map((item, index) => (
						<div
							key={index}
							style={{ backgroundImage: `url(${item.bgImage})` }}
							className={`w-full h-20 rounded-md border border-gray-300  bg-cover bg-center relative group  cursor-pointer`}
						>
							<div
								className='w-full h-full bg-gradient-to-r from-gray-900/50 to-gray-700/50 group-hover:from-gray-900/70 group-hover:to-gray-700/70
							transition-all
							duration-700'
							/>
							<div className='absolute inset-0 w-full h-full flex flex-col text-gray-200 justify-center px-4'>
								<h2 className='font-bold group-hover:text-white'>
									{item.title}
								</h2>
								<p className='text-sm group-hover: text-white'>
									{item.subTitle}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
}
