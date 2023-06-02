import { Hero, Newsletter, Section, SubSection } from '../components';
import { useSelector } from 'react-redux';

const Home = () => {
  const {
    business,
    isBusinessLoading,
    isBusinessError,
    health,
    isHealthLoading,
    isHealthError,
    tech,
    isTechLoading,
    isTechError,
    entertainment,
    isEntLoading,
    isEntError,
    science,
    isScienceLoading,
    isScienceError,
    sports,
    isSportsLoading,
    isSportsError,
  } = useSelector((store) => store.articles);
  return (
    <main>
      <Hero />
      <Section
        data={business}
        loading={isBusinessLoading}
        name={'business'}
        error={isBusinessError}
      />
      <Section
        data={health}
        loading={isHealthLoading}
        name={'health'}
        error={isHealthError}
      />
      <Section
        data={tech}
        loading={isTechLoading}
        name={'technology'}
        error={isTechError}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <SubSection
          data={sports}
          loading={isSportsLoading}
          name={'sports'}
          error={isSportsError}
        />
        <SubSection
          data={entertainment}
          loading={isEntLoading}
          name={'entertainment'}
          error={isEntError}
        />
        <SubSection
          data={science}
          loading={isScienceLoading}
          name={'science'}
          error={isScienceError}
        />
      </div>
      <Newsletter />
    </main>
  );
};

export default Home;
