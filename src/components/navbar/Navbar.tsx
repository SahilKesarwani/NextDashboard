"use client";

import "./navbar.scss";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

type propTypes = {
	title: string;
};

export default function Navbar({ title }: propTypes) {
	const { data: session, status } = useSession();
	const dropdownListRef = useRef<HTMLDivElement>(null);
	const profileRef = useRef<HTMLButtonElement>(null);

	const onProfileClick = () => {
		dropdownListRef.current?.classList.toggle("show");
	};

	if (status === "unauthenticated") {
		redirect("/signin");
	}

	useEffect(() => {
		document.addEventListener("click", e => {
			if (!dropdownListRef.current?.contains(e.target as any) && !profileRef.current?.contains(e.target as any)) {
				dropdownListRef.current?.classList.remove("show");
			}
		});
	}, []);

	return (
		<div className="navbar">
			<h2>{title}</h2>
			<div className="menu">
				<form className="search">
					<input type="text" placeholder="Search..." />
					<button type="submit" className="btn">
						<Image src="/search-icon.svg" alt="Search" width={12} height={12} />
					</button>
				</form>
				<Image src="/notification-icon.svg" alt="notifications" width={18} height={18} />
				<div className="dropdown">
					<button ref={profileRef} className="btn" onClick={() => onProfileClick()}>
						<Image src={session?.user && session?.user.image ? session?.user.image : "/profile.png"} alt="notifications" className="profile-logo" width={25} height={25} />
					</button>
					<div ref={dropdownListRef} className="dropdown-list">
						<div className="profile-details dropdown-item">
							<Image src={session?.user && session?.user.image ? session?.user.image : "/profile.png"} alt="notifications" className="profile-logo" width={40} height={40} />
							<h4>{session?.user?.name}</h4>
						</div>
						<hr />
						<div className="dropdown-item">
							<button className="btn" onClick={() => signOut()}>
								Sign Out
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
