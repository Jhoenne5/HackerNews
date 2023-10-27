
import { Hero, Navbar, Sponsor} from "./components";
import {Footer, News, Plans, Safety, Stories} from "./containers";


function App() {
  return (
    <div className="App">

      <div className="gradient-bg">
      <Navbar/>
      <Hero/>
      </div>

      <div>
      <Sponsor/>
    
      <Safety/>
      <Plans/>
      <News/>

      <Stories/>
      <Footer/>
      </div>

        

   
    </div>
  );
}

export default App;
