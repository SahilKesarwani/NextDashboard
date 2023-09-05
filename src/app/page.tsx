import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
	redirect("/dashboard");

	return (
		<h1>
			Go to <Link href="/dashboard">Dashboard</Link>
		</h1>
	);
}
