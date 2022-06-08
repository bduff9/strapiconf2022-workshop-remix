import type { FC } from "react";
import { Link } from "remix";

const Index: FC = () => (
  <main className="container">
    <p>
      Over time everyone develops a Swiss army knife of tips, tricks,
      and hacks to boost productivity. At Render, I created a
      #productivity-tips Slack channel for anyone to share their best
      productivity boosters with everyone on the team. Using
      <a href="https://strapi.io">Strapi</a> and
      <a href="https://remix.run">Remix</a>, we made a little web app to
      catalog all of these tips and share them with others. 🤓
    </p>
    <Link to="/tips">👉 Productivity Tips</Link>
  </main>
);

export default Index;
