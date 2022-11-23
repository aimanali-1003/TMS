import './App.css';
import Dashboard from './components/DepartmentRole'
import Sidebar from './components/Sidebar'
function App() {
  return (
    <div>
      <div className="main">
      <Sidebar />
      <div className="">
        <Dashboard />
      </div>
    </div>
    </div>
  );
}
export default App;
