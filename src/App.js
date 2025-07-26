import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./component/Header";
import Footer from "./component/Footer";
import Banner from "./component/Banner";
import ProductCard from "./component/ProductCard";
import Ingredients from "./component/Ingredients";
import MainProduct from "./component/MainProduct";
import Product from "./component/Product";
import StoreLocator from "./component/StoreLocator";
import Signup from "./component/Signup";
import Gallery from "./component/Gallery";
import Todo from "./component/Todo";
import Todolist from "./component/Todolist";
import Recipes from "./component/Recipes";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={
                    <>
                        <Banner />
                        <ProductCard />
                    </>
                } />
                <Route path="/ingredients" element={<Ingredients />} />
                <Route path="/store" element={<StoreLocator />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/recipes" element={<Recipes/>}/>
                <Route path="/product" element={<Product/>}/>
                 {/* <Route path="/gallery" element={<Gallery />} /> */}
                {/* <Route path="/todo" element={<Todo />} />
                <Route path="/todolist" element={<Todolist />} /> */}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
