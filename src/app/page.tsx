import Beauty from "@/components/beauty";
import Concerns from "@/components/concerns";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import Navbar from "@/components/navbar";

export default function HomePage() {
	return (
		<>
			<Navbar />
			<Header />
			<Main />
			<Concerns />
			<Beauty />
			<Footer />
		</>
	);
}
