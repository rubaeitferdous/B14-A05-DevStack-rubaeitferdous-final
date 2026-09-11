import { useState } from "react";
import technologiesData from "../data/technologies.json";
import type { Technology } from "../assets/types/tehnology";
import MyStack from "./myStack";
import TechnologyCard from "./technologyCard";

const technologies = technologiesData as Technology[];

export default function TechnologySection() {
	const [selectedIds, setSelectedIds] = useState<string[]>([]);

	const selectedTechnologies = technologies.filter((technology) =>
		selectedIds.includes(technology.id),
	);

	function addToStack(technology: Technology) {
		if (selectedIds.includes(technology.id)) {
			window.alert(`${technology.name} is already in your stack.`);
			return;
		}

		setSelectedIds((currentIds) => [...currentIds, technology.id]);
	}

	function removeFromStack(id: string) {
		setSelectedIds((currentIds) => currentIds.filter((currentId) => currentId !== id));
	}

	return (
		<section className="technology-section" id="technologies">
			<div className="section-heading">
				<div>
					<span className="eyebrow">EXPLORE THE ECOSYSTEM</span>
					<h2>Choose the tools for your next build</h2>
				</div>
				
			</div>
			<div className="technology-layout">
				<div className="technology-grid">
					{technologies.map((technology) => (
						<TechnologyCard
							key={technology.id}
							technology={technology}
							isSelected={selectedIds.includes(technology.id)}
							onAdd={addToStack}
						/>
					))}
				</div>
				<MyStack
					selectedTechnologies={selectedTechnologies}
					onRemove={removeFromStack}
					onRemoveAll={() => setSelectedIds([])}
				/>
			</div>
		</section>
	);
}
