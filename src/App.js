import './App.css';
import image from './shopping.jpeg'
import imageTwo from './man.jpeg'
import { GroceryList } from './GroceryList';


function App() {
  return (
    <div className='container'>
      <div classNeame='box'><img src={image} alt="shopping" width='200px'/></div>
      <div className='box'><h1>Grocery List</h1></div> 
      <GroceryList/>
      <div classNeame='box'><img src={imageTwo} alt="shopping" width='200px'/></div>
    </div>
  );
}

export default App;
