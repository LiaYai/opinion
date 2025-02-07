
import { NavLink } from "react-router-dom";
import { LoginButton } from './login-button';

export const Header = () => {
  return (
    <header className='flex justify-between items-center h-22 p-5 bg-accent/5'>
      <NavLink to="/">
        <img src='/logo.png' alt="logo" className='w-auto h-22'/>
      </NavLink>
      <nav>
        <ul className='flex gap-4 text-accent font-bold'>
            <li>
                <NavLink to="/">Главная</NavLink>
            </li>
            <li>
                <NavLink to="/about">О нас</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Контакты</NavLink>
            </li>
        </ul>
      </nav>
      <LoginButton />
    </header>
  )
}