import logo from './assets/logo.png';
import left from './assets/Left.png'
import middle from './assets/Middle.png'
import right from './assets/Right.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={logo} height="100px" width="100pxx"></img>
        <button class="login">Login</button>
      </div>
      <div className="body">
        <h3>Facebook Events without Facebook</h3>
        <p>Easily host and share events with your friends accross social media</p>
        <button>Create my  next event</button>
      </div>
      <div className="product">
        <img src={left} class="first"></img>
        <img src={middle} id="second"></img>
        <img src={right} id="third"></img>
      </div>
    </div >

  );
}

export default App;
