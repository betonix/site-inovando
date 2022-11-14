import './App.scss';
import ImagesCode from './componets/ImagesCode';
import Apresentation from './componets/Apresentation';
import Header from './componets/Header';
import Partners from './componets/Partners';
import About from './componets/About';
import Pillars from './componets/Pillars';
import Process from './componets/Process';
import LGPD from './componets/LGPD/inde';
import Motivation from './componets/Motivation';
import Technology from './componets/Technology';
import CallToAction from './componets/CallToAction';
import Footer from './componets/Footer';

const App = ()=> {
  return (
    <div>
          <Header/>
          <Apresentation />
          <Partners/>
          <ImagesCode/>
          <About/>
          <Pillars/>
          <Process/>
          <LGPD/>
          <Motivation/>
          <Technology/>
          <CallToAction/>
          <Footer/>
    </div>

  );
}

export default App;
