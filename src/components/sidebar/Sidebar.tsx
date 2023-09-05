import "./sidebar.scss";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="container">
				<h1 className="title">Board.</h1>
				<div className="links">
					<div className="link">
						<Image src="/dashboard-icon.svg" width={18} height={18} alt="dashboard-icon" />
						<Link href="/dashboard">Dashboard</Link>
					</div>
					<div className="link">
						<Image src="/transaction-icon.svg" width={18} height={18} alt="transaction-icon" />
						<Link href="/transactions">Transactions</Link>
					</div>
					<div className="link">
						<Image src="/schedule-icon.svg" width={18} height={18} alt="schedule-icon" />
						<Link href="/schedules">Schedules</Link>
					</div>
					<div className="link">
						<Image src="/user-icon.svg" width={18} height={18} alt="user-icon" />
						<Link href="/users">Users</Link>
					</div>
					<div className="link">
						<Image src="/setting-icon.svg" width={18} height={18} alt="setting-icon" />
						<Link href="/settings">Settings</Link>
					</div>
				</div>
				<div className="extras">
					<Link href="/help">Help</Link>
					<Link href="/contact">Contact Us</Link>
				</div>
			</div>
		</div>
	);
}
