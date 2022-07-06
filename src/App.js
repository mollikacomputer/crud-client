import './App.css';
import {Route, Routes} from 'react-router-dom';
import {publicRoute} from '../src/Components/Routes/publicRoute';
function App() {
  return (
    <div className="App">
      <Routes>
        {publicRoute.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Routes>

    </div>
  );
}

export default App;
