import { config } from "../../devdash_config";

export function Dashboard() {
	const title = "DevDash_";

	return (
		<>
			<header>
				<h1>{title}</h1>
			</header>
			
			<section>
				<ul>

					{config.widgets.map((widget) => (

						<li key={widget.id}>{widget.repository_url}</li>
					))}
				</ul>
			</section>
		</>
	);
}
