
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Homepage from "./components/Homepage/Homepage";
import Products from "./components/WomenStore/Products";
import React, { useEffect, useState } from 'react';
import { commerce } from './components/TRENDiD.API/commerce';
import Basket from './components/Basket/Basket';
import CheckOut from './components/CheckOut/CheckOut';


const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [basketData, setBasketData] = useState({});

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProducts((response && response.data) || []);
  };

  const fetchCategories = async () => {
    const response = await commerce.categories.list();
    setCategories((response && response.data) || []);
  }


  const fethBasketData = async () => {
    const response = await commerce.cart.retrieve();
    setBasketData(response);
  };




  useEffect(() => {
    fetchProducts();
    fetchCategories();
    fethBasketData();
  }, []);

  // console.log({ products });
  // console.log({ categories });

  const addProduct = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    setBasketData(response.cart);
  }
  // console.log(basketData);

  const updateProduct = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setBasketData(response.cart);
  }

  // console.log(basketData);

  const handleEmptyBasket = async () => {
    const response = await commerce.cart.empty();
    setBasketData(response.cart);
  }
  // console.log(basketData);

  const RemoveItemFromBasket = async (itemId) => {
    const response = await commerce.cart.remove(itemId);
    setBasketData(response.cart);
  }

  return (<>
    <BrowserRouter>
      <div className="AppHeader">
        <Header basketItems={basketData.total_items} totalCost={(basketData.subtotal && basketData.subtotal.formatted_with_symbol) || "00.00"} />
      </div>
      <div className="AppBody">
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/Products" >
            <Products products={products} addProduct={addProduct} categories={categories} />
          </Route>
          <Route path="/basket">
            <Basket
              basketData={basketData}
              updateProduct={updateProduct}
              handleEmptyBasket={handleEmptyBasket}
              RemoveItemFromBasket={RemoveItemFromBasket} />
          </Route>
          <Route path="/checkout" >
            <CheckOut/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  </>
  );
}

export default App;

