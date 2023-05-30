import { Route, Routes } from 'react-router-dom';
import { Home, Articles, Article, Search, Video } from './layouts';
import { Footer, Navbar } from './components';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="/search" element={<Search />} />
        <Route path="/video/:id" element={<Video />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
