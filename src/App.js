import Sidebar from "./components/Sidebar";
import Header from "./components/DataTable/Header";
import Userdata from "./components/DataTable/Userdata";

const App = () => {
  return (
    <div className="main">
      <Sidebar />
      <div className="container">
        <Header />
        <Userdata />
      </div>
    </div>
  );
};

export default App;
