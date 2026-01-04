import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import Contect from './pages/Contect.jsx'
import Layout from "./Layout";
import SingleCart from './pages/SingleCart.jsx'
import { Provider } from 'react-redux'
import { store } from './config/reduxconfig/store/store.js'

createRoot(document.getElementById('root')).render(
    
<Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="contect" element={<Contect />} />
        <Route path="singleCart" element={<SingleCart />} />
      </Route>
    </Routes>
</BrowserRouter>
</Provider>


)
