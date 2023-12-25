import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../assets/images/digital_illustration_diverse_creators_collaborating__73427cfe-0425-4982-bad2-9b864c4c9356.png";
import image2 from "../assets/images/animated_illustration_coins_and_cash_growing_from_di_6e1161af-86bf-47e9-910f-4321a26dd8f1.png";
import image3 from "../assets/images/illustration_creator_smiles_looking_at_data_visualiz_42f41e9f-a650-4c5b-b0e4-f7e8ff627060.png";
import image4 from "../assets/images/illustrated_decentralized_network_creators_connectin_3a37faa2-310c-4f0f-8b69-88619be65050.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slider = () => {
  return (
    <Carousel
      responsive={responsive}
      showDots={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      customTransition="all 1"
      transitionDuration={500}
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      className="h-[430px]"
    >
      {Items?.map((item) => (
        <div
          style={{
            backgroundImage: `url(${item.image})`,
          }}
          className="slider-image w-[90%] h-[350px] rounded bg-cover bg-center bg-no-repeat group"
        >
          <div className="relative z-10 hidden group-hover:flex flex-col justify-center items-center h-full p-4  ">
            <h1 className="text-white text-2xl font-bold mb-4 text-center">{item.title}</h1>
            <p className="text-white font-medium text-center">{item.description}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;

const Items = [
  {
    title: "All-in-One Content Toolkit",
    description:
      "Our integrated creation tools - from editing to effects, publishing to analytics - help streamline your workflow.",
    image: image1,
  },
  {
    title: "Subscription Services & Commerce",
    description:
      "Monetize content, offer exclusive access, and sell merchandise seamlessly. Memberships are frictionless for fans globally.",
    image: image2,
  },
  {
    title: "Sustainable Career Building",
    description:
      "Thrive long-term with our accelerated Network Program for ambitious creators invested in digital content careers.",
    image: image3,
  },
  {
    title: "Join the Community",
    description:
      "Ready to elevate your creator journey? Become part of Digitalage today. We can’t wait for you to experience social media on your own terms.",
    image: image4,
  },
];
