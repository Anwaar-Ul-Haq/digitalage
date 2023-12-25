import React from "react";
import Header from "../components/Header";
import headerImage from "../assets/images/digital_illustration_diverse_creators_collaborating__73427cfe-0425-4982-bad2-9b864c4c9356.png";
import Footer from "../components/Footer";

const Features = () => {
  return (
    <div className="flex flex-col justify-between  min-h-screen">
      <Header bgImage={headerImage} title="Features" />
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Features;
