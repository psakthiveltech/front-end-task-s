import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Todoapp from "./To do list/Todoapp"
import Cartlogics from "./useReducer/quantityInsites/Cartlogics"
import Homedis from "./useReducer/quantityInsites/Homedis"
import Cart from "./useReducer/quantityInsites/Cart"
import Productdis from "./useReducer/quantityInsites/Productdis"
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
 return <>
 <Cartlogics>
  <BrowserRouter>
  <Homedis/>
  <Routes>
    <Route path="/cart" element={<Cart/>} />
    <Route path="/product" element={<Productdis/>} />
  </Routes>
  </BrowserRouter>
 </Cartlogics>
  </>

}

export default App