import Link from "next/link";
import NavItem from "./nav-item";
import { Button } from "./ui/button";

export default function Navbar() {
	return (
		<nav className="bg-[#0A0A38] h-20 border border-black">
			<div className="container flex items-center justify-between h-full w-full">
				<Link href="#">
					<h1 className={"logo font-bold text-white text-[2rem] mt-0"}>
						<span className="bg-gradient-to-tr from-[#2EEB31] to=[#000044] inline-block text-transparent bg-clip-text">G</span>ram
						<span className="bg-gradient-to-tr from-[#2EEB31] to=[#000044] inline-block text-transparent bg-clip-text">H</span>ealth
					</h1>
				</Link>
				<div className="flex gap-4">
					<div className="">
						<NavItem target="#" variant="navItemGhost" navText="Home" />
						<NavItem target="#" variant="navItemGhost" navText="Products" />
						<NavItem target="#" variant="navItemGhost" navText="Contact Us" />
						<NavItem target="#" variant="navItemOutline" navText="Visit Store" />
					</div>
				</div>
			</div>
		</nav>
	);
}
