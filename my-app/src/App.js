import './App.css';
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Checkout from './Pages/Checkout/Checkout';
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home';


function App() {
     return (
   <BrowserRouter>
             
        <Routes>
          <Route path='/' element={<Home/>}/>  
         <Route path='checkout' element={<Checkout/>}/>
         <Route path='login' element={<Login/>}/>
          
        
       </Routes>
    
    </BrowserRouter>
  );
}

export default App;
