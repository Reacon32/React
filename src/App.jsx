import './App.css';
import logo from '../src/Images/logo.svg'
import search from '../src/Images/search.svg'
import cart from '../src/Images/cart.svg'
import backgroud from '../src/Images/Background.png'
import fruits from '../src/Images/Fruits.png'

function App() {
  return (
    <>
    <div className="container">
    <div className='header'>
      <img src={logo} alt="logo"></img>
      <p>React</p>
      <ul className='tab'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Pages</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">News</a></li>
      </ul>
      <div className="block_input">
        <input type="text" />
        <img src={search} alt=''/>
      </div>
      <div className='cart'>
        <img src={cart} alt=''/>
        <p>cart(0)</p>
      </div>
    </div>
    </div>

    <div className="container_body">
    <div className='body'>
      <img src={backgroud} alt="back"/>
      <img src={fruits} alt="fruits" />
    </div>
    </div>
    </>
  );
}

export default App;
