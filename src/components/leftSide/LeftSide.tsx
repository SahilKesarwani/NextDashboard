import "./leftSide.scss";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "700", subsets: ["latin"] });

export default function LeftSide() {
	return (
		<div className="left-side">
			<div className={poppins.className}>
				<h2 className="logo">LOGO</h2>
			</div>
			<h1 className="title">Board.</h1>
			<div className="socials">
				<Image src="/github.svg" alt="github" width={44} height={44} />
				<Image src="/twitter.svg" alt="twitter" width={42} height={41} />
				<Image src="/linkedin.svg" alt="linkedin" width={48} height={48} />
				<Image src="/discord.svg" alt="discord" width={50} height={48} />
			</div>
		</div>
	);
}
