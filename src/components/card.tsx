import { Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown';

const BASE_PATH = import.meta.env.VITE_BASE_PATH || '/';

type CardProps = {
  id: string,
  title: string,
  text: string[],
  src: string
}
export const Card = ({ id, title, text, src }: CardProps) => {
  
  return (
    <div className="flex gap-4 w-full shadow border border-accent rounded-2xl p-4">
      <img className="w-1/3 rounded aspect-4/3 object-cover" src={src} alt={title} />
      <div className="w-2/3 max-h-[300px]">
        <h2 className="text-heading text-xl sm:text-2xl font-medium mb-2">{title}</h2>
        <ReactMarkdown className="text-sm sm:text-base line-clamp-5">{text[0]}</ReactMarkdown>
        <div className="card-actions justify-end">
          <Link to={`${BASE_PATH}article/${id}`} className="text-accent">Подробнее...</Link>
        </div>
      </div>
    </div>
  )
}