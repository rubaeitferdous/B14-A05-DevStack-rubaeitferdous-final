import type { Technology } from "../assets/types/tehnology";
import StackItem from "./stackItem";

type MyStackProps = {
	selectedTechnologies: Technology[];
	onRemove: (id: string) => void;
	onRemoveAll: () => void;
};

export default function MyStack({
	selectedTechnologies,
	onRemove,
	onRemoveAll,
}: MyStackProps) {
	const selectedCount = selectedTechnologies.length;

	return (
		<aside className="my-stack">
			<div className="stack-heading">
				<div>
					<span className="eyebrow">COLLECTION</span>
					<h2>Your Stack</h2>
				</div>
				<span className="stack-count">{selectedCount}</span>
			</div>
			<p className="stack-selected-label">
				{selectedCount} Technology{selectedCount === 1 ? "" : "ies"} Selected
			</p>
			{selectedCount === 0 ? (
				<div className="stack-empty">
					<span className="stack-empty-icon">+</span>
					<p>Your stack is empty</p>
					<small>Add technologies to start building your stack.</small>
				</div>
			) : (
				<>
					<ul className="stack-list">
						{selectedTechnologies.map((technology) => (
							<StackItem
								key={technology.id}
								technology={technology}
								onRemove={onRemove}
							/>
						))}
					</ul>
					<button className="remove-all-button" type="button" onClick={onRemoveAll}>
						Remove All
					</button>
				</>
			)}
		</aside>
	);
}
