import Variables from './components/Variables';
import Classes from './components/Classes';
import Inheritance from './components/Inheritance';
import ArrowFunction from './components/Arrow Function';
import Arraymap from './components/Arraymap';
import Destructuring from './components/Destructing';
import Modules from './components/Modules';
import Ternary from './components/Ternary';

function App() {
  return (
    <div className="app-shell">
      <header className="hero">
        <h1>React ES6 Practice </h1>
      </header>

      <Variables />
      <Classes />
      <Inheritance />
      <ArrowFunction />
      <Arraymap />
      <Destructuring />
      <Modules />
      <Ternary />
    </div>
  );
}

export default App;
