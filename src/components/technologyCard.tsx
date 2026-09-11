import type { Technology } from "../assets/types/tehnology";

type TechnologyCardProps = {
	technology: Technology;
	isSelected: boolean;
	onAdd: (technology: Technology) => void;
};

export default function TechnologyCard({
	technology,
	isSelected,
	onAdd,
}: TechnologyCardProps) {
	return (
		<article className="technology-card">
			<div className="technology-card-topline">
				<div className="technology-icon-wrap">
					<img src={technology.icon} alt={`${technology.name} icon`} />
				</div>
				<span className="technology-badge">{technology.badge}</span>
			</div>
			<h3>{technology.name}</h3>
			<p>{technology.description}</p>
			<div className="technology-meta">
				<span className="category-chip">{technology.category}</span>
				<span className="difficulty">{technology.difficulty}</span>
			</div>
			<div className="technology-card-footer">
				<span className="rating">
					<span aria-hidden="true">★</span> {technology.rating.toFixed(1)}
				</span>
				<button
					className="add-stack-button"
					type="button"
					disabled={isSelected}
					onClick={() => onAdd(technology)}
				>
					{isSelected ? "Added to Stack" : "Add to Stack"}
				</button>
			</div>
		</article>
	);
}
