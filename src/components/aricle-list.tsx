import { Card } from "./card";
import { articles } from "../data/articles";

export const ArticleList = () => {
  return (
    <div className="flex flex-col p-5">
      <h1 className='text-3xl text-heading mb-5 text-center'>Список статей</h1>
      <ul className="flex flex-col gap-8">
        {articles.map((article) => (
          <li key={article.id}>
            <Card {...article} />
          </li>
        ))}
      </ul>
    </div>
  );
}