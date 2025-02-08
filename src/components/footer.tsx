import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';

const BASE_PATH = import.meta.env.VITE_BASE_PATH || '/';

export const Footer = () => {
  return (
    <footer className='flex w-full justify-between flex-col sm:flex-row items-center sm:h-22 h-auto px-4 sm:px-7 bg-accent/5 py-4 '>
      <img src={`${BASE_PATH}logo.png`} alt="logo" className='hidden sm:block h-12 w-auto sm:h-16'/>
      <div className='flex flex-col sm:flex-row  items-center gap-2 sm:gap-4'>
        <a href="https://t.me/mind_autonomy" target="_blank" rel="noopener noreferrer" className='text-accent flex items-center'>
          <FontAwesomeIcon icon={faTelegram} className='mr-2' />
          <span>Автономия разума</span>
        </a>
        <a href="https://t.me/mind_autonomy_practicum" target="_blank" rel="noopener noreferrer" className='text-accent flex items-center'>
          <FontAwesomeIcon icon={faTelegram} className='mr-2' />
          <span>Автономия разума.Практикум</span>
        </a>
      </div>
      <p className='text-accent font-bold text-sm sm:text-base mt-2 sm:mt-0'>© 2025</p>
    </footer>
  )
}