import { Route, Routes } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

import { Header } from './components/header';
import { Footer } from './components/footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Article } from './components/article';
import { Modal } from './components/modal';

import './App.css';

const BASE_PATH = import.meta.env.VITE_BASE_PATH || '/';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state && location.state.background;
  
  const handleCloseModal = () => {
    navigate(background?.pathname || location.pathname, { replace: true});
  };

  return (
    <>
    <Header />
    <main className="flex-grow">
      <Routes location={background || location}>
        <Route path={`${BASE_PATH}`} element={<Home />} />
        <Route path={`${BASE_PATH}about`} element={<About />} />
        <Route path={`${BASE_PATH}contact`} element={<Contact />} />
        <Route
              path={`${BASE_PATH}article/:articleId`}
              element={<Article />}
        />
        <Route
          path={`${BASE_PATH}login`}
          element={
            <Modal
              onClose={() => navigate('/', { replace: true, state: {background: location} })}
            >
              Something wrong...
            </Modal>
          }
        />
        <Route path="*" element={<h1>404</h1>} />
      </Routes> 
      {background && (
      <Routes>
        <Route
          path={`${BASE_PATH}login`}
          element={
            <Modal
              onClose={handleCloseModal}
            >
              Something wrong...
            </Modal>
          }
        /> 
      </Routes>
      )}
    </main>
    <Footer />
    </>
  )
}

export default App
