
import './App.css';
import Navbar from "./components/Navbar";
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Menu from './components/Menu';
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
