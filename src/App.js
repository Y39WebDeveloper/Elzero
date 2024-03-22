import './normalize.css';
import './App.css';
import { Navbar, Spikes } from './components';
import { Articles, Discount, Events, Features, Footer, Gallery, Header, HowItWork, Pricing, Services, Skills, Stats, Team, Testimonials, Video } from './sections';

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Articles/>
      <Spikes/>
      <Gallery/>
      <Features/>
      <Testimonials/>
      <Team/>
      <Spikes/>
      <Services/>
      <Skills/>
      <HowItWork/>
      <Events/>
      <Pricing/>
      <Video/>
      <Stats/>
      <Discount/>
      <Footer/>
    </>
  );
}

export default App;
