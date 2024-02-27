import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Error from './pages/Error';
import SharedLayout from "./components/SharedLayout";
import SharedLayoutProducts from "./components/SharedLayoutProducts";
import { useState } from "react";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  const [user,setUser]=useState(null);

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='products' element={<SharedLayoutProducts/>}>
            <Route index element={<Products/>}/>
            <Route path=':productId' element={<SingleProduct/>}/>
            
            </Route>
          
          <Route path='login' element={<Login setUser={setUser}/>} />
          <Route path='dashboard' element={
            <ProtectedRoute user={user}>
              <Dashboard user={user}/>
            </ProtectedRoute>
          } />
        </Route>

        <Route path='dashboard' element={<div>dashboard</div>}>
          <Route path='stats' element={<div>stats</div>}/>
        </Route>
    
        <Route path='*' element={<Error/>}/>

      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
