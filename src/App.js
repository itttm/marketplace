import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Marketplace from "./pages/Marketplace";
import MarketplaceCategories from "./pages/Marketplace/MarketplaceCategories";
import MarketplaceItemDetails from "./pages/Marketplace/MarketplaceItemDetails";
import MarketplaceCreateListing from "./pages/Marketplace/MarketplaceCreateListing";
import UserProfile from "./pages/UserProfile";
import MarketplaceChat from "./pages/Marketplace/MarketplaceChat";
import Faq from "./pages/Faq";
import Support from "./pages/Support";
import Tickets from "./pages/Tickets";
import AdminLogin from "./pages/Admin/Login";
import Admin from "./pages/Admin";
import Navigator from "./components/commons/Navigator";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <div>
        <Navigator />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route
            path="/marketplace/categories"
            element={<MarketplaceCategories />}
          />
          <Route
            path="/marketplace/:itemId"
            element={<MarketplaceItemDetails />}
          />
          <Route
            path="/marketplace/create-listing"
            element={<MarketplaceCreateListing />}
          />
          <Route path="/marketplace/chat" element={<MarketplaceChat />} />
          <Route path="/support" element={<Support />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
