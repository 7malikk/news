import {
  Hero,
  Business,
  Newsletter,
  Health,
  Tech,
  Sports,
  Ent,
  Science,
} from '../components';

const Home = () => {
  return (
    <>
      <Hero />
      <Business />
      <Tech />
      <Health />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Sports />
        <Ent />
        <Science />
      </div>
      <Newsletter />
    </>
  );
};

export default Home;
