import Logo from "./svg/btn_google.svg";

export default function GoogleLogo({ large }) {
	return (
		<div
			className={`${
				large ? "w-40" : "w-16"
			} flex justify-center items-center`}
		>
			<img className='w-full' src={Logo} alt='logo' />
		</div>
	);
}
