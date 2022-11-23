import logo from './logo.svg';
import './App.css';
import { Route, Routes} from "react-router-dom";
import { Typography } from '@material-ui/core';
import Dashboard from './components/DepartmentRole'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
