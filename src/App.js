import './App.css';
import Index from './components';
import About from './components/about';
import Nav from './components/nav';
import Projects from './components/projects';
import { Skills } from './components/skills';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Index/>
      <Skills/>
      <Projects/>
      <About/>
    </div>
  );
}

export default App;
