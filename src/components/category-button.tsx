export default function CategoryButton({ text, icon }: { text: string; icon: string }) {
	return (
		<div className="w-20 h-20 bg-gray-300">
			{/* Icon */}
			<p className="font-semibold text-center">{text}</p>
		</div>
	);
}
