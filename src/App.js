import './App.css';
import Billboard from './Components/Billboard';
import BackgroundVideo from './Components/BackgroundVideo';
import OrangeBanner from './Components/OrangeBanner';
import Blog from './Components/Blog';
import Nike from './Components/Nike';
import Awards from './Components/Awards';
import Wedo from './Components/Wedo';
import TrailHead from './Components/TrailHead';
import Offices from './Components/Offices';

function App() {
  return (
    <div className="App">
      <Billboard />
      <BackgroundVideo />
      <Blog />
      <OrangeBanner />
      <Nike />
      <Awards />
      <Wedo />
      <TrailHead />
      <Offices />
    </div>
  );
}

export default App;
