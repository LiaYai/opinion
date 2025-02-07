import { Header } from './components/header'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ArticleList } from './components/aricle-list';
import { Article } from './components/article';

const BASE_PATH = '/opinion/';
const About = () => {
    return <h1 >О нас</h1>;
}

const Contact = () => {
    return <h1>Контакты</h1>;
}

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path={`${BASE_PATH}`} element={<ArticleList />} />
      <Route path={`${BASE_PATH}about`} element={<About />} />
      <Route path={`${BASE_PATH}contact`} element={<Contact />} />
      <Route
            path={`${BASE_PATH}article/:articleId`}
            element={<Article />}
      />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>  
    {/* <Routes>
          {/* <Route
            path={'/article/:articleId'}
            element={
              <Modal
                onClose={() => navigate('/', { replace: true, state: background })}
              >
                <Article />
              </Modal>
            }
          /> 
          <
    </Routes> */}
    </>
  )
}

export default App
