import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import Provider from "@/components/Provider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Admin Panel",
	description: "OpenInApp Assignment for React.js Developer Role - Intern.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
