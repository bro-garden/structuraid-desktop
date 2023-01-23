import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { Home, ModellingUiPoc } from '../../pages';
import { SimpleCube, DrawingLines } from '../../pages/modelling-ui-poc';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.ROOT} element={<Home />} />
        <Route
          path={ROUTES.MODELLING_UI_POC.ROOT}
          element={<ModellingUiPoc />}
        />
        <Route
          path={ROUTES.MODELLING_UI_POC.SIMPLE_CUBE}
          element={<SimpleCube />}
        />
        <Route
          path={ROUTES.MODELLING_UI_POC.DRAWING_LINES}
          element={<DrawingLines />}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
