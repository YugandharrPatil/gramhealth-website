import CategoryButton from "./category-button";

export default function Concerns() {
	return (
		<>
			<h1 className="text-4xl font-semibold text-center">Shop by Categories</h1>
			<div className="mt-3 flex w-5/12 justify-between mx-auto">
				<CategoryButton icon="iconURL" text="Covid" />
				<CategoryButton icon="iconURL" text="Fever" />
				<CategoryButton icon="iconURL" text="Cold" />
				<CategoryButton icon="iconURL" text="Diarrhoea" />
				<CategoryButton icon="iconURL" text="Chickenpox" />
				<CategoryButton icon="iconURL" text="Back Pain" />

				{/* <CategoryButton onClick={(CATEGORIES.pharma) => setCategory} icon="iconURL" text={CATEGORIES.pharma} /> */}
			</div>
		</>
	);
}
