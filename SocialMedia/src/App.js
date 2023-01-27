import "./App.css"
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
function App() {
  return (
    <div className="App">
       <div className="blur first" style={{top:'-18%',right:'0'}}></div>
       <div className="blur second" style={{top:'36%',left:'-8rem'}}></div>
       {/* <Home/> */}
       <Profile/>
    </div>
  );
}

export default App;
