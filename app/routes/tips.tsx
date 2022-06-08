import type { FC } from "react";
import { Outlet } from "remix";

const TipsRoute: FC = () => (
	<main className="container">
		<Outlet />
	</main>
);

export default TipsRoute;
