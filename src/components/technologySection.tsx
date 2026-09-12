import { useState } from "react";
import { toast } from "react-toastify";
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
			toast.warning(`${technology.name} is already in your stack.`);
			return;
		}

		setSelectedIds((currentIds) => [...currentIds, technology.id]);
		toast.success(`${technology.name} added to your stack.`);
	}

	function removeFromStack(id: string) {
		const technology = technologies.find((item) => item.id === id);
		setSelectedIds((currentIds) => currentIds.filter((currentId) => currentId !== id));
		if (technology) {
			toast.info(`${technology.name} removed from your stack.`);
		}
	}

	function removeAllFromStack() {
		setSelectedIds([]);
		toast.info("All technologies removed from your stack.");
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
					onRemoveAll={removeAllFromStack}
				/>
			</div>
		</section>
	);
}
