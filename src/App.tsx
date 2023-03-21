import { FunctionComponent, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// Pages
const HomePage = lazy(() => import("./components/HomePage/HomePage"));

// Routes
const routes = [
  { path: "/", name: "Home", Component: HomePage },
  { path: "/stories", name: "Home", Component: HomePage },
];

const App: FunctionComponent = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route path={path} key={path} element={<Component />} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default App;
