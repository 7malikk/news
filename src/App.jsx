import { Route, Routes } from 'react-router-dom';
import { Home, Articles, Article, Search } from './layouts';
import { Footer, Navbar } from './components';
import { useEffect } from 'react';
import {
  getAllArticles,
  getTech,
  getScience,
  getSports,
  getEnt,
  getHealth,
  getBusiness,
  getSources,
} from './features/articles/articles';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllArticles());
    dispatch(getTech());
    dispatch(getHealth());
    dispatch(getEnt());
    dispatch(getScience());
    dispatch(getSports());
    dispatch(getBusiness());
    dispatch(getSources());
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/:category" element={<Articles />} />
        <Route path="/article/:title" element={<Article />} />
        <Route path="/search/:keyword" element={<Search />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
