import './App.css';
import Index from './components';
import Nav from './components/nav';
import { Skills } from './components/skills';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Index/>
      <Skills/>
    </div>
  );
}

export default App;
