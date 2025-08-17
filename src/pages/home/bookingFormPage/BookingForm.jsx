import CommonBanner from '@/components/common/CommonBanner';
import { ImageAssets } from '@/utils/ImageProvider';
import MainForm from './MainForm';


const BookingForm = () => {


    return (
        <div>
            <CommonBanner title="FILL UP THE FORM" image={ImageAssets.tripDetailsBanner} />
            <div className=""
                style={{ backgroundImage: `url(${ImageAssets.particalBg})` }}
            >
                <MainForm />
            </div>
        </div>
    );
};

export default BookingForm;