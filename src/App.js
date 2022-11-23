import Sidebar from "./components/Sidebar";
import Header from "./components/DataTable/Header";
const App = () => {
  return (
    <div className="main">
      <Sidebar />
      <div className="container">
        <p className="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="btn">Explore now</button>
      </div>
    </div>
  );
};

export default App;
