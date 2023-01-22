import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { Home, ModellingUiPoc } from '../../pages';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.ROOT} element={<Home />} />
        <Route path={ROUTES.MODELLING_UI_POC} element={<ModellingUiPoc />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
