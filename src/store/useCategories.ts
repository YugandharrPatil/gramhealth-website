import { create } from "zustand";

export const useCategoryStore = create((set) => ({
	category: "All",
	// setCategory: (cat: string) => set({ category: cat }),
	setAll: () => set({ category: "All" }),
	setPharma: () => set({ category: "Pharma" }),
	setDental: () => set({ category: "Dental" }),
	setInjections: () => set({ category: "Injections" }),
	setInhalers: () => set({ category: "Inhalers" }),
	setFirstAid: () => set({ category: "First Aid" }),
}));
