import React from "react";
import Hero from "./HeroSection/Hero";
import HomePageContent from "../../siteContent/Home/HomePageContent";
import ListingSection from "./ListingsSection/ListingSection";

const Home = () => {
  const data = HomePageContent;
  return (
    <>
      {" "}
      <Hero HeroContent={data.hero}>Home</Hero>
      <ListingSection
        listingSectionContent={data.listingSection}
      ></ListingSection>
    </>
  );
};

export default Home;
