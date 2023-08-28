import { useEffect } from "react";
import GoogleLogo from "../assets/GoogleLogo";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

export default function Splash() {
	const navigate = useNavigate();
	const timeout = () => {
		setTimeout(() => {
			navigate("/home");
		}, 3000);
	};
	useEffect(() => {
		timeout();
		return () => {
			clearTimeout(timeout);
		};
	});
	return (
		<Layout>
			<div
				className="w-full h-full bg-[url('https://images.unsplash.com/photo-1682686578615-39549501dd08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60')]
			bg-cover
			bg-center
			relative
			"
			>
				<div className='w-full h-full bg-white/30' />
				<div className='flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
					<h1>세상의 모든 여행</h1>
					<div>
						<GoogleLogo large />
					</div>
				</div>
			</div>
		</Layout>
	);
}
