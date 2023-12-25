import React from "react";
import Header from "../components/Header";
import headerImage from "../assets/images/illustration_coins_raining_down_onto_line_graph_show_6365379c-8ef2-4232-8c15-a4a197e44c9f.png";
import Footer from "../components/Footer";
import image1 from "../assets/images/photo_illustration_rising_stock_graph_in_front_of_Di_1059c387-ec6e-4ec5-b66a-72f4e4870661.png";
import image2 from "../assets/images/illustration_creator_connecting_to_global_users_visu_a54d66a3-5189-412c-a6a2-bca817fe4bab.png";
import image3 from "../assets/images/symbolic_interconnected_elements_-_technology_commun_a668c154-682c-490a-9032-b809a6c54ef4.png";

const Investors = () => {
  return (
    <div className="flex flex-col justify-between  min-h-screen">
      <Header bgImage={headerImage} title="Investors" />
      <div>
        <div className="mt-[120px] px-[10%] flex gap-10 justify-between items-center w-full">
          <div className="w-[50%] leading-[36px] tracking-wide text-xl">
            <h5 className="text-2xl font-semibold">
              Join Our Mission to Positively Transform Social Technology
            </h5>
            <p className="mt-3">
              Digitalage is pioneering ethical social media centered on transparency, user control,
              and fair compensation models to benefit individuals, communities, and society. We
              leverage advanced technologies and platform design focused entirely on serving user
              needs - not exploiting them for engagement and ad revenue.
            </p>
          </div>
          <div className="w-[45%]">
            <img src={image1} alt="investor" className="w-full h-[350px] object-cover rounded" />
          </div>
        </div>
        <div className="mt-[120px] px-[10%] flex gap-10 justify-between items-center w-full">
          <div className="w-[45%]">
            <img src={image2} alt="investor" className="w-full h-[350px] object-cover rounded" />
          </div>
          <div className="w-[50%] leading-[36px] tracking-wide text-xl">
            <h5 className="text-2xl font-semibold">Investment Opportunities</h5>

            <p className="mt-3">
              Digitalage closed a $15 million Series A funding round to fuel responsible growth and
              the realization of our vision at scale. We offer equity shares giving investors
              aligned stakeholder status in a company decisively positioned to transform the digital
              landscape for good - and generate outstanding ROI.
            </p>
          </div>
        </div>
        <div className="mt-[120px] px-[10%] flex gap-10 justify-between items-center w-full">
          <div className="w-[50%] leading-[36px] tracking-wide text-xl">
            <h5 className="text-2xl font-semibold">Investment Impact</h5>
            <p className="mt-3">
              Every investment supports ethical platform growth, our research for good agenda, and
              the realization of positive systems changing how social media operates at massive
              scale. Join our expanding group of vision-aligned investors by contacting our
              Executive Team.
            </p>
          </div>
          <div className="w-[45%]">
            <img src={image3} alt="investor" className="w-full h-[350px] object-cover rounded" />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Investors;
