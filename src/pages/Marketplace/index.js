import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroSection from "../../sections/marketplace/HeroSection";
import FeaturedListingSection from "../../sections/marketplace/FeaturedListingSection";
import HottestCategorySection from "../../sections/marketplace/HottestCategorySectin";
import LatestAdditionsSection from "../../sections/marketplace/LatestAdditionsSection";
import TopSellersSection from "../../sections/marketplace/TopSellersSection";

const Marketplace = () => {
  return (
    <div>
      <Header isLogin />
      <HeroSection />
      <FeaturedListingSection />
      <HottestCategorySection />
      <LatestAdditionsSection />
      <TopSellersSection />
      <Footer />
    </div>
  );
};

export default Marketplace;
