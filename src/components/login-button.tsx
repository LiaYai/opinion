import { NavLink } from "react-router-dom"

export const LoginButton = () => {
  return (
  <NavLink to={'/login'} className="bg-accent rounded-[50px] text-primary font-bold px-5 py-1.5 cursor-pointer focus-visible:none focus-visible:ring-2  hover:shadow-2xl hover:filter:invert()">
    Войти 
  </NavLink>
  )
}