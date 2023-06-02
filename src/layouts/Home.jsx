import { Hero, Newsletter, Section, SubSection } from '../components';
import { useSelector } from 'react-redux';

const Home = () => {
  const {
    business,
    isBusinessLoading,
    health,
    isHealthLoading,
    tech,
    isTechLoading,
    entertainment,
    isEntLoading,
    science,
    isScienceLoading,
    sports,
    isSportsLoading,
  } = useSelector((store) => store.articles);
  return (
    <main>
      <Hero />
      <Section data={business} loading={isBusinessLoading} name={'business'} />
      <Section data={health} loading={isHealthLoading} name={'health'} />
      <Section data={tech} loading={isTechLoading} name={'technology'} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <SubSection data={sports} loading={isSportsLoading} name={'sports'} />
        <SubSection
          data={entertainment}
          loading={isEntLoading}
          name={'entertainment'}
        />
        <SubSection
          data={science}
          loading={isScienceLoading}
          name={'science'}
        />
      </div>
      <Newsletter />
    </main>
  );
};

export default Home;
