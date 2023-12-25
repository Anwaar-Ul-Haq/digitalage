import React from "react";
import Header from "../components/Header";
import headerImage from "../assets/images/illustrated_landscape_creators_communities_empowered_75756861-b4e8-4f39-acd7-4429037cfdac.png";
import Footer from "../components/Footer";
import image1 from "../assets/images/conceptual_timeline_negative_impacts_existing_social_45a3eb0e-7c99-45ac-9c5b-47ed6be61040.png";
import image2 from "../assets/images/personification_of_values_-_agency_privacy_creator_l_acc435ce-04f4-4706-90f4-1dfa9af8f75c.png";
import ourTeamImage from "../assets/images/illustrated_team_member_headshots_elements_represent_869e6073-7ee5-4b77-8d6f-03b43aa5bdef.png";

const About = () => {
  return (
    <div className="flex flex-col justify-between  min-h-screen">
      <Header bgImage={headerImage} title="About Us" />
      <div>
        <div className="mt-[120px] px-[10%] flex gap-10 justify-between items-center w-full">
          <div className="w-[50%] leading-[36px] tracking-wide text-xl">
            <h5 className="text-2xl font-semibold">Our Vision</h5>
            <p className="mt-3">
              Digitalage envisions a social media landscape that empowers individuals, enriches
              lives, and fosters authentic connections. One where creators prosper, communities
              thrive, and users regain control over their digital experiences. We are building that
              future.
            </p>
          </div>
          <div className="w-[45%]">
            <img
              src={headerImage}
              alt="investor"
              className="w-full h-[350px] object-cover rounded"
            />
          </div>
        </div>
        <div className="mt-[120px] px-[10%] flex gap-10 justify-between items-center w-full">
          <div className="w-[45%]">
            <img src={image1} alt="investor" className="w-full h-[350px] object-cover rounded" />
          </div>
          <div className="w-[50%] leading-[36px] tracking-wide text-xl">
            <h5 className="text-2xl font-semibold">Our Story</h5>
            <p className="mt-3">
              Digitalage was founded in 2021 by tech entrepreneurs and social media pioneers
              dedicated to positively disrupting the status quo. They witnessed first-hand the ways
              existing social platforms exploit users and creators to drive engagement over
              wellbeing. Digitalage rises from those learnings - and functions on an ethical
              foundation of transparency, equity and trust.
            </p>
          </div>
        </div>
        <div className="mt-[120px] px-[10%] flex gap-10 justify-between items-center w-full">
          <div className="w-[50%] leading-[36px] tracking-wide text-xl">
            <h5 className="text-2xl font-semibold">Our Values</h5>
            <ul className="mt-3">
              <li>
                We believe user needs trump all else. Our platform operations empower choice,
                control, and privacy.
              </li>
              <li>
                We support creator success through fair compensation, IP protection and sustainable
                career paths.
              </li>
              <li>
                We leverage advanced analytics to promote accurate information and reduce harmful
                misinformation.
              </li>
              <li>
                {" "}
                We nurture inclusive environments optimized for meaningful connection without
                manipulation.
              </li>
              <li></li>
            </ul>
          </div>
          <div className="w-[45%]">
            <img src={image2} alt="investor" className="w-full h-[350px] object-cover rounded" />
          </div>
        </div>
        <div className="mt-[120px] px-[10%] flex gap-10 justify-between items-center w-full">
          <div className="w-[45%]">
            <img src={ourTeamImage} alt="investor" className="w-full h-[350px] object-cover rounded" />
          </div>
          <div className="w-[50%] leading-[36px] tracking-wide text-xl">
            <h5 className="text-2xl font-semibold">Our Team</h5>
            <p className="mt-3">
              Digitalage unites world-class technologists, designers, data scientists and platform
              experts - all driven by our collective mission to positively transform social
              technology. Leadership includes social media platform pioneers, AI specialists and
              digital media veterans.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default About;
