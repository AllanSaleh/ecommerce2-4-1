import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Profile from './pages/Profile';
import { ProductProvider } from './context/ProductContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './context/AuthContext';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import Navbar from './components/Navbar/Navbar';

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ProductProvider>
        <AuthProvider>
          <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/login' element={<Login />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ProductProvider>
    </QueryClientProvider>
  );
}

export default App;
