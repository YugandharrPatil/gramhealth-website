import { create } from "zustand";

export const useCategoryStore = create((set) => ({
	category: "All",
	setCategory: () => set({ category: "Pharma" }),
}));
