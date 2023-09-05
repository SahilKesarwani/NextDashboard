"use client";

import "./providerButton.scss";
import { signIn } from "next-auth/react";
import Image from "next/image";

type propTypes = {
	logo: string;
	name: string;
	title: string;
};

export default function ProviderButton({ logo, name, title }: propTypes) {
	return (
		<button className="provider-btn" onClick={() => signIn(name)}>
			<Image src={logo} alt={name} width={15} height={15} />
			<span>{title}</span>
		</button>
	);
}
