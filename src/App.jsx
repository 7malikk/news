import { Route, Routes } from 'react-router-dom';
import { Home, Articles, Article, Search, Video } from './layouts';
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
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:title" element={<Article />} />
        <Route path="/search" element={<Search />} />
        <Route path="/video/:id" element={<Video />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
