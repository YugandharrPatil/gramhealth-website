export default function CategoryButton({ text, icon, onClick }: { text: string; icon: string; onClick: any }) {
	return (
		<div onClick={onClick} className="hover:cursor-pointer hover:bg-gray-500 w-20 h-20 bg-gray-300">
			{/* Icon */}
			<p className="font-semibold text-center">{text}</p>
		</div>
	);
}
