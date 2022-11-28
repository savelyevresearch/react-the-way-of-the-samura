import logo from "./logo.svg";
import "./App.css";

const Header = () => {
  return (
    <div>
      <a>
        Home
      </a>
      <a>
        News Feed
      </a>
      <a>
        Message
      </a>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <ul>
        <li>First list element</li>
        <li>Second list element</li>
      </ul>
    </div>
  );
};

export default App;
