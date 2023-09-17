import Link from "next/link";
import { Button } from "./ui/nav-item-button";

export default function NavItem({ target, navText }: { target: string; navText: string }) {
	return (
		<Button asChild variant="ghost" className={"mr-3 font-normal text-[1.3rem] tracking-wide}"}>
			<Link href={target}>{navText}</Link>
		</Button>
	);
}
