import Posts from './Posts';
import Header from './Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="News API" />
      <Posts />
    </div>
  );
}

export default App;
