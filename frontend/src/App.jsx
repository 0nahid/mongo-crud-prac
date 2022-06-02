import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import AddProduct from "./Pages/AddProduct";
import Home from "./Pages/Home";
import Products from "./Pages/Products";

export default function App() {
    return (
        <div className="container">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/addProduct" element={<AddProduct />} />
            </Routes>
        </div>
    )
}
