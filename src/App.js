import './App.css';
import Developer from './components/Developer'

function App() {
  const userGabriel = ["Gabriel", 19, "Brasil"]
  const userFilipe = ["Filipe", 28, "Brasil"]
  const userMariana = ["Mariana", 24, "Itália"]
  return (
    <div className="App">
      <div className="App-header">
        <Developer name={userGabriel[0]} age={userGabriel[1]} country={userGabriel[2]}/>
        <Developer name={userFilipe[0]} age={userFilipe[1]} country={userFilipe[2]}/>
        <Developer name={userMariana[0]} age={userMariana[1]} country={userMariana[2]}/>
      </div>
    </div>
  );
}

export default App;