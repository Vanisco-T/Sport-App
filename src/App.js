import './App.css';
import Footer from './component/Footer/Footer';
import Hero from './component/Hero/Hero';
import Join from './component/Join/Join';
import Plans from './component/Plans/Plans';
import Programs from './component/Programs/Programs';
import Reasons from './component/Reasons/Reasons';
import Testinomial from './component/Testinomials/Testinomial';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testinomial/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
