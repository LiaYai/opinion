import { NavLink } from "react-router-dom"

const BASE_PATH = import.meta.env.VITE_BASE_PATH || '';

export const LoginButton = () => {
  return (
  <NavLink to={`${BASE_PATH}login`} className="bg-accent rounded-[50px] text-primary font-bold px-5 py-1.5 cursor-pointer focus-visible:none focus-visible:ring-2  hover:shadow-2xl hover:filter:invert()">
    Войти 
  </NavLink>
  )
}