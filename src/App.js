import logo from './logo.svg';
import './App.css';
import Home1 from './components/Hero';
import Navbar from './components/Navbar';
import WelcomeSection from './components/WelcomeSection';
import Services from './components/service';
import WhyChooseObiztec from './components/WhyChooseObiztec';
import Footer from './components/Footer';
// import GetStartedSection from './components/GetStartedSection';
function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Home1/>
      <WelcomeSection/>
      <Services/>
      <WhyChooseObiztec/> 
      <Footer/>
    </>
  );
}

export default App;
