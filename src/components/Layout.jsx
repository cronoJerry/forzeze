import { Link } from "react-router-dom";
import Goback from "../assets/Goback";
import GoogleLogo from "../assets/GoogleLogo";
import { menuItems } from "../lib/menuItems";

export default function Layout({
	children,
	isHeader,
	canGoBack,
	title,
	isFooter,
}) {
	return (
		<div className='w-full h-screen  flex justify-center'>
			<div className='relative max-w-sm w-full text-center flex flex-col justify-center items-center bg-gray-50 '>
				{/* header */}
				{isHeader && (
					<div className='w-full h-20 border-b border-neutral-300/50  grid grid-cols-3 items-center'>
						{/* first */}
						<div className='text-gray-400'>
							{canGoBack && <Goback />}
						</div>

						{/* second */}
						<div className='w-full flex justify-center items-center'>
							{title ? title : <GoogleLogo />}
						</div>
						{/* third */}
					</div>
				)}
				{/* children */}
				{children}
				{/* footer(menu) */}
				{isFooter && (
					<div className='absolute bottom-0 w-full h-25 grid grid-cols-5 gap-2 p-2 border-t-2 border-neutral-300'>
						{menuItems.map((item, index) => (
							<Link to={item.url} key={index}>
								<div className='w-full h-full flex flex-col items-center justify-center space-x-1 '>
									{/* icon */}
									<div className=''>{item.icon}</div>
									{/* title */}
									<div className='uppercase text-xs'>
										{item.title}
									</div>
								</div>
							</Link>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
