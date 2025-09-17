import MeetTheTeam from "@/components/About_Components/MeetTheTeam";
import OurStory from "@/components/About_Components/OurStory";
import Slider from "@/components/About_Components/Slider";
import CommonBanner from "@/components/common/CommonBanner";
import ContaactForm from "@/components/contact_components/ContactForm";
import GetTravelDeal from "@/components/contact_components/GetTravelDeal";
import { ImageAssets } from "@/utils/MyImageProvider";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <CommonBanner title="About Us" image={ImageAssets.aboutBg} />
      <OurStory />
      <MeetTheTeam />
      <Slider />
      <ContaactForm />
      <GetTravelDeal />
    </div>
  );
};

export default AboutUs;
