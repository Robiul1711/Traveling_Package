import CommonBanner from '@/components/common/CommonBanner';
import React from 'react';
import { ImageAssets } from '@/utils/ImageProvider';        
import ContaactForm from '@/components/contact_components/ContactForm';
import GetTravelDeal from '@/components/contact_components/GetTravelDeal';
const ContactUs = () => {
    return (
        <div>
            <CommonBanner title="Contact Us" image={ImageAssets.contactBg}  />
            <ContaactForm />
            <GetTravelDeal />
        </div>
    );
};

export default ContactUs;