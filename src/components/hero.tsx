import bannerStack from "../assets/images/banner-stack.png";

export default function Hero() {
	return (
		<main className="hero" id="home">
			<div className="hero-content">
				<h1>
					Build Your Ideal
					<span>Development Stack</span>
				</h1>
				<p>
					Explore frontend, backend, database, and tooling options, compare
					them side by side, and put together the stack that fits your next
					project.
				</p>
				<div className="hero-actions">
					<button className="hero-primary">
						Explore Technologies
					</button>
					<button className="hero-secondary">
						Learn More
					</button>
				</div>
			</div>
			<div className="hero-art">
				<img src={bannerStack} alt="A colorful development technology stack" />
			</div>
		</main>
	);
}
