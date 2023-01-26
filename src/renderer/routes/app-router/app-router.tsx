import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from 'renderer/constants';
import { Home, ModellingUiPoc } from 'renderer/pages';
import {
  SimpleCube,
  DrawingLines,
  ProceduralText,
  GridSystem,
} from 'renderer/pages/modelling-ui-poc';

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
        <Route
          path={ROUTES.MODELLING_UI_POC.PROCEDURAL_TEXT}
          element={<ProceduralText />}
        />
        <Route
          path={ROUTES.MODELLING_UI_POC.GRID_SYSTEM}
          element={<GridSystem />}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
