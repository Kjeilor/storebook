import "./App.css";
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/MainContent/Main';

function App() {
  return (
    <div className="App" style ={{
      display: 'flex',
      width: '100%'
    }}>
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
