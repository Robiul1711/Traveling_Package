import OurStory from '@/components/About_Components/OurStory';
import CommonBanner from '@/components/common/CommonBanner';
import { ImageAssets } from '@/utils/MyImageProvider';
import React from 'react';

const AboutUs = () => {
    return (
        <div>
           <CommonBanner title="About Us" image={ImageAssets.aboutBg} />
           <OurStory />
        </div>
    );
};

export default AboutUs;