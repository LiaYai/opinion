import { NavLink } from 'react-router-dom';

const BASE_PATH = import.meta.env.VITE_BASE_PATH || '/';

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-4">
      <h1 className="text-4xl sm:text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl sm:text-2xl text-gray-700 mb-8">Страница не найдена</p>
      <NavLink to={`${BASE_PATH}`} className="text-lg sm:text-xl text-accent underline">
        Вернуться на главную
      </NavLink>
    </div>
  );
};