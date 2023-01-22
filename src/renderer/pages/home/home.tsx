import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';

const Home = () => {
  return (
    <div className="p-20 flex flex-col justify-center min-h-screen">
      <h1 className="font-bold text-blue-500 text-6xl mb-6">
        Welcome to Structuraid
      </h1>
      <div className="flex flex-col gap-4">
        <Link
          to={ROUTES.MODELLING_UI_POC.ROOT}
          className="font-bold text-xl hover:text-blue-500 transition-all"
        >
          Three.js PoC
        </Link>
      </div>
    </div>
  );
};

export default Home;
