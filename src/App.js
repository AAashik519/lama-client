import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import ProductsPage from "./pages/ProductsPage";
import Register from "./pages/Register";
import { BrowserRouter , Routes, Route ,Redirect  } from "react-router-dom";

function App() {
  const user = true;
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home /> } />
      <Route path="/products/:category" element={< ProductList />} />
      <Route path="/product/:id" element={<ProductsPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login/> } />
      <Route path="/register" />
      
    
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
 