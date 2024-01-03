
import './App.css';
import Banner from './Components/Banner';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Freq from './Components/Freq';
import Get from './Components/Get';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Media from './Components/Media';
import Need from './Components/Need';
import Number from './Components/Number';
import Press from './Components/Press';
import Prise from './Components/Prise';
import Reus from './Components/Reus';
import Slider from './Components/Slider1';
import SwipeLogo from './Components/SwipeLogo';
import Video from './Components/Video';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <SwipeLogo/>
      <Number/>
      <Get/>
      <Video/>
      <Need/>
      <Reus/>
      <Prise/>
      <Slider/>
      <Freq/>
      <Banner/>
      <Press/>
      <Contact/>
      <Media/>
      <Footer/>
    </div>
  );
}

export default App;
