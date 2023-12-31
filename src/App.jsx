import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainHome from "./components/MainHome";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Register from "./components/Register";
import LoggedHome from "./components/LoggedHome";
import LoggedDetails from "./components/LoggedDetails";
import Cart from "./components/Cart";
import PaymentSuccess from "./components/PaymentSuccess";
import PaymentCancelled from "./components/PaymentCancelled";
import EditProfile from "./components/EditProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/loggedhome" element={<LoggedHome />} />
        <Route path="/products/:id" element={<LoggedDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-cancelled" element={<PaymentCancelled />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
