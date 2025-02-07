
import { NavLink } from "react-router-dom";
import { LoginButton } from './login-button';

const BASE_PATH = import.meta.env.VITE_BASE_PATH || '/';

export const Header = () => {
  return (
    <header className='flex justify-between items-center h-22 p-5 bg-accent/5'>
      <NavLink to={`${BASE_PATH}`}>
        <img src={`${BASE_PATH}logo.png`} alt="logo" className='w-auto h-22'/>
      </NavLink>
      <nav>
        <ul className='flex gap-4 text-accent font-bold'>
          <li>
            <NavLink to={`${BASE_PATH}`}>Главная</NavLink>
          </li>
          <li>
            <NavLink to={`${BASE_PATH}about`}>О нас</NavLink>
          </li>
          <li>
            <NavLink to={`${BASE_PATH}contact`}>Контакты</NavLink>
          </li>
        </ul>
      </nav>
      <LoginButton />
    </header>
  )
}