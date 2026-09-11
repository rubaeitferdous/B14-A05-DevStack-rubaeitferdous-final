import type { Technology } from "../assets/types/tehnology";

type StackItemProps = {
	technology: Technology;
	onRemove: (id: string) => void;
};

export default function StackItem({ technology, onRemove }: StackItemProps) {
	return (
		<li className="stack-item">
			<img src={technology.icon} alt="" />
			<span className="stack-item-copy">
				<strong>{technology.name}</strong>
				<small>{technology.category}</small>
			</span>
			<button
				className="remove-stack-item"
				type="button"
				aria-label={`Remove ${technology.name}`}
				onClick={() => onRemove(technology.id)}
			>
				×
			</button>
		</li>
	);
}
