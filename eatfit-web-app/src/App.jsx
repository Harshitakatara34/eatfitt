
import './App.css';
import Navbar from "./Components/Navbar";
import Testimonials from './Components/Testimonials';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import Menu from './Components/Menu';
function App() {
  return (
    <div className="App">
   <Navbar/>  
<Menu/>
<Testimonials/>
<ContactUs/>
<AboutUs/>
    </div>
  );
}

export default App;
