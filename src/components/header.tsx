
import { NavLink } from "react-router-dom";
// import { LoginButton } from './login-button';
// import { BurgerMenu } from "./burger-menu/burger-menu";

const BASE_PATH = import.meta.env.VITE_BASE_PATH || '/';

export const Header = () => {
  return (
    <header className='flex justify-between flex-row items-center sm:h-22 h-fit px-4 sm:px-7 bg-accent/5'>
      <NavLink to={`${BASE_PATH}`} className='flex-shrink-0'>
        <img src={`${BASE_PATH}logo.png`} alt="logo" className='h-16 w-auto sm:h-22'/>
      </NavLink>
      <nav>
        <ul className='flex flex-col sm:flex-row sm:gap-4 gap-none justify-between items-center text-accent font-bold py-2.5'>
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
      {/* <BurgerMenu /> */}
      {/* <LoginButton /> */}
    </header>
  )
}