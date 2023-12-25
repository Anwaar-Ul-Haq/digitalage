import React from "react";
import Header from "../components/Header";
import headerImage from "../assets/images/illustration_chat_bubbles_and_notifications_visualiz_aa58ddb4-5436-4bdd-8354-cd4b1f019290.png";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="flex flex-col justify-between  min-h-screen">
      <Header bgImage={headerImage} title="Contact Us" />
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
