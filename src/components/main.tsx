"use client";
import { useState } from "react";
import CategoryButton from "./category-button";
import { Button } from "./ui/button";

export default function Main() {
	const [category, setCategory] = useState("");

	return (
		<main className="">
			<div className="container mt-5">
				<h1 className="text-4xl font-semibold text-center">Shop by Categories</h1>
				{/* Data to be fetched from database here (items, price, images, etc). For now, state implemented with zustand for easy sending state up */}
				{/* Yet to implement state with Zustand */}
				<div className="mt-3 flex w-1/3 justify-between mx-auto">
					<CategoryButton icon="iconURL" text="Pharma" />
					<CategoryButton icon="iconURL" text="Dental" />
					<CategoryButton icon="iconURL" text="Injections" />
					<CategoryButton icon="iconURL" text="Inhalers" />
					<CategoryButton icon="iconURL" text="First Aid" />
				</div>
				<div className="mt-5 bg-black text-white h-80 w-full">Fetched Items</div>
			</div>
		</main>
	);
}
