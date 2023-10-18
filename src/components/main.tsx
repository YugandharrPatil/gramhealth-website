"use client";
import { useCategoryStore } from "@/store/useCategories";
import { useState } from "react";
import CategoryButton from "./category-button";
import { Button } from "./ui/button";

export default function Main() {
	const CATEGORIES = {
		all: "All",
		pharma: "Pharma",
		dental: "Dental",
		injections: "Injections",
		inhalers: "Inhalers",
		firstAid: "First Aid",
	};

	const category = useCategoryStore((state: any) => state.category);
	const setAll = useCategoryStore((state: any) => state.setAll);
	const setPharma = useCategoryStore((state: any) => state.setPharma);
	const setDental = useCategoryStore((state: any) => state.setDental);
	const setInjections = useCategoryStore((state: any) => state.setInjections);
	const setInhalers = useCategoryStore((state: any) => state.setInhalers);
	const setFirstAid = useCategoryStore((state: any) => state.setFirstAid);

	// const setCategory = useCategoryStore((state: any) => state.setCategory);

	return (
		<main className="">
			<div className="container mt-5">
				<h1 className="text-4xl font-semibold text-center">Shop by Categories</h1>
				{/* Data to be fetched from database here (items, price, images, etc). For now, state implemented with zustand for easy sending state up */}
				{/* Yet to implement state with Zustand */}
				<div className="mt-3 flex w-5/12 gap-4 mx-auto">
					<CategoryButton onClick={setAll} icon="iconURL" text={CATEGORIES.all} />
					<CategoryButton onClick={setPharma} icon="iconURL" text={CATEGORIES.pharma} />
					<CategoryButton onClick={setDental} icon="iconURL" text={CATEGORIES.dental} />
					<CategoryButton onClick={setInjections} icon="iconURL" text={CATEGORIES.injections} />
					<CategoryButton onClick={setInhalers} icon="iconURL" text={CATEGORIES.inhalers} />
					<CategoryButton onClick={setFirstAid} icon="iconURL" text={CATEGORIES.firstAid} />

					{/* <CategoryButton onClick={(CATEGORIES.pharma) => setCategory} icon="iconURL" text={CATEGORIES.pharma} /> */}
				</div>
				<div className="mt-5 bg-black text-white h-80 w-full">{category}</div>
			</div>
		</main>
	);
}
