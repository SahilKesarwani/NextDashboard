import "./page.scss";
import { Lato, Montserrat } from "next/font/google";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { LeftSide, ProviderButton } from "@/components";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const lato = Lato({ weight: "400", subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default async function SignIn() {
	const session = await getServerSession(authOptions);

	if (session) {
		redirect("/dashboard");
	}

	return (
		<div className="sign-in">
			<LeftSide />
			<div className="container">
				<div className="form-container">
					<h1 className="title">Sign In</h1>
					<div className={lato.className}>
						<p className="description">Sign in to your account</p>
					</div>
					<div className="provider-btn-container">
						<ProviderButton logo="/google-icon.svg" name="google" title="Sign in with Google" />
						<ProviderButton logo="/apple-icon.svg" name="apple" title="Sign in with Apple" />
					</div>
					<form className="form">
						<div className={lato.className}>
							<div className="input-item">
								<label htmlFor="email">Email address</label>
								<input type="email" name="email" id="email" placeholder="johndoe@gmail.com" />
							</div>
							<div className="input-item">
								<label htmlFor="password">Password</label>
								<input type="password" name="password" id="password" />
							</div>
							<div className="input-item">
								<Link href="/">Forgot password?</Link>
							</div>
							<button type="submit" className="submit-btn">
								<span className={montserrat.className}>Sign In</span>
							</button>
							<p className="register-now">
								Don't have an account? <Link href="/signup">Register Now</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
