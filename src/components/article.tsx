import { useParams } from "react-router-dom";
import { articles } from "../data/articles";

export const Article = () => {
  const { articleId } = useParams();
  
  const article = articles.find((article) => article.id === articleId);

  if (!article) {
    return <div>Статья не найдена</div>;
  };

  const { title, text, src } = article;

  return (
    <div className="w-full  p-4 min-h-[600px]">
      <h2 className="text-heading text-2xl text-semibold mb-3.5">{title}</h2>
      <img className="float-right rounded w-1/3 " src={src} alt={title} />
      {text.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
    </div>
  )
}