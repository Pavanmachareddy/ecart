import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import CardsDetails from './component/CardsDetails';
import Card from './component/Cards'
import {Routes,Route} from "react-router-dom";
import Cards from './component/Cards';

function App() {
  return (
    <>
  
    
      <Header />
      <Routes>
        <Route  path='/' element={<Cards/>}/>
        <Route  path='/cart/:id' element={<CardsDetails/>}/>
      </Routes>
    </>
  );
}

export default App;
