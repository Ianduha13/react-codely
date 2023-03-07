import { githubApiResponses } from "../../github_api_responses";
import styles from "./Dashboard.module.scss";
import { ReactComponent as Lock } from "./lock.svg";
import { ReactComponent as Unlock } from "./unlock.svg";

export function Dashboard() {
	const title = "DevDash_";

	return (
		<>
			<header className={styles.container}>
				<h1>{title}</h1>
			</header>
			<section>
				<ul>
					{githubApiResponses.map((widget) => (
						<li key={widget.repositoryData.id}>
							{widget.repositoryData.archive_url}
							{widget.repositoryData.private ? <Lock /> : <Unlock />}
						</li>
					))}
				</ul>
			</section>
		</>
	);
}
