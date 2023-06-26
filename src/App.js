import "bootstrap/dist/css/bootstrap.min.css"
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css'
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Main from "./Layouts/Main.js";
import { RoutesProps } from "./Routes/RouteProps.js";
function App() {

  return (
    <Suspense fallback={'<h2>Loading</h2>'}>
      <Routes>
        {
          RoutesProps.map(({ path, main }) => {
            return <Route path={path} exact element={main} />
          })
        }
      </Routes>
    </Suspense>
  );
}

export default App;
