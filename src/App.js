import Landing from "./components/Landing.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import { books } from "./data.js";
import BookInfo from "./pages/BookInfo.jsx";
import Cart from "./pages/Cart.jsx";
import { useEffect, useState } from "react";
import Default from "./pages/Default.jsx";

function App() {
  const [cart, setCart] = useState([]);

  

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
        item.id === book.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item
      )
    );
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += item.quantity;
    });
    return counter;
  }

  function removeItem(item) {
    setCart(cart.filter((book) => book.id !== item.id));
    console.log("remove ", item);
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Route path="/react-library" exact component={Default} />
        <Route path="/home" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => (
            <BookInfo books={books} addToCart={addToCart} cart={cart} />
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <Cart
              books={books}
              cart={cart}
              changeQuantity={changeQuantity}
              removeItem={removeItem}
            />
          )}
        />
        <Footer  />
      </div>
    </Router>
  );
}

export default App;
