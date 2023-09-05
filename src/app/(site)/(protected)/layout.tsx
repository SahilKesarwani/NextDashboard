import "./adminLayout.scss";
import { Sidebar } from "@/components";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="admin-layout">
			<Sidebar />
			<main>{children}</main>
		</div>
	);
}
