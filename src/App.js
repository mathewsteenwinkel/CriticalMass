import './App.css';
import Billboard from './Components/Billboard';
import BackgroundVideo from './Components/BackgroundVideo';
import OrangeBanner from './Components/OrangeBanner';
import Blog from './Components/Blog';
import Nike from './Components/Nike';
import Awards from './Components/Awards';

function App() {
  return (
    <div className="App">
      <Billboard />
      <BackgroundVideo />
      <Blog />
      <OrangeBanner />
      <Nike />
      <Awards />
    </div>
  );
}

export default App;
