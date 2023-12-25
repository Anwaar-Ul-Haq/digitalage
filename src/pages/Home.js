import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import ourTeamImage from "../assets/images/digital_painting_a_group_of_young_professionals_dive_ad1e12a5-8c45-47d6-b665-560e376fb41f.png";
import digitalAgeDiff from "../assets/images/illustration_floating_interface_screens_people_inter_5da1c4c5-4e9b-42df-9cce-eaa6e4469c54.png";
import Footer from "../components/Footer";
import Slider from "../components/Slider";

const Home = () => {
  function handleScroll() {
    window.scrollBy({
      top: 550,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <div className="relative header-image bg-no-repeat bg-center bg-cover w-full h-[85vh]">
        <div className="absolute z-20 flex justify-center w-full mt-5">
          <Navbar />
        </div>
        <div className="relative h-[85vh]">
          <div className="absolute flex justify-center items-center w-full h-full z-10">
            <div className="flex flex-col items-center">
              <div className="border border-[#ffffff9c] rounded-full px-3 py-1 w-[415px]">
                <p className="text-[#ffffff9c]">
                  Announcing our next round of funding.
                  <span className="text-white font-bold pl-1">Read more →</span>
                </p>
              </div>
              <div className="lg:w-[700px]">
                <h1 className="text-6xl font-bold tracking-tight text-white capitalize text-center mt-14">
                  The future of social media starts now
                </h1>
                <p className="text-lg text-white text-center mt-16">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                  commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                </p>
                <div className="flex justify-center mt-10">
                  <Button
                    text="Get Started"
                    onClick={handleScroll}
                    className="link text-white font-bold bg-primary py-2 px-4 rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[120px] px-[10%] flex gap-10 justify-between items-center w-full">
        <div className="w-[50%] leading-[36px] tracking-wide text-xl">
          <p>
            Digitalage is pioneering a revolutionary social media platform centered around elevating
            creators, protecting individual rights, and cultivating authentic communities.
          </p>
          <p className="mt-3">
            We are reimagining social technology to put control back into the hands of users -
            giving you unmatched authority over your personal data and digital footprint. Our
            platform is designed to provide transparency, ensure content integrity, foster
            meaningful connections, and enable equitable compensation
          </p>
        </div>
        <div className="w-[45%]">
          <img
            src={ourTeamImage}
            alt="about us"
            className="w-full h-[350px] object-cover rounded"
          />
        </div>
      </div>
      <div className="mt-[120px] px-[10%] flex gap-10 justify-between items-center w-full">
        <div className="w-[45%]">
          <img
            src={digitalAgeDiff}
            alt="about us"
            className="w-full h-[350px] object-cover rounded"
          />
        </div>
        <div className="w-[50%] leading-[36px] tracking-wide text-xl">
          <p>
            Our interface and algorithms are built to serve user needs - not exploit them. We enable
            authentic connections without manipulating recommendations or compromising privacy.
            Creator Economy: We offer creators unmatched opportunities to monetize content while
            retaining rights. Our fair compensation models empower sustainable creator careers.
          </p>
          <p className="mt-3">
            Our decentralized platform powered by blockchain ensures security, transparency and
            gives users control over their data.
          </p>
        </div>
      </div>
      <div className="mt-[120px] px-[80px]">
        <Slider />
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
