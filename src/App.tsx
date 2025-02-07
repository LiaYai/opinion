//import { useState } from 'react'
import { Header } from './components/header'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
//import { useLocation, useNavigate } from 'react-router-dom';
//import { Modal } from './components/modal';
import { Article } from './components/article';

// Компоненты для маршрутов

const About = () => {
    return <h1 >О нас</h1>;
}

const Contact = () => {
    return <h1>Контакты</h1>;
}

const App = () => {
  // const location = useLocation();
  // const background = location.state?.background;
  // const navigate = useNavigate();

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>  
    <Routes>
          {/* <Route
            path={'/article/:articleId'}
            element={
              <Modal
                onClose={() => navigate('/', { replace: true, state: background })}
              >
                <Article />
              </Modal>
            }
          /> */}
          <Route
            path={'/article/:articleId'}
            element={
                <Article />
            }
          />
    </Routes>
    </>
  )
}

export default App
