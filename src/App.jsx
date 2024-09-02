import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./component/Nav";
import ProductDetail from "./pages/ProductDetails";
import NotFound from "./pages/Notfound";
import SignIn from "./pages/Auth/sign";
import Footer from "./component/Footer";
import SignUp from "./pages/Auth/signup";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<ProductDetail />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
