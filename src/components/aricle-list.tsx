import { Card } from "./card";
import { articles } from "../data/articles";

export const ArticleList = () => {
  return (
    <div className="flex flex-col p-5">
      <ul className="flex flex-col gap-4 sm:gap-6">
        {articles.map((article) => (
          <li key={article.id}>
            <Card {...article} />
          </li>
        ))}
      </ul>
    </div>
  );
}