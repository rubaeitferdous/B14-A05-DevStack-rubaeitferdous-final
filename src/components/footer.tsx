import logoText from "../assets/images/logo-text.png";

const linkGroups = [
	{
		title: "Product",
		links: ["Features", "Technologies", "Roadmap"],
	},
	{
		title: "Company",
		links: ["About us", "Careers", "Contact"],
	},
	{
		title: "Legal",
		links: ["Privacy", "Terms", "Licenses"],
	},
];

const socialLinks = ["GitHub", "Twitter", "LinkedIn"];

export default function Footer() {
	return (
		<footer className="site-footer">
			<div className="footer-main">
				<div className="footer-brand-block">
					<img className="footer-logo" src={logoText} alt="Dev Stack" />
					<p>
						A focused collection of modern tools for developers building their next
						great project.
					</p>
					<div className="footer-socials" aria-label="Social links">
						{socialLinks.map((socialLink) => (
							<button key={socialLink} type="button">
								{socialLink}
							</button>
						))}
					</div>
				</div>

				<div className="footer-link-groups">
					{linkGroups.map((group) => (
						<div className="footer-link-group" key={group.title}>
							<h3>{group.title}</h3>
							{group.links.map((link) => (
								<button key={link} type="button">
									{link}
								</button>
							))}
						</div>
					))}
				</div>
			</div>

			<div className="footer-bottom">
				<span>© 2024 Dev Stack. All rights reserved.</span>
				<div className="footer-legal-links">
					<button type="button">Privacy</button>
					<button type="button">Terms</button>
				</div>
			</div>
		</footer>
	);
}
