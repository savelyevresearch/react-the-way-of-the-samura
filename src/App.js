import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://logos-download.com/wp-content/uploads/2018/02/Carolina_Panthers_logo_blue.png"
          alt="logo"
        />
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className="content">
        <img
          src="https://1stwebdesigner.com/wp-content/uploads/2019/07/css-background-effects-thumb.jpg"
          alt="some image"
        />
        <div>ava + description</div>
        <div>
          My posts
          <div>New post</div>
          <div>Post 1{/*  */}</div>
          <div>Post 2</div>
        </div>
      </div>
    </div>
  );
};

export default App;
