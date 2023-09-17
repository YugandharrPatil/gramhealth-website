import Link from "next/link";
import NavItem from "./nav-item";
import { Button } from "./ui/nav-item-button";

export default function Navbar() {
	return (
		<nav className="bg-[#0A0A38] h-20 border border-black">
			<div className="container flex items-center justify-between h-full w-full">
				<Link href="#">
					<h1 className={"logo text-white text-[2rem] mt-0"}>GramHealth</h1>
				</Link>
				<div className="flex gap-4">
					<div className="">
						<NavItem target="#" navText="Home" />
						<NavItem target="#" navText="Products" />
						<NavItem target="#" navText="Contact Us" />
						<NavItem target="#" navText="Visit Store" />
					</div>
				</div>
			</div>
		</nav>
	);
}
